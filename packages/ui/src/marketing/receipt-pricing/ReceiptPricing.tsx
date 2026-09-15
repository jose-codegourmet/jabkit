"use client";

import { type KeyboardEvent, useEffect, useId, useRef, useState } from "react";
import { Button } from "@/atoms/button";
import { cn } from "@/lib/cn";
import { receiptPricingMocks } from "./ReceiptPricing.mocks";
import type {
  ReceiptPricingLine,
  ReceiptPricingPeriod,
  ReceiptPricingPlan,
  ReceiptPricingProps,
} from "./ReceiptPricing.types";

const PERIODS: ReceiptPricingPeriod[] = ["monthly", "yearly"];

function formatMoney(amount: number, currency: string, locale: string) {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
    maximumFractionDigits: amount % 1 === 0 ? 0 : 2,
  }).format(amount);
}

function formatIssued(issuedAt: string, locale: string) {
  const date = new Date(`${issuedAt}T12:00:00`);
  if (Number.isNaN(date.getTime())) return issuedAt;
  return new Intl.DateTimeFormat(locale, {
    year: "numeric",
    month: "short",
    day: "2-digit",
  }).format(date);
}

function sumLines(lines: ReceiptPricingLine[]) {
  return lines.reduce((total, line) => total + line.amount, 0);
}

function barcodeBars(seed: string) {
  let n = 2166136261;
  for (let i = 0; i < seed.length; i++) {
    n ^= seed.charCodeAt(i);
    n = Math.imul(n, 16777619);
  }
  return Array.from({ length: 38 }, (_, position) => {
    n = Math.imul(n ^ (n >>> 13), 1274126177);
    return {
      id: `${seed}-${position}-${n >>> 0}`,
      width: 1 + (Math.abs(n) % 3),
    };
  });
}

function LedgerRow({
  label,
  value,
  muted = false,
  strong = false,
}: {
  label: string;
  value: string;
  muted?: boolean;
  strong?: boolean;
}) {
  return (
    <div
      className={cn(
        "flex items-baseline gap-2 font-mono text-[11px] leading-5 sm:text-xs",
        muted && "text-muted-foreground",
        strong && "font-semibold",
      )}
    >
      <span className="shrink-0">{label}</span>
      <span
        aria-hidden="true"
        className="min-w-3 flex-1 border-b border-dotted border-border"
      />
      <span className="shrink-0 tabular-nums">{value}</span>
    </div>
  );
}

function ReceiptNotch({ flip = false }: { flip?: boolean }) {
  const teeth = 24;
  const points: string[] = [];
  if (flip) {
    points.push("0,0");
    for (let i = 0; i <= teeth; i++) {
      points.push(`${(i / teeth) * 100},${i % 2 === 0 ? 0 : 8}`);
    }
    points.push("100,0");
  } else {
    points.push("0,8");
    for (let i = 0; i <= teeth; i++) {
      points.push(`${(i / teeth) * 100},${i % 2 === 0 ? 8 : 0}`);
    }
    points.push("100,8");
  }

  return (
    <svg
      aria-hidden="true"
      className="block h-3 w-full text-card"
      preserveAspectRatio="none"
      viewBox="0 0 100 8"
    >
      <polygon fill="currentColor" points={points.join(" ")} />
    </svg>
  );
}

function ReceiptSlip({
  plan,
  period,
  merchant,
  merchantNote,
  orderPrefix,
  issuedAt,
  monthsFree,
  printMs,
  showStamp,
  showBarcode,
  currency,
  locale,
}: {
  plan: ReceiptPricingPlan;
  period: ReceiptPricingPeriod;
  merchant: string;
  merchantNote?: string;
  orderPrefix: string;
  issuedAt: string;
  monthsFree: number;
  printMs: number;
  showStamp: boolean;
  showBarcode: boolean;
  currency: string;
  locale: string;
}) {
  const slipRef = useRef<HTMLElement>(null);
  const monthlySubtotal = sumLines(plan.monthly);
  const yearly = period === "yearly";
  const billedMonths = yearly ? Math.max(12 - monthsFree, 1) : 1;
  const discount = yearly ? monthlySubtotal * monthsFree : 0;
  const total = monthlySubtotal * billedMonths;
  const orderId = `${orderPrefix}-${plan.id.slice(0, 4).toUpperCase()}-${plan.monthly.length}${plan.name.length}`;
  const money = (amount: number) => formatMoney(amount, currency, locale);

  useEffect(() => {
    const node = slipRef.current;
    if (!node) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const animation = node.animate(
      [
        { clipPath: "inset(0 0 100% 0)", opacity: 0.35 },
        { clipPath: "inset(0 0 0 0)", opacity: 1 },
      ],
      {
        duration: printMs,
        easing: "cubic-bezier(0.16, 1, 0.3, 1)",
        fill: "both",
      },
    );
    return () => animation.cancel();
  }, [printMs]);

  return (
    <article
      className={cn("relative flex h-full flex-col", plan.featured && "z-[1]")}
      ref={slipRef}
    >
      <ReceiptNotch />
      <div
        className={cn(
          "relative flex flex-1 flex-col border-x border-border bg-card px-5 pt-4 pb-5 text-card-foreground shadow-[0_18px_40px_-28px_color-mix(in_oklab,var(--jk-foreground),transparent_70%)]",
          plan.featured && "ring-1 ring-primary/40",
        )}
      >
        {showStamp ? (
          <span
            aria-hidden="true"
            className="pointer-events-none absolute top-16 right-4 rotate-[-12deg] rounded-[2px] border-2 border-primary/55 px-2 py-0.5 font-mono text-[10px] font-bold tracking-[0.18em] text-primary/70 uppercase"
          >
            {yearly ? "YEAR" : "MO"}
          </span>
        ) : null}

        <header className="text-center">
          <p className="font-mono text-[10px] tracking-[0.12em] text-muted-foreground uppercase">
            {merchant}
          </p>
          <h3 className="mt-2 text-xl font-semibold tracking-tight">
            {plan.name}
          </h3>
          {plan.tag ? (
            <p className="mt-1 font-mono text-[11px] text-muted-foreground text-pretty">
              {plan.tag}
            </p>
          ) : null}
          {merchantNote ? (
            <p className="mt-2 font-mono text-[10px] text-muted-foreground">
              {merchantNote}
            </p>
          ) : null}
        </header>

        <div className="mt-4 space-y-1 border-t border-dashed border-border pt-3">
          <LedgerRow label="Ticket" value={orderId} muted />
          <LedgerRow
            label="Issued"
            value={formatIssued(issuedAt, locale)}
            muted
          />
          <LedgerRow
            label="Period"
            value={yearly ? `12 mo / ${billedMonths} billed` : "1 month"}
            muted
          />
        </div>

        <ul className="mt-3 space-y-1.5 border-t border-dashed border-border pt-3">
          {plan.monthly.map((line) => (
            <li key={line.label}>
              <LedgerRow
                label={yearly ? `${line.label} x12` : line.label}
                value={money(yearly ? line.amount * 12 : line.amount)}
              />
            </li>
          ))}
        </ul>

        <div className="mt-3 space-y-1.5 border-t border-dashed border-border pt-3">
          <LedgerRow
            label="Subtotal"
            value={money(yearly ? monthlySubtotal * 12 : monthlySubtotal)}
          />
          {yearly && discount > 0 ? (
            <LedgerRow
              label={`${monthsFree} months free`}
              muted
              value={`-${money(discount)}`}
            />
          ) : null}
          <LedgerRow label="Total" strong value={money(total)} />
        </div>

        {showBarcode ? (
          <div className="mt-5 border-t border-dashed border-border pt-4">
            <div
              aria-hidden="true"
              className="flex h-10 items-end justify-center gap-px"
            >
              {barcodeBars(orderId).map((bar) => (
                <span
                  className="bg-foreground"
                  key={bar.id}
                  style={{
                    width: bar.width,
                    height: bar.width > 1 ? "100%" : "72%",
                  }}
                />
              ))}
            </div>
            <p className="mt-2 text-center font-mono text-[10px] tracking-[0.28em] text-muted-foreground">
              {orderId.replaceAll("-", "")}
            </p>
          </div>
        ) : null}

        <Button
          asChild
          className="mt-5 w-full rounded-none"
          size="lg"
          variant={plan.featured ? "primary" : "secondary"}
        >
          <a href={plan.href}>{plan.ctaLabel}</a>
        </Button>
      </div>
      <ReceiptNotch flip />
    </article>
  );
}

export function ReceiptPricing({
  className,
  title = receiptPricingMocks.default.title,
  description = receiptPricingMocks.default.description,
  merchant = receiptPricingMocks.default.merchant,
  merchantNote = receiptPricingMocks.default.merchantNote,
  orderPrefix = receiptPricingMocks.default.orderPrefix,
  issuedAt = receiptPricingMocks.default.issuedAt,
  monthsFree = receiptPricingMocks.default.monthsFree,
  printMs = receiptPricingMocks.default.printMs,
  showStamp = receiptPricingMocks.default.showStamp,
  showBarcode = receiptPricingMocks.default.showBarcode,
  monthlyLabel = receiptPricingMocks.default.monthlyLabel,
  yearlyLabel = receiptPricingMocks.default.yearlyLabel,
  currency = receiptPricingMocks.default.currency,
  locale = receiptPricingMocks.default.locale,
  defaultPeriod = "monthly",
  period: periodProp,
  onPeriodChange,
  plans = receiptPricingMocks.default.plans,
  ...props
}: ReceiptPricingProps) {
  const headingId = useId();
  const descriptionId = useId();
  const tabPrefix = useId();
  const [uncontrolled, setUncontrolled] =
    useState<ReceiptPricingPeriod>(defaultPeriod);
  const period = periodProp ?? uncontrolled;

  const setPeriod = (next: ReceiptPricingPeriod) => {
    if (periodProp === undefined) setUncontrolled(next);
    onPeriodChange?.(next);
  };

  const onTabListKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    const index = PERIODS.indexOf(period);
    if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
      event.preventDefault();
      const delta = event.key === "ArrowRight" ? 1 : -1;
      const next = PERIODS[(index + delta + PERIODS.length) % PERIODS.length];
      setPeriod(next);
      document.getElementById(`${tabPrefix}-${next}`)?.focus();
    }
  };

  const labels: Record<ReceiptPricingPeriod, string> = {
    monthly: monthlyLabel ?? "Monthly",
    yearly: yearlyLabel ?? "Yearly",
  };

  const planList = plans ?? [];
  const columnCount = Math.min(Math.max(planList.length, 1), 3);

  return (
    <section
      aria-describedby={description ? descriptionId : undefined}
      aria-labelledby={headingId}
      className={cn(
        "bg-muted text-foreground [font-variant-ligatures:none]",
        className,
      )}
      data-slot="receipt-pricing"
      {...props}
    >
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
        <header className="mx-auto max-w-2xl text-center">
          <h2
            className="text-3xl font-semibold tracking-tight text-balance sm:text-5xl sm:leading-[1.1]"
            id={headingId}
          >
            {title}
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

        <div className="mt-8 flex justify-center">
          <div
            aria-label="Billing period"
            className="inline-flex rounded-full border border-border bg-muted p-1"
            onKeyDown={onTabListKeyDown}
            role="tablist"
          >
            {PERIODS.map((id) => {
              const selected = period === id;
              return (
                <button
                  aria-selected={selected}
                  className={cn(
                    "rounded-full px-4 py-1.5 text-sm font-medium transition-colors focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:outline-none motion-reduce:transition-none",
                    selected
                      ? "bg-background text-foreground shadow-[0_8px_16px_-12px_color-mix(in_oklab,var(--jk-foreground),transparent_55%)]"
                      : "text-muted-foreground hover:text-foreground",
                  )}
                  id={`${tabPrefix}-${id}`}
                  key={id}
                  onClick={() => setPeriod(id)}
                  role="tab"
                  tabIndex={selected ? 0 : -1}
                  type="button"
                >
                  {labels[id]}
                </button>
              );
            })}
          </div>
        </div>

        <div
          className={cn(
            "mx-auto mt-10 grid gap-6",
            columnCount === 1 && "max-w-sm grid-cols-1",
            columnCount === 2 && "max-w-3xl grid-cols-1 sm:grid-cols-2",
            columnCount >= 3 && "grid-cols-1 sm:grid-cols-2 xl:grid-cols-3",
          )}
        >
          {planList.map((plan) => (
            <ReceiptSlip
              currency={currency ?? "USD"}
              issuedAt={issuedAt ?? "2026-09-15"}
              key={`${plan.id}-${period}`}
              locale={locale ?? "en-US"}
              merchant={merchant ?? "Northslip"}
              merchantNote={merchantNote}
              monthsFree={monthsFree ?? 2}
              orderPrefix={orderPrefix ?? "NS"}
              period={period}
              plan={plan}
              printMs={printMs ?? 460}
              showBarcode={showBarcode ?? true}
              showStamp={showStamp ?? true}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
