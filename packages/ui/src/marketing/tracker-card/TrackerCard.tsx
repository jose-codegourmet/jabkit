"use client";

import { CheckCircle2Icon, QrCodeIcon } from "lucide-react";
import { type CSSProperties, type ReactNode, useId } from "react";
import { cn } from "@/lib/cn";
import { trackerCardMocks } from "./TrackerCard.mocks";
import type {
  TrackerCardFlagMark,
  TrackerCardProps,
} from "./TrackerCard.types";

function scanCells(seed: string) {
  const size = 21;
  let n = 2166136261;
  for (let i = 0; i < seed.length; i++) {
    n ^= seed.charCodeAt(i);
    n = Math.imul(n, 16777619);
  }
  return Array.from({ length: size * size }, (_, position) => {
    n = Math.imul(n ^ (n >>> 13), 1274126177);
    const row = Math.floor(position / size);
    const col = position % size;
    const finderOrigin =
      row < 7 && col < 7
        ? ([0, 0] as const)
        : row < 7 && col > 13
          ? ([0, 14] as const)
          : row > 13 && col < 7
            ? ([14, 0] as const)
            : null;
    const on = finderOrigin
      ? (() => {
          const localRow = row - finderOrigin[0];
          const localCol = col - finderOrigin[1];
          const ring =
            localRow === 0 ||
            localRow === 6 ||
            localCol === 0 ||
            localCol === 6;
          const eye = localRow >= 2 && localRow <= 4 && localCol >= 2 && localCol <= 4;
          return ring || eye;
        })()
      : (n & 1) === 1;
    return {
      id: `${seed}-${position}-${n >>> 0}`,
      on,
    };
  });
}

function DestinationFlag({ mark }: { mark: TrackerCardFlagMark }) {
  if (mark === "JP") {
    return (
      <svg
        aria-hidden="true"
        className="h-4 w-6 rounded-sm border border-border"
        viewBox="0 0 6 4"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect fill="var(--jk-card)" height="4" width="6" />
        <circle cx="3" cy="2" fill="var(--jk-destructive)" r="1.15" />
      </svg>
    );
  }

  return (
    <svg
      aria-hidden="true"
      className="h-4 w-6 rounded-sm border border-border"
      viewBox="0 0 5 3"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect fill="var(--jk-card)" height="3" width="5" />
      <rect fill="var(--jk-destructive)" height="1.5" width="5" y="1.5" />
    </svg>
  );
}

function ParcelFigure() {
  return (
    <div
      aria-hidden="true"
      className="relative h-[11.5rem] w-[11.5rem] drop-shadow-[0_18px_22px_color-mix(in_oklab,var(--jk-foreground),transparent_72%)]"
    >
      <span className="absolute top-[2.4rem] left-[1.35rem] h-[6.4rem] w-[8.6rem] rounded-[0.35rem] bg-warning" />
      <span className="absolute top-[1.55rem] left-[1.95rem] h-[2.1rem] w-[7.4rem] rounded-t-[0.35rem] bg-[color-mix(in_oklab,var(--jk-warning),var(--jk-foreground)_18%)]" />
      <span className="absolute top-[2.35rem] left-[5.4rem] h-[6.45rem] w-[0.42rem] bg-[color-mix(in_oklab,var(--jk-warning),var(--jk-foreground)_28%)]" />
      <span className="absolute top-[3.15rem] left-[2.55rem] flex h-[3.4rem] w-[5.1rem] items-center justify-center rounded-[0.28rem] bg-card shadow-[0_1px_0_color-mix(in_oklab,var(--jk-foreground),transparent_86%)]">
        <span className="h-2 w-8 rounded-[1px] bg-foreground/70" />
      </span>
    </div>
  );
}

function riseStyle(order: number): CSSProperties {
  return { animationDelay: `${order * 100}ms` };
}

function TrackControl({
  href,
  label,
  onClick,
}: {
  href?: string;
  label: string;
  onClick?: () => void;
}) {
  const className =
    "flex w-full items-center justify-center gap-2 rounded-full bg-muted/50 px-4 py-2 text-sm text-muted-foreground transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-card";

  const body = (
    <>
      <CheckCircle2Icon aria-hidden="true" className="size-4 text-success" />
      {label}
    </>
  );

  if (href) {
    return (
      <a className={className} href={href} onClick={onClick}>
        {body}
      </a>
    );
  }

  return (
    <button className={className} onClick={onClick} type="button">
      {body}
    </button>
  );
}

export function TrackerCard({
  className,
  status = trackerCardMocks.default.status,
  packageNumber = trackerCardMocks.default.packageNumber,
  packageNumberLabel = trackerCardMocks.default.packageNumberLabel,
  destination = trackerCardMocks.default.destination,
  destinationFlag,
  flagMark = trackerCardMocks.default.flagMark,
  date = trackerCardMocks.default.date,
  qrCodeValue = trackerCardMocks.default.qrCodeValue,
  qrCodeImageSrc,
  qrCodeImageAlt = "Package tracking code",
  packageImage,
  packageImageSrc,
  packageImageAlt = "Parcel on the conveyor",
  trackLabel = trackerCardMocks.default.trackLabel,
  trackHref = trackerCardMocks.default.trackHref,
  onTrackClick,
  ...props
}: TrackerCardProps) {
  const headingId = useId();
  const code = qrCodeValue || packageNumber || "TRACK";
  const cells = scanCells(code);
  const flag: ReactNode = destinationFlag ?? (
    <DestinationFlag mark={flagMark ?? "PL"} />
  );
  const parcel: ReactNode = packageImage ??
    (packageImageSrc ? (
      <img
        alt={packageImageAlt}
        className="h-48 w-auto object-contain drop-shadow-lg"
        height={200}
        src={packageImageSrc}
        width={200}
      />
    ) : (
      <ParcelFigure />
    ));

  return (
    <section
      aria-labelledby={headingId}
      className={cn(
        "flex min-h-[100dvh] w-full items-center justify-center bg-background p-4 text-foreground",
        className,
      )}
      data-slot="tracker-card"
      {...props}
    >
      <style href="jk-tracker-card" precedence="default">{`
        @keyframes jk-tracker-card-rise {
          from { opacity: 0; transform: translateY(1.875rem); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes jk-tracker-card-item {
          from { opacity: 0; transform: translateY(1.25rem); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes jk-tracker-card-conveyor {
          from { background-position: 0 0; }
          to { background-position: 80px 80px; }
        }
        .jk-tracker-card-rise {
          animation: jk-tracker-card-rise 620ms cubic-bezier(0.22, 1, 0.36, 1) both;
        }
        .jk-tracker-card-item {
          animation: jk-tracker-card-item 480ms cubic-bezier(0.22, 1, 0.36, 1) both;
        }
        .jk-tracker-card-conveyor {
          animation: jk-tracker-card-conveyor 8s linear infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .jk-tracker-card-rise,
          .jk-tracker-card-item,
          .jk-tracker-card-conveyor {
            animation: none;
          }
        }
      `}</style>

      <article className="jk-tracker-card-rise w-full max-w-sm overflow-hidden rounded-3xl border border-border bg-card text-card-foreground shadow-lg">
        <div className="jk-tracker-card-item p-4" style={riseStyle(0)}>
          <TrackControl
            href={trackHref}
            label={trackLabel ?? "Show full tracking"}
            onClick={onTrackClick}
          />
        </div>

        <div className="jk-tracker-card-item" style={riseStyle(1)}>
          <div className="relative flex h-48 w-full items-center justify-center overflow-hidden">
            <div
              aria-hidden="true"
              className="jk-tracker-card-conveyor absolute inset-0 z-0 h-full w-full bg-[size:80px_80px] bg-muted/30"
              style={{
                backgroundImage: `
                  repeating-linear-gradient(45deg, transparent, transparent 25px, color-mix(in oklab, var(--jk-muted) 80%, transparent) 25px, color-mix(in oklab, var(--jk-muted) 80%, transparent) 50px),
                  repeating-linear-gradient(-45deg, transparent, transparent 25px, color-mix(in oklab, var(--jk-muted) 80%, transparent) 25px, color-mix(in oklab, var(--jk-muted) 80%, transparent) 50px)
                `,
              }}
            />
            <div className="relative z-10">{parcel}</div>
          </div>
        </div>

        <div className="p-6">
          <div
            className="jk-tracker-card-item flex items-center gap-2"
            style={riseStyle(2)}
          >
            {flag}
            <span className="text-sm font-medium text-muted-foreground">
              {destination}
            </span>
          </div>

          <h2
            className="jk-tracker-card-item mt-2 text-3xl font-bold tracking-tight"
            id={headingId}
            style={riseStyle(3)}
          >
            {status}
          </h2>

          <div className="mt-6 flex items-end justify-between gap-4">
            <div
              className="jk-tracker-card-item space-y-1"
              style={riseStyle(4)}
            >
              <p className="text-xs text-muted-foreground">
                {packageNumberLabel}
              </p>
              <p className="font-mono text-sm">{packageNumber}</p>
              <p className="text-xs text-muted-foreground">{date}</p>
            </div>

            <div
              className="jk-tracker-card-item rounded-lg border border-border p-1"
              style={riseStyle(5)}
            >
              {qrCodeImageSrc ? (
                <img
                  alt={qrCodeImageAlt}
                  className="size-16"
                  height={64}
                  src={qrCodeImageSrc}
                  width={64}
                />
              ) : qrCodeValue || packageNumber ? (
                <div
                  aria-hidden="true"
                  className="grid size-16 grid-cols-[repeat(21,minmax(0,1fr))] gap-px"
                >
                  {cells.map((cell) => (
                    <span
                      className={cn(
                        "min-h-0 min-w-0",
                        cell.on ? "bg-foreground" : "bg-transparent",
                      )}
                      key={cell.id}
                    />
                  ))}
                </div>
              ) : (
                <div className="flex size-16 items-center justify-center bg-muted">
                  <QrCodeIcon
                    aria-hidden="true"
                    className="size-8 text-muted-foreground"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </article>
    </section>
  );
}
