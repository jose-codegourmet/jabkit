"use client";

import { useEffect, useId, useRef } from "react";
import { cn } from "@/lib/cn";
import type {
  ScannerDirection,
  ScannerProps,
  ScannerTone,
} from "./Scanner.types";

const defaults = {
  eyebrow: "Signal sweep",
  heading: "Interference that reads the page.",
  description:
    "Bands of token color drift like a calm oscilloscope. Quiet when motion is reduced.",
  direction: "vertical" as ScannerDirection,
  bandCount: 42,
  speed: 0.42,
  sweepWidth: 0.28,
  ripple: 0.08,
  glow: 0.55,
  mouseInteraction: true,
  scanline: true,
  tone: "primary" as ScannerTone,
};

const toneTokens: Record<ScannerTone, readonly [string, string, string]> = {
  primary: ["--jk-primary", "--jk-ring", "--jk-foreground"],
  ring: ["--jk-ring", "--jk-primary", "--jk-accent"],
  chart: ["--jk-chart-1", "--jk-chart-2", "--jk-chart-3"],
};

function tokenValue(node: HTMLElement, name: string) {
  return getComputedStyle(node).getPropertyValue(name).trim();
}

function readTone(node: HTMLElement, tone: ScannerTone) {
  return toneTokens[tone].map((token) => tokenValue(node, token));
}

function field(nx: number, ny: number, t: number) {
  return (
    Math.sin(nx * 4.1 + t * 0.82) * 0.42 +
    Math.sin(ny * 5.3 - t * 0.58) * 0.34 +
    Math.sin((nx + ny) * 3.2 + t * 0.97) * 0.22 +
    Math.sin((nx - ny) * 6.4 - t * 0.46) * 0.16
  );
}

function envelope(distance: number, width: number) {
  const span = Math.max(0.04, width);
  const t = 1 - Math.min(1, distance / span);
  return t * t * (3 - 2 * t);
}

export function Scanner({
  className,
  eyebrow = defaults.eyebrow,
  heading = defaults.heading,
  description = defaults.description,
  direction = defaults.direction,
  bandCount = defaults.bandCount,
  speed = defaults.speed,
  sweepWidth = defaults.sweepWidth,
  ripple = defaults.ripple,
  glow = defaults.glow,
  mouseInteraction = defaults.mouseInteraction,
  scanline = defaults.scanline,
  tone = defaults.tone,
  ...props
}: ScannerProps) {
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
    let dpr = 1;
    let pointer: { x: number; y: number } | null = null;
    const origin = performance.now();

    const bands = Math.max(12, Math.round(bandCount));
    const cadence = Math.max(0.08, speed);
    const widthNorm = Math.min(0.7, Math.max(0.08, sweepWidth));
    const warp = Math.min(0.24, Math.max(0, ripple));
    const bloom = Math.min(1, Math.max(0.12, glow));

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
    };

    const localPoint = (event: PointerEvent) => {
      const rect = root.getBoundingClientRect();
      return { x: event.clientX - rect.left, y: event.clientY - rect.top };
    };

    const axisOf = (nx: number, ny: number) => {
      if (direction === "horizontal") return nx;
      if (direction === "diagonal") return (nx + ny) * 0.5;
      return ny;
    };

    const paint = (now: number) => {
      const colors = readTone(root, tone);
      const lattice = tokenValue(root, "--jk-border") || "currentColor";
      const t = reduceMotion ? 0.35 : ((now - origin) / 1000) * cadence;
      const sweep = reduceMotion
        ? 0.42
        : 0.5 + 0.5 * Math.sin(t * Math.PI * 0.85);
      ctx.clearRect(0, 0, width, height);

      if (scanline) {
        ctx.strokeStyle = lattice;
        ctx.lineWidth = 1;
        const pitch = 6;
        for (let y = 0; y < height; y += pitch) {
          ctx.globalAlpha = 0.06;
          ctx.beginPath();
          ctx.moveTo(0, y + 0.5);
          ctx.lineTo(width, y + 0.5);
          ctx.stroke();
        }
      }

      const step = Math.max(10, Math.round(width / 72));
      ctx.lineJoin = "round";
      ctx.lineCap = "round";

      for (let i = 0; i < bands; i += 1) {
        const n = (i + 0.5) / bands;
        const color = colors[i % colors.length] || lattice;
        const dist = Math.min(
          Math.abs(n - sweep),
          Math.abs(n - sweep + 1),
          Math.abs(n - sweep - 1),
        );
        let strength = envelope(dist, widthNorm);
        if (pointer && mouseInteraction && !reduceMotion) {
          const px = pointer.x / width;
          const py = pointer.y / height;
          const along = axisOf(px, py);
          const proximity = envelope(Math.abs(along - n), 0.18);
          strength = Math.min(1, strength + proximity * 0.55);
        }
        if (strength < 0.02) continue;

        ctx.strokeStyle = color;
        ctx.lineWidth = 1 + strength * 2.4;
        ctx.globalAlpha = (0.18 + strength * bloom) * (0.55 + (i % 3) * 0.12);
        ctx.beginPath();

        if (direction === "horizontal") {
          const xBase = n * width;
          for (let y = 0; y <= height; y += step) {
            const ny = y / height;
            const nx = n;
            const offset = field(nx, ny, t) * warp * width;
            const x = xBase + offset;
            if (y === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
          }
        } else if (direction === "diagonal") {
          const span = width + height;
          const originX = n * span - height * 0.15;
          for (let s = 0; s <= span; s += step) {
            const nx = s / span;
            const ny = n;
            const offset = field(nx, ny, t) * warp * 48;
            const x = originX + s * 0.72 + offset;
            const y = s * 0.72 - offset * 0.35;
            if (s === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
          }
        } else {
          const yBase = n * height;
          for (let x = 0; x <= width; x += step) {
            const nx = x / width;
            const ny = n;
            const offset = field(nx, ny, t) * warp * height;
            const y = yBase + offset;
            if (x === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
          }
        }
        ctx.stroke();
      }

      const beam = colors[0] || lattice;
      ctx.globalCompositeOperation = "lighter";
      if (direction === "horizontal") {
        const x = sweep * width;
        const gradient = ctx.createLinearGradient(x - 48, 0, x + 48, 0);
        gradient.addColorStop(0, "transparent");
        gradient.addColorStop(0.5, beam);
        gradient.addColorStop(1, "transparent");
        ctx.globalAlpha = 0.12 * bloom;
        ctx.fillStyle = gradient;
        ctx.fillRect(x - 48, 0, 96, height);
      } else if (direction === "diagonal") {
        const x = sweep * width;
        const y = sweep * height;
        ctx.save();
        ctx.translate(x, y);
        ctx.rotate(Math.PI / 4);
        const gradient = ctx.createLinearGradient(0, -36, 0, 36);
        gradient.addColorStop(0, "transparent");
        gradient.addColorStop(0.5, beam);
        gradient.addColorStop(1, "transparent");
        ctx.globalAlpha = 0.14 * bloom;
        ctx.fillStyle = gradient;
        ctx.fillRect(-width, -36, width * 2, 72);
        ctx.restore();
      } else {
        const y = sweep * height;
        const gradient = ctx.createLinearGradient(0, y - 40, 0, y + 40);
        gradient.addColorStop(0, "transparent");
        gradient.addColorStop(0.5, beam);
        gradient.addColorStop(1, "transparent");
        ctx.globalAlpha = 0.12 * bloom;
        ctx.fillStyle = gradient;
        ctx.fillRect(0, y - 40, width, 80);
      }
      ctx.globalCompositeOperation = "source-over";
      ctx.globalAlpha = 1;
    };

    const tick = (now: number) => {
      paint(now);
      frame = window.requestAnimationFrame(tick);
    };

    const startLoop = () => {
      if (frame) window.cancelAnimationFrame(frame);
      if (reduceMotion) {
        paint(origin);
        return;
      }
      frame = window.requestAnimationFrame(tick);
    };

    const onPointerMove = (event: PointerEvent) => {
      if (reduceMotion || !mouseInteraction) return;
      pointer = localPoint(event);
    };
    const onPointerLeave = () => {
      pointer = null;
    };
    const onMotion = () => {
      reduceMotion = media.matches;
      if (reduceMotion) pointer = null;
      startLoop();
    };

    syncSize();
    startLoop();

    const observer = new ResizeObserver(() => {
      syncSize();
      if (reduceMotion) paint(origin);
    });
    observer.observe(root);
    media.addEventListener("change", onMotion);
    root.addEventListener("pointermove", onPointerMove);
    root.addEventListener("pointerleave", onPointerLeave);

    return () => {
      observer.disconnect();
      media.removeEventListener("change", onMotion);
      root.removeEventListener("pointermove", onPointerMove);
      root.removeEventListener("pointerleave", onPointerLeave);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [
    bandCount,
    direction,
    glow,
    mouseInteraction,
    ripple,
    scanline,
    speed,
    sweepWidth,
    tone,
  ]);

  return (
    <section
      aria-labelledby={headingId}
      className={cn(
        "relative isolate overflow-hidden bg-background text-foreground",
        className,
      )}
      data-slot="scanner"
      {...props}
      ref={rootRef}
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <canvas
          className="h-full w-full"
          data-slot="scanner-canvas"
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
