"use client";

import { useEffect, useId, useRef } from "react";
import { cn } from "@/lib/cn";
import type {
  CursorGridFalloff,
  CursorGridProps,
  CursorGridTone,
} from "./CursorGrid.types";

const defaults = {
  eyebrow: "Interactive lattice",
  heading: "A grid that follows the cursor.",
  description:
    "Cells bloom around the pointer, hold, then fade. Click to send a pulse through the lattice.",
  cellSize: 64,
  radius: 160,
  falloff: "smooth" as CursorGridFalloff,
  holdTime: 400,
  fadeDuration: 800,
  lineWidth: 1.2,
  maxOpacity: 1,
  fillOpacity: 0.12,
  gridOpacity: 0.22,
  cellRadius: 10,
  clickPulse: true,
  pulseSpeed: 620,
  tone: "primary" as CursorGridTone,
};

const toneToken: Record<CursorGridTone, string> = {
  primary: "--jk-primary",
  foreground: "--jk-foreground",
  ring: "--jk-ring",
};

type Pulse = { x: number; y: number; started: number };

function falloffAt(
  distance: number,
  radius: number,
  kind: CursorGridFalloff,
): number {
  if (radius <= 0 || distance >= radius) return 0;
  const t = 1 - distance / radius;
  if (kind === "linear") return t;
  if (kind === "sharp") return t ** 3;
  return t * t * (3 - 2 * t);
}

function tokenValue(node: HTMLElement, name: string) {
  return getComputedStyle(node).getPropertyValue(name).trim();
}

function roundRect(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  size: number,
  radius: number,
) {
  const r = Math.min(radius, size / 2);
  if (r <= 0) {
    ctx.rect(x, y, size, size);
    return;
  }
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + size, y, x + size, y + size, r);
  ctx.arcTo(x + size, y + size, x, y + size, r);
  ctx.arcTo(x, y + size, x, y, r);
  ctx.arcTo(x, y, x + size, y, r);
  ctx.closePath();
}

export function CursorGrid({
  className,
  eyebrow = defaults.eyebrow,
  heading = defaults.heading,
  description = defaults.description,
  cellSize = defaults.cellSize,
  radius = defaults.radius,
  falloff = defaults.falloff,
  holdTime = defaults.holdTime,
  fadeDuration = defaults.fadeDuration,
  lineWidth = defaults.lineWidth,
  maxOpacity = defaults.maxOpacity,
  fillOpacity = defaults.fillOpacity,
  gridOpacity = defaults.gridOpacity,
  cellRadius = defaults.cellRadius,
  clickPulse = defaults.clickPulse,
  pulseSpeed = defaults.pulseSpeed,
  tone = defaults.tone,
  ...props
}: CursorGridProps) {
  const headingId = useId();
  const rootRef = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    const canvas = canvasRef.current;
    if (!root || !canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    let reduceMotion = media.matches;
    let frame = 0;
    let width = 0;
    let height = 0;
    let cols = 0;
    let rows = 0;
    let dpr = 1;
    let pointer: { x: number; y: number } | null = null;
    const pulses: Pulse[] = [];
    let lastSeen = new Float64Array(0);
    let peak = new Float32Array(0);

    const size = Math.max(16, cellSize);
    const inset = 5;

    const syncSize = () => {
      const rect = root.getBoundingClientRect();
      width = Math.max(1, rect.width);
      height = Math.max(1, rect.height);
      dpr = Math.min(2, window.devicePixelRatio || 1);
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      cols = Math.max(1, Math.ceil(width / size));
      rows = Math.max(1, Math.ceil(height / size));
      const count = cols * rows;
      lastSeen = new Float64Array(count);
      peak = new Float32Array(count);
    };

    const localPoint = (event: PointerEvent) => {
      const rect = root.getBoundingClientRect();
      return { x: event.clientX - rect.left, y: event.clientY - rect.top };
    };

    const drawStatic = () => {
      const lattice = tokenValue(root, "--jk-border") || "currentColor";
      const accent = tokenValue(root, toneToken[tone]) || lattice;
      ctx.clearRect(0, 0, width, height);
      ctx.lineWidth = lineWidth;
      ctx.strokeStyle = accent;
      ctx.fillStyle = accent;
      for (let row = 0; row < rows; row += 1) {
        for (let col = 0; col < cols; col += 1) {
          const x = col * size + inset;
          const y = row * size + inset;
          const cell = Math.max(8, size - inset * 2);
          ctx.beginPath();
          roundRect(ctx, x, y, cell, cellRadius);
          ctx.globalAlpha = gridOpacity;
          ctx.stroke();
          if (fillOpacity > 0) {
            ctx.globalAlpha = fillOpacity * 0.35;
            ctx.fill();
          }
        }
      }
      ctx.globalAlpha = 1;
    };

    const paint = (now: number) => {
      const lattice = tokenValue(root, "--jk-border") || "currentColor";
      const accent = tokenValue(root, toneToken[tone]) || lattice;
      ctx.clearRect(0, 0, width, height);
      ctx.lineWidth = lineWidth;
      ctx.strokeStyle = accent;
      ctx.fillStyle = accent;

      const band = size * 1.25;
      const maxAge = 4000;
      for (let i = pulses.length - 1; i >= 0; i -= 1) {
        if (now - pulses[i].started > maxAge) pulses.splice(i, 1);
      }

      for (let row = 0; row < rows; row += 1) {
        for (let col = 0; col < cols; col += 1) {
          const index = row * cols + col;
          const x = col * size + inset;
          const y = row * size + inset;
          const cell = Math.max(8, size - inset * 2);
          const cx = x + cell / 2;
          const cy = y + cell / 2;
          let live = 0;
          if (pointer) {
            live = Math.max(
              live,
              falloffAt(
                Math.hypot(pointer.x - cx, pointer.y - cy),
                radius,
                falloff,
              ),
            );
          }
          for (const pulse of pulses) {
            const ring = ((now - pulse.started) / 1000) * pulseSpeed;
            const delta = Math.abs(
              Math.hypot(pulse.x - cx, pulse.y - cy) - ring,
            );
            live = Math.max(live, falloffAt(delta, band, "smooth"));
          }
          if (live > 0.02) {
            lastSeen[index] = now;
            peak[index] = Math.max(peak[index] * 0.85, live);
          }
          const elapsed = now - lastSeen[index];
          let held = 0;
          if (lastSeen[index] > 0) {
            if (elapsed <= holdTime) held = peak[index];
            else if (elapsed < holdTime + fadeDuration) {
              held =
                peak[index] *
                (1 - (elapsed - holdTime) / Math.max(1, fadeDuration));
            } else {
              peak[index] = 0;
            }
          }
          const intensity = Math.max(live, held);
          ctx.beginPath();
          roundRect(ctx, x, y, cell, cellRadius);
          ctx.globalAlpha = gridOpacity;
          ctx.stroke();
          if (intensity > 0.01) {
            const glow = Math.min(1, intensity) * maxOpacity;
            if (fillOpacity > 0) {
              ctx.globalAlpha = glow * fillOpacity;
              ctx.fill();
            }
            ctx.globalAlpha = glow;
            ctx.stroke();
          } else if (fillOpacity > 0 && gridOpacity > 0) {
            ctx.globalAlpha = fillOpacity * 0.18;
            ctx.fill();
          }
        }
      }
      ctx.globalAlpha = 1;
    };

    const tick = (now: number) => {
      paint(now);
      frame = window.requestAnimationFrame(tick);
    };

    const startLoop = () => {
      if (frame) window.cancelAnimationFrame(frame);
      if (reduceMotion) {
        drawStatic();
        return;
      }
      frame = window.requestAnimationFrame(tick);
    };

    const onPointerMove = (event: PointerEvent) => {
      if (reduceMotion) return;
      pointer = localPoint(event);
    };
    const onPointerLeave = () => {
      pointer = null;
    };
    const onPointerDown = (event: PointerEvent) => {
      if (reduceMotion || !clickPulse) return;
      const point = localPoint(event);
      pulses.push({ ...point, started: performance.now() });
    };
    const onMotion = () => {
      reduceMotion = media.matches;
      if (reduceMotion) {
        pointer = null;
        pulses.length = 0;
      }
      startLoop();
    };

    syncSize();
    startLoop();

    const observer = new ResizeObserver(() => {
      syncSize();
      if (reduceMotion) drawStatic();
    });
    observer.observe(root);
    media.addEventListener("change", onMotion);
    root.addEventListener("pointermove", onPointerMove);
    root.addEventListener("pointerleave", onPointerLeave);
    root.addEventListener("pointerdown", onPointerDown);

    return () => {
      observer.disconnect();
      media.removeEventListener("change", onMotion);
      root.removeEventListener("pointermove", onPointerMove);
      root.removeEventListener("pointerleave", onPointerLeave);
      root.removeEventListener("pointerdown", onPointerDown);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [
    cellRadius,
    cellSize,
    clickPulse,
    fadeDuration,
    falloff,
    fillOpacity,
    gridOpacity,
    holdTime,
    lineWidth,
    maxOpacity,
    pulseSpeed,
    radius,
    tone,
  ]);

  return (
    <section
      aria-labelledby={headingId}
      className={cn(
        "relative isolate overflow-hidden bg-background text-foreground",
        className,
      )}
      data-slot="cursor-grid"
      {...props}
      ref={rootRef}
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <canvas
          className="h-full w-full"
          data-slot="cursor-grid-canvas"
          ref={canvasRef}
        />
      </div>
      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center gap-5 px-6 py-24 text-center sm:px-10 sm:py-32">
        {eyebrow ? (
          <p className="text-xs font-medium tracking-[0.22em] text-muted-foreground uppercase">
            {eyebrow}
          </p>
        ) : null}
        <h2
          className="max-w-3xl text-4xl leading-[1.08] font-semibold tracking-[-0.05em] text-balance sm:text-5xl lg:text-6xl"
          id={headingId}
        >
          {heading}
        </h2>
        {description ? (
          <p className="max-w-xl text-base leading-7 text-muted-foreground sm:text-lg">
            {description}
          </p>
        ) : null}
      </div>
    </section>
  );
}
