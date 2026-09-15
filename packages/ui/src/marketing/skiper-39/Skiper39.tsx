"use client";

import { useEffect, useId, useRef } from "react";
import { cn } from "@/lib/cn";
import type { CrowdCanvasProps, Skiper39Props } from "./Skiper39.types";

const defaults = {
  eyebrow: "Street stage",
  heading: "A crowd that keeps the block moving.",
  description:
    "Walking figures fill the lower stage so a landing can feel occupied before anyone clicks.",
  rows: 15,
  cols: 7,
};

const INK_TOKENS = [
  "--jk-foreground",
  "--jk-muted-foreground",
  "--jk-primary",
  "--jk-chart-1",
  "--jk-chart-2",
  "--jk-chart-4",
  "--jk-accent-foreground",
] as const;

type Walker = {
  x: number;
  y: number;
  speed: number;
  scale: number;
  phase: number;
  direction: 1 | -1;
  ink: string;
  accent: string;
  kind: number;
  row: number;
};

function tokenValue(node: HTMLElement, name: string) {
  return getComputedStyle(node).getPropertyValue(name).trim();
}

function readInks(node: HTMLElement) {
  return INK_TOKENS.map((name) => tokenValue(node, name)).filter(Boolean);
}

function mulberry32(seed: number) {
  let value = seed | 0;
  return () => {
    value = (value + 0x6d2b79f5) | 0;
    let t = Math.imul(value ^ (value >>> 15), 1 | value);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function seedWalkers(
  width: number,
  height: number,
  count: number,
  inks: string[],
  rows: number,
  frozen: boolean,
): Walker[] {
  const rand = mulberry32(width * 97 + count * 13 + rows);
  const ink = inks[0] || "currentColor";
  const walkers: Walker[] = [];
  const bandTop = height * 0.42;
  const bandHeight = height * 0.52;
  for (let i = 0; i < count; i += 1) {
    const direction: 1 | -1 = rand() > 0.5 ? 1 : -1;
    walkers.push({
      x: rand() * (width + 80) - 40,
      y: bandTop + rand() * bandHeight,
      speed: 18 + rand() * 38,
      scale: 0.55 + rand() * 0.85,
      phase: rand() * Math.PI * 2,
      direction,
      ink: inks[Math.floor(rand() * inks.length)] || ink,
      accent: inks[Math.floor(rand() * inks.length)] || ink,
      kind: Math.floor(rand() * 5),
      row: Math.floor(rand() * Math.max(1, rows)),
    });
  }
  if (frozen) {
    walkers.sort((a, b) => a.y - b.y);
  }
  return walkers;
}

function drawProcedural(ctx: CanvasRenderingContext2D, walker: Walker) {
  const swing = Math.sin(walker.phase);
  const bounce = Math.abs(Math.sin(walker.phase)) * 2.2;
  ctx.save();
  ctx.translate(walker.x, walker.y - bounce);
  ctx.scale(walker.direction * walker.scale, walker.scale);
  ctx.strokeStyle = walker.ink;
  ctx.fillStyle = walker.ink;
  ctx.lineWidth = 3.1;
  ctx.lineCap = "round";
  ctx.lineJoin = "round";

  ctx.beginPath();
  ctx.moveTo(0, 6);
  ctx.lineTo(-7 * swing, 24);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(0, 6);
  ctx.lineTo(7 * swing, 24);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(0, -6);
  ctx.lineTo(8 * swing, 4);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(0, -6);
  ctx.lineTo(-8 * swing, 4);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(0, -14);
  ctx.lineTo(0, 8);
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(0, -22, 8.4, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = walker.accent;
  if (walker.kind === 1) {
    ctx.beginPath();
    ctx.ellipse(0, -28, 10, 3.2, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillRect(-9, -28, 18, 5);
  } else if (walker.kind === 2) {
    ctx.beginPath();
    ctx.arc(6, -28, 4.2, 0, Math.PI * 2);
    ctx.fill();
  } else if (walker.kind === 3) {
    ctx.beginPath();
    ctx.ellipse(0, -26, 9, 5, 0, Math.PI, 0, true);
    ctx.fill();
  } else if (walker.kind === 4) {
    ctx.fillRect(-11, -8, 7, 10);
    ctx.strokeRect(-11, -8, 7, 10);
  }

  ctx.restore();
}

function drawSprite(
  ctx: CanvasRenderingContext2D,
  walker: Walker,
  sheet: HTMLImageElement,
  rows: number,
  cols: number,
) {
  const frameW = sheet.naturalWidth / Math.max(1, cols);
  const frameH = sheet.naturalHeight / Math.max(1, rows);
  const cycle = ((walker.phase % (Math.PI * 2)) + Math.PI * 2) % (Math.PI * 2);
  const frame = Math.floor((cycle / (Math.PI * 2)) * cols) % cols;
  const row = walker.row % Math.max(1, rows);
  const bounce = Math.abs(Math.sin(walker.phase)) * 1.4;
  const drawW = frameW * walker.scale * 0.22;
  const drawH = frameH * walker.scale * 0.22;
  ctx.save();
  ctx.translate(walker.x, walker.y - bounce);
  ctx.scale(walker.direction, 1);
  ctx.drawImage(
    sheet,
    frame * frameW,
    row * frameH,
    frameW,
    frameH,
    -drawW / 2,
    -drawH,
    drawW,
    drawH,
  );
  ctx.restore();
}

export function CrowdCanvas({
  className,
  src,
  rows = defaults.rows,
  cols = defaults.cols,
  walkerCount,
  ...props
}: CrowdCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const host = canvas.parentElement ?? canvas;

    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    let reduceMotion = media.matches;
    let frame = 0;
    let width = 0;
    let height = 0;
    let dpr = 1;
    let walkers: Walker[] = [];
    let lastTs: number | null = null;
    let sheet: HTMLImageElement | null = null;

    const countFor = () => {
      if (typeof walkerCount === "number") {
        return Math.max(6, Math.min(160, Math.round(walkerCount)));
      }
      return Math.max(18, Math.min(90, Math.round(width / 28)));
    };

    const rebuild = () => {
      walkers = seedWalkers(
        width,
        height,
        countFor(),
        readInks(host),
        rows,
        reduceMotion,
      );
    };

    const syncSize = () => {
      const rect = host.getBoundingClientRect();
      width = Math.max(1, rect.width);
      height = Math.max(1, rect.height);
      dpr = Math.min(2, window.devicePixelRatio || 1);
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      rebuild();
    };

    const paint = (dt: number) => {
      ctx.clearRect(0, 0, width, height);
      walkers.sort((a, b) => a.y - b.y);
      for (const walker of walkers) {
        if (!reduceMotion) {
          walker.phase += dt * 6.2 * (walker.speed / 36);
          walker.x += walker.direction * walker.speed * dt;
          if (walker.x > width + 48) walker.x = -48;
          if (walker.x < -48) walker.x = width + 48;
        }
        if (sheet) {
          drawSprite(ctx, walker, sheet, rows, cols);
        } else {
          drawProcedural(ctx, walker);
        }
      }
    };

    const tick = (ts: number) => {
      const dt = lastTs == null ? 0.016 : Math.min(0.05, (ts - lastTs) / 1000);
      lastTs = ts;
      paint(dt);
      frame = window.requestAnimationFrame(tick);
    };

    const startLoop = () => {
      if (frame) window.cancelAnimationFrame(frame);
      lastTs = null;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      if (reduceMotion) {
        paint(0);
        return;
      }
      frame = window.requestAnimationFrame(tick);
    };

    const onMedia = () => {
      reduceMotion = media.matches;
      rebuild();
      startLoop();
    };

    const observer = new ResizeObserver(() => {
      syncSize();
      startLoop();
    });

    if (src) {
      const image = new Image();
      image.decoding = "async";
      image.onload = () => {
        sheet = image;
        startLoop();
      };
      image.onerror = () => {
        sheet = null;
        startLoop();
      };
      image.src = src;
    }

    observer.observe(host);
    media.addEventListener("change", onMedia);
    syncSize();
    startLoop();

    return () => {
      observer.disconnect();
      media.removeEventListener("change", onMedia);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [cols, rows, src, walkerCount]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className={cn("pointer-events-none absolute inset-0 h-full w-full", className)}
      data-slot="crowd-canvas"
      {...props}
    />
  );
}

export function Skiper39({
  className,
  eyebrow = defaults.eyebrow,
  heading = defaults.heading,
  description = defaults.description,
  src,
  rows = defaults.rows,
  cols = defaults.cols,
  walkerCount,
  ...props
}: Skiper39Props) {
  const headingId = useId();

  return (
    <section
      aria-labelledby={headingId}
      className={cn(
        "relative isolate min-h-[100dvh] overflow-hidden bg-background text-foreground",
        className,
      )}
      data-slot="skiper-39"
      {...props}
    >
      <CrowdCanvas
        cols={cols}
        rows={rows}
        src={src}
        walkerCount={walkerCount}
      />
      <div className="relative z-10 mx-auto flex min-h-[inherit] max-w-5xl flex-col justify-start px-6 pb-28 pt-16 sm:px-10 sm:pt-20">
        {eyebrow ? (
          <p className="text-sm font-medium text-muted-foreground">{eyebrow}</p>
        ) : null}
        <h1
          className="mt-3 max-w-[18ch] text-4xl font-semibold tracking-tight text-balance sm:text-6xl"
          id={headingId}
        >
          {heading}
        </h1>
        {description ? (
          <p className="mt-5 max-w-[42ch] text-base leading-relaxed text-muted-foreground sm:text-lg">
            {description}
          </p>
        ) : null}
      </div>
    </section>
  );
}
