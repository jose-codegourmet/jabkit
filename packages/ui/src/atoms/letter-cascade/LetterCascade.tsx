"use client";

import * as React from "react";
import { cn } from "@/lib/cn";
import type {
  LetterCascadeProps,
  LetterCascadeStaggerFrom,
} from "./LetterCascade.types";

const REST_FRONT = { rotateX: 0, y: 0, opacity: 1, scale: 1, blur: 0 };
const REST_ECHO = { rotateX: -90, y: 6, opacity: 0, scale: 0.8, blur: 4 };

function staggerUnits(
  index: number,
  count: number,
  from: LetterCascadeStaggerFrom,
) {
  if (count <= 1) return 0;
  if (from === "first") return index;
  if (from === "last") return count - 1 - index;
  if (from === "center") return Math.abs(index - (count - 1) / 2);
  return Math.abs(index - from);
}

function writeFace(
  node: HTMLElement | null,
  pose: {
    rotateX: number;
    y: number;
    opacity: number;
    scale: number;
    blur: number;
  },
) {
  if (!node) return;
  node.style.transform = `translateY(${pose.y}px) rotateX(${pose.rotateX}deg) scale(${pose.scale})`;
  node.style.opacity = String(pose.opacity);
  node.style.filter = pose.blur > 0.02 ? `blur(${pose.blur}px)` : "none";
}

function writeProgress(
  front: HTMLElement | null,
  echo: HTMLElement | null,
  progress: number,
) {
  const t = Math.min(1, Math.max(0, progress));
  writeFace(front, {
    rotateX: 90 * t,
    y: -6 * t,
    opacity: 1 - t,
    scale: 1,
    blur: 4 * t,
  });
  writeFace(echo, {
    rotateX: -90 * (1 - t),
    y: 6 * (1 - t),
    opacity: t,
    scale: 0.8 + 0.2 * t,
    blur: 4 * (1 - t),
  });
}

function prefersReducedMotion() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function LetterCascade({
  text,
  className,
  letterClassName,
  staggerDuration = 0.04,
  staggerFrom = "first",
  stiffness = 220,
  damping = 16,
  triggerOnClick = false,
  onComplete,
  type = "button",
  onClick,
  onPointerEnter,
  ...props
}: LetterCascadeProps) {
  const rootRef = React.useRef<HTMLButtonElement>(null);
  const frameRef = React.useRef(0);
  const blockedRef = React.useRef(false);
  const onCompleteRef = React.useRef(onComplete);
  const letters = Array.from(text);

  React.useEffect(() => {
    onCompleteRef.current = onComplete;
  }, [onComplete]);

  React.useEffect(() => {
    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, []);

  const play = React.useCallback(() => {
    const root = rootRef.current;
    if (!root || blockedRef.current || letters.length === 0) return;

    if (prefersReducedMotion()) {
      onCompleteRef.current?.();
      return;
    }

    const cells = Array.from(
      root.querySelectorAll<HTMLElement>("[data-slot='letter-cascade-cell']"),
    );
    if (cells.length === 0) return;

    blockedRef.current = true;

    const springs = cells.map((cell, index) => ({
      front: cell.querySelector<HTMLElement>("[data-face='front']"),
      echo: cell.querySelector<HTMLElement>("[data-face='echo']"),
      delay: staggerUnits(index, cells.length, staggerFrom) * staggerDuration,
      value: 0,
      velocity: 0,
    }));

    const startedAt = performance.now();
    let lastTime: number | undefined;

    const tick = (now: number) => {
      const elapsed = (now - startedAt) / 1000;
      const dt =
        lastTime == null
          ? 1 / 60
          : Math.min(1 / 30, Math.max(1 / 120, (now - lastTime) / 1000));
      lastTime = now;

      let allSettled = true;

      for (const spring of springs) {
        if (elapsed < spring.delay) {
          allSettled = false;
          continue;
        }
        const force =
          -stiffness * (spring.value - 1) - damping * spring.velocity;
        spring.velocity += force * dt;
        spring.value += spring.velocity * dt;

        if (
          Math.abs(spring.value - 1) < 0.004 &&
          Math.abs(spring.velocity) < 0.04
        ) {
          spring.value = 1;
          spring.velocity = 0;
        } else {
          allSettled = false;
        }

        writeProgress(spring.front, spring.echo, spring.value);
      }

      if (!allSettled) {
        frameRef.current = requestAnimationFrame(tick);
        return;
      }

      for (const spring of springs) {
        writeFace(spring.front, REST_FRONT);
        writeFace(spring.echo, REST_ECHO);
      }
      blockedRef.current = false;
      onCompleteRef.current?.();
    };

    frameRef.current = requestAnimationFrame(tick);
  }, [damping, letters.length, staggerDuration, staggerFrom, stiffness]);

  return (
    <button
      aria-label={text}
      className={cn(
        "jk-letter-cascade inline-flex cursor-pointer items-center justify-center border-0 bg-transparent p-0 font-inherit text-foreground select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        className,
      )}
      data-slot="letter-cascade"
      ref={rootRef}
      type={type}
      {...props}
      onClick={(event) => {
        onClick?.(event);
        if (triggerOnClick && !event.defaultPrevented) play();
      }}
      onPointerEnter={(event) => {
        onPointerEnter?.(event);
        if (!triggerOnClick) play();
      }}
    >
      <style href="jk-letter-cascade" precedence="default">{`
        .jk-letter-cascade-cell {
          perspective: 500px;
          transform-style: preserve-3d;
        }
        .jk-letter-cascade-face {
          backface-visibility: hidden;
          will-change: transform, opacity, filter;
        }
        .jk-letter-cascade-front {
          transform-origin: bottom center;
        }
        .jk-letter-cascade-echo {
          transform-origin: top center;
          transform: translateY(6px) rotateX(-90deg) scale(0.8);
          opacity: 0;
          filter: blur(4px);
        }
        @media (prefers-reduced-motion: reduce) {
          .jk-letter-cascade-face {
            transform: none !important;
            filter: none !important;
            opacity: 1 !important;
          }
          .jk-letter-cascade-echo {
            display: none;
          }
        }
      `}</style>
      <span aria-hidden="true" className="inline-flex items-center">
        {letters.map((letter, index) => (
          <span
            className="jk-letter-cascade-cell relative inline-flex whitespace-pre"
            data-slot="letter-cascade-cell"
            // Glyph order is the animation sequence; duplicate characters are expected.
            // biome-ignore lint/suspicious/noArrayIndexKey: stable flap cells
            key={`${letter}-${index}`}
          >
            <span
              className={cn(
                "jk-letter-cascade-face jk-letter-cascade-front inline-block",
                letterClassName,
              )}
              data-face="front"
            >
              {letter}
            </span>
            <span
              className={cn(
                "jk-letter-cascade-face jk-letter-cascade-echo absolute inset-0 inline-block",
                letterClassName,
              )}
              data-face="echo"
            >
              {letter}
            </span>
          </span>
        ))}
      </span>
    </button>
  );
}
