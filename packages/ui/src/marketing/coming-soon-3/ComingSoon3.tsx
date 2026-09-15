"use client";

import { RocketIcon } from "lucide-react";
import { Fragment, type FormEvent, useEffect, useId, useMemo, useState } from "react";
import { cn } from "@/lib/cn";
import type {
  ComingSoon3Props,
  ComingSoon3UnitLabels,
} from "./ComingSoon3.types";

const defaults = {
  badge: "Coming Soon",
  title: "The countdown to our biggest launch yet",
  description:
    "We go live the moment the timer hits zero. Drop your email and we will make sure you are first through the door.",
  targetDate: "2027-04-12T14:00:00.000Z",
  unitLabels: {
    days: "Days",
    hours: "Hours",
    minutes: "Minutes",
    seconds: "Seconds",
  } satisfies ComingSoon3UnitLabels,
  emailLabel: "Email address",
  emailPlaceholder: "you@example.com",
  submitLabel: "Notify me",
  successTitle: "You are on the list",
  successDescription: "We will write once, when the timer hits zero.",
  launchedTitle: "We are live",
  launchedDescription:
    "The countdown is over. Use the same email to walk through the door.",
};

const tiles = [
  { key: "days", labelKey: "days" },
  { key: "hours", labelKey: "hours" },
  { key: "minutes", labelKey: "minutes" },
  { key: "seconds", labelKey: "seconds" },
] as const;

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
  return {
    days: Math.floor(totalSeconds / 86400),
    hours: Math.floor((totalSeconds % 86400) / 3600),
    minutes: Math.floor((totalSeconds % 3600) / 60),
    seconds: totalSeconds % 60,
    totalMs,
  };
}

function padUnit(value: number) {
  return String(value).padStart(2, "0");
}

export function ComingSoon3({
  className,
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
    if (reduceMotion) return;
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, [targetDate, reduceMotion]);

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

  const display = remaining ?? {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    totalMs: 1,
  };

  return (
    <section
      data-slot="coming-soon-3"
      aria-labelledby={headingId}
      className={cn(
        "flex min-h-svh w-full flex-col items-center justify-center gap-8 bg-background px-6 py-12 text-center text-foreground",
        className,
      )}
      {...props}
    >
      <div className="flex flex-col items-center gap-4">
        {badge ? (
          <span className="flex items-center gap-2 rounded-md border border-border bg-muted/50 px-2.5 py-0.5 text-xs font-medium text-muted-foreground">
            <RocketIcon aria-hidden="true" className="size-3.5" />
            {badge}
          </span>
        ) : null}
        <h1
          id={headingId}
          className="text-3xl font-bold tracking-tight text-balance sm:text-4xl"
        >
          {launched ? launchedTitle : title}
        </h1>
        {(launched ? launchedDescription : description) ? (
          <p className="max-w-md text-sm text-muted-foreground sm:text-base">
            {launched ? launchedDescription : description}
          </p>
        ) : null}
      </div>

      <div
        role="timer"
        aria-label={
          launched
            ? "Launch time has passed"
            : remaining
              ? `Launch in ${remaining.days} days, ${remaining.hours} hours, ${remaining.minutes} minutes, and ${remaining.seconds} seconds`
              : "Launch countdown"
        }
        className="flex items-center justify-center gap-2 sm:gap-3"
      >
        {tiles.map((tile, index) => (
          <Fragment key={tile.key}>
            <div
              data-slot="coming-soon-3-unit"
              className="flex w-16 flex-col overflow-hidden rounded-lg border border-border sm:w-20"
            >
              <span
                suppressHydrationWarning
                className="bg-card py-3 font-mono text-3xl font-bold tabular-nums sm:text-4xl"
              >
                {remaining ? padUnit(display[tile.key]) : "--"}
              </span>
              <span className="border-t border-border bg-muted/40 py-1.5 text-[10px] font-medium tracking-[0.12em] text-muted-foreground uppercase">
                {unitLabels[tile.labelKey]}
              </span>
            </div>
            {index < tiles.length - 1 ? (
              <span
                aria-hidden="true"
                className="font-mono text-2xl font-bold text-muted-foreground/30 sm:text-3xl"
              >
                :
              </span>
            ) : null}
          </Fragment>
        ))}
      </div>

      {submitted ? (
        <p
          role="status"
          className="w-full max-w-sm rounded-lg border border-border bg-card px-4 py-3 text-sm leading-6 text-card-foreground"
        >
          <span className="block font-semibold">{successTitle}</span>
          <span className="mt-1 block text-muted-foreground">
            {successDescription}
          </span>
        </p>
      ) : (
        <form
          className="flex w-full max-w-sm flex-col gap-2 sm:flex-row"
          onSubmit={handleSubmit}
        >
          <label className="sr-only" htmlFor={emailId}>
            {emailLabel}
          </label>
          <input
            id={emailId}
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder={emailPlaceholder}
            aria-label={emailLabel}
            className="h-9 w-full min-w-0 rounded-md border border-input bg-transparent px-3 py-1 text-base text-foreground outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 md:text-sm"
          />
          <button
            type="submit"
            className="inline-flex h-9 shrink-0 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground outline-none hover:brightness-110 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background active:translate-y-px motion-reduce:transition-none motion-reduce:active:translate-y-0"
          >
            {submitLabel}
          </button>
        </form>
      )}
    </section>
  );
}
