"use client";

import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import * as React from "react";
import { ScrollArea } from "@/atoms/scroll-area";
import { cn } from "@/lib/cn";
import type {
  Calendar03Copy,
  Calendar03Props,
  Calendar03Slot,
} from "./Calendar03.types";

const DEFAULT_COPY: Calendar03Copy = {
  timesLabel: "Available Times",
  previousMonth: "Previous month",
  nextMonth: "Next month",
  emptyTimes: "No times are open on this date.",
};

const DEFAULT_SLOTS: Calendar03Slot[] = [
  { value: "09:00", label: "09:00 AM" },
  { value: "09:30", label: "09:30 AM" },
  { value: "10:00", label: "10:00 AM" },
  { value: "10:30", label: "10:30 AM" },
  { value: "11:00", label: "11:00 AM" },
  { value: "11:30", label: "11:30 AM" },
  { value: "13:00", label: "01:00 PM" },
  { value: "13:30", label: "01:30 PM" },
  { value: "14:00", label: "02:00 PM" },
  { value: "14:30", label: "02:30 PM" },
  { value: "15:00", label: "03:00 PM" },
  { value: "15:30", label: "03:30 PM" },
  { value: "16:00", label: "04:00 PM" },
  { value: "16:30", label: "04:30 PM" },
];

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

function isSameMonth(a: Date, b: Date) {
  return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth();
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

function weekdayLabels(locale: string, start: number) {
  const formatter = new Intl.DateTimeFormat(locale, { weekday: "short" });
  return Array.from({ length: 7 }, (_, index) => {
    const day = new Date(2024, 0, 7 + start + index);
    return formatter.format(day);
  });
}

function monthCells(month: Date, startWeekday: number) {
  const first = startOfMonth(month);
  const offset = (first.getDay() - startWeekday + 7) % 7;
  const daysInMonth = new Date(
    month.getFullYear(),
    month.getMonth() + 1,
    0,
  ).getDate();
  const cells: Date[] = [];

  for (let i = 0; i < offset; i++) {
    cells.push(new Date(month.getFullYear(), month.getMonth(), i - offset + 1));
  }
  for (let day = 1; day <= daysInMonth; day++) {
    cells.push(new Date(month.getFullYear(), month.getMonth(), day));
  }
  const remainder = cells.length % 7;
  if (remainder !== 0) {
    const last = cells[cells.length - 1];
    for (let i = 1; i <= 7 - remainder; i++) {
      cells.push(
        new Date(last.getFullYear(), last.getMonth(), last.getDate() + i),
      );
    }
  }

  return cells;
}

const controlFocus =
  "focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none";

export function Calendar03({
  className,
  defaultMonth,
  defaultSelected,
  selected: selectedProp,
  onSelect,
  defaultTime,
  time: timeProp,
  onTimeChange,
  slots = DEFAULT_SLOTS,
  copy,
  locale = "en-US",
  weekStartsOn = 0,
  ...props
}: Calendar03Props) {
  const headingId = React.useId();
  const timesId = React.useId();
  const strings = { ...DEFAULT_COPY, ...copy };
  const weekdays = weekdayLabels(locale, weekStartsOn);

  const [viewMonth, setViewMonth] = React.useState(() =>
    startOfMonth(defaultMonth ?? defaultSelected ?? new Date()),
  );
  const [uncontrolledSelected, setUncontrolledSelected] = React.useState<
    Date | undefined
  >(() => (defaultSelected ? startOfDay(defaultSelected) : undefined));
  const [uncontrolledTime, setUncontrolledTime] = React.useState(
    defaultTime ?? "",
  );

  const selected = selectedProp
    ? startOfDay(selectedProp)
    : uncontrolledSelected;
  const time = timeProp ?? uncontrolledTime;
  const cells = monthCells(viewMonth, weekStartsOn);
  const weeks = Array.from({ length: cells.length / 7 }, (_, index) =>
    cells.slice(index * 7, index * 7 + 7),
  );

  const pickDay = (day: Date) => {
    const next = startOfDay(day);
    if (selectedProp === undefined) setUncontrolledSelected(next);
    if (!isSameMonth(next, viewMonth)) {
      setViewMonth(startOfMonth(next));
    }
    onSelect?.(next);
  };

  const pickTime = (value: string) => {
    if (timeProp === undefined) setUncontrolledTime(value);
    onTimeChange?.(value);
  };

  return (
    <section
      data-slot="calendar-03"
      aria-labelledby={headingId}
      className={cn(
        "flex w-fit divide-x divide-border overflow-hidden rounded-md border border-border bg-background text-foreground",
        className,
      )}
      {...props}
    >
      <div
        data-slot="calendar"
        className="bg-background p-2 [--cell-size:1.75rem]"
      >
        <div className="relative flex w-fit flex-col gap-4">
          <div className="absolute inset-x-0 top-0 flex w-full items-center justify-between gap-1">
            <button
              type="button"
              aria-label={strings.previousMonth}
              onClick={() => setViewMonth(addMonths(viewMonth, -1))}
              className={cn(
                "inline-flex size-[var(--cell-size)] items-center justify-center rounded-lg p-0 text-foreground transition-colors select-none hover:bg-muted hover:text-foreground motion-reduce:transition-none",
                controlFocus,
              )}
            >
              <ChevronLeftIcon className="size-4" />
            </button>
            <button
              type="button"
              aria-label={strings.nextMonth}
              onClick={() => setViewMonth(addMonths(viewMonth, 1))}
              className={cn(
                "inline-flex size-[var(--cell-size)] items-center justify-center rounded-lg p-0 text-foreground transition-colors select-none hover:bg-muted hover:text-foreground motion-reduce:transition-none",
                controlFocus,
              )}
            >
              <ChevronRightIcon className="size-4" />
            </button>
          </div>
          <div className="flex h-[var(--cell-size)] w-full items-center justify-center px-[var(--cell-size)]">
            <h2
              id={headingId}
              className="text-sm font-medium capitalize select-none"
            >
              {monthTitle(viewMonth, locale)}
            </h2>
          </div>
          <div className="w-full">
            <div className="flex">
              {weekdays.map((label) => (
                <span
                  key={`${locale}-${label}`}
                  className="flex-1 rounded-md text-center text-[0.8rem] font-normal text-muted-foreground select-none"
                >
                  {label}
                </span>
              ))}
            </div>
            {weeks.map((week) => (
              <div key={dayKey(week[0])} className="mt-2 flex w-full">
                {week.map((day) => {
                  const isSelected = selected ? isSameDay(day, selected) : false;
                  const isToday = isSameDay(day, startOfDay(new Date()));
                  const inMonth = isSameMonth(day, viewMonth);
                  return (
                    <div
                      key={dayKey(day)}
                      className="group/day relative aspect-square h-full w-full rounded-md p-0 text-center select-none"
                    >
                      <button
                        type="button"
                        onClick={() => pickDay(day)}
                        aria-pressed={isSelected}
                        aria-current={isToday ? "date" : undefined}
                        aria-label={day.toLocaleDateString(locale, {
                          weekday: "long",
                          month: "long",
                          day: "numeric",
                        })}
                        className={cn(
                          "relative isolate z-10 flex aspect-square size-auto w-full min-w-[var(--cell-size)] items-center justify-center rounded-md border border-transparent p-0 text-sm leading-none font-normal transition-colors motion-reduce:transition-none",
                          controlFocus,
                          inMonth
                            ? "text-foreground"
                            : "text-muted-foreground",
                          isSelected &&
                            "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground",
                          !isSelected && isToday && "bg-muted text-foreground",
                          !isSelected && "hover:bg-muted hover:text-foreground",
                        )}
                      >
                        {day.getDate()}
                      </button>
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="relative w-[249px] self-stretch overflow-hidden">
        <div className="absolute inset-0 grid min-h-0 grid-rows-[auto_minmax(0,1fr)] gap-4">
          <div className="space-y-2 px-4 pt-4">
            <p
              id={timesId}
              className="text-center text-sm font-medium"
            >
              {strings.timesLabel}
            </p>
          </div>
          <ScrollArea
            aria-labelledby={timesId}
            className="h-full overflow-y-auto"
          >
            {slots.length === 0 ? (
              <p className="px-4 pb-4 text-center text-sm text-muted-foreground">
                {strings.emptyTimes}
              </p>
            ) : (
              <div className="grid grid-cols-1 gap-2 px-4 pb-4">
                {slots.map((slot) => {
                  const taken = slot.available === false;
                  const active = slot.value === time && !taken;
                  return (
                    <button
                      key={slot.value}
                      type="button"
                      disabled={taken}
                      aria-pressed={active}
                      onClick={() => pickTime(slot.value)}
                      className={cn(
                        "inline-flex h-7 w-full items-center justify-center rounded-md border px-2.5 text-[0.8rem] font-medium whitespace-nowrap transition-all select-none motion-reduce:transition-none disabled:pointer-events-none disabled:opacity-50",
                        controlFocus,
                        active &&
                          "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
                        !active &&
                          !taken &&
                          "border-border bg-background hover:bg-muted hover:text-foreground",
                        taken &&
                          "border-border bg-muted text-muted-foreground",
                      )}
                    >
                      {slot.label}
                    </button>
                  );
                })}
              </div>
            )}
          </ScrollArea>
        </div>
      </div>
    </section>
  );
}
