"use client";

import { useEffect, useId, useRef } from "react";
import { cn } from "@/lib/cn";
import type {
  SplashCursorPalette,
  SplashCursorProps,
} from "./SplashCursor.types";

const defaults = {
  eyebrow: "Pointer ink",
  heading: "Color that follows every move.",
  description:
    "A fluid splash trail blooms behind the cursor, then settles into the page.",
  splatRadius: 42,
  splatForce: 1,
  fadeRate: 0.045,
  trailDensity: 3,
  clickBurst: true,
  palette: "mixed" as SplashCursorPalette,
  intensity: 0.72,
};

const paletteTokens: Record<SplashCursorPalette, readonly string[]> = {
  primary: ["--jk-primary", "--jk-ring"],
  chart: [
    "--jk-chart-1",
    "--jk-chart-2",
    "--jk-chart-3",
    "--jk-chart-4",
    "--jk-chart-5",
  ],
  mixed: [
    "--jk-primary",
    "--jk-chart-2",
    "--jk-chart-4",
    "--jk-ring",
    "--jk-chart-5",
  ],
};

type Drop = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  life: number;
  decay: number;
  color: string;
};

function tokenValue(node: HTMLElement, name: string) {
  return getComputedStyle(node).getPropertyValue(name).trim();
}

function readPalette(node: HTMLElement, palette: SplashCursorPalette) {
  return paletteTokens[palette]
    .map((token) => tokenValue(node, token))
    .filter(Boolean);
}

export function SplashCursor({
  className,
  eyebrow = defaults.eyebrow,
  heading = defaults.heading,
  description = defaults.description,
  splatRadius = defaults.splatRadius,
  splatForce = defaults.splatForce,
  fadeRate = defaults.fadeRate,
  trailDensity = defaults.trailDensity,
  clickBurst = defaults.clickBurst,
  palette = defaults.palette,
  intensity = defaults.intensity,
  ...props
}: SplashCursorProps) {
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
    let hue = 0;
    const drops: Drop[] = [];
    let lastPoint: { x: number; y: number; t: number } | null = null;

    const radius = Math.max(12, splatRadius);
    const force = Math.max(0.15, splatForce);
    const fade = Math.min(0.2, Math.max(0.008, fadeRate));
    const density = Math.max(1, Math.round(trailDensity));
    const glow = Math.min(1, Math.max(0.12, intensity));

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

    const nextColor = () => {
      const colors = readPalette(root, palette);
      if (!colors.length) {
        return tokenValue(root, "--jk-primary") || "currentColor";
      }
      hue = (hue + 1) % colors.length;
      return colors[hue];
    };

    const spawn = (
      x: number,
      y: number,
      vx: number,
      vy: number,
      scale: number,
    ) => {
      if (drops.length > 180) drops.splice(0, drops.length - 180);
      drops.push({
        x,
        y,
        vx,
        vy,
        radius: radius * scale,
        life: 1,
        decay: fade * (0.7 + Math.random() * 0.6),
        color: nextColor(),
      });
    };

    const paintStatic = () => {
      const colors = readPalette(root, palette);
      const accent =
        colors[0] || tokenValue(root, "--jk-primary") || "currentColor";
      const second = colors[2] || colors[1] || accent;
      ctx.clearRect(0, 0, width, height);
      const marks = [
        { x: width * 0.28, y: height * 0.38, r: radius * 2.4, color: accent },
        { x: width * 0.62, y: height * 0.32, r: radius * 1.8, color: second },
        { x: width * 0.72, y: height * 0.68, r: radius * 2.1, color: accent },
      ];
      for (const mark of marks) {
        const gradient = ctx.createRadialGradient(
          mark.x,
          mark.y,
          0,
          mark.x,
          mark.y,
          mark.r,
        );
        gradient.addColorStop(0, mark.color);
        gradient.addColorStop(1, "transparent");
        ctx.globalAlpha = glow * 0.18;
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(mark.x, mark.y, mark.r, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;
    };

    const paint = () => {
      const paper = tokenValue(root, "--jk-background") || "transparent";
      ctx.globalCompositeOperation = "source-over";
      ctx.globalAlpha = Math.min(0.28, fade * 4);
      ctx.fillStyle = paper;
      ctx.fillRect(0, 0, width, height);
      ctx.globalAlpha = 1;
      ctx.globalCompositeOperation = "lighter";

      for (let i = drops.length - 1; i >= 0; i -= 1) {
        const drop = drops[i];
        drop.x += drop.vx;
        drop.y += drop.vy;
        drop.vx *= 0.94;
        drop.vy *= 0.94;
        drop.radius += 0.55;
        drop.life -= drop.decay;
        if (drop.life <= 0.02) {
          drops.splice(i, 1);
          continue;
        }
        const gradient = ctx.createRadialGradient(
          drop.x,
          drop.y,
          0,
          drop.x,
          drop.y,
          drop.radius,
        );
        gradient.addColorStop(0, drop.color);
        gradient.addColorStop(1, "transparent");
        ctx.globalAlpha = drop.life * glow * 0.55;
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(drop.x, drop.y, drop.radius, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;
      ctx.globalCompositeOperation = "source-over";
    };

    const tick = () => {
      paint();
      frame = window.requestAnimationFrame(tick);
    };

    const startLoop = () => {
      if (frame) window.cancelAnimationFrame(frame);
      drops.length = 0;
      lastPoint = null;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, width, height);
      if (reduceMotion) {
        paintStatic();
        return;
      }
      frame = window.requestAnimationFrame(tick);
    };

    const trailFrom = (point: { x: number; y: number }, now: number) => {
      if (!lastPoint) {
        lastPoint = { ...point, t: now };
        spawn(point.x, point.y, 0, 0, 0.7);
        return;
      }
      const dt = Math.max(8, now - lastPoint.t);
      const dx = point.x - lastPoint.x;
      const dy = point.y - lastPoint.y;
      const speed = Math.hypot(dx, dy) / dt;
      const steps = Math.max(1, Math.min(8, Math.round(speed * 18 * density)));
      for (let step = 1; step <= steps; step += 1) {
        const t = step / steps;
        const x = lastPoint.x + dx * t;
        const y = lastPoint.y + dy * t;
        const scale = 0.55 + Math.min(1.4, speed * 9);
        spawn(x, y, (dx / dt) * 6 * force, (dy / dt) * 6 * force, scale);
      }
      lastPoint = { ...point, t: now };
    };

    const onPointerMove = (event: PointerEvent) => {
      if (reduceMotion) return;
      trailFrom(localPoint(event), performance.now());
    };
    const onPointerLeave = () => {
      lastPoint = null;
    };
    const onPointerDown = (event: PointerEvent) => {
      if (reduceMotion || !clickBurst) return;
      const point = localPoint(event);
      const count = 10;
      for (let i = 0; i < count; i += 1) {
        const angle = (Math.PI * 2 * i) / count;
        spawn(
          point.x,
          point.y,
          Math.cos(angle) * 3.2 * force,
          Math.sin(angle) * 3.2 * force,
          1.15,
        );
      }
    };
    const onMotion = () => {
      reduceMotion = media.matches;
      startLoop();
    };

    syncSize();
    startLoop();

    const observer = new ResizeObserver(() => {
      syncSize();
      if (reduceMotion) paintStatic();
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
    clickBurst,
    fadeRate,
    intensity,
    palette,
    splatForce,
    splatRadius,
    trailDensity,
  ]);

  return (
    <section
      aria-labelledby={headingId}
      className={cn(
        "relative isolate overflow-hidden bg-background text-foreground",
        className,
      )}
      data-slot="splash-cursor"
      {...props}
      ref={rootRef}
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <canvas
          className="h-full w-full"
          data-slot="splash-cursor-canvas"
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
