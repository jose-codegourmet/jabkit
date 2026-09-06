"use client";

import { type ReactNode, useEffect, useId, useRef } from "react";
import { Badge } from "@/atoms/badge";
import { cn } from "@/lib/cn";
import type { HoloCardFace, HoloCardProps } from "./HoloCard.types";

const DEFAULT_EYEBROW = "Limited foil";
const DEFAULT_HEADING = "A card that tracks the light.";
const DEFAULT_DESCRIPTION =
  "Pointer tilt, rainbow foil, and a shadow that leans with the surface. Quiet when motion is reduced.";
const DEFAULT_BRAND = "Northline";
const DEFAULT_BADGE = "Foil";
const DEFAULT_TITLE = "Holo Card";
const DEFAULT_SUBTITLE = "Move the pointer across the card.";
const DEFAULT_SERIAL = "0001 / 2026";
const DEFAULT_MARK = "northline.studio";
const DEFAULT_TILT = 16;
const DEFAULT_ASPECT = 1.586;

function CardFace({ face }: { face: HoloCardFace }) {
  return (
    <>
      <div className="flex items-start justify-between gap-3">
        <span className="text-[11px] font-medium tracking-[0.18em] text-muted-foreground uppercase">
          {face.brand}
        </span>
        {face.badge ? (
          <Badge variant="outline" className="border-border text-primary">
            {face.badge}
          </Badge>
        ) : null}
      </div>
      <div className="grid place-items-center py-4">
        <span
          aria-hidden="true"
          className="relative grid size-24 place-items-center"
        >
          <span className="absolute inset-0 rounded-full border border-border/80" />
          <span className="absolute inset-3 rounded-full border border-primary/40" />
          <span className="absolute inset-6 rounded-full bg-primary/20" />
          <span className="size-3 rounded-full bg-chart-1" />
        </span>
      </div>
      <div>
        <p className="text-2xl font-semibold tracking-tight text-balance">
          {face.title}
        </p>
        {face.subtitle ? (
          <p className="mt-1 text-sm leading-6 text-muted-foreground">
            {face.subtitle}
          </p>
        ) : null}
      </div>
      <div className="flex items-center justify-between gap-3 text-[11px] text-muted-foreground">
        {face.serial ? (
          <span className="font-mono tracking-widest">{face.serial}</span>
        ) : (
          <span />
        )}
        {face.mark ? <span>{face.mark}</span> : null}
      </div>
    </>
  );
}

function FoilSurface({
  aspect,
  maxTilt,
  children,
}: {
  aspect: number;
  maxTilt: number;
  children: ReactNode;
}) {
  const stageRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const shadowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const stage = stageRef.current;
    const card = cardRef.current;
    const shadow = shadowRef.current;
    if (!stage || !card || !shadow) return;

    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    let reduceMotion = media.matches;
    let frame = 0;
    let pointer: { nx: number; ny: number } | null = null;
    let rx = 0;
    let ry = 0;
    let vx = 0;
    let vy = 0;
    let hx = 0.5;
    let hy = 0.5;
    let intensity = 0;
    let last = performance.now();
    const stiffness = 160;
    const damping = 16;

    const apply = () => {
      card.style.setProperty("--holo-x", String(hx));
      card.style.setProperty("--holo-y", String(hy));
      card.style.setProperty("--holo-i", String(intensity));
      card.style.transform = `rotateX(${rx}deg) rotateY(${ry}deg)`;
      const leanX = ry * 1.15;
      const leanY = 22 - rx * 0.9;
      shadow.style.transform = `translate3d(${leanX}px, ${leanY}px, 0) scale(0.92, 0.22)`;
      shadow.style.opacity = String(0.28 + intensity * 0.28);
    };

    const tick = (now: number) => {
      const dt = Math.min(0.032, (now - last) / 1000);
      last = now;
      const reduced = reduceMotion;
      const restX = reduced ? 0.5 : 0.5 + Math.sin(now / 1400) * 0.08;
      const restY = reduced ? 0.5 : 0.5 + Math.cos(now / 1700) * 0.06;
      const targetX = pointer ? pointer.ny * maxTilt : 0;
      const targetY = pointer ? pointer.nx * maxTilt : 0;
      const targetHx = pointer ? pointer.nx * 0.5 + 0.5 : restX;
      const targetHy = pointer ? pointer.ny * 0.5 + 0.5 : restY;
      const targetI = pointer && !reduced ? 1 : reduced ? 0.22 : 0.38;

      if (reduced) {
        rx = 0;
        ry = 0;
        vx = 0;
        vy = 0;
        hx = 0.5;
        hy = 0.5;
        intensity = 0.22;
      } else {
        const ax = stiffness * (targetX - rx) - damping * vx;
        const ay = stiffness * (targetY - ry) - damping * vy;
        vx += ax * dt;
        vy += ay * dt;
        rx += vx * dt;
        ry += vy * dt;
        hx += (targetHx - hx) * Math.min(1, dt * 10);
        hy += (targetHy - hy) * Math.min(1, dt * 10);
        intensity += (targetI - intensity) * Math.min(1, dt * 8);
      }

      apply();
      frame = window.requestAnimationFrame(tick);
    };

    const local = (event: PointerEvent) => {
      const rect = stage.getBoundingClientRect();
      const nx = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      const ny = ((event.clientY - rect.top) / rect.height) * 2 - 1;
      return {
        nx: Math.max(-1, Math.min(1, nx)),
        ny: Math.max(-1, Math.min(1, ny)),
      };
    };

    const onMove = (event: PointerEvent) => {
      if (reduceMotion) return;
      const point = local(event);
      pointer = { nx: point.nx, ny: -point.ny };
    };
    const onLeave = () => {
      pointer = null;
    };
    const onMotion = () => {
      reduceMotion = media.matches;
      if (reduceMotion) pointer = null;
    };

    frame = window.requestAnimationFrame(tick);
    media.addEventListener("change", onMotion);
    stage.addEventListener("pointermove", onMove);
    stage.addEventListener("pointerleave", onLeave);

    return () => {
      window.cancelAnimationFrame(frame);
      media.removeEventListener("change", onMotion);
      stage.removeEventListener("pointermove", onMove);
      stage.removeEventListener("pointerleave", onLeave);
    };
  }, [maxTilt]);

  return (
    <div
      className="relative mx-auto w-full max-w-[22.5rem] [perspective:1100px]"
      ref={stageRef}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-8 bottom-0 h-16 rounded-[100%] bg-foreground/35 blur-2xl"
        ref={shadowRef}
      />
      <article
        className="jk-holo-card relative isolate flex h-full flex-col justify-between overflow-hidden rounded-[calc(var(--radius)+0.45rem)] border border-border bg-card p-6 text-card-foreground will-change-transform"
        data-slot="holo-card-face"
        ref={cardRef}
        style={{ aspectRatio: String(aspect) }}
      >
        <div
          aria-hidden="true"
          className="jk-holo-card-foil pointer-events-none absolute inset-0"
        />
        <div
          aria-hidden="true"
          className="jk-holo-card-glint pointer-events-none absolute inset-0"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-px rounded-[calc(var(--radius)+0.38rem)] border border-primary/15"
        />
        <div className="relative z-10 flex h-full flex-col justify-between">
          {children}
        </div>
      </article>
    </div>
  );
}

export function HoloCard({
  className,
  eyebrow = DEFAULT_EYEBROW,
  heading = DEFAULT_HEADING,
  description = DEFAULT_DESCRIPTION,
  brand = DEFAULT_BRAND,
  badge = DEFAULT_BADGE,
  title = DEFAULT_TITLE,
  subtitle = DEFAULT_SUBTITLE,
  serial = DEFAULT_SERIAL,
  mark = DEFAULT_MARK,
  cards,
  maxTilt = DEFAULT_TILT,
  aspect = DEFAULT_ASPECT,
  children,
  ...props
}: HoloCardProps) {
  const headingId = useId();
  const faces =
    cards && cards.length > 0
      ? cards
      : [
          {
            id: "featured",
            brand,
            badge,
            title,
            subtitle,
            serial,
            mark,
          },
        ];
  const custom = Boolean(children) && faces.length === 1;

  return (
    <section
      aria-labelledby={headingId}
      className={cn("bg-background text-foreground", className)}
      data-slot="holo-card"
      {...props}
    >
      <style href="jk-holo-card" precedence="default">{`
        .jk-holo-card {
          --holo-x: 0.5;
          --holo-y: 0.5;
          --holo-i: 0.35;
          transform-style: preserve-3d;
        }
        .jk-holo-card-foil {
          background-image:
            repeating-linear-gradient(
              118deg,
              color-mix(in oklab, var(--jk-chart-1), transparent 18%),
              color-mix(in oklab, var(--jk-chart-5), transparent 8%) 12%,
              color-mix(in oklab, var(--jk-chart-2), transparent 12%) 24%,
              color-mix(in oklab, var(--jk-chart-4), transparent 6%) 38%,
              color-mix(in oklab, var(--jk-chart-3), transparent 14%) 52%,
              color-mix(in oklab, var(--jk-chart-1), transparent 18%) 64%
            );
          background-size: 240% 240%;
          background-position: calc(var(--holo-x) * 100%) calc(var(--holo-y) * 100%);
          mix-blend-mode: overlay;
          opacity: calc(0.2 + var(--holo-i) * 0.48);
        }
        .dark .jk-holo-card-foil {
          mix-blend-mode: color-dodge;
          opacity: calc(0.16 + var(--holo-i) * 0.58);
        }
        .jk-holo-card-glint {
          background:
            radial-gradient(
              28rem circle at calc(var(--holo-x) * 100%) calc(var(--holo-y) * 100%),
              color-mix(in oklab, var(--jk-primary-foreground), transparent 42%),
              transparent 38%
            ),
            linear-gradient(
              calc(var(--holo-x) * 80deg + 40deg),
              transparent 30%,
              color-mix(in oklab, var(--jk-primary), transparent 72%) 48%,
              transparent 62%
            );
          mix-blend-mode: soft-light;
          opacity: calc(0.28 + var(--holo-i) * 0.5);
        }
        @media (prefers-reduced-motion: reduce) {
          .jk-holo-card {
            transform: none !important;
          }
          .jk-holo-card-foil,
          .jk-holo-card-glint {
            opacity: 0.22;
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
            faces.length > 1 ? "md:grid-cols-3" : "grid-cols-1",
          )}
        >
          {faces.map((face) => (
            <FoilSurface aspect={aspect} key={face.id} maxTilt={maxTilt}>
              {custom ? children : <CardFace face={face} />}
            </FoilSurface>
          ))}
        </div>
      </div>
    </section>
  );
}
