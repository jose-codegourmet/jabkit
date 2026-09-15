"use client";

import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { useState } from "react";
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

const navButtonClassName = cn(
  "inline-flex size-9 items-center justify-center rounded-md p-0 text-muted-foreground/80 outline-none",
  "hover:bg-accent hover:text-foreground",
  "focus-visible:ring-[3px] focus-visible:ring-ring/50",
  "disabled:pointer-events-none disabled:opacity-50",
);

export function PricingCalendar({
  className,
  locale = "en-US",
  goodPriceThreshold = 100,
  prices = pricingCalendarMocks.default.prices,
  defaultMonth,
  numberOfMonths = 2,
  defaultSelected,
  selected: selectedProp,
  onSelect,
  previousMonthLabel = "Go to the previous month",
  nextMonthLabel = "Go to the next month",
  attributionLabel = "Pricing calendar",
  attributionHref = "https://daypicker.dev/",
  attributionName = "React DayPicker",
  ...props
}: PricingCalendarProps) {
  const weekdays = weekdayLabels(locale);
  const monthCount = Math.max(1, numberOfMonths);
  const priceMap = prices ?? {};

  const [viewMonth, setViewMonth] = useState(() =>
    startOfMonth(
      defaultMonth ?? defaultSelected ?? selectedProp ?? new Date(2026, 8, 15),
    ),
  );
  const [uncontrolledSelected, setUncontrolledSelected] = useState<
    Date | undefined
  >(() => (defaultSelected ? startOfDay(defaultSelected) : undefined));
  const selected = selectedProp
    ? startOfDay(selectedProp)
    : uncontrolledSelected;

  const months = Array.from({ length: monthCount }, (_, i) =>
    addMonths(viewMonth, i),
  );

  const pickDay = (day: Date) => {
    const next = startOfDay(day);
    const same = selected ? isSameDay(selected, next) : false;
    const value = same ? undefined : next;
    if (selectedProp === undefined) setUncontrolledSelected(value);
    onSelect?.(value);
  };

  return (
    <section
      className={cn("bg-background text-foreground", className)}
      data-slot="pricing-calendar"
      {...props}
    >
      <div className="flex justify-center px-5 py-16 sm:px-8 sm:py-20">
        <div>
          <div className="relative w-fit rounded-lg border border-border bg-background p-2">
            <div className="absolute top-0 z-10 flex w-full justify-between">
              <button
                aria-label={previousMonthLabel}
                className={navButtonClassName}
                onClick={() => setViewMonth(addMonths(viewMonth, -monthCount))}
                type="button"
              >
                <ChevronLeftIcon className="size-4" />
              </button>
              <button
                aria-label={nextMonthLabel}
                className={navButtonClassName}
                onClick={() => setViewMonth(addMonths(viewMonth, monthCount))}
                type="button"
              >
                <ChevronRightIcon className="size-4" />
              </button>
            </div>

            <div className="relative flex flex-col gap-8 sm:flex-col md:flex-row">
              {months.map((month) => (
                <MonthGrid
                  goodPriceThreshold={goodPriceThreshold}
                  key={dayKey(month)}
                  locale={locale}
                  month={month}
                  onPick={pickDay}
                  prices={priceMap}
                  selected={selected}
                  weekdays={weekdays}
                />
              ))}
            </div>
          </div>
          <p
            aria-live="polite"
            className="mt-4 text-center text-xs text-muted-foreground"
            role="region"
          >
            {attributionLabel} -{" "}
            <a
              className="underline hover:text-foreground"
              href={attributionHref}
              rel="noopener noreferrer"
              target="_blank"
            >
              {attributionName}
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

function MonthGrid({
  month,
  weekdays,
  locale,
  prices,
  selected,
  goodPriceThreshold,
  onPick,
}: {
  month: Date;
  weekdays: string[];
  locale: string;
  prices: Record<string, number>;
  selected?: Date;
  goodPriceThreshold: number;
  onPick: (day: Date) => void;
}) {
  const cells = monthCells(month);

  return (
    <div
      className={cn(
        "relative w-full first-of-type:before:hidden",
        "before:absolute before:bg-border",
        "max-md:before:inset-x-2 max-md:before:-top-4 max-md:before:h-px",
        "md:before:-left-4 md:before:inset-y-2 md:before:w-px",
      )}
    >
      <div className="relative z-20 mx-10 mb-1 flex h-9 items-center justify-center">
        <p className="text-sm font-medium capitalize">
          {monthTitle(month, locale)}
        </p>
      </div>
      <div className="grid w-fit grid-cols-7">
        {weekdays.map((label) => (
          <span
            className="flex w-12 items-center justify-center p-0 text-xs font-medium text-muted-foreground/80"
            key={`${dayKey(month)}-${label}`}
          >
            {label}
          </span>
        ))}
        {cells.map((cell) => {
          if (!cell.date) {
            return <span className="size-12" key={cell.key} />;
          }

          const day = cell.date;
          const key = dayKey(day);
          const price = prices[key];
          const disabled = price === undefined;
          const isSelected = selected ? isSameDay(day, selected) : false;
          const isGoodPrice =
            price !== undefined && price < goodPriceThreshold && !isSelected;

          return (
            <div
              className="group"
              data-disabled={disabled ? "" : undefined}
              data-selected={isSelected ? "" : undefined}
              key={cell.key}
            >
              <button
                aria-disabled={disabled}
                aria-label={`${day.toLocaleDateString(locale, {
                  weekday: "long",
                  month: "long",
                  day: "numeric",
                })}${price !== undefined ? `, $${price}` : ""}`}
                aria-pressed={isSelected}
                className={cn(
                  "relative flex size-12 flex-col items-center justify-center rounded-md p-0 text-sm whitespace-nowrap text-foreground outline-none",
                  "hover:bg-accent hover:text-foreground",
                  "group-data-selected:bg-primary group-data-selected:text-primary-foreground group-data-selected:hover:bg-primary",
                  "group-data-disabled:pointer-events-none group-data-disabled:text-foreground/30 group-data-disabled:line-through",
                  "focus-visible:z-10 focus-visible:ring-[3px] focus-visible:ring-ring/50",
                  "motion-safe:group-data-selected:duration-150 motion-reduce:transition-none",
                )}
                disabled={disabled}
                onClick={() => onPick(day)}
                type="button"
              >
                <span className="flex flex-col items-center leading-none">
                  {day.getDate()}
                  {price !== undefined ? (
                    <span
                      className={cn(
                        "mt-0.5 text-[10px] font-medium",
                        isGoodPrice
                          ? "text-success"
                          : "text-muted-foreground group-data-selected:text-primary-foreground/70",
                      )}
                    >
                      ${price}
                    </span>
                  ) : null}
                </span>
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
