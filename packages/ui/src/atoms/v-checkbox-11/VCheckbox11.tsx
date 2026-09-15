"use client";

import { CheckIcon } from "lucide-react";
import * as React from "react";
import { cn } from "@/lib/cn";
import {
  type VCheckbox11Copy,
  type VCheckbox11Day,
  type VCheckbox11Props,
  type VCheckbox11Slot,
  vCheckbox11CellKey,
} from "./VCheckbox11.types";

const DEFAULT_DAYS: VCheckbox11Day[] = [
  { id: "mon", label: "Mon" },
  { id: "tue", label: "Tue" },
  { id: "wed", label: "Wed" },
  { id: "thu", label: "Thu" },
  { id: "fri", label: "Fri" },
  { id: "sat", label: "Sat" },
  { id: "sun", label: "Sun" },
];

const DEFAULT_SLOTS: VCheckbox11Slot[] = [
  { id: "09:00", label: "9:00 AM" },
  { id: "11:00", label: "11:00 AM" },
  { id: "13:00", label: "1:00 PM" },
  { id: "15:00", label: "3:00 PM" },
  { id: "17:00", label: "5:00 PM" },
];

const DEFAULT_COPY: VCheckbox11Copy = {
  title: "Weekly availability",
  description: "Tick the hours you can take calls this week.",
  selectedLabel: "selected",
  clearLabel: "Clear",
  toggleDayLabel: "Toggle all hours for",
};

function uniqueKeys(keys: readonly string[]) {
  return [...new Set(keys)];
}

export function VCheckbox11({
  className,
  days = DEFAULT_DAYS,
  slots = DEFAULT_SLOTS,
  value,
  defaultValue,
  onValueChange,
  copy,
  disabled = false,
  ...props
}: VCheckbox11Props) {
  const headingId = React.useId();
  const descriptionId = React.useId();
  const strings = { ...DEFAULT_COPY, ...copy };
  const [uncontrolled, setUncontrolled] = React.useState(() =>
    uniqueKeys(defaultValue ?? []),
  );
  const selected = uniqueKeys(value ?? uncontrolled);
  const selectedSet = new Set(selected);
  const total = days.length * slots.length;

  const commit = (next: string[]) => {
    const unique = uniqueKeys(next);
    if (value === undefined) setUncontrolled(unique);
    onValueChange?.(unique);
  };

  const toggleCell = (key: string) => {
    if (selectedSet.has(key)) {
      commit(selected.filter((item) => item !== key));
      return;
    }
    commit([...selected, key]);
  };

  const toggleDay = (dayId: string) => {
    const keys = slots.map((slot) => vCheckbox11CellKey(dayId, slot.id));
    const allOn = keys.every((key) => selectedSet.has(key));
    if (allOn) {
      commit(selected.filter((item) => !keys.includes(item)));
      return;
    }
    commit([...selected, ...keys]);
  };

  return (
    <section
      aria-describedby={descriptionId}
      aria-labelledby={headingId}
      className={cn(
        "w-full max-w-[40rem] overflow-hidden rounded-[--radius] border border-border bg-card text-card-foreground shadow-sm",
        className,
      )}
      data-slot="v-checkbox-11"
      {...props}
    >
      <header className="flex flex-col gap-3 border-b border-border px-5 py-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="min-w-0">
          <h2 className="text-base font-semibold tracking-tight" id={headingId}>
            {strings.title}
          </h2>
          <p className="mt-1 text-sm text-muted-foreground" id={descriptionId}>
            {strings.description}
          </p>
        </div>
        <div className="flex shrink-0 items-center gap-2">
          <p className="rounded-full bg-secondary px-2.5 py-1 text-xs font-medium text-secondary-foreground tabular-nums">
            {selected.length} {strings.selectedLabel}
          </p>
          <button
            className="rounded-[--radius] px-2 py-1 text-xs font-medium text-muted-foreground transition-colors motion-reduce:transition-none hover:bg-accent hover:text-accent-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50"
            disabled={disabled || selected.length === 0}
            onClick={() => commit([])}
            type="button"
          >
            {strings.clearLabel}
          </button>
        </div>
      </header>

      <div className="overflow-x-auto p-4">
        <table className="w-full min-w-[28rem] border-separate border-spacing-y-1 text-sm">
          <caption className="sr-only">
            {strings.title}. {selected.length} of {total}{" "}
            {strings.selectedLabel}.
          </caption>
          <thead>
            <tr>
              <th className="w-24 px-1 pb-2 text-left text-xs font-medium text-muted-foreground">
                Time
              </th>
              {days.map((day) => (
                <th className="px-1 pb-2 text-center" key={day.id} scope="col">
                  <button
                    aria-label={`${strings.toggleDayLabel} ${day.label}`}
                    className="inline-flex min-w-10 items-center justify-center rounded-md px-1.5 py-1 text-xs font-medium tracking-wide text-muted-foreground uppercase transition-colors motion-reduce:transition-none hover:bg-accent hover:text-accent-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50"
                    disabled={disabled}
                    onClick={() => toggleDay(day.id)}
                    type="button"
                  >
                    {day.label}
                  </button>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {slots.map((slot) => (
              <tr key={slot.id}>
                <th
                  className="px-1 py-1 text-left text-xs font-medium text-muted-foreground tabular-nums"
                  scope="row"
                >
                  {slot.label}
                </th>
                {days.map((day) => {
                  const key = vCheckbox11CellKey(day.id, slot.id);
                  const checked = selectedSet.has(key);
                  return (
                    <td className="px-1 py-1 text-center" key={key}>
                      <label className="relative mx-auto flex size-8 cursor-pointer items-center justify-center">
                        <input
                          checked={checked}
                          className="peer sr-only"
                          disabled={disabled}
                          onChange={() => toggleCell(key)}
                          type="checkbox"
                        />
                        <span
                          className={cn(
                            "flex size-5 items-center justify-center rounded-[4px] border border-input bg-background text-primary-foreground shadow-sm transition-[transform,background-color,border-color,color] duration-150 ease-out motion-reduce:transition-none peer-focus-visible:ring-2 peer-focus-visible:ring-ring peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
                            checked && "border-primary bg-primary",
                            !checked &&
                              "hover:border-ring hover:bg-accent peer-disabled:hover:border-input peer-disabled:hover:bg-background",
                            checked &&
                              "peer-active:scale-95 motion-reduce:peer-active:scale-100",
                          )}
                        >
                          {checked ? (
                            <CheckIcon
                              aria-hidden="true"
                              className="size-3.5"
                            />
                          ) : null}
                        </span>
                        <span className="sr-only">
                          {day.label} {slot.label}
                        </span>
                      </label>
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
