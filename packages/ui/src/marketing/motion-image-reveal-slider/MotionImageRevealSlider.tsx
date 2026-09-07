"use client";

import { ChevronsLeftRightIcon } from "lucide-react";
import type { CSSProperties } from "react";
import { useEffect, useId, useRef } from "react";
import { cn } from "@/lib/cn";
import type { MotionImageRevealSliderProps } from "./MotionImageRevealSlider.types";

const DEFAULT_EYEBROW = "Reveal";
const DEFAULT_HEADING = "Color waiting under the grain.";
const DEFAULT_DESCRIPTION =
  "Drag the handle to peel grayscale back and show the photograph underneath. Arrow keys work too.";
const DEFAULT_IMAGE_SRC = "/assets/1a2d35c6581e840f.webp";
const DEFAULT_IMAGE_ALT = "Bright open studio with a long communal table";
const DEFAULT_LEFT_LABEL = "Color";
const DEFAULT_RIGHT_LABEL = "Mono";
const DEFAULT_POSITION = 48;
const DEFAULT_STEP = 5;

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

function RevealStage({
  imageSrc,
  imageAlt,
  overlaySrc,
  overlayAlt,
  grayscaleOverlay,
  leftLabel,
  rightLabel,
  initialPosition,
  step,
  labelledBy,
}: {
  imageSrc: string;
  imageAlt: string;
  overlaySrc: string;
  overlayAlt: string;
  grayscaleOverlay: boolean;
  leftLabel: string;
  rightLabel: string;
  initialPosition: number;
  step: number;
  labelledBy: string;
}) {
  const frameRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  const positionRef = useRef(clamp(initialPosition, 0, 100));

  useEffect(() => {
    const frame = frameRef.current;
    const slider = sliderRef.current;
    if (!frame || !slider) return;

    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    let dragging = false;
    let pointerId: number | null = null;

    const apply = (next: number, animate: boolean) => {
      const value = clamp(next, 0, 100);
      positionRef.current = value;
      const reduce = media.matches;
      frame.dataset.animate = animate && !reduce ? "true" : "false";
      frame.style.setProperty("--reveal", (value / 100).toFixed(4));
      slider.setAttribute("aria-valuenow", String(Math.round(value)));
    };

    const fromClientX = (clientX: number) => {
      const rect = frame.getBoundingClientRect();
      if (rect.width <= 0) return positionRef.current;
      return ((clientX - rect.left) / rect.width) * 100;
    };

    const onPointerDown = (event: PointerEvent) => {
      if (event.button !== 0) return;
      dragging = true;
      pointerId = event.pointerId;
      frame.setPointerCapture(event.pointerId);
      apply(fromClientX(event.clientX), false);
      event.preventDefault();
    };

    const onPointerMove = (event: PointerEvent) => {
      if (!dragging || event.pointerId !== pointerId) return;
      apply(fromClientX(event.clientX), false);
    };

    const endDrag = (event: PointerEvent) => {
      if (event.pointerId !== pointerId) return;
      dragging = false;
      pointerId = null;
      if (frame.hasPointerCapture(event.pointerId)) {
        frame.releasePointerCapture(event.pointerId);
      }
    };

    const onKeyDown = (event: KeyboardEvent) => {
      const current = positionRef.current;
      if (event.key === "ArrowLeft" || event.key === "ArrowDown") {
        event.preventDefault();
        apply(current - step, true);
      } else if (event.key === "ArrowRight" || event.key === "ArrowUp") {
        event.preventDefault();
        apply(current + step, true);
      } else if (event.key === "Home") {
        event.preventDefault();
        apply(0, true);
      } else if (event.key === "End") {
        event.preventDefault();
        apply(100, true);
      } else if (event.key === "PageDown") {
        event.preventDefault();
        apply(current - step * 4, true);
      } else if (event.key === "PageUp") {
        event.preventDefault();
        apply(current + step * 4, true);
      }
    };

    apply(clamp(initialPosition, 0, 100), false);
    frame.addEventListener("pointerdown", onPointerDown);
    frame.addEventListener("pointermove", onPointerMove);
    frame.addEventListener("pointerup", endDrag);
    frame.addEventListener("pointercancel", endDrag);
    slider.addEventListener("keydown", onKeyDown);

    return () => {
      frame.removeEventListener("pointerdown", onPointerDown);
      frame.removeEventListener("pointermove", onPointerMove);
      frame.removeEventListener("pointerup", endDrag);
      frame.removeEventListener("pointercancel", endDrag);
      slider.removeEventListener("keydown", onKeyDown);
    };
  }, [initialPosition, step]);

  return (
    <div
      className="jk-mirs-frame relative mx-auto aspect-[16/10] w-full max-w-5xl cursor-ew-resize overflow-hidden rounded-[calc(var(--radius)+0.45rem)] border border-border bg-muted select-none"
      data-animate="false"
      ref={frameRef}
      style={
        {
          "--reveal": String(clamp(initialPosition, 0, 100) / 100),
        } as CSSProperties
      }
    >
      <img
        alt={imageAlt}
        className="absolute inset-0 size-full object-cover"
        draggable={false}
        src={imageSrc}
      />
      <div className="jk-mirs-overlay absolute inset-0">
        <img
          alt={overlayAlt}
          className={cn(
            "absolute inset-0 size-full object-cover",
            grayscaleOverlay && "grayscale",
          )}
          draggable={false}
          src={overlaySrc}
        />
      </div>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 z-10 flex justify-between px-4 py-3 sm:px-5"
      >
        <span className="rounded-full border border-border bg-background/85 px-2.5 py-1 text-[11px] font-medium tracking-[0.14em] text-foreground uppercase backdrop-blur-sm">
          {leftLabel}
        </span>
        <span className="rounded-full border border-border bg-background/85 px-2.5 py-1 text-[11px] font-medium tracking-[0.14em] text-foreground uppercase backdrop-blur-sm">
          {rightLabel}
        </span>
      </div>
      <div
        aria-hidden="true"
        className="jk-mirs-rail pointer-events-none absolute inset-y-0 z-20 w-px bg-background shadow-[0_0_0_1px_color-mix(in_oklab,var(--jk-foreground),transparent_72%)]"
      />
      <div
        aria-labelledby={labelledBy}
        aria-orientation="horizontal"
        aria-valuemax={100}
        aria-valuemin={0}
        aria-valuenow={Math.round(clamp(initialPosition, 0, 100))}
        className="jk-mirs-handle absolute top-1/2 z-30 flex size-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-background text-foreground shadow-[0_16px_32px_-18px_color-mix(in_oklab,var(--jk-foreground),transparent_40%)] outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        ref={sliderRef}
        role="slider"
        tabIndex={0}
      >
        <ChevronsLeftRightIcon aria-hidden="true" className="size-5" />
      </div>
    </div>
  );
}

export function MotionImageRevealSlider({
  className,
  eyebrow = DEFAULT_EYEBROW,
  heading = DEFAULT_HEADING,
  description = DEFAULT_DESCRIPTION,
  imageSrc = DEFAULT_IMAGE_SRC,
  imageAlt = DEFAULT_IMAGE_ALT,
  overlaySrc,
  overlayAlt,
  grayscaleOverlay,
  leftLabel = DEFAULT_LEFT_LABEL,
  rightLabel = DEFAULT_RIGHT_LABEL,
  initialPosition = DEFAULT_POSITION,
  step = DEFAULT_STEP,
  ...props
}: MotionImageRevealSliderProps) {
  const headingId = useId();
  const overlayImageSrc = overlaySrc ?? imageSrc;
  const overlayImageAlt = overlayAlt ?? `${imageAlt}, grayscale`;
  const useGrayscale = grayscaleOverlay ?? overlaySrc == null;

  return (
    <section
      aria-labelledby={headingId}
      className={cn("bg-background text-foreground", className)}
      data-slot="motion-image-reveal-slider"
      {...props}
    >
      <style href="jk-motion-image-reveal-slider" precedence="default">{`
        @property --reveal {
          syntax: "<number>";
          inherits: true;
          initial-value: 0.5;
        }
        .jk-mirs-overlay {
          clip-path: inset(0 0 0 calc(var(--reveal) * 100%));
        }
        .jk-mirs-rail {
          left: calc(var(--reveal) * 100%);
        }
        .jk-mirs-handle {
          left: calc(var(--reveal) * 100%);
        }
        @media (prefers-reduced-motion: no-preference) {
          .jk-mirs-frame[data-animate="true"] .jk-mirs-overlay {
            transition: clip-path 280ms cubic-bezier(0.16, 1, 0.3, 1);
          }
          .jk-mirs-frame[data-animate="true"] .jk-mirs-rail,
          .jk-mirs-frame[data-animate="true"] .jk-mirs-handle {
            transition: left 280ms cubic-bezier(0.16, 1, 0.3, 1);
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
        <RevealStage
          grayscaleOverlay={useGrayscale}
          imageAlt={imageAlt}
          imageSrc={imageSrc}
          initialPosition={initialPosition}
          labelledBy={headingId}
          leftLabel={leftLabel}
          overlayAlt={overlayImageAlt}
          overlaySrc={overlayImageSrc}
          rightLabel={rightLabel}
          step={step}
        />
      </div>
    </section>
  );
}
