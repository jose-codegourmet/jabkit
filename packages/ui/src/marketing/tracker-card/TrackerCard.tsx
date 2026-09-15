"use client";

import {
  CheckIcon,
  CopyIcon,
  MapPinIcon,
  PackageIcon,
  TruckIcon,
} from "lucide-react";
import { useId, useState } from "react";
import { Button } from "@/atoms/button";
import { cn } from "@/lib/cn";
import { trackerCardMocks } from "./TrackerCard.mocks";
import type {
  TrackerCardPlace,
  TrackerCardProps,
  TrackerCardStatus,
  TrackerCardStep,
} from "./TrackerCard.types";

function scanCells(seed: string) {
  let n = 2166136261;
  for (let i = 0; i < seed.length; i++) {
    n ^= seed.charCodeAt(i);
    n = Math.imul(n, 16777619);
  }
  return Array.from({ length: 81 }, (_, position) => {
    n = Math.imul(n ^ (n >>> 13), 1274126177);
    const row = Math.floor(position / 9);
    const col = position % 9;
    const finder =
      (row < 3 && col < 3) ||
      (row < 3 && col > 5) ||
      (row > 5 && col < 3);
    return {
      id: `${seed}-${position}-${n >>> 0}`,
      on: finder || (n & 1) === 1,
    };
  });
}

function statusTone(status: TrackerCardStatus | undefined) {
  if (status === "delivered") {
    return "bg-success text-success-foreground";
  }
  if (status === "out-for-delivery") {
    return "bg-primary text-primary-foreground";
  }
  if (status === "packed") {
    return "bg-secondary text-secondary-foreground";
  }
  return "bg-warning text-warning-foreground";
}

function PlaceBlock({
  label,
  place,
}: {
  label: string;
  place: TrackerCardPlace;
}) {
  return (
    <div className="min-w-0">
      <p className="text-[10px] font-medium tracking-[0.16em] text-muted-foreground uppercase">
        {label}
      </p>
      <p className="mt-1 text-base font-semibold tracking-tight">{place.city}</p>
      <p className="mt-0.5 text-xs leading-5 text-muted-foreground text-pretty">
        {place.region}
      </p>
      <p className="mt-1 font-mono text-[11px] tracking-[0.16em] text-foreground">
        {place.code}
      </p>
    </div>
  );
}

function Checkpoint({ step }: { step: TrackerCardStep }) {
  const done = Boolean(step.complete);
  const current = Boolean(step.current);

  return (
    <li className="grid grid-cols-[auto_1fr] gap-x-3 pb-4 last:pb-0">
      <span className="relative flex w-4 flex-col items-center">
        <span
          className={cn(
            "relative z-10 mt-0.5 grid size-4 place-items-center rounded-full border",
            done || current
              ? "border-primary bg-primary text-primary-foreground"
              : "border-border bg-card text-muted-foreground",
          )}
        >
          {done && !current ? (
            <CheckIcon aria-hidden="true" className="size-2.5" />
          ) : (
            <span
              aria-hidden="true"
              className={cn(
                "size-1.5 rounded-full",
                current ? "bg-primary-foreground" : "bg-muted-foreground/50",
                current &&
                  "motion-safe:animate-pulse motion-reduce:animate-none",
              )}
            />
          )}
        </span>
        <span aria-hidden="true" className="min-h-6 w-px flex-1 bg-border" />
      </span>
      <div>
        <p
          className={cn(
            "text-sm tracking-tight",
            current ? "font-semibold text-foreground" : "font-medium",
          )}
        >
          {step.label}
        </p>
        <p className="mt-0.5 font-mono text-[11px] text-muted-foreground">
          {step.time}
        </p>
      </div>
    </li>
  );
}

export function TrackerCard({
  className,
  eyebrow = trackerCardMocks.default.eyebrow,
  heading = trackerCardMocks.default.heading,
  description = trackerCardMocks.default.description,
  status = trackerCardMocks.default.status,
  statusLabel = trackerCardMocks.default.statusLabel,
  statusDetail = trackerCardMocks.default.statusDetail,
  trackingLabel = trackerCardMocks.default.trackingLabel,
  trackingNumber = trackerCardMocks.default.trackingNumber,
  copyLabel = trackerCardMocks.default.copyLabel,
  copiedLabel = trackerCardMocks.default.copiedLabel,
  courierLabel = trackerCardMocks.default.courierLabel,
  courier = trackerCardMocks.default.courier,
  etaLabel = trackerCardMocks.default.etaLabel,
  eta = trackerCardMocks.default.eta,
  originLabel = trackerCardMocks.default.originLabel,
  destinationLabel = trackerCardMocks.default.destinationLabel,
  origin = trackerCardMocks.default.origin,
  destination = trackerCardMocks.default.destination,
  stepsHeading = trackerCardMocks.default.stepsHeading,
  steps = trackerCardMocks.default.steps,
  scanLabel = trackerCardMocks.default.scanLabel,
  showScan = trackerCardMocks.default.showScan,
  primaryAction = trackerCardMocks.default.primaryAction,
  secondaryAction = trackerCardMocks.default.secondaryAction,
  ...props
}: TrackerCardProps) {
  const headingId = useId();
  const descriptionId = useId();
  const [copied, setCopied] = useState(false);
  const checkpoints = steps ?? [];
  const code = trackingNumber ?? "TRACK";
  const cells = scanCells(code);

  const copyTracking = async () => {
    if (!trackingNumber) return;
    try {
      await navigator.clipboard.writeText(trackingNumber);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      setCopied(false);
    }
  };

  return (
    <section
      aria-describedby={description ? descriptionId : undefined}
      aria-labelledby={headingId}
      className={cn("bg-muted text-foreground", className)}
      data-slot="tracker-card"
      {...props}
    >
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
        <header className="mx-auto max-w-xl text-center">
          {eyebrow ? (
            <p className="text-xs font-medium tracking-[0.16em] text-muted-foreground uppercase">
              {eyebrow}
            </p>
          ) : null}
          <h2
            className="mt-3 text-3xl font-semibold tracking-tight text-balance sm:text-5xl sm:leading-[1.1]"
            id={headingId}
          >
            {heading}
          </h2>
          {description ? (
            <p
              className="mt-3 text-sm leading-6 text-muted-foreground text-pretty sm:text-base"
              id={descriptionId}
            >
              {description}
            </p>
          ) : null}
        </header>

        <article
          className={cn(
            "relative mx-auto mt-10 w-full max-w-md overflow-hidden rounded-[calc(var(--radius)+0.35rem)] border border-border bg-card text-card-foreground shadow-[0_22px_48px_-28px_color-mix(in_oklab,var(--jk-foreground),transparent_68%)]",
            "motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-2 motion-safe:duration-500",
          )}
        >
          <div className="px-6 pt-7 pb-5">
            <div className="flex items-start justify-between gap-3">
              <span
                className={cn(
                  "inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-semibold tracking-tight",
                  statusTone(status),
                )}
              >
                {status === "delivered" ? (
                  <PackageIcon aria-hidden="true" className="size-3.5" />
                ) : (
                  <TruckIcon aria-hidden="true" className="size-3.5" />
                )}
                {statusLabel}
              </span>
              {eta ? (
                <p className="text-right font-mono text-[11px] text-muted-foreground">
                  <span className="block tracking-[0.12em] uppercase">
                    {etaLabel}
                  </span>
                  <span className="mt-0.5 block text-foreground">{eta}</span>
                </p>
              ) : null}
            </div>
            {statusDetail ? (
              <p className="mt-3 text-sm leading-6 text-muted-foreground text-pretty">
                {statusDetail}
              </p>
            ) : null}

            <div className="mt-5 rounded-[--radius] border border-border bg-muted/70 px-3 py-2.5">
              <div className="flex items-center justify-between gap-3">
                <div className="min-w-0">
                  <span className="block text-[10px] font-medium tracking-[0.16em] text-muted-foreground uppercase">
                    {trackingLabel}
                  </span>
                  <span className="mt-1 block truncate font-mono text-sm tracking-[0.12em] text-foreground">
                    {trackingNumber}
                  </span>
                </div>
                {trackingNumber ? (
                  <Button
                    className="shrink-0"
                    onClick={copyTracking}
                    size="sm"
                    type="button"
                    variant="secondary"
                  >
                    {copied ? (
                      <CheckIcon aria-hidden="true" className="size-3.5" />
                    ) : (
                      <CopyIcon aria-hidden="true" className="size-3.5" />
                    )}
                    <span className="ml-1.5">
                      {copied ? copiedLabel : copyLabel}
                    </span>
                  </Button>
                ) : null}
              </div>
            </div>
          </div>

          {origin || destination ? (
            <div className="border-t border-border px-6 py-5">
              <div className="grid grid-cols-[1fr_auto_1fr] items-start gap-3">
                {origin ? (
                  <PlaceBlock label={originLabel ?? "From"} place={origin} />
                ) : (
                  <span />
                )}
                <span
                  aria-hidden="true"
                  className="mt-6 flex flex-col items-center gap-1 text-muted-foreground"
                >
                  <MapPinIcon className="size-4" />
                  <span className="h-8 w-px bg-border" />
                </span>
                {destination ? (
                  <PlaceBlock
                    label={destinationLabel ?? "To"}
                    place={destination}
                  />
                ) : (
                  <span />
                )}
              </div>
            </div>
          ) : null}

          {checkpoints.length > 0 ? (
            <div className="border-t border-border px-6 py-5">
              {stepsHeading ? (
                <p className="mb-3 text-[10px] font-medium tracking-[0.16em] text-muted-foreground uppercase">
                  {stepsHeading}
                </p>
              ) : null}
              <ol className="[&>li:last-child>span>span:last-child]:hidden">
                {checkpoints.map((step) => (
                  <Checkpoint key={step.id} step={step} />
                ))}
              </ol>
            </div>
          ) : null}

          <div className="border-t border-border px-6 pt-5 pb-6">
            <div className="flex items-end justify-between gap-4">
              <div className="min-w-0">
                {courier ? (
                  <p>
                    <span className="block text-[10px] font-medium tracking-[0.16em] text-muted-foreground uppercase">
                      {courierLabel}
                    </span>
                    <span className="mt-1 block text-sm font-medium">
                      {courier}
                    </span>
                  </p>
                ) : null}
              </div>
              {showScan ? (
                <figure className="shrink-0 text-center">
                  <div
                    aria-hidden="true"
                    className="grid size-[4.5rem] grid-cols-9 gap-px rounded-[calc(var(--radius)-0.15rem)] border border-border bg-card p-1.5"
                  >
                    {cells.map((cell) => (
                      <span
                        className={cn(
                          "rounded-[1px]",
                          cell.on ? "bg-foreground" : "bg-transparent",
                        )}
                        key={cell.id}
                      />
                    ))}
                  </div>
                  {scanLabel ? (
                    <figcaption className="mt-1.5 max-w-[4.75rem] text-[10px] leading-4 text-muted-foreground">
                      {scanLabel}
                    </figcaption>
                  ) : null}
                </figure>
              ) : null}
            </div>

            {primaryAction || secondaryAction ? (
              <div className="mt-5 flex flex-col gap-2">
                {primaryAction ? (
                  <Button asChild className="w-full" size="lg">
                    <a href={primaryAction.href}>{primaryAction.label}</a>
                  </Button>
                ) : null}
                {secondaryAction ? (
                  <Button
                    asChild
                    className="w-full"
                    size="lg"
                    variant="secondary"
                  >
                    <a href={secondaryAction.href}>{secondaryAction.label}</a>
                  </Button>
                ) : null}
              </div>
            ) : null}
          </div>
        </article>
      </div>
    </section>
  );
}
