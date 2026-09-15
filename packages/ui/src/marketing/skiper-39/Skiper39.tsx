"use client";

import { useEffect, useId, useRef } from "react";
// biome-ignore lint/correctness/noUnusedImports: packages/ui uses the classic JSX runtime.
import * as React from "react";
import { cn } from "@/lib/cn";
import type { CrowdCanvasProps, Skiper39Props } from "./Skiper39.types";

export const SKIPER39_PEEPS_SRC = "/assets/63ee6e77ac6bdba4.webp";

const DEFAULT_LABEL = "Croud Canvas";
const DEFAULT_ROWS = 15;
const DEFAULT_COLS = 7;
const WALK_X_DURATION = 10;
const WALK_Y_DURATION = 0.25;
const WALK_BOB = 10;

type Stage = {
  width: number;
  height: number;
};

type WalkState = {
  startX: number;
  startY: number;
  endX: number;
  timeScale: number;
  elapsed: number;
};

type Peep = {
  image: HTMLImageElement;
  rect: [number, number, number, number];
  width: number;
  height: number;
  x: number;
  y: number;
  anchorY: number;
  scaleX: 1 | -1;
  walk: WalkState | null;
};

function randomRange(min: number, max: number) {
  return min + Math.random() * (max - min);
}

function power2In(t: number) {
  return t * t;
}

function pickIndex(length: number) {
  return Math.floor(randomRange(0, length));
}

function takeRandom<T>(items: T[]): T {
  return items.splice(pickIndex(items.length), 1)[0];
}

function createPeep(image: HTMLImageElement, rect: Peep["rect"]): Peep {
  return {
    image,
    rect,
    width: rect[2],
    height: rect[3],
    x: 0,
    y: 0,
    anchorY: 0,
    scaleX: 1,
    walk: null,
  };
}

function resetPeep(stage: Stage, peep: Peep): WalkState {
  const direction: 1 | -1 = Math.random() > 0.5 ? 1 : -1;
  const offsetY = 100 - 250 * power2In(Math.random());
  const startY = stage.height - peep.height + offsetY;
  const timeScale = randomRange(0.5, 1.5);

  if (direction === 1) {
    peep.scaleX = 1;
    peep.x = -peep.width;
    peep.y = startY;
    peep.anchorY = startY;
    return {
      startX: -peep.width,
      startY,
      endX: stage.width,
      timeScale,
      elapsed: 0,
    };
  }

  peep.scaleX = -1;
  peep.x = stage.width + peep.width;
  peep.y = startY;
  peep.anchorY = startY;
  return {
    startX: stage.width + peep.width,
    startY,
    endX: 0,
    timeScale,
    elapsed: 0,
  };
}

function applyWalk(peep: Peep, walk: WalkState) {
  const duration = WALK_X_DURATION / walk.timeScale;
  const progress = Math.min(1, walk.elapsed / duration);
  peep.x = walk.startX + (walk.endX - walk.startX) * progress;

  const bobPhase = (walk.elapsed * walk.timeScale) / WALK_Y_DURATION;
  const segment = Math.floor(bobPhase);
  let local = bobPhase - segment;
  if (segment % 2 === 1) local = 1 - local;
  peep.y = walk.startY - WALK_BOB * local;
}

function renderPeep(ctx: CanvasRenderingContext2D, peep: Peep) {
  ctx.save();
  ctx.translate(peep.x, peep.y);
  ctx.scale(peep.scaleX, 1);
  ctx.drawImage(
    peep.image,
    peep.rect[0],
    peep.rect[1],
    peep.rect[2],
    peep.rect[3],
    0,
    0,
    peep.width,
    peep.height,
  );
  ctx.restore();
}

export function CrowdCanvas({
  className,
  src,
  rows = DEFAULT_ROWS,
  cols = DEFAULT_COLS,
  ...props
}: CrowdCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const stage: Stage = { width: 0, height: 0 };
    const allPeeps: Peep[] = [];
    const availablePeeps: Peep[] = [];
    const crowd: Peep[] = [];
    const sheet = new Image();
    let frame = 0;
    let lastTs: number | null = null;
    let reduceMotion = media.matches;
    let ready = false;

    const paint = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.save();
      ctx.scale(window.devicePixelRatio || 1, window.devicePixelRatio || 1);
      for (const peep of crowd) {
        renderPeep(ctx, peep);
      }
      ctx.restore();
    };

    const addPeepToCrowd = (progress = 0) => {
      if (!availablePeeps.length) return;
      const peep = takeRandom(availablePeeps);
      const walk = resetPeep(stage, peep);
      walk.elapsed = progress * (WALK_X_DURATION / walk.timeScale);
      applyWalk(peep, walk);
      peep.walk = walk;
      crowd.push(peep);
      crowd.sort((a, b) => a.anchorY - b.anchorY);
    };

    const recycle = (peep: Peep) => {
      const index = crowd.indexOf(peep);
      if (index >= 0) crowd.splice(index, 1);
      availablePeeps.push(peep);
      addPeepToCrowd(0);
    };

    const fillCrowd = () => {
      crowd.length = 0;
      availablePeeps.length = 0;
      availablePeeps.push(...allPeeps);
      while (availablePeeps.length) {
        addPeepToCrowd(Math.random());
      }
    };

    const resize = () => {
      stage.width = canvas.clientWidth;
      stage.height = canvas.clientHeight;
      const dpr = window.devicePixelRatio || 1;
      canvas.width = Math.max(1, Math.round(stage.width * dpr));
      canvas.height = Math.max(1, Math.round(stage.height * dpr));
      if (!ready) return;
      fillCrowd();
      paint();
    };

    const tick = (ts: number) => {
      const dt = lastTs == null ? 0.016 : Math.min(0.05, (ts - lastTs) / 1000);
      lastTs = ts;
      if (!reduceMotion) {
        for (const peep of [...crowd]) {
          const walk = peep.walk;
          if (!walk) continue;
          walk.elapsed += dt;
          if (walk.elapsed >= WALK_X_DURATION / walk.timeScale) {
            recycle(peep);
            continue;
          }
          applyWalk(peep, walk);
        }
      }
      paint();
      frame = window.requestAnimationFrame(tick);
    };

    const startLoop = () => {
      if (frame) window.cancelAnimationFrame(frame);
      lastTs = null;
      paint();
      if (reduceMotion) return;
      frame = window.requestAnimationFrame(tick);
    };

    const buildPeeps = () => {
      allPeeps.length = 0;
      const { naturalWidth: width, naturalHeight: height } = sheet;
      const total = rows * cols;
      const rectWidth = width / rows;
      const rectHeight = height / cols;
      for (let i = 0; i < total; i += 1) {
        allPeeps.push(
          createPeep(sheet, [
            (i % rows) * rectWidth,
            ((i / rows) | 0) * rectHeight,
            rectWidth,
            rectHeight,
          ]),
        );
      }
      ready = true;
      resize();
      startLoop();
    };

    const onMedia = () => {
      reduceMotion = media.matches;
      if (ready) {
        fillCrowd();
        startLoop();
      }
    };

    const observer = new ResizeObserver(() => {
      resize();
    });

    sheet.decoding = "async";
    sheet.onload = buildPeeps;
    sheet.src = src;
    observer.observe(canvas);
    media.addEventListener("change", onMedia);
    window.addEventListener("resize", resize);

    return () => {
      observer.disconnect();
      media.removeEventListener("change", onMedia);
      window.removeEventListener("resize", resize);
      if (frame) window.cancelAnimationFrame(frame);
      sheet.onload = null;
    };
  }, [cols, rows, src]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className={cn("absolute bottom-0 h-[90vh] w-full", className)}
      data-slot="crowd-canvas"
      {...props}
    />
  );
}

export function Skiper39({
  className,
  label = DEFAULT_LABEL,
  src = SKIPER39_PEEPS_SRC,
  rows = DEFAULT_ROWS,
  cols = DEFAULT_COLS,
  ...props
}: Skiper39Props) {
  const headingId = useId();

  return (
    <section
      aria-labelledby={headingId}
      className={cn(
        "relative isolate h-full min-h-[100dvh] w-full overflow-hidden bg-background text-foreground",
        className,
      )}
      data-slot="skiper-39"
      {...props}
    >
      <div className="absolute top-22 left-1/2 grid -translate-x-1/2 content-start justify-items-center gap-6 text-center">
        <h1
          className="relative max-w-[12ch] text-xs leading-tight uppercase opacity-40 after:absolute after:top-full after:left-1/2 after:h-16 after:w-px after:bg-gradient-to-b after:from-background after:to-foreground after:content-['']"
          id={headingId}
        >
          {label}
        </h1>
      </div>
      <div className="absolute bottom-0 h-full w-full">
        <CrowdCanvas cols={cols} rows={rows} src={src} />
      </div>
    </section>
  );
}
