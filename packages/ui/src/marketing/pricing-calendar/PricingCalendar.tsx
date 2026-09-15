"use client";

import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { useId, useState } from "react";
import { Button } from "@/atoms/button";
import { cn } from "@/lib/cn";
import { pricingCalendarMocks } from "./PricingCalendar.mocks";
import type { PricingCalendarProps } from "./PricingCalendar.types";

function startOfDay(date: Date) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}

function startOfMonth(date: Date) {
  return new Date(date.getFullYear(), date.getMonth(), 1);
}

function addMonths(date: Date, amount: number) {
  return new Date(date.getFullYear(), date.getMonth() + amount, 1);
}

function isSameDay(a: Date, b: Date) {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}

function dayKey(date: Date) {
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${date.getFullYear()}-${month}-${day}`;
}

function compareDays(a: Date, b: Date) {
  return dayKey(a).localeCompare(dayKey(b));
}

function monthTitle(date: Date, locale: string) {
  return new Intl.DateTimeFormat(locale, {
    month: "long",
    year: "numeric",
  }).format(date);
}

function weekdayLabels(locale: string) {
  const formatter = new Intl.DateTimeFormat(locale, { weekday: "short" });
  return Array.from({ length: 7 }, (_, index) => {
    const day = new Date(2026, 1, 1 + index);
    return formatter.format(day);
  });
}

function monthCells(month: Date) {
  const first = startOfMonth(month);
  const offset = first.getDay();
  const daysInMonth = new Date(
    month.getFullYear(),
    month.getMonth() + 1,
    0,
  ).getDate();
  const cells: Array<{ key: string; date?: Date }> = [];
  for (let i = 0; i < offset; i++) {
    cells.push({ key: `pad-${dayKey(first)}-${i}` });
  }
  for (let day = 1; day <= daysInMonth; day++) {
    const date = new Date(month.getFullYear(), month.getMonth(), day);
    cells.push({ key: dayKey(date), date });
  }
  return cells;
}

function formatRate(amount: number, currency: string, locale: string) {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  }).format(amount);
}

export function PricingCalendar({
  className,
  title = pricingCalendarMocks.default.title,
  description = pricingCalendarMocks.default.description,
  currency = "USD",
  locale = "en-US",
  goodPriceThreshold = 149,
  prices = pricingCalendarMocks.default.prices,
  unavailableDates = pricingCalendarMocks.default.unavailableDates,
  minDate,
  defaultMonth,
  numberOfMonths = 2,
  defaultSelected,
  selected: selectedProp,
  onSelect,
  previousMonthLabel = "Previous month",
  nextMonthLabel = "Next month",
  selectedLabel = "Selected night",
  emptySelectionLabel = "Choose a night to see the rate.",
  unavailableLabel = "Taken",
  goodPriceLabel = "Lower rate",
  standardPriceLabel = "Standard rate",
  submitLabel = "Reserve this night",
  onReserve,
  ...props
}: PricingCalendarProps) {
  const headingId = useId();
  const descriptionId = useId();
  const selectionId = useId();
  const weekdays = weekdayLabels(locale);
  const blocked = new Set(unavailableDates ?? []);

  const [viewMonth, setViewMonth] = useState(() =>
    startOfMonth(
      defaultMonth ?? defaultSelected ?? selectedProp ?? new Date(2026, 9, 1),
    ),
  );
  const [uncontrolledSelected, setUncontrolledSelected] = useState<
    Date | undefined
  >(() => (defaultSelected ? startOfDay(defaultSelected) : undefined));
  const selected = selectedProp
    ? startOfDay(selectedProp)
    : uncontrolledSelected;

  const months = Array.from({ length: Math.max(1, numberOfMonths) }, (_, i) =>
    addMonths(viewMonth, i),
  );

  const pickDay = (day: Date) => {
    const next = startOfDay(day);
    const same = selected ? isSameDay(selected, next) : false;
    const value = same ? undefined : next;
    if (selectedProp === undefined) setUncontrolledSelected(value);
    onSelect?.(value);
  };

  const selectedKey = selected ? dayKey(selected) : undefined;
  const selectedPrice = selectedKey && prices ? prices[selectedKey] : undefined;
  const selectedCopy = selected
    ? `${new Intl.DateTimeFormat(locale, {
        weekday: "long",
        month: "long",
        day: "numeric",
      }).format(selected)}${
        selectedPrice !== undefined
          ? ` · ${formatRate(selectedPrice, currency, locale)}`
          : ""
      }`
    : emptySelectionLabel;

  return (
    <section
      aria-describedby={description ? descriptionId : undefined}
      aria-labelledby={headingId}
      className={cn("bg-background text-foreground", className)}
      data-slot="pricing-calendar"
      {...props}
    >
      <div className="mx-auto flex max-w-5xl flex-col items-center px-5 py-16 sm:px-8 sm:py-20">
        <header className="mx-auto max-w-2xl text-center">
          <h2
            className="text-3xl font-semibold tracking-[-0.04em] text-balance sm:text-4xl"
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

        <article
          className={cn(
            "mt-10 w-full overflow-hidden rounded-[calc(var(--radius)+0.45rem)] border border-border bg-card text-card-foreground shadow-sm",
            "motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-2 motion-safe:duration-500",
          )}
        >
          <div className="flex items-center justify-between gap-3 border-b border-border px-4 py-3 sm:px-5">
            <Button
              aria-label={previousMonthLabel}
              className="size-9 p-0"
              onClick={() => setViewMonth(addMonths(viewMonth, -1))}
              size="sm"
              type="button"
              variant="ghost"
            >
              <ChevronLeftIcon className="size-4" />
            </Button>
            <p className="text-sm font-medium capitalize">
              {months.length === 1
                ? monthTitle(months[0], locale)
                : `${monthTitle(months[0], locale)} / ${monthTitle(months[months.length - 1], locale)}`}
            </p>
            <Button
              aria-label={nextMonthLabel}
              className="size-9 p-0"
              onClick={() => setViewMonth(addMonths(viewMonth, 1))}
              size="sm"
              type="button"
              variant="ghost"
            >
              <ChevronRightIcon className="size-4" />
            </Button>
          </div>

          <div className="grid gap-8 p-4 sm:p-5 md:grid-cols-2 md:gap-0">
            {months.map((month, index) => (
              <MonthGrid
                blocked={blocked}
                currency={currency}
                goodPriceThreshold={goodPriceThreshold}
                key={dayKey(month)}
                locale={locale}
                minDate={minDate}
                month={month}
                onPick={pickDay}
                prices={prices ?? {}}
                selected={selected}
                separated={index > 0}
                unavailableLabel={unavailableLabel}
                weekdays={weekdays}
              />
            ))}
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 border-t border-border px-4 py-3 text-xs text-muted-foreground sm:px-5">
            <span className="inline-flex items-center gap-1.5">
              <span
                aria-hidden="true"
                className="size-1.5 rounded-full bg-success"
              />
              {goodPriceLabel}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <span
                aria-hidden="true"
                className="size-1.5 rounded-full bg-muted-foreground/50"
              />
              {standardPriceLabel}
            </span>
          </div>
        </article>

        <div className="mt-8 flex w-full max-w-md flex-col items-center gap-3 text-center">
          <p className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
            {selectedLabel}
          </p>
          <p
            className="text-base font-medium tracking-tight"
            id={selectionId}
            role="status"
          >
            {selectedCopy}
          </p>
          <Button
            className="h-12 w-full max-w-xs"
            disabled={!selected}
            onClick={() => {
              if (selected) onReserve?.(selected);
            }}
            size="lg"
            type="button"
          >
            {submitLabel}
          </Button>
        </div>
      </div>
    </section>
  );
}

function MonthGrid({
  month,
  weekdays,
  locale,
  currency,
  prices,
  blocked,
  minDate,
  selected,
  goodPriceThreshold,
  separated,
  unavailableLabel,
  onPick,
}: {
  month: Date;
  weekdays: string[];
  locale: string;
  currency: string;
  prices: Record<string, number>;
  blocked: Set<string>;
  minDate?: Date;
  selected?: Date;
  goodPriceThreshold: number;
  separated: boolean;
  unavailableLabel: string;
  onPick: (day: Date) => void;
}) {
  const cells = monthCells(month);
  const floor = minDate ? startOfDay(minDate) : undefined;

  return (
    <div className={cn("md:px-5", separated && "md:border-l md:border-border")}>
      <p className="mb-3 text-center text-sm font-medium capitalize">
        {monthTitle(month, locale)}
      </p>
      <div className="grid grid-cols-7 gap-1 text-center">
        {weekdays.map((label) => (
          <span
            className="pb-1 text-[10px] font-medium tracking-wide text-muted-foreground"
            key={`${dayKey(month)}-${label}`}
          >
            {label}
          </span>
        ))}
        {cells.map((cell) => {
          if (!cell.date) {
            return <span key={cell.key} />;
          }

          const day = cell.date;
          const key = dayKey(day);
          const price = prices[key];
          const taken = blocked.has(key);
          const tooEarly = floor ? compareDays(day, floor) < 0 : false;
          const disabled = taken || tooEarly || price === undefined;
          const isSelected = selected ? isSameDay(day, selected) : false;
          const isGood =
            price !== undefined && price < goodPriceThreshold && !isSelected;

          return (
            <button
              aria-disabled={disabled}
              aria-label={`${day.toLocaleDateString(locale, {
                weekday: "long",
                month: "long",
                day: "numeric",
              })}${
                price !== undefined
                  ? `, ${formatRate(price, currency, locale)}`
                  : ""
              }${taken ? `, ${unavailableLabel}` : ""}`}
              aria-pressed={isSelected}
              className={cn(
                "flex h-12 flex-col items-center justify-center rounded-[--radius] text-xs tabular-nums transition-colors duration-200 ease-out focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none motion-reduce:transition-none",
                isSelected && "bg-primary text-primary-foreground",
                !isSelected && !disabled && "hover:bg-accent",
                disabled && "cursor-not-allowed opacity-40",
              )}
              disabled={disabled}
              key={cell.key}
              onClick={() => onPick(day)}
              type="button"
            >
              <span className="leading-none">{day.getDate()}</span>
              {price !== undefined ? (
                <span
                  className={cn(
                    "mt-1 text-[10px] font-medium leading-none",
                    isSelected
                      ? "text-primary-foreground/70"
                      : isGood
                        ? "text-success"
                        : "text-muted-foreground",
                  )}
                >
                  {formatRate(price, currency, locale)}
                </span>
              ) : null}
            </button>
          );
        })}
      </div>
    </div>
  );
}
