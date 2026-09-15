"use client";

import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import * as React from "react";
import { Button } from "@/atoms/button";
import { ScrollArea } from "@/atoms/scroll-area";
import { cn } from "@/lib/cn";
import type {
  Calendar03Copy,
  Calendar03Props,
  Calendar03Slot,
} from "./Calendar03.types";

const DEFAULT_COPY: Calendar03Copy = {
  title: "Book an appointment",
  description: "Choose a date, then pick an open time.",
  timesLabel: "Available times",
  previousMonth: "Previous month",
  nextMonth: "Next month",
  confirmLabel: "Continue",
  emptyTimes: "No times are open on this date.",
};

const DEFAULT_SLOTS: Calendar03Slot[] = [
  { value: "09:00", label: "9:00 AM" },
  { value: "09:30", label: "9:30 AM" },
  { value: "10:00", label: "10:00 AM" },
  { value: "10:30", label: "10:30 AM" },
  { value: "11:00", label: "11:00 AM" },
  { value: "13:00", label: "1:00 PM" },
  { value: "13:30", label: "1:30 PM" },
  { value: "14:00", label: "2:00 PM" },
  { value: "15:00", label: "3:00 PM" },
  { value: "16:00", label: "4:00 PM" },
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
  onConfirm,
  ...props
}: Calendar03Props) {
  const headingId = React.useId();
  const descriptionId = React.useId();
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
    defaultTime ?? slots.find((slot) => slot.available !== false)?.value ?? "",
  );

  const selected = selectedProp
    ? startOfDay(selectedProp)
    : uncontrolledSelected;
  const time = timeProp ?? uncontrolledTime;
  const selectedSlot = slots.find((slot) => slot.value === time);
  const cells = monthCells(viewMonth, weekStartsOn);

  const pickDay = (day: Date) => {
    const next = startOfDay(day);
    if (selectedProp === undefined) setUncontrolledSelected(next);
    onSelect?.(next);
  };

  const pickTime = (value: string) => {
    if (timeProp === undefined) setUncontrolledTime(value);
    onTimeChange?.(value);
  };

  const confirm = () => {
    if (!selected || !time) return;
    onConfirm?.({ date: selected, time });
  };

  return (
    <section
      data-slot="calendar-03"
      aria-labelledby={headingId}
      aria-describedby={descriptionId}
      className={cn(
        "w-full max-w-[40rem] overflow-hidden rounded-[--radius] border border-border bg-card text-card-foreground shadow-sm",
        className,
      )}
      {...props}
    >
      <header className="border-b border-border px-5 py-4">
        <h2 id={headingId} className="text-base font-semibold tracking-tight">
          {strings.title}
        </h2>
        <p id={descriptionId} className="mt-1 text-sm text-muted-foreground">
          {strings.description}
        </p>
      </header>

      <div className="grid md:grid-cols-[minmax(0,1.15fr)_minmax(11rem,0.85fr)]">
        <div className="border-b border-border p-4 md:border-r md:border-b-0">
          <div className="mb-3 flex items-center justify-between gap-2">
            <Button
              type="button"
              variant="ghost"
              size="sm"
              className="size-8 p-0"
              aria-label={strings.previousMonth}
              onClick={() => setViewMonth(addMonths(viewMonth, -1))}
            >
              <ChevronLeftIcon className="size-4" />
            </Button>
            <p className="text-sm font-medium capitalize">
              {monthTitle(viewMonth, locale)}
            </p>
            <Button
              type="button"
              variant="ghost"
              size="sm"
              className="size-8 p-0"
              aria-label={strings.nextMonth}
              onClick={() => setViewMonth(addMonths(viewMonth, 1))}
            >
              <ChevronRightIcon className="size-4" />
            </Button>
          </div>
          <div className="grid grid-cols-7 gap-1 text-center">
            {weekdays.map((label) => (
              <span
                key={`${locale}-${label}`}
                className="text-[10px] font-medium tracking-wide text-muted-foreground uppercase"
              >
                {label}
              </span>
            ))}
            {cells.map((cell) => {
              if (!cell.date) {
                return <span key={cell.key} />;
              }
              const day = cell.date;
              const isSelected = selected ? isSameDay(day, selected) : false;
              const isToday = isSameDay(day, startOfDay(new Date()));
              return (
                <button
                  key={cell.key}
                  type="button"
                  onClick={() => pickDay(day)}
                  aria-pressed={isSelected}
                  aria-label={day.toLocaleDateString(locale, {
                    weekday: "long",
                    month: "long",
                    day: "numeric",
                  })}
                  className={cn(
                    "h-8 rounded-md text-xs tabular-nums transition-colors motion-reduce:transition-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none",
                    isSameMonth(day, viewMonth)
                      ? "text-foreground"
                      : "text-muted-foreground",
                    isSelected && "bg-primary text-primary-foreground",
                    !isSelected && isToday && "ring-1 ring-ring",
                    !isSelected && "hover:bg-accent",
                  )}
                >
                  {day.getDate()}
                </button>
              );
            })}
          </div>
        </div>

        <div className="flex min-h-[17rem] flex-col p-4">
          <p
            id={timesId}
            className="mb-2 text-xs font-medium tracking-wide text-muted-foreground"
          >
            {strings.timesLabel}
          </p>
          <ScrollArea aria-labelledby={timesId} className="min-h-0 flex-1 pr-1">
            {slots.length === 0 ? (
              <p className="text-sm text-muted-foreground">
                {strings.emptyTimes}
              </p>
            ) : (
              <ul className="flex flex-col gap-1.5">
                {slots.map((slot) => {
                  const taken = slot.available === false;
                  const active = slot.value === time && !taken;
                  return (
                    <li key={slot.value}>
                      <button
                        type="button"
                        disabled={taken}
                        aria-pressed={active}
                        onClick={() => pickTime(slot.value)}
                        className={cn(
                          "flex h-9 w-full items-center justify-center rounded-[--radius] border text-sm transition-colors motion-reduce:transition-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none",
                          active &&
                            "border-primary bg-primary text-primary-foreground",
                          !active &&
                            !taken &&
                            "border-border bg-background text-foreground hover:bg-accent",
                          taken &&
                            "cursor-not-allowed border-border bg-muted text-muted-foreground",
                        )}
                      >
                        {slot.label}
                      </button>
                    </li>
                  );
                })}
              </ul>
            )}
          </ScrollArea>
        </div>
      </div>

      <footer className="flex flex-col gap-3 border-t border-border px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-muted-foreground">
          {selected
            ? `${selected.toLocaleDateString(locale, {
                weekday: "short",
                month: "short",
                day: "numeric",
              })}${selectedSlot ? ` · ${selectedSlot.label}` : ""}`
            : strings.description}
        </p>
        <Button
          type="button"
          size="sm"
          disabled={!selected || !time}
          onClick={confirm}
        >
          {strings.confirmLabel}
        </Button>
      </footer>
    </section>
  );
}
