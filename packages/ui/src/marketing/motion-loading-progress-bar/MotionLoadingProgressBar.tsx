"use client";

import { useEffect, useId, useRef } from "react";
import { cn } from "@/lib/cn";
import type { MotionLoadingProgressBarProps } from "./MotionLoadingProgressBar.types";

const DEFAULT_EYEBROW = "Loading";
const DEFAULT_HEADING = "Progress that settles, not snaps.";
const DEFAULT_DESCRIPTION =
  "Discrete jumps feed a spring so the bar eases into each waypoint. Quiet and still when motion is reduced.";
const DEFAULT_STATUS = "Assembling the drop";
const DEFAULT_COMPLETE = "Ready to ship";
const DEFAULT_STIFFNESS = 140;
const DEFAULT_DAMPING = 22;
const DEFAULT_JUMP_MS = 520;
const DEFAULT_HOLD_MS = 1100;
const DEFAULT_REDUCED = 72;
const JUMPS = [0.14, 0.11, 0.19, 0.08, 0.16, 0.12, 0.2];

function clamp01(value: number) {
  return Math.min(1, Math.max(0, value));
}

function toUnit(value: number | undefined, fallback: number) {
  if (value == null || Number.isNaN(value)) return fallback;
  return clamp01(value > 1 ? value / 100 : value);
}

function ProgressMeter({
  labelledBy,
  status,
  completeStatus,
  progress,
  reducedProgress,
  autoPlay,
  loop,
  stiffness,
  damping,
  jumpMs,
  holdMs,
}: {
  labelledBy: string;
  status: string;
  completeStatus: string;
  progress: number;
  reducedProgress: number;
  autoPlay: boolean;
  loop: boolean;
  stiffness: number;
  damping: number;
  jumpMs: number;
  holdMs: number;
}) {
  const barRef = useRef<HTMLDivElement>(null);
  const valueRef = useRef<HTMLSpanElement>(null);
  const statusRef = useRef<HTMLParagraphElement>(null);
  const meterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const bar = barRef.current;
    const valueNode = valueRef.current;
    const statusNode = statusRef.current;
    const meter = meterRef.current;
    if (!bar || !valueNode || !statusNode || !meter) return;

    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const start = autoPlay ? 0 : progress;
    let target = media.matches ? reducedProgress : start;
    let current = target;
    let velocity = 0;
    let last = performance.now();
    let frame = 0;
    let jumpTimer = 0;
    let jumpIndex = 0;
    let holding = false;

    const paint = () => {
      const unit = clamp01(current);
      bar.style.transform = `scaleX(${unit})`;
      const percent = Math.round(unit * 100);
      valueNode.textContent = `${percent}%`;
      meter.setAttribute("aria-valuenow", String(percent));
      const done = percent >= 100;
      statusNode.textContent = done ? completeStatus : status;
      meter.setAttribute(
        "aria-valuetext",
        `${percent} percent, ${statusNode.textContent}`,
      );
    };

    const scheduleJump = (delay: number) => {
      window.clearTimeout(jumpTimer);
      if (!autoPlay || media.matches) return;
      jumpTimer = window.setTimeout(advance, delay);
    };

    const advance = () => {
      if (media.matches || !autoPlay) return;
      if (holding) {
        if (!loop) return;
        holding = false;
        jumpIndex = 0;
        target = 0;
        current = 0;
        velocity = 0;
        paint();
        scheduleJump(jumpMs);
        return;
      }
      const next = clamp01(target + (JUMPS[jumpIndex % JUMPS.length] ?? 0.12));
      jumpIndex += 1;
      if (next >= 1) {
        target = 1;
        if (!loop) return;
        holding = true;
        scheduleJump(holdMs);
        return;
      }
      target = next;
      scheduleJump(jumpMs);
    };

    const tick = (now: number) => {
      const dt = Math.min(0.032, (now - last) / 1000);
      last = now;
      if (media.matches) {
        current = reducedProgress;
        velocity = 0;
        target = reducedProgress;
      } else {
        const pull = stiffness * (target - current) - damping * velocity;
        velocity += pull * dt;
        current += velocity * dt;
        if (Math.abs(target - current) < 0.0008 && Math.abs(velocity) < 0.0008) {
          current = target;
          velocity = 0;
        }
      }
      paint();
      frame = window.requestAnimationFrame(tick);
    };

    const onMotion = () => {
      if (media.matches) {
        window.clearTimeout(jumpTimer);
        target = reducedProgress;
        current = reducedProgress;
        velocity = 0;
        holding = false;
        paint();
        return;
      }
      if (autoPlay) {
        target = 0;
        current = 0;
        velocity = 0;
        jumpIndex = 0;
        holding = false;
        scheduleJump(jumpMs);
      } else {
        target = progress;
      }
    };

    paint();
    frame = window.requestAnimationFrame(tick);
    if (autoPlay && !media.matches) scheduleJump(jumpMs);
    media.addEventListener("change", onMotion);

    return () => {
      window.cancelAnimationFrame(frame);
      window.clearTimeout(jumpTimer);
      media.removeEventListener("change", onMotion);
    };
  }, [
    autoPlay,
    completeStatus,
    damping,
    holdMs,
    jumpMs,
    loop,
    progress,
    reducedProgress,
    status,
    stiffness,
  ]);

  const initial = autoPlay ? 0 : progress;
  const percent = Math.round(initial * 100);

  return (
    <div className="mx-auto w-full max-w-md">
      <div className="mb-4 flex items-end justify-between gap-4">
        <p
          className="text-sm font-medium tracking-tight text-foreground"
          ref={statusRef}
        >
          {status}
        </p>
        <span
          className="font-mono text-sm tabular-nums text-muted-foreground"
          ref={valueRef}
        >
          {percent}%
        </span>
      </div>
      <div className="rounded-full border border-border bg-card p-2.5 shadow-[0_18px_40px_-28px_color-mix(in_oklab,var(--jk-foreground),transparent_55%)]">
        <div
          aria-labelledby={labelledBy}
          aria-valuemax={100}
          aria-valuemin={0}
          aria-valuenow={percent}
          className="h-2.5 w-full overflow-hidden rounded-full bg-muted"
          ref={meterRef}
          role="progressbar"
        >
          <div
            className="jk-mlpb-bar h-full w-full origin-left rounded-full bg-primary"
            ref={barRef}
          />
        </div>
      </div>
    </div>
  );
}

export function MotionLoadingProgressBar({
  className,
  eyebrow = DEFAULT_EYEBROW,
  heading = DEFAULT_HEADING,
  description = DEFAULT_DESCRIPTION,
  status = DEFAULT_STATUS,
  completeStatus = DEFAULT_COMPLETE,
  progress,
  reducedProgress,
  autoPlay = true,
  loop = true,
  stiffness = DEFAULT_STIFFNESS,
  damping = DEFAULT_DAMPING,
  jumpMs = DEFAULT_JUMP_MS,
  holdMs = DEFAULT_HOLD_MS,
  ...props
}: MotionLoadingProgressBarProps) {
  const headingId = useId();
  const unitProgress = toUnit(progress, 0);
  const unitReduced = toUnit(reducedProgress, DEFAULT_REDUCED / 100);

  return (
    <section
      aria-labelledby={headingId}
      className={cn("bg-background text-foreground", className)}
      data-slot="motion-loading-progress-bar"
      {...props}
    >
      <style href="jk-motion-loading-progress-bar" precedence="default">{`
        .jk-mlpb-bar {
          transform: scaleX(0);
          transform-origin: 0% 50%;
          will-change: transform;
        }
        @media (prefers-reduced-motion: reduce) {
          .jk-mlpb-bar {
            will-change: auto;
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
        <ProgressMeter
          autoPlay={autoPlay}
          completeStatus={completeStatus}
          damping={damping}
          holdMs={holdMs}
          jumpMs={jumpMs}
          labelledBy={headingId}
          loop={loop}
          progress={unitProgress}
          reducedProgress={unitReduced}
          status={status}
          stiffness={stiffness}
        />
      </div>
    </section>
  );
}
