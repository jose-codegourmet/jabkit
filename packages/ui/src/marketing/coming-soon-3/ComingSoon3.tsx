"use client";

import { BellIcon } from "lucide-react";
import { type FormEvent, useEffect, useId, useMemo, useState } from "react";
import { Button } from "@/atoms/button";
import { Input } from "@/atoms/input";
import { Label } from "@/atoms/label";
import { cn } from "@/lib/cn";
import type {
  ComingSoon3Logo,
  ComingSoon3Props,
  ComingSoon3UnitLabels,
} from "./ComingSoon3.types";

const defaults = {
  logo: { name: "Keel Log", href: "#home" } satisfies ComingSoon3Logo,
  badge: "Launch window",
  title: "Keel Log opens soon",
  description:
    "Shared watch notes for the deck, not another inbox. We mail once when seats unlock.",
  targetDate: "2027-04-12T14:00:00.000Z",
  unitLabels: {
    days: "Days",
    hours: "Hours",
    minutes: "Minutes",
    seconds: "Seconds",
  } satisfies ComingSoon3UnitLabels,
  emailLabel: "Work email",
  emailPlaceholder: "you@crew.work",
  submitLabel: "Notify me",
  successTitle: "You are on the list",
  successDescription: "We will send one note when Keel Log unlocks seats.",
  launchedTitle: "Keel Log is open",
  launchedDescription: "Seats are live. Use the same email to claim a desk.",
  footnote: "© 2026 Keel Log. One note when we open.",
};

interface Remaining {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  totalMs: number;
}

function remainingUntil(target: Date, now: number): Remaining {
  const totalMs = Math.max(0, target.getTime() - now);
  const totalSeconds = Math.floor(totalMs / 1000);
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  return { days, hours, minutes, seconds, totalMs };
}

function padUnit(value: number) {
  return String(value).padStart(2, "0");
}

function BrandMark({ logo }: { logo: ComingSoon3Logo }) {
  const mark = logo.src ? (
    <img src={logo.src} alt="" className="size-7 object-contain" />
  ) : (
    <span
      aria-hidden="true"
      className="grid size-7 place-items-center rounded-[calc(var(--radius)-0.1rem)] bg-foreground text-[0.7rem] font-semibold tracking-tight text-background"
    >
      {logo.name.slice(0, 1)}
    </span>
  );

  const label = (
    <span className="flex items-center gap-2.5 text-sm font-semibold tracking-tight">
      {mark}
      <span>{logo.name}</span>
    </span>
  );

  if (logo.href) {
    return (
      <a
        href={logo.href}
        className="inline-flex w-fit text-foreground transition-opacity hover:opacity-80"
      >
        {label}
      </a>
    );
  }

  return label;
}

function CountdownTile({
  value,
  label,
  reduceMotion,
}: {
  value: string;
  label: string;
  reduceMotion: boolean;
}) {
  return (
    <div
      data-slot="coming-soon-3-unit"
      className={cn(
        "flex min-w-0 flex-col items-center gap-2 rounded-[--radius] border border-border bg-card px-3 py-4 text-card-foreground sm:px-4 sm:py-5",
        !reduceMotion && "motion-safe:transition-transform motion-safe:duration-200",
      )}
    >
      <span className="font-mono text-3xl font-semibold tracking-tight tabular-nums sm:text-4xl md:text-5xl">
        {value}
      </span>
      <span className="text-[0.7rem] font-medium tracking-[0.14em] text-muted-foreground uppercase">
        {label}
      </span>
    </div>
  );
}

export function ComingSoon3({
  className,
  logo = defaults.logo,
  badge = defaults.badge,
  title = defaults.title,
  description = defaults.description,
  targetDate = defaults.targetDate,
  unitLabels = defaults.unitLabels,
  emailLabel = defaults.emailLabel,
  emailPlaceholder = defaults.emailPlaceholder,
  submitLabel = defaults.submitLabel,
  successTitle = defaults.successTitle,
  successDescription = defaults.successDescription,
  launchedTitle = defaults.launchedTitle,
  launchedDescription = defaults.launchedDescription,
  footnote = defaults.footnote,
  onSubscribe,
  onSubmit,
  ...props
}: ComingSoon3Props) {
  const headingId = useId();
  const emailId = useId();
  const [now, setNow] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  const target = useMemo(() => new Date(targetDate), [targetDate]);
  const remaining = now === null ? null : remainingUntil(target, now);
  const launched = remaining !== null && remaining.totalMs <= 0;

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduceMotion(media.matches);
    sync();
    media.addEventListener("change", sync);
    return () => media.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    const tick = () => setNow(Date.now());
    tick();
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, [targetDate]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    onSubmit?.(event);
    if (event.defaultPrevented) return;
    event.preventDefault();
    const email = String(
      new FormData(event.currentTarget).get("email") ?? "",
    ).trim();
    onSubscribe?.(email);
    setSubmitted(true);
  };

  return (
    <section
      data-slot="coming-soon-3"
      aria-labelledby={headingId}
      className={cn(
        "relative isolate min-h-[100dvh] overflow-hidden bg-background text-foreground",
        className,
      )}
      {...props}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,var(--jk-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--jk-border)_1px,transparent_1px)] [background-size:4.5rem_4.5rem] opacity-40"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,var(--jk-background)_72%)]"
      />

      <div className="relative mx-auto flex min-h-[100dvh] w-full max-w-3xl flex-col justify-between gap-12 px-6 py-8 sm:px-10 sm:py-12">
        <BrandMark logo={logo} />

        <div className="mx-auto flex w-full max-w-xl flex-col items-center gap-8 text-center">
          {badge ? (
            <p className="rounded-full border border-border bg-card px-3 py-1 text-[0.7rem] font-medium tracking-[0.16em] text-muted-foreground uppercase">
              {badge}
            </p>
          ) : null}

          <header className="space-y-3">
            <h1
              id={headingId}
              className="text-4xl font-semibold tracking-[-0.05em] text-balance sm:text-5xl"
            >
              {launched ? launchedTitle : title}
            </h1>
            {(launched ? launchedDescription : description) ? (
              <p className="mx-auto max-w-[42ch] text-base leading-7 text-muted-foreground sm:text-[1.05rem] sm:leading-8">
                {launched ? launchedDescription : description}
              </p>
            ) : null}
          </header>

          {remaining ? (
            <div
              role="timer"
              aria-label={
                launched
                  ? "Launch time has passed"
                  : `Launch in ${remaining.days} days, ${remaining.hours} hours, ${remaining.minutes} minutes, and ${remaining.seconds} seconds`
              }
              className="grid w-full grid-cols-4 gap-2 sm:gap-3"
            >
              <CountdownTile
                value={padUnit(remaining.days)}
                label={unitLabels.days}
                reduceMotion={reduceMotion}
              />
              <CountdownTile
                value={padUnit(remaining.hours)}
                label={unitLabels.hours}
                reduceMotion={reduceMotion}
              />
              <CountdownTile
                value={padUnit(remaining.minutes)}
                label={unitLabels.minutes}
                reduceMotion={reduceMotion}
              />
              <CountdownTile
                value={padUnit(remaining.seconds)}
                label={unitLabels.seconds}
                reduceMotion={reduceMotion}
              />
            </div>
          ) : (
            <div
              aria-hidden="true"
              className="grid w-full grid-cols-4 gap-2 sm:gap-3"
            >
              <CountdownTile
                value="--"
                label={unitLabels.days}
                reduceMotion
              />
              <CountdownTile
                value="--"
                label={unitLabels.hours}
                reduceMotion
              />
              <CountdownTile
                value="--"
                label={unitLabels.minutes}
                reduceMotion
              />
              <CountdownTile
                value="--"
                label={unitLabels.seconds}
                reduceMotion
              />
            </div>
          )}

          {submitted ? (
            <p
              role="status"
              className="w-full rounded-[--radius] border border-border bg-card px-5 py-4 text-sm leading-6 text-card-foreground"
            >
              <span className="block font-semibold">{successTitle}</span>
              <span className="mt-1 block text-muted-foreground">
                {successDescription}
              </span>
            </p>
          ) : (
            <form
              className="flex w-full flex-col gap-3 sm:flex-row sm:items-stretch"
              onSubmit={handleSubmit}
            >
              <div className="min-w-0 flex-1 text-left">
                <Label htmlFor={emailId} className="sr-only">
                  {emailLabel}
                </Label>
                <Input
                  id={emailId}
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder={emailPlaceholder}
                  className="h-12 rounded-[--radius] bg-background"
                />
              </div>
              <Button
                type="submit"
                variant="primary"
                size="lg"
                className="h-12 gap-2 sm:px-5"
              >
                {submitLabel}
                <BellIcon aria-hidden="true" className="size-4" />
              </Button>
            </form>
          )}
        </div>

        {footnote ? (
          <p className="text-center text-xs tracking-wide text-muted-foreground">
            {footnote}
          </p>
        ) : null}
      </div>
    </section>
  );
}
