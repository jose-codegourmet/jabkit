"use client";

import { useEffect, useId, useRef } from "react";
import { cn } from "@/lib/cn";
import type {
  ShapeGridDirection,
  ShapeGridProps,
  ShapeGridShape,
  ShapeGridTone,
} from "./ShapeGrid.types";

const defaults = {
  eyebrow: "Tile field",
  heading: "Shapes that drift under the copy.",
  description:
    "Outlined squares slide on a diagonal, then fill when the pointer lands. Quiet when motion is reduced.",
  direction: "diagonal" as ShapeGridDirection,
  speed: 0.5,
  squareSize: 40,
  shape: "square" as ShapeGridShape,
  hoverTrailAmount: 0,
  lineWidth: 1,
  gridOpacity: 0.45,
  hoverOpacity: 0.28,
  tone: "primary" as ShapeGridTone,
};

const toneToken: Record<ShapeGridTone, string> = {
  primary: "--jk-primary",
  foreground: "--jk-foreground",
  ring: "--jk-ring",
};

const directionVector: Record<ShapeGridDirection, readonly [number, number]> = {
  diagonal: [1, 1],
  up: [0, -1],
  right: [1, 0],
  down: [0, 1],
  left: [-1, 0],
};

type TrailCell = { col: number; row: number; born: number };

function tokenValue(node: HTMLElement, name: string) {
  return getComputedStyle(node).getPropertyValue(name).trim();
}

function wrap(value: number, span: number) {
  return ((value % span) + span) % span;
}

function drawShape(
  ctx: CanvasRenderingContext2D,
  kind: ShapeGridShape,
  cx: number,
  cy: number,
  radius: number,
) {
  ctx.beginPath();
  if (kind === "circle") {
    ctx.arc(cx, cy, radius, 0, Math.PI * 2);
  } else if (kind === "hexagon") {
    for (let i = 0; i < 6; i += 1) {
      const angle = (Math.PI / 3) * i - Math.PI / 6;
      const x = cx + radius * Math.cos(angle);
      const y = cy + radius * Math.sin(angle);
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.closePath();
  } else if (kind === "triangle") {
    for (let i = 0; i < 3; i += 1) {
      const angle = -Math.PI / 2 + ((Math.PI * 2) / 3) * i;
      const x = cx + radius * Math.cos(angle);
      const y = cy + radius * Math.sin(angle);
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.closePath();
  } else {
    const edge = radius * 2;
    ctx.rect(cx - radius, cy - radius, edge, edge);
  }
}

export function ShapeGrid({
  className,
  eyebrow = defaults.eyebrow,
  heading = defaults.heading,
  description = defaults.description,
  direction = defaults.direction,
  speed = defaults.speed,
  squareSize = defaults.squareSize,
  shape = defaults.shape,
  hoverTrailAmount = defaults.hoverTrailAmount,
  lineWidth = defaults.lineWidth,
  gridOpacity = defaults.gridOpacity,
  hoverOpacity = defaults.hoverOpacity,
  tone = defaults.tone,
  ...props
}: ShapeGridProps) {
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
    let hoverKey = "";
    const trail: TrailCell[] = [];
    const origin = performance.now();

    const size = Math.max(16, squareSize);
    const cadence = Math.max(0, speed);
    const trailCap = Math.max(0, Math.round(hoverTrailAmount));
    const [vx, vy] = directionVector[direction];
    const radius = size * 0.38;

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

    const shift = (now: number) => {
      if (reduceMotion) return { ox: 0, oy: 0 };
      const distance = ((now - origin) / 1000) * cadence * size;
      return { ox: wrap(distance * vx, size), oy: wrap(distance * vy, size) };
    };

    const paint = (now: number) => {
      const lattice = tokenValue(root, "--jk-border") || "currentColor";
      const accent = tokenValue(root, toneToken[tone]) || lattice;
      const { ox, oy } = shift(now);
      ctx.clearRect(0, 0, width, height);
      ctx.lineWidth = lineWidth;
      ctx.lineJoin = "round";
      ctx.strokeStyle = lattice;
      ctx.fillStyle = accent;

      const cols = Math.ceil(width / size) + 2;
      const rows = Math.ceil(height / size) + 2;
      const hoverCol = pointer
        ? Math.floor((pointer.x - ox) / size)
        : Number.NaN;
      const hoverRow = pointer
        ? Math.floor((pointer.y - oy) / size)
        : Number.NaN;
      const liveKey =
        pointer && Number.isFinite(hoverCol) && Number.isFinite(hoverRow)
          ? `${hoverCol}:${hoverRow}`
          : "";

      if (liveKey && liveKey !== hoverKey) {
        if (hoverKey && trailCap > 0) {
          const [prevCol, prevRow] = hoverKey.split(":").map(Number);
          trail.unshift({ col: prevCol, row: prevRow, born: now });
          if (trail.length > trailCap) trail.length = trailCap;
        }
        hoverKey = liveKey;
      } else if (!liveKey) {
        hoverKey = "";
      }

      const trailLife = 720;
      for (let i = trail.length - 1; i >= 0; i -= 1) {
        if (now - trail[i].born > trailLife) trail.splice(i, 1);
      }

      const trailWeight = new Map<string, number>();
      for (let i = 0; i < trail.length; i += 1) {
        const cell = trail[i];
        const age = 1 - (now - cell.born) / trailLife;
        const rank = 1 - i / Math.max(1, trailCap);
        trailWeight.set(
          `${cell.col}:${cell.row}`,
          Math.max(0, age) * Math.max(0.2, rank),
        );
      }

      for (let row = -1; row < rows; row += 1) {
        for (let col = -1; col < cols; col += 1) {
          const x = col * size + ox;
          const y = row * size + oy;
          if (x < -size || y < -size || x > width + size || y > height + size) {
            continue;
          }
          const cx = x + size / 2;
          const cy = y + size / 2;
          const logicalCol = Math.round((x - ox) / size);
          const logicalRow = Math.round((y - oy) / size);
          const key = `${logicalCol}:${logicalRow}`;
          const hovered = liveKey === key;
          const wake = trailWeight.get(key) ?? 0;
          drawShape(ctx, shape, cx, cy, radius);
          ctx.globalAlpha = gridOpacity;
          ctx.stroke();
          if (hovered || wake > 0.02) {
            ctx.globalAlpha =
              hoverOpacity * (hovered ? 1 : Math.min(1, wake * 0.72));
            ctx.fill();
            ctx.globalAlpha = hovered ? 0.9 : 0.35 + wake * 0.4;
            ctx.strokeStyle = accent;
            ctx.stroke();
            ctx.strokeStyle = lattice;
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
        pointer = null;
        hoverKey = "";
        trail.length = 0;
        paint(origin);
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
    const onMotion = () => {
      reduceMotion = media.matches;
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
    direction,
    gridOpacity,
    hoverOpacity,
    hoverTrailAmount,
    lineWidth,
    shape,
    speed,
    squareSize,
    tone,
  ]);

  return (
    <section
      aria-labelledby={headingId}
      className={cn(
        "relative isolate overflow-hidden bg-background text-foreground",
        className,
      )}
      data-slot="shape-grid"
      {...props}
      ref={rootRef}
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <canvas
          className="h-full w-full"
          data-slot="shape-grid-canvas"
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
