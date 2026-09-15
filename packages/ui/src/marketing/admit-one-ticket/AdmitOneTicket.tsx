"use client";

import {
  type CSSProperties,
  type PointerEvent as ReactPointerEvent,
  type ReactNode,
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
  useSyncExternalStore,
} from "react";
import { cn } from "@/lib/cn";
import type {
  AdmitOneTicketFace,
  AdmitOneTicketProps,
} from "./AdmitOneTicket.types";

const REF = 741;
const TICKET_HEIGHT = 425;

const TICKET_GEOMETRY = {
  aspect: REF / TICKET_HEIGHT,
  cornerRadius: 25 / REF,
  notchRadius: 21 / REF,
  perforation: 562 / REF,
} as const;

const TICKET_LAYOUT = {
  padding: 57 / REF,
  labelTop: 58 / REF,
  labelSize: 19.72 / REF,
  labelLead: 28 / REF,
  labelTracking: 0.016,
  nameTop: 185 / REF,
  nameSize: 64.79 / REF,
  nameLead: 65 / REF,
  nameTracking: -0.01,
  footerTop: 348 / REF,
  footerSize: 19.72 / REF,
  footerTracking: 0.016,
  stubSize: 67.61 / REF,
  stubTracking: 0,
  stubOpacity: 0.88,
  watermarkSize: 144 / REF,
  watermarkOpacity: 0.6,
} as const;

const DEFAULT_NAME = "Garry Tan";
const DEFAULT_PRESENTER = "Y Combinator presents";
const DEFAULT_EVENT = "Startup School 2026";
const DEFAULT_VENUE = "Chase Center, SF";
const DEFAULT_DATES = "July 25-26";
const DEFAULT_STUB = "Admit one";
const DEFAULT_WATERMARK = "2026";
const DEFAULT_TILT = 9;
const MOTION_QUERY = "(prefers-reduced-motion: reduce)";

function ticketClipPathObb(
  geometry: typeof TICKET_GEOMETRY = TICKET_GEOMETRY,
) {
  const rX = geometry.cornerRadius;
  const rY = geometry.cornerRadius * geometry.aspect;
  const nX = geometry.notchRadius;
  const nY = geometry.notchRadius * geometry.aspect;
  const p = geometry.perforation;
  return [
    `M ${rX} 0`,
    `L ${p - nX} 0`,
    `A ${nX} ${nY} 0 0 0 ${p + nX} 0`,
    `L ${1 - rX} 0`,
    `A ${rX} ${rY} 0 0 0 1 ${rY}`,
    `L 1 ${1 - rY}`,
    `A ${rX} ${rY} 0 0 0 ${1 - rX} 1`,
    `L ${p + nX} 1`,
    `A ${nX} ${nY} 0 0 0 ${p - nX} 1`,
    `L ${rX} 1`,
    `A ${rX} ${rY} 0 0 0 0 ${1 - rY}`,
    `L 0 ${rY}`,
    `A ${rX} ${rY} 0 0 0 ${rX} 0`,
    "Z",
  ].join(" ");
}

function splitName(name: string, max = 3) {
  const clean = name.trim().replace(/\s+/g, " ").toUpperCase();
  if (!clean) return [];
  const lines: string[] = [];
  for (const word of clean.split(" ")) {
    if (lines.length < max) lines.push(word);
    else lines[lines.length - 1] = `${lines[lines.length - 1]} ${word}`;
  }
  return lines;
}

function fitScale(
  lines: string[],
  opts: {
    availableWidth: number;
    availableHeight: number;
    fontSize: number;
    lineHeight: number;
    tracking: number;
  },
) {
  if (lines.length === 0) return 1;
  const { availableWidth, availableHeight, fontSize, lineHeight, tracking } =
    opts;
  if (fontSize <= 0 || availableWidth <= 0) return 1;
  const longest = Math.max(...lines.map((line) => line.length));
  const charWidth = (0.6 + tracking) * fontSize;
  const block = lines.length * lineHeight;
  return Math.max(
    0.05,
    Math.min(
      1,
      charWidth > 0 ? availableWidth / (longest * charWidth) : 1,
      block > 0 && availableHeight > 0 ? availableHeight / block : 1,
    ),
  );
}

function subscribeMotion(onChange: () => void) {
  const media = window.matchMedia(MOTION_QUERY);
  media.addEventListener("change", onChange);
  return () => media.removeEventListener("change", onChange);
}

function usePrefersReducedMotion() {
  return useSyncExternalStore(
    subscribeMotion,
    () => window.matchMedia(MOTION_QUERY).matches,
    () => false,
  );
}

function TicketCard({
  face,
  width,
  clipId,
}: {
  face: AdmitOneTicketFace;
  width: number;
  clipId: string;
}) {
  const perfX = TICKET_GEOMETRY.perforation * width;
  const lines = splitName(face.name);
  const scale = fitScale(lines, {
    availableWidth: perfX - TICKET_LAYOUT.padding * width - 0.03 * width,
    availableHeight:
      TICKET_LAYOUT.footerTop * width -
      TICKET_LAYOUT.nameTop * width -
      0.02 * width,
    fontSize: TICKET_LAYOUT.nameSize * width,
    lineHeight: TICKET_LAYOUT.nameLead * width,
    tracking: TICKET_LAYOUT.nameTracking,
  });
  const stub = face.stubText ?? DEFAULT_STUB;
  const heading = [face.presenter, face.event].filter(Boolean).join("\n");
  const footer = [face.venue, face.dates].filter(Boolean).join(" \u00b7 ");

  return (
    <article
      aria-label={`${face.event ?? "Event"} ticket for ${face.name}`}
      className="jk-admit-one-ticket-face relative block w-full select-none"
      data-slot="admit-one-ticket-face"
      style={{
        aspectRatio: `${REF} / ${TICKET_HEIGHT}`,
        clipPath: `url(#${clipId})`,
      }}
    >
      <div
        aria-hidden="true"
        className="jk-admit-one-ticket-stock absolute inset-0"
      />
      <div
        aria-hidden="true"
        className="jk-admit-one-ticket-dither pointer-events-none absolute inset-0"
      />
      <div
        aria-hidden="true"
        className="absolute inset-y-0 w-px"
        style={{
          left: `${TICKET_GEOMETRY.perforation * 100}%`,
          width: "max(1px, 0.22cqw)",
          backgroundImage:
            "repeating-linear-gradient(to bottom, color-mix(in oklab, var(--jk-primary) 33%, transparent) 0 1.2cqw, transparent 1.2cqw 2.4cqw)",
        }}
      />
      {face.watermark ? (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-0 grid place-items-center font-bold tabular-nums"
          style={{
            left: `${TICKET_GEOMETRY.perforation * 100}%`,
            width: `${(1 - TICKET_GEOMETRY.perforation) * 100}%`,
            height: "100%",
            color:
              "color-mix(in oklab, var(--jk-warning) 42%, var(--jk-primary-foreground))",
            opacity: TICKET_LAYOUT.watermarkOpacity,
          }}
        >
          <span
            style={{
              fontSize: `${TICKET_LAYOUT.watermarkSize * 100}cqw`,
              letterSpacing: "-0.04em",
              lineHeight: 1,
              writingMode: "vertical-rl",
            }}
          >
            {face.watermark}
          </span>
        </div>
      ) : null}
      <div
        className="absolute inset-0"
        style={{
          color:
            "color-mix(in oklab, var(--jk-primary) 82%, var(--jk-chart-3))",
        }}
      >
        {heading ? (
          <p
            className="absolute whitespace-pre uppercase"
            style={{
              fontSize: `${TICKET_LAYOUT.labelSize * 100}cqw`,
              left: `${TICKET_LAYOUT.padding * 100}%`,
              letterSpacing: `${TICKET_LAYOUT.labelTracking}em`,
              lineHeight: `${TICKET_LAYOUT.labelLead * 100}cqw`,
              top: `${(TICKET_LAYOUT.labelTop * REF) / TICKET_HEIGHT * 100}%`,
            }}
          >
            {heading}
          </p>
        ) : null}
        <p
          className="absolute font-medium"
          style={{
            fontSize: `${TICKET_LAYOUT.nameSize * scale * 100}cqw`,
            left: `${TICKET_LAYOUT.padding * 100}%`,
            letterSpacing: `${TICKET_LAYOUT.nameTracking}em`,
            lineHeight: `${TICKET_LAYOUT.nameLead * scale * 100}cqw`,
            top: `${(TICKET_LAYOUT.nameTop * REF) / TICKET_HEIGHT * 100}%`,
          }}
        >
          {lines.map((line) => (
            <span className="block" key={line}>
              {line}
            </span>
          ))}
        </p>
        {footer ? (
          <p
            className="absolute whitespace-nowrap uppercase"
            style={{
              fontSize: `${TICKET_LAYOUT.footerSize * 100}cqw`,
              left: `${TICKET_LAYOUT.padding * 100}%`,
              letterSpacing: `${TICKET_LAYOUT.footerTracking}em`,
              top: `${(TICKET_LAYOUT.footerTop * REF) / TICKET_HEIGHT * 100}%`,
            }}
          >
            {footer}
          </p>
        ) : null}
        <p
          className="absolute grid place-items-center font-medium whitespace-nowrap uppercase"
          style={{
            fontSize: `${TICKET_LAYOUT.stubSize * 100}cqw`,
            height: "100%",
            left: `${TICKET_GEOMETRY.perforation * 100}%`,
            letterSpacing: `${TICKET_LAYOUT.stubTracking}em`,
            opacity: TICKET_LAYOUT.stubOpacity,
            top: 0,
            width: `${(1 - TICKET_GEOMETRY.perforation) * 100}%`,
          }}
        >
          <span style={{ writingMode: "vertical-rl" }}>{stub}</span>
        </p>
      </div>
    </article>
  );
}

function TiltStage({
  clipPath,
  enabled,
  maxTilt,
  children,
}: {
  clipPath: string;
  enabled: boolean;
  maxTilt: number;
  children: ReactNode;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const glareRef = useRef<HTMLDivElement>(null);
  const [hovering, setHovering] = useState(false);
  const reduceMotion = usePrefersReducedMotion();
  const live = enabled && !reduceMotion;

  const reset = useCallback(() => {
    setHovering(false);
    if (cardRef.current) {
      cardRef.current.style.transform =
        "perspective(1200px) rotateX(0deg) rotateY(0deg) scale(1)";
    }
    if (glareRef.current) glareRef.current.style.background = "transparent";
  }, []);

  const onMove = useCallback(
    (event: ReactPointerEvent<HTMLDivElement>) => {
      const el = cardRef.current;
      if (!el || !live) return;
      const rect = el.getBoundingClientRect();
      const dx = (event.clientX - rect.left) / rect.width - 0.5;
      const dy = (event.clientY - rect.top) / rect.height - 0.5;
      el.style.transform = `perspective(1200px) rotateX(${-(dy * 2) * maxTilt}deg) rotateY(${dx * 2 * maxTilt}deg) scale(1.02)`;
      if (glareRef.current) {
        glareRef.current.style.background = `radial-gradient(38% 55% at ${(dx + 0.5) * 100}% ${(dy + 0.5) * 100}%, color-mix(in oklab, var(--jk-primary-foreground) 16%, transparent) 0%, transparent 70%)`;
      }
    },
    [live, maxTilt],
  );

  useEffect(() => {
    if (!live) reset();
  }, [live, reset]);

  return (
    <div
      className="relative w-full will-change-transform"
      onPointerEnter={() => {
        if (live) setHovering(true);
      }}
      onPointerLeave={reset}
      onPointerMove={onMove}
      ref={cardRef}
      style={{
        transform: "perspective(1200px) rotateX(0deg) rotateY(0deg) scale(1)",
        transformStyle: "preserve-3d",
        transition: hovering
          ? "none"
          : "transform 420ms cubic-bezier(0.22, 1, 0.36, 1)",
      }}
    >
      {children}
      {live ? (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          ref={glareRef}
          style={{
            clipPath,
            transition: hovering ? "none" : "background 420ms ease-out",
          }}
        />
      ) : null}
    </div>
  );
}

export function AdmitOneTicket({
  className,
  heading,
  name = DEFAULT_NAME,
  presenter = DEFAULT_PRESENTER,
  event = DEFAULT_EVENT,
  venue = DEFAULT_VENUE,
  dates = DEFAULT_DATES,
  stubText = DEFAULT_STUB,
  watermark = DEFAULT_WATERMARK,
  tickets,
  width = REF,
  tilt = true,
  maxTilt = DEFAULT_TILT,
  ...props
}: AdmitOneTicketProps) {
  const clipId = useId().replace(/:/g, "");
  const faces =
    tickets && tickets.length > 0
      ? tickets
      : [
          {
            id: "admit-one",
            name,
            presenter,
            event,
            venue,
            dates,
            stubText,
            watermark,
          },
        ];

  return (
    <section
      aria-label={heading ?? `${event} admit-one ticket`}
      className={cn(
        "flex min-h-[640px] w-full items-center justify-center bg-foreground p-8 text-background",
        className,
      )}
      data-slot="admit-one-ticket"
      {...props}
    >
      <style href="jk-admit-one-ticket" precedence="default">{`
        .jk-admit-one-ticket-face {
          container-type: inline-size;
        }
        .jk-admit-one-ticket-stock {
          background:
            radial-gradient(
              120% 120% at 62% 30%,
              color-mix(in oklab, var(--jk-warning) 55%, var(--jk-primary-foreground)) 0%,
              color-mix(in oklab, var(--jk-warning) 88%, var(--jk-chart-3)) 45%,
              color-mix(in oklab, var(--jk-chart-3) 78%, var(--jk-warning)) 100%
            );
        }
        .jk-admit-one-ticket-dither {
          background-image:
            radial-gradient(
              color-mix(in oklab, var(--jk-foreground) 34%, transparent) 0.55px,
              transparent 0.7px
            ),
            radial-gradient(
              color-mix(in oklab, var(--jk-primary-foreground) 28%, transparent) 0.4px,
              transparent 0.65px
            );
          background-position: 0 0, 1.5px 2px;
          background-size: 3px 3px, 5px 4px;
          mix-blend-mode: overlay;
          opacity: 0.42;
        }
        @media (prefers-reduced-motion: no-preference) {
          .jk-admit-one-ticket-dither {
            animation: jk-admit-one-dither 8s linear infinite;
          }
        }
        @keyframes jk-admit-one-dither {
          to {
            background-position: 12px 8px, 13.5px 10px;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .jk-admit-one-ticket-dither {
            animation: none;
          }
        }
      `}</style>
      <svg aria-hidden="true" className="absolute h-0 w-0">
        <clipPath clipPathUnits="objectBoundingBox" id={clipId}>
          <path d={ticketClipPathObb()} />
        </clipPath>
      </svg>
      <div
        className={cn(
          "grid w-full items-center justify-items-center gap-10",
          faces.length > 1 ? "lg:grid-cols-2" : "grid-cols-1",
        )}
      >
        {faces.map((face) => (
          <div
            className="w-full"
            key={face.id}
            style={{ maxWidth: width } as CSSProperties}
          >
            <TiltStage
              clipPath={`url(#${clipId})`}
              enabled={tilt}
              maxTilt={maxTilt}
            >
              <TicketCard clipId={clipId} face={face} width={width} />
            </TiltStage>
          </div>
        ))}
      </div>
    </section>
  );
}
