"use client";

import { type ReactNode, useEffect, useId, useRef } from "react";
import { cn } from "@/lib/cn";
import type {
  AdmitOneTicketFace,
  AdmitOneTicketProps,
} from "./AdmitOneTicket.types";

const DEFAULT_EYEBROW = "Door pass";
const DEFAULT_HEADING = "A ticket that tilts like paper.";
const DEFAULT_DESCRIPTION =
  "Perforated stub, dithered stock, and a glare that follows the pointer. Still when motion is reduced.";
const DEFAULT_NAME = "Inez Calder";
const DEFAULT_PRESENTER = "Harbor Hall presents";
const DEFAULT_EVENT = "Night Shift Sessions";
const DEFAULT_VENUE = "Pier 9, Oakland";
const DEFAULT_DATES = "Sept 18-19";
const DEFAULT_STUB = "Admit one";
const DEFAULT_WATERMARK = "2026";
const DEFAULT_SERIAL = "HH-1842";
const DEFAULT_TILT = 14;
const DEFAULT_WIDTH = 741;

const STUB_HOLES = 11;

function barcodeBars(seed: string) {
  let n = 2166136261;
  for (let i = 0; i < seed.length; i++) {
    n ^= seed.charCodeAt(i);
    n = Math.imul(n, 16777619);
  }
  return Array.from({ length: 36 }, (_, position) => {
    n = Math.imul(n ^ (n >>> 13), 1274126177);
    return {
      id: `${seed}-${position}-${n >>> 0}`,
      width: 1 + (Math.abs(n) % 3),
    };
  });
}

function TicketCopy({ face }: { face: AdmitOneTicketFace }) {
  const stub = face.stubText ?? DEFAULT_STUB;
  const code = face.serial ?? face.id;

  return (
    <>
      <aside
        className="relative flex w-[4.75rem] shrink-0 flex-col items-center justify-between bg-foreground px-2 py-4 text-background sm:w-24 sm:py-5"
        data-slot="admit-one-ticket-stub"
      >
        <span
          aria-hidden="true"
          className="font-mono text-[10px] tracking-[0.22em] uppercase"
        >
          {code}
        </span>
        <p className="[writing-mode:vertical-rl] rotate-180 text-center text-sm font-semibold tracking-[0.28em] uppercase sm:text-base">
          {stub}
        </p>
        <span
          aria-hidden="true"
          className="font-mono text-[10px] tracking-[0.22em] uppercase"
        >
          {face.watermark ?? DEFAULT_WATERMARK}
        </span>
      </aside>

      <div
        aria-hidden="true"
        className="relative flex w-4 shrink-0 flex-col items-center justify-between self-stretch py-2 sm:w-5"
      >
        <span className="absolute inset-y-0 left-1/2 w-px -translate-x-1/2 border-l border-dashed border-border" />
        {Array.from({ length: STUB_HOLES }, (_, index) => (
          <span
            className="relative z-[1] size-2 rounded-full bg-background ring-1 ring-border sm:size-2.5"
            key={`hole-${face.id}-${index}`}
          />
        ))}
      </div>

      <div className="relative flex min-w-0 flex-1 flex-col justify-between gap-4 px-4 py-4 sm:px-6 sm:py-5">
        {face.watermark ? (
          <span
            aria-hidden="true"
            className="pointer-events-none absolute top-1/2 right-3 -translate-y-1/2 font-mono text-6xl font-semibold tracking-tighter text-foreground/8 select-none sm:text-7xl"
          >
            {face.watermark}
          </span>
        ) : null}

        <div className="relative">
          {face.presenter ? (
            <p className="text-[11px] font-medium tracking-[0.18em] text-muted-foreground uppercase">
              {face.presenter}
            </p>
          ) : null}
          <p className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-balance sm:text-3xl">
            {face.event}
          </p>
        </div>

        <dl className="relative grid gap-3 sm:grid-cols-2">
          <div>
            <dt className="font-mono text-[10px] tracking-[0.16em] text-muted-foreground uppercase">
              Guest
            </dt>
            <dd className="mt-1 text-sm font-medium text-pretty">{face.name}</dd>
          </div>
          {face.venue ? (
            <div>
              <dt className="font-mono text-[10px] tracking-[0.16em] text-muted-foreground uppercase">
                Venue
              </dt>
              <dd className="mt-1 text-sm font-medium text-pretty">
                {face.venue}
              </dd>
            </div>
          ) : null}
          {face.dates ? (
            <div>
              <dt className="font-mono text-[10px] tracking-[0.16em] text-muted-foreground uppercase">
                Dates
              </dt>
              <dd className="mt-1 text-sm font-medium tabular-nums">
                {face.dates}
              </dd>
            </div>
          ) : null}
          <div>
            <dt className="font-mono text-[10px] tracking-[0.16em] text-muted-foreground uppercase">
              Serial
            </dt>
            <dd className="mt-1 font-mono text-sm tracking-[0.12em]">{code}</dd>
          </div>
        </dl>

        <div
          aria-hidden="true"
          className="relative flex h-9 items-end justify-start gap-px"
        >
          {barcodeBars(code).map((bar) => (
            <span
              className="bg-foreground"
              key={bar.id}
              style={{
                width: bar.width,
                height: bar.width > 1 ? "100%" : "68%",
              }}
            />
          ))}
        </div>
      </div>
    </>
  );
}

function TicketStage({
  maxTilt,
  width,
  children,
}: {
  maxTilt: number;
  width: number;
  children: ReactNode;
}) {
  const stageRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLElement>(null);
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
    let intensity = 0.28;
    let last = performance.now();
    const stiffness = 150;
    const damping = 16;

    const apply = () => {
      card.style.setProperty("--admit-x", String(hx));
      card.style.setProperty("--admit-y", String(hy));
      card.style.setProperty("--admit-i", String(intensity));
      card.style.transform = `rotateX(${rx}deg) rotateY(${ry}deg)`;
      shadow.style.transform = `translate3d(${ry * 1.1}px, ${20 - rx * 0.85}px, 0) scale(0.94, 0.2)`;
      shadow.style.opacity = String(0.22 + intensity * 0.26);
    };

    const tick = (now: number) => {
      const dt = Math.min(0.032, (now - last) / 1000);
      last = now;
      const targetX = pointer ? pointer.ny * maxTilt : 0;
      const targetY = pointer ? pointer.nx * maxTilt : 0;
      const restX = reduceMotion ? 0.5 : 0.5 + Math.sin(now / 1600) * 0.06;
      const restY = reduceMotion ? 0.5 : 0.5 + Math.cos(now / 1900) * 0.05;
      const targetHx = pointer ? pointer.nx * 0.5 + 0.5 : restX;
      const targetHy = pointer ? pointer.ny * 0.5 + 0.5 : restY;
      const targetI = pointer && !reduceMotion ? 1 : reduceMotion ? 0.18 : 0.34;

      if (reduceMotion) {
        rx = 0;
        ry = 0;
        vx = 0;
        vy = 0;
        hx = 0.5;
        hy = 0.5;
        intensity = 0.18;
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
      className="relative mx-auto w-full [perspective:1100px]"
      ref={stageRef}
      style={{ maxWidth: width }}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-10 bottom-0 h-14 rounded-[100%] bg-foreground/30 blur-2xl"
        ref={shadowRef}
      />
      <article
        className="jk-admit-one-ticket relative isolate flex min-h-[13.5rem] overflow-hidden rounded-[calc(var(--radius)+0.2rem)] border border-border bg-card text-card-foreground will-change-transform sm:min-h-[15rem]"
        data-slot="admit-one-ticket-face"
        ref={cardRef}
      >
        <div
          aria-hidden="true"
          className="jk-admit-one-ticket-dither pointer-events-none absolute inset-0"
        />
        <div
          aria-hidden="true"
          className="jk-admit-one-ticket-glare pointer-events-none absolute inset-0"
        />
        <div className="relative z-10 flex w-full">{children}</div>
      </article>
    </div>
  );
}

export function AdmitOneTicket({
  className,
  eyebrow = DEFAULT_EYEBROW,
  heading = DEFAULT_HEADING,
  description = DEFAULT_DESCRIPTION,
  name = DEFAULT_NAME,
  presenter = DEFAULT_PRESENTER,
  event = DEFAULT_EVENT,
  venue = DEFAULT_VENUE,
  dates = DEFAULT_DATES,
  stubText = DEFAULT_STUB,
  watermark = DEFAULT_WATERMARK,
  serial = DEFAULT_SERIAL,
  tickets,
  maxTilt = DEFAULT_TILT,
  width = DEFAULT_WIDTH,
  ...props
}: AdmitOneTicketProps) {
  const headingId = useId();
  const faces =
    tickets && tickets.length > 0
      ? tickets
      : [
          {
            id: serial,
            name,
            presenter,
            event,
            venue,
            dates,
            stubText,
            watermark,
            serial,
          },
        ];

  return (
    <section
      aria-labelledby={headingId}
      className={cn("bg-background text-foreground", className)}
      data-slot="admit-one-ticket"
      {...props}
    >
      <style href="jk-admit-one-ticket" precedence="default">{`
        .jk-admit-one-ticket {
          --admit-x: 0.5;
          --admit-y: 0.5;
          --admit-i: 0.3;
          transform-style: preserve-3d;
        }
        .jk-admit-one-ticket-dither {
          background-image:
            radial-gradient(
              color-mix(in oklab, var(--jk-foreground), transparent 62%) 0.65px,
              transparent 0.7px
            );
          background-size: 3px 3px;
          mix-blend-mode: multiply;
          opacity: calc(0.18 + var(--admit-i) * 0.16);
        }
        .dark .jk-admit-one-ticket-dither {
          mix-blend-mode: overlay;
          opacity: calc(0.14 + var(--admit-i) * 0.22);
        }
        .jk-admit-one-ticket-glare {
          background:
            radial-gradient(
              22rem circle at calc(var(--admit-x) * 100%) calc(var(--admit-y) * 100%),
              color-mix(in oklab, var(--jk-primary-foreground), transparent 38%),
              transparent 42%
            ),
            linear-gradient(
              calc(var(--admit-x) * 70deg + 28deg),
              transparent 34%,
              color-mix(in oklab, var(--jk-primary), transparent 78%) 50%,
              transparent 64%
            );
          mix-blend-mode: soft-light;
          opacity: calc(0.22 + var(--admit-i) * 0.48);
        }
        @media (prefers-reduced-motion: reduce) {
          .jk-admit-one-ticket {
            transform: none !important;
          }
          .jk-admit-one-ticket-glare {
            opacity: 0.16;
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
            "grid items-start justify-items-center gap-10",
            faces.length > 1 ? "lg:grid-cols-2" : "grid-cols-1",
          )}
        >
          {faces.map((face) => (
            <TicketStage key={face.id} maxTilt={maxTilt} width={width}>
              <TicketCopy face={face} />
            </TicketStage>
          ))}
        </div>
      </div>
    </section>
  );
}
