"use client";

import { useEffect, useId, useRef } from "react";
import { cn } from "@/lib/cn";
import type { TiltedCardItem, TiltedCardProps } from "./TiltedCard.types";

const DEFAULT_EYEBROW = "Press kit";
const DEFAULT_HEADING = "A sleeve that follows your hand.";
const DEFAULT_DESCRIPTION =
  "Pointer tilt, hover lift, and a caption that tags along. Still when motion is reduced.";
const DEFAULT_IMAGE_SRC = "/assets/462a1be29787cd8e.webp";
const DEFAULT_IMAGE_ALT = "Low oak lounge chair on a pale floor";
const DEFAULT_CAPTION = "Field Notes / Northline";
const DEFAULT_OVERLAY_TITLE = "Field Notes";
const DEFAULT_OVERLAY_SUBTITLE = "Northline, 2026";
const DEFAULT_ROTATE = 14;
const DEFAULT_SCALE = 1.07;

function TiltStage({
  item,
  rotateAmplitude,
  scaleOnHover,
  showCaption,
  displayOverlay,
  compact,
}: {
  item: TiltedCardItem;
  rotateAmplitude: number;
  scaleOnHover: number;
  showCaption: boolean;
  displayOverlay: boolean;
  compact?: boolean;
}) {
  const stageRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLElement>(null);
  const captionRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const stage = stageRef.current;
    const card = cardRef.current;
    const caption = captionRef.current;
    if (!stage || !card) return;

    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    let reduceMotion = media.matches;
    let frame = 0;
    let pointer: { nx: number; ny: number; px: number; py: number } | null =
      null;
    let hovered = false;
    let rx = 0;
    let ry = 0;
    let scale = 1;
    let vx = 0;
    let vy = 0;
    let vs = 0;
    let hx = 0.5;
    let hy = 0.5;
    let capX = 0.5;
    let capY = 0.5;
    let last = performance.now();
    const stiffness = 180;
    const damping = 18;

    const apply = () => {
      card.style.setProperty("--tilt-x", String(hx));
      card.style.setProperty("--tilt-y", String(hy));
      card.style.transform = `rotateX(${rx}deg) rotateY(${ry}deg) scale(${scale})`;
      if (caption) {
        caption.style.setProperty("--cap-x", String(capX));
        caption.style.setProperty("--cap-y", String(capY));
        caption.dataset.visible =
          hovered && !reduceMotion && showCaption ? "true" : "false";
      }
    };

    const tick = (now: number) => {
      const dt = Math.min(0.032, (now - last) / 1000);
      last = now;
      const reduced = reduceMotion;
      const targetX = pointer ? pointer.ny * rotateAmplitude : 0;
      const targetY = pointer ? pointer.nx * rotateAmplitude : 0;
      const targetScale = hovered && !reduced ? scaleOnHover : 1;
      const targetHx = pointer ? pointer.nx * 0.5 + 0.5 : 0.5;
      const targetHy = pointer ? pointer.ny * 0.5 + 0.5 : 0.5;
      const targetCapX = pointer ? pointer.px : 0.5;
      const targetCapY = pointer ? pointer.py : 0.5;

      if (reduced) {
        rx = 0;
        ry = 0;
        scale = 1;
        vx = 0;
        vy = 0;
        vs = 0;
        hx = 0.5;
        hy = 0.5;
        capX = 0.5;
        capY = 0.5;
      } else {
        const ax = stiffness * (targetX - rx) - damping * vx;
        const ay = stiffness * (targetY - ry) - damping * vy;
        const as = stiffness * (targetScale - scale) - damping * vs;
        vx += ax * dt;
        vy += ay * dt;
        vs += as * dt;
        rx += vx * dt;
        ry += vy * dt;
        scale += vs * dt;
        hx += (targetHx - hx) * Math.min(1, dt * 10);
        hy += (targetHy - hy) * Math.min(1, dt * 10);
        capX += (targetCapX - capX) * Math.min(1, dt * 14);
        capY += (targetCapY - capY) * Math.min(1, dt * 14);
      }

      apply();
      frame = window.requestAnimationFrame(tick);
    };

    const local = (event: PointerEvent) => {
      const rect = stage.getBoundingClientRect();
      const px = (event.clientX - rect.left) / Math.max(1, rect.width);
      const py = (event.clientY - rect.top) / Math.max(1, rect.height);
      return {
        nx: Math.max(-1, Math.min(1, px * 2 - 1)),
        ny: Math.max(-1, Math.min(1, -(py * 2 - 1))),
        px: Math.max(0, Math.min(1, px)),
        py: Math.max(0, Math.min(1, py)),
      };
    };

    const onMove = (event: PointerEvent) => {
      if (reduceMotion) return;
      hovered = true;
      pointer = local(event);
    };
    const onEnter = (event: PointerEvent) => {
      if (reduceMotion) return;
      hovered = true;
      pointer = local(event);
    };
    const onLeave = () => {
      hovered = false;
      pointer = null;
    };
    const onMotion = () => {
      reduceMotion = media.matches;
      if (reduceMotion) {
        hovered = false;
        pointer = null;
      }
    };

    frame = window.requestAnimationFrame(tick);
    media.addEventListener("change", onMotion);
    stage.addEventListener("pointermove", onMove);
    stage.addEventListener("pointerenter", onEnter);
    stage.addEventListener("pointerleave", onLeave);

    return () => {
      window.cancelAnimationFrame(frame);
      media.removeEventListener("change", onMotion);
      stage.removeEventListener("pointermove", onMove);
      stage.removeEventListener("pointerenter", onEnter);
      stage.removeEventListener("pointerleave", onLeave);
    };
  }, [rotateAmplitude, scaleOnHover, showCaption]);

  return (
    <div
      className={cn(
        "jk-tilted-card-stage relative mx-auto w-full [perspective:1100px]",
        compact ? "max-w-[16.5rem]" : "max-w-[20rem]",
      )}
      ref={stageRef}
    >
      <figure
        className="jk-tilted-card-face relative isolate aspect-[3/4] w-full overflow-hidden rounded-[calc(var(--radius)+0.4rem)] border border-border bg-card text-card-foreground will-change-transform"
        data-slot="tilted-card-face"
        ref={cardRef}
      >
        <img
          alt={item.imageAlt}
          className="absolute inset-0 size-full object-cover"
          src={item.imageSrc}
        />
        {displayOverlay && (item.overlayTitle || item.overlaySubtitle) ? (
          <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-background/90 via-background/40 to-transparent px-5 pb-5 pt-16">
            {item.overlayTitle ? (
              <p className="text-lg font-semibold tracking-tight text-balance">
                {item.overlayTitle}
              </p>
            ) : null}
            {item.overlaySubtitle ? (
              <p className="mt-0.5 text-sm text-muted-foreground">
                {item.overlaySubtitle}
              </p>
            ) : null}
          </div>
        ) : null}
        <div
          aria-hidden="true"
          className="jk-tilted-card-glare pointer-events-none absolute inset-0"
        />
      </figure>
      {showCaption && item.caption ? (
        <p
          className="jk-tilted-card-caption pointer-events-none absolute z-20 rounded-[--radius] border border-border bg-card px-2.5 py-1 text-xs font-medium text-card-foreground shadow-sm"
          data-visible="false"
          ref={captionRef}
        >
          {item.caption}
        </p>
      ) : null}
    </div>
  );
}

export function TiltedCard({
  className,
  eyebrow = DEFAULT_EYEBROW,
  heading = DEFAULT_HEADING,
  description = DEFAULT_DESCRIPTION,
  imageSrc = DEFAULT_IMAGE_SRC,
  imageAlt = DEFAULT_IMAGE_ALT,
  caption = DEFAULT_CAPTION,
  overlayTitle = DEFAULT_OVERLAY_TITLE,
  overlaySubtitle = DEFAULT_OVERLAY_SUBTITLE,
  cards,
  rotateAmplitude = DEFAULT_ROTATE,
  scaleOnHover = DEFAULT_SCALE,
  showCaption = true,
  displayOverlay = true,
  ...props
}: TiltedCardProps) {
  const headingId = useId();
  const faces: TiltedCardItem[] =
    cards && cards.length > 0
      ? cards
      : [
          {
            id: "featured",
            imageSrc,
            imageAlt,
            caption,
            overlayTitle,
            overlaySubtitle,
          },
        ];
  const compact = faces.length > 1;

  return (
    <section
      aria-labelledby={headingId}
      className={cn("bg-background text-foreground", className)}
      data-slot="tilted-card"
      {...props}
    >
      <style href="jk-tilted-card" precedence="default">{`
        .jk-tilted-card-face {
          --tilt-x: 0.5;
          --tilt-y: 0.5;
          transform-style: preserve-3d;
        }
        .jk-tilted-card-glare {
          background:
            radial-gradient(
              22rem circle at calc(var(--tilt-x) * 100%) calc(var(--tilt-y) * 100%),
              color-mix(in oklab, var(--jk-primary-foreground), transparent 55%),
              transparent 42%
            );
          mix-blend-mode: soft-light;
          opacity: 0.55;
        }
        .jk-tilted-card-caption {
          left: calc(var(--cap-x, 0.5) * 100%);
          top: calc(var(--cap-y, 0.5) * 100%);
          transform: translate(-50%, calc(-100% - 0.75rem));
          opacity: 0;
        }
        .jk-tilted-card-caption[data-visible="true"] {
          opacity: 1;
        }
        .jk-tilted-card-stage {
          padding-block: 1.75rem;
        }
        @media (prefers-reduced-motion: reduce) {
          .jk-tilted-card-face {
            transform: none !important;
          }
          .jk-tilted-card-glare {
            opacity: 0.18;
            background: linear-gradient(
              180deg,
              color-mix(in oklab, var(--jk-primary-foreground), transparent 82%),
              transparent 55%
            );
          }
          .jk-tilted-card-caption {
            position: static;
            display: block;
            width: max-content;
            max-width: 100%;
            margin: 0.75rem auto 0;
            transform: none;
            opacity: 1;
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
        <div
          className={cn(
            "grid items-start justify-items-center gap-10 sm:gap-8",
            compact ? "md:grid-cols-3" : "grid-cols-1",
          )}
        >
          {faces.map((face) => (
            <TiltStage
              compact={compact}
              displayOverlay={displayOverlay}
              item={face}
              key={face.id}
              rotateAmplitude={rotateAmplitude}
              scaleOnHover={scaleOnHover}
              showCaption={showCaption}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
