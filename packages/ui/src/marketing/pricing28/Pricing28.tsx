"use client";

import {
  CircleCheckIcon,
  HeadsetIcon,
  LayersIcon,
  LockIcon,
  ShieldCheckIcon,
  SparklesIcon,
  UsersIcon,
  ZapIcon,
} from "lucide-react";
import { type ComponentType, type KeyboardEvent, useId, useState } from "react";
import {
  Avatar,
  AvatarFallback,
  AvatarGroup,
  AvatarGroupCount,
  AvatarImage,
} from "@/atoms/avatar/Avatar";
import { Badge } from "@/atoms/badge";
import { Button } from "@/atoms/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/atoms/tooltip/Tooltip";
import { cn } from "@/lib/cn";
import { pricing28Mocks } from "./Pricing28.mocks";
import type {
  Pricing28FeatureIcon,
  Pricing28Interval,
  Pricing28Plan,
  Pricing28Props,
} from "./Pricing28.types";

const ICONS: Record<
  Pricing28FeatureIcon,
  ComponentType<{ className?: string }>
> = {
  check: CircleCheckIcon,
  users: UsersIcon,
  zap: ZapIcon,
  shield: ShieldCheckIcon,
  sparkles: SparklesIcon,
  layers: LayersIcon,
  headset: HeadsetIcon,
  lock: LockIcon,
};

const INTERVALS: Pricing28Interval[] = ["monthly", "yearly"];

function PlanTagline({
  tagline,
  tooltip,
}: {
  tagline: string;
  tooltip?: string;
}) {
  if (!tooltip) {
    return (
      <p className="mt-2 text-sm text-muted-foreground text-pretty">
        {tagline}
      </p>
    );
  }

  return (
    <p className="mt-2 text-sm text-muted-foreground">
      <Tooltip>
        <TooltipTrigger
          render={
            <button
              type="button"
              className="border-b border-dashed border-muted-foreground/70 text-left text-muted-foreground decoration-muted-foreground underline-offset-4 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            />
          }
        >
          {tagline}
        </TooltipTrigger>
        <TooltipContent className="max-w-56 text-pretty">
          {tooltip}
        </TooltipContent>
      </Tooltip>
    </p>
  );
}

function PlanCard({
  plan,
  interval,
}: {
  plan: Pricing28Plan;
  interval: Pricing28Interval;
}) {
  const price = interval === "yearly" ? plan.yearlyPrice : plan.monthlyPrice;
  const period = interval === "yearly" ? plan.yearlyPeriod : plan.monthlyPeriod;
  const variant = plan.ctaVariant ?? (plan.popular ? "primary" : "secondary");

  return (
    <article
      className={cn(
        "flex h-full flex-col rounded-[calc(var(--radius)+0.55rem)] border bg-card p-6 text-card-foreground",
        plan.popular
          ? "border-primary/50 shadow-[0_24px_48px_-32px_color-mix(in_oklab,var(--jk-primary),transparent_40%)]"
          : "border-border",
      )}
    >
      <div className="flex flex-wrap items-center gap-2">
        <h3 className="text-lg font-semibold tracking-tight">{plan.name}</h3>
        {plan.popular ? (
          <Badge variant="primary">{plan.popularLabel ?? "Popular"}</Badge>
        ) : null}
      </div>

      <div className="mt-5 flex flex-wrap items-baseline gap-x-1.5 gap-y-1">
        <span className="text-4xl font-semibold tracking-[-0.05em] sm:text-[2.5rem]">
          {price}
        </span>
        <span className="text-sm text-muted-foreground">{period}</span>
      </div>

      {plan.tagline ? (
        <PlanTagline tagline={plan.tagline} tooltip={plan.taglineTooltip} />
      ) : (
        <div className="mt-2 h-5" aria-hidden="true" />
      )}

      <Button
        variant={variant}
        size="lg"
        asChild
        className="mt-6 w-full rounded-full"
      >
        <a href={plan.href}>{plan.ctaLabel}</a>
      </Button>

      <div className="mt-8 flex flex-1 flex-col gap-6">
        {plan.groups.map((group) => (
          <div key={group.title}>
            <p className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
              {group.title}
            </p>
            <ul className="mt-3 space-y-2.5">
              {group.items.map((item) => {
                const Icon = ICONS[item.icon];
                return (
                  <li
                    key={`${group.title}-${item.text}`}
                    className="flex items-start gap-2.5 text-sm leading-5"
                  >
                    <Icon
                      className="mt-0.5 size-4 shrink-0 text-primary"
                      aria-hidden="true"
                    />
                    <span>{item.text}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </article>
  );
}

export function Pricing28({
  className,
  title = pricing28Mocks.default.title,
  people = pricing28Mocks.default.people,
  extraCount = pricing28Mocks.default.extraCount,
  trustItems = pricing28Mocks.default.trustItems,
  monthlyLabel = pricing28Mocks.default.monthlyLabel,
  yearlyLabel = pricing28Mocks.default.yearlyLabel,
  yearlyBadge = pricing28Mocks.default.yearlyBadge,
  defaultInterval = "yearly",
  interval: intervalProp,
  onIntervalChange,
  plans = pricing28Mocks.default.plans,
  secureLabel = pricing28Mocks.default.secureLabel,
  ...props
}: Pricing28Props) {
  const headingId = useId();
  const tabPrefix = useId();
  const [uncontrolled, setUncontrolled] =
    useState<Pricing28Interval>(defaultInterval);
  const interval = intervalProp ?? uncontrolled;

  const setInterval = (next: Pricing28Interval) => {
    if (intervalProp === undefined) setUncontrolled(next);
    onIntervalChange?.(next);
  };

  const onTabListKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    const index = INTERVALS.indexOf(interval);
    if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
      event.preventDefault();
      const delta = event.key === "ArrowRight" ? 1 : -1;
      const next =
        INTERVALS[(index + delta + INTERVALS.length) % INTERVALS.length];
      setInterval(next);
      document.getElementById(`${tabPrefix}-${next}`)?.focus();
    }
  };

  const labels: Record<Pricing28Interval, string> = {
    monthly: monthlyLabel ?? "Monthly",
    yearly: yearlyLabel ?? "Yearly",
  };

  return (
    <TooltipProvider>
      <section
        data-slot="pricing28"
        aria-labelledby={headingId}
        className={cn("bg-background text-foreground", className)}
        {...props}
      >
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <h2
              id={headingId}
              className="text-3xl font-semibold tracking-[-0.05em] text-balance sm:text-5xl sm:leading-[1.08]"
            >
              {title}
            </h2>
          </div>

          <div className="mt-8 flex flex-col items-center justify-center gap-5 sm:flex-row sm:gap-8">
            <AvatarGroup className="-space-x-3">
              {people?.map((person) => (
                <Avatar key={person.src} size="default">
                  <AvatarImage src={person.src} alt={person.alt} />
                  <AvatarFallback>{person.fallback}</AvatarFallback>
                </Avatar>
              ))}
              {extraCount ? (
                <AvatarGroupCount>+{extraCount}</AvatarGroupCount>
              ) : null}
            </AvatarGroup>

            <div className="flex flex-col items-center gap-2 text-center sm:flex-row sm:items-stretch sm:gap-6 sm:text-left">
              {trustItems?.map((item) => (
                <p
                  key={`${item.value}-${item.label}`}
                  className="text-sm leading-5"
                >
                  <span className="font-semibold">{item.value}</span>
                  <span className="text-muted-foreground"> {item.label}</span>
                </p>
              ))}
            </div>
          </div>

          <div className="mt-10 flex justify-center">
            <div
              className="inline-flex rounded-full border border-border bg-muted p-1"
              role="tablist"
              aria-label="Billing interval"
              onKeyDown={onTabListKeyDown}
            >
              {INTERVALS.map((id) => {
                const selected = interval === id;
                return (
                  <button
                    key={id}
                    id={`${tabPrefix}-${id}`}
                    type="button"
                    role="tab"
                    aria-selected={selected}
                    tabIndex={selected ? 0 : -1}
                    onClick={() => setInterval(id)}
                    className={cn(
                      "inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                      selected
                        ? "bg-background text-foreground shadow-[0_8px_16px_-12px_color-mix(in_oklab,var(--jk-foreground),transparent_55%)]"
                        : "text-muted-foreground hover:text-foreground",
                    )}
                  >
                    {labels[id]}
                    {id === "yearly" && yearlyBadge ? (
                      <Badge variant="secondary" className="h-5 px-1.5">
                        {yearlyBadge}
                      </Badge>
                    ) : null}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {plans?.map((plan) => (
              <PlanCard key={plan.id} plan={plan} interval={interval} />
            ))}
          </div>

          <p className="mt-10 flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <LockIcon className="size-3.5" aria-hidden="true" />
            {secureLabel}
          </p>
        </div>
      </section>
    </TooltipProvider>
  );
}
