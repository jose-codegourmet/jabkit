"use client";

import { SparklesIcon } from "lucide-react";
import { useEffect, useId, useRef } from "react";
import { cn } from "@/lib/cn";
import type {
  LiquidMetalAction,
  LiquidMetalButtonProps,
  LiquidMetalCtaProps,
  LiquidMetalViewMode,
} from "./LiquidMetalButton.types";

const DEFAULT_EYEBROW = "Poured chrome";
const DEFAULT_HEADING = "A button that looks poured, not painted.";
const DEFAULT_DESCRIPTION =
  "Token metal rolls under the label. Hover speeds the pour. Quiet when motion is reduced.";
const DEFAULT_LABEL = "Get Started";
const DEFAULT_VIEW: LiquidMetalViewMode = "text";
const DEFAULT_SPEED = 0.6;

type Rgb = readonly [number, number, number];

function tokenRgb(node: HTMLElement, name: string): Rgb {
  const probe = document.createElement("span");
  probe.style.color = `var(${name})`;
  probe.style.position = "absolute";
  probe.style.visibility = "hidden";
  probe.style.pointerEvents = "none";
  node.appendChild(probe);
  const color = getComputedStyle(probe).color;
  probe.remove();
  const nums = color.match(/[\d.]+/g);
  if (!nums || nums.length < 3) return [128, 128, 128];
  return [Number(nums[0]), Number(nums[1]), Number(nums[2])];
}

function mix(a: Rgb, b: Rgb, t: number): Rgb {
  const u = Math.max(0, Math.min(1, t));
  return [
    a[0] + (b[0] - a[0]) * u,
    a[1] + (b[1] - a[1]) * u,
    a[2] + (b[2] - a[2]) * u,
  ];
}

function field(nx: number, ny: number, t: number) {
  return (
    Math.sin(nx * 7.4 + t * 0.92) * 0.34 +
    Math.sin(ny * 5.8 - t * 1.08) * 0.28 +
    Math.sin((nx * 1.6 + ny) * 4.6 + t * 0.58) * 0.22 +
    Math.sin((nx - ny) * 9.1 - t * 0.41) * 0.16
  );
}

function MetalCta({
  label,
  viewMode = DEFAULT_VIEW,
  speed = DEFAULT_SPEED,
  className,
  onClick,
  onPointerEnter,
  onPointerLeave,
  onPointerDown,
  onPointerUp,
  onPointerMove,
  onKeyDown,
  ...props
}: LiquidMetalCtaProps) {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const icon = viewMode === "icon";

  useEffect(() => {
    const button = buttonRef.current;
    const canvas = canvasRef.current;
    if (!button || !canvas) return;

    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    let reduceMotion = media.matches;
    let frame = 0;
    let width = 0;
    let height = 0;
    let dpr = 1;
    let hovered = false;
    let pressed = false;
    let cadence = Math.max(0.12, speed);
    const origin = performance.now();
    let pointer: { x: number; y: number } | null = null;
    const ripples: { x: number; y: number; born: number }[] = [];

    const syncSize = () => {
      const rect = button.getBoundingClientRect();
      width = Math.max(1, rect.width);
      height = Math.max(1, rect.height);
      dpr = Math.min(2, window.devicePixelRatio || 1);
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
    };

    const localPoint = (event: PointerEvent) => {
      const rect = button.getBoundingClientRect();
      return { x: event.clientX - rect.left, y: event.clientY - rect.top };
    };

    const paint = (now: number) => {
      const fg = tokenRgb(button, "--jk-foreground");
      const bg = tokenRgb(button, "--jk-background");
      const muted = tokenRgb(button, "--jk-muted");
      const accent = tokenRgb(button, "--jk-primary");
      const ring = tokenRgb(button, "--jk-ring");
      const elapsed = (now - origin) / 1000;
      const t = reduceMotion ? 0.42 : elapsed * cadence * (hovered ? 1.7 : 1);
      const cols = Math.max(24, Math.round(width / 2));
      const rows = Math.max(10, Math.round(height / 2));
      const cellW = width / cols;
      const cellH = height / rows;
      const lightX = pointer && !reduceMotion ? pointer.x / width : 0.32;
      const lightY = pointer && !reduceMotion ? pointer.y / height : 0.22;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.fillStyle = `rgb(${muted[0]} ${muted[1]} ${muted[2]})`;
      ctx.fillRect(0, 0, width, height);

      const sample = (nx: number, ny: number) => {
        let h = field(nx, ny, t);
        if (pointer && !reduceMotion) {
          const dx = nx - pointer.x / width;
          const dy = ny - pointer.y / height;
          const dist = Math.sqrt(dx * dx + dy * dy);
          h += Math.exp(-dist * dist * 9) * 0.55;
        }
        if (!reduceMotion) {
          for (const ripple of ripples) {
            const age = (now - ripple.born) / 520;
            if (age < 0 || age > 1) continue;
            const dx = nx - ripple.x / width;
            const dy = ny - ripple.y / height;
            const ringDist = Math.abs(
              Math.sqrt(dx * dx + dy * dy) - age * 0.85,
            );
            h += Math.exp(-ringDist * ringDist * 70) * (1 - age) * 0.7;
          }
        }
        return h;
      };

      for (let row = 0; row < rows; row += 1) {
        const ny = (row + 0.5) / rows;
        for (let col = 0; col < cols; col += 1) {
          const nx = (col + 0.5) / cols;
          const h = sample(nx, ny);
          const hx = sample(nx + 0.04, ny) - h;
          const hy = sample(nx, ny + 0.04) - h;
          const nxn = -hx;
          const nyn = -hy;
          const nzn = 0.55;
          const inv = 1 / Math.sqrt(nxn * nxn + nyn * nyn + nzn * nzn);
          const lx = lightX - nx;
          const ly = lightY - ny;
          const lz = 0.85;
          const lin = 1 / Math.sqrt(lx * lx + ly * ly + lz * lz);
          const diff = Math.max(
            0,
            nxn * inv * lx * lin + nyn * inv * ly * lin + nzn * inv * lz * lin,
          );
          const spec = diff ** 18;
          const metal = mix(fg, bg, 0.18 + h * 0.22 + diff * 0.42);
          const tint = mix(accent, ring, (nx + ny + t * 0.08) % 1);
          const lit = mix(metal, tint, 0.12 + spec * 0.35);
          const highlight = mix(lit, bg, spec * 0.72);
          ctx.fillStyle = `rgb(${highlight[0]} ${highlight[1]} ${highlight[2]})`;
          ctx.fillRect(col * cellW, row * cellH, cellW + 0.5, cellH + 0.5);
        }
      }

      const sheen = ctx.createLinearGradient(0, 0, 0, height);
      sheen.addColorStop(
        0,
        `rgba(${bg[0]}, ${bg[1]}, ${bg[2]}, ${hovered ? 0.38 : 0.22})`,
      );
      sheen.addColorStop(0.45, `rgba(${bg[0]}, ${bg[1]}, ${bg[2]}, 0)`);
      sheen.addColorStop(
        1,
        `rgba(${fg[0]}, ${fg[1]}, ${fg[2]}, ${pressed ? 0.45 : 0.18})`,
      );
      ctx.fillStyle = sheen;
      ctx.fillRect(0, 0, width, height);
    };

    const tick = (now: number) => {
      const cutoff = now - 600;
      while (ripples[0] && ripples[0].born < cutoff) ripples.shift();
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

    const onMove = (event: PointerEvent) => {
      if (reduceMotion) return;
      pointer = localPoint(event);
    };
    const onEnter = () => {
      hovered = true;
    };
    const onLeave = () => {
      hovered = false;
      pressed = false;
      pointer = null;
    };
    const onDown = (event: PointerEvent) => {
      pressed = true;
      if (reduceMotion) return;
      const point = localPoint(event);
      ripples.push({ x: point.x, y: point.y, born: performance.now() });
    };
    const onUp = () => {
      pressed = false;
    };
    const onMotion = () => {
      reduceMotion = media.matches;
      if (reduceMotion) {
        pointer = null;
        ripples.length = 0;
      }
      startLoop();
    };

    cadence = Math.max(0.12, speed);
    syncSize();
    startLoop();

    const observer = new ResizeObserver(() => {
      syncSize();
      if (reduceMotion) paint(origin);
    });
    observer.observe(button);
    media.addEventListener("change", onMotion);
    button.addEventListener("pointermove", onMove);
    button.addEventListener("pointerenter", onEnter);
    button.addEventListener("pointerleave", onLeave);
    button.addEventListener("pointerdown", onDown);
    button.addEventListener("pointerup", onUp);
    button.addEventListener("pointercancel", onUp);

    return () => {
      observer.disconnect();
      media.removeEventListener("change", onMotion);
      button.removeEventListener("pointermove", onMove);
      button.removeEventListener("pointerenter", onEnter);
      button.removeEventListener("pointerleave", onLeave);
      button.removeEventListener("pointerdown", onDown);
      button.removeEventListener("pointerup", onUp);
      button.removeEventListener("pointercancel", onUp);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [speed]);

  return (
    <button
      {...props}
      aria-label={icon ? label : undefined}
      className={cn(
        "jk-liquid-metal-cta relative isolate inline-flex h-12 shrink-0 items-center justify-center overflow-hidden rounded-full text-sm font-medium whitespace-nowrap text-muted-foreground",
        icon ? "w-12" : "min-w-[9.25rem] px-5",
        "shadow-[0_18px_28px_-18px_color-mix(in_oklab,var(--jk-foreground),transparent_55%)]",
        "transition-[transform,box-shadow] duration-200 ease-out",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        "active:translate-y-px",
        className,
      )}
      data-slot="liquid-metal-cta"
      data-view-mode={viewMode}
      onClick={onClick}
      onKeyDown={onKeyDown}
      onPointerDown={onPointerDown}
      onPointerEnter={onPointerEnter}
      onPointerLeave={onPointerLeave}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      ref={buttonRef}
      type="button"
    >
      <span
        aria-hidden="true"
        className="jk-liquid-metal-rim pointer-events-none absolute inset-0 rounded-full"
      />
      <span aria-hidden="true" className="pointer-events-none absolute inset-0">
        <canvas className="size-full rounded-full" ref={canvasRef} />
      </span>
      <span className="relative z-10 inline-flex items-center justify-center gap-1.5 drop-shadow-[0_1px_1px_color-mix(in_oklab,var(--jk-foreground),transparent_55%)]">
        {icon ? <SparklesIcon aria-hidden="true" className="size-4" /> : label}
      </span>
    </button>
  );
}

export function LiquidMetalButton({
  className,
  eyebrow = DEFAULT_EYEBROW,
  heading = DEFAULT_HEADING,
  description = DEFAULT_DESCRIPTION,
  label = DEFAULT_LABEL,
  viewMode = DEFAULT_VIEW,
  actions,
  speed = DEFAULT_SPEED,
  onAction,
  ...props
}: LiquidMetalButtonProps) {
  const headingId = useId();
  const faces: LiquidMetalAction[] =
    actions && actions.length > 0
      ? actions
      : [{ id: "featured", label, viewMode }];

  return (
    <section
      aria-labelledby={headingId}
      className={cn("bg-background text-foreground", className)}
      data-slot="liquid-metal-button"
      {...props}
    >
      <style href="jk-liquid-metal-button" precedence="default">{`
        .jk-liquid-metal-rim {
          box-shadow:
            inset 0 1px 0 color-mix(in oklab, var(--jk-background), transparent 35%),
            inset 0 -1px 0 color-mix(in oklab, var(--jk-foreground), transparent 78%),
            0 0 0 1px color-mix(in oklab, var(--jk-foreground), transparent 72%);
        }
        .jk-liquid-metal-cta::after {
          content: "";
          position: absolute;
          inset: -10px;
          z-index: -1;
          border-radius: 999px;
          background: conic-gradient(
            from 0deg,
            color-mix(in oklab, var(--jk-muted), transparent 18%),
            color-mix(in oklab, var(--jk-primary), transparent 42%),
            color-mix(in oklab, var(--jk-ring), transparent 28%),
            color-mix(in oklab, var(--jk-foreground), transparent 55%),
            color-mix(in oklab, var(--jk-muted), transparent 18%)
          );
          filter: blur(14px);
          opacity: 0.42;
        }
        .dark .jk-liquid-metal-cta::after {
          opacity: 0.62;
          filter: blur(16px);
        }
        @keyframes jk-liquid-metal-spin {
          to { transform: rotate(1turn); }
        }
        @media (prefers-reduced-motion: no-preference) {
          .jk-liquid-metal-cta {
            transition: transform 180ms ease, box-shadow 180ms ease;
          }
          .jk-liquid-metal-cta::after {
            animation: jk-liquid-metal-spin 9s linear infinite;
          }
          .jk-liquid-metal-cta:hover::after {
            opacity: 0.78;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .jk-liquid-metal-cta::after {
            animation: none;
          }
          .jk-liquid-metal-cta {
            transition: none;
          }
        }
      `}</style>
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
        <header className="mx-auto mb-10 max-w-2xl text-center sm:mb-14">
          {eyebrow ? (
            <p className="mb-3 text-xs font-medium tracking-[0.2em] text-muted-foreground uppercase">
              {eyebrow}
            </p>
          ) : null}
          <h2
            className="text-3xl font-semibold tracking-[-0.05em] text-balance sm:text-4xl lg:text-5xl"
            id={headingId}
          >
            {heading}
          </h2>
          {description ? (
            <p className="mt-3 text-sm leading-6 text-muted-foreground sm:text-base sm:leading-7">
              {description}
            </p>
          ) : null}
        </header>
        <div className="flex flex-wrap items-center justify-center gap-8">
          {faces.map((face) => (
            <MetalCta
              key={face.id}
              label={face.label}
              onClick={() => onAction?.(face)}
              speed={speed}
              viewMode={face.viewMode ?? DEFAULT_VIEW}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
