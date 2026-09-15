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
  { id: "Mon", label: "Mon" },
  { id: "Tue", label: "Tue" },
  { id: "Wed", label: "Wed" },
  { id: "Thu", label: "Thu" },
  { id: "Fri", label: "Fri" },
  { id: "Sat", label: "Sat" },
  { id: "Sun", label: "Sun" },
];

const DEFAULT_SLOTS: VCheckbox11Slot[] = [
  { id: "Morning", label: "Morning" },
  { id: "Afternoon", label: "Afternoon" },
  { id: "Evening", label: "Evening" },
];

const DEFAULT_COPY: VCheckbox11Copy = {
  title: "Weekly Availability",
  selectedLabel: "slots selected",
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
  const reactId = React.useId();
  const headingId = `${reactId}-title`;
  const strings = { ...DEFAULT_COPY, ...copy };
  const [uncontrolled, setUncontrolled] = React.useState(() =>
    uniqueKeys(defaultValue ?? []),
  );
  const selected = uniqueKeys(value ?? uncontrolled);
  const selectedSet = new Set(selected);

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

  return (
    <div
      className={cn("w-full max-w-md space-y-3", className)}
      data-slot="v-checkbox-11"
      {...props}
    >
      <div className="flex items-center justify-between">
        <p className="text-sm font-semibold" id={headingId}>
          {strings.title}
        </p>
        <span className="text-xs text-muted-foreground">
          {selected.length} {strings.selectedLabel}
        </span>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-xs">
          <caption className="sr-only">
            {strings.title}. {selected.length} {strings.selectedLabel}.
          </caption>
          <thead>
            <tr>
              <th className="w-24 pb-2 text-left font-medium text-muted-foreground" />
              {days.map((day) => (
                <th
                  className="pb-2 text-center font-medium text-muted-foreground"
                  key={day.id}
                  scope="col"
                >
                  {day.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {slots.map((slot) => (
              <tr key={slot.id}>
                <td className="py-2 pr-3 text-muted-foreground">{slot.label}</td>
                {days.map((day) => {
                  const key = vCheckbox11CellKey(slot.id, day.id);
                  const checked = selectedSet.has(key);
                  const inputId = `${reactId}-${key}`;
                  return (
                    <td className="py-2 text-center" key={key}>
                      <label
                        className="relative mx-auto inline-flex size-4.5 cursor-pointer items-center justify-center sm:size-4"
                        htmlFor={inputId}
                      >
                        <input
                          checked={checked}
                          className="peer sr-only"
                          disabled={disabled}
                          id={inputId}
                          onChange={() => toggleCell(key)}
                          type="checkbox"
                        />
                        <span
                          aria-hidden="true"
                          className={cn(
                            "relative inline-flex size-4.5 shrink-0 items-center justify-center rounded-[0.25rem] border border-input bg-background text-primary-foreground shadow-xs outline-none transition-[box-shadow,background-color,border-color,color] duration-150 motion-reduce:transition-none sm:size-4 dark:bg-input/30",
                            "peer-focus-visible:ring-2 peer-focus-visible:ring-ring peer-focus-visible:ring-offset-1 peer-focus-visible:ring-offset-background",
                            "peer-disabled:cursor-not-allowed peer-disabled:opacity-[0.64]",
                            checked &&
                              "border-primary bg-primary shadow-none dark:bg-primary",
                          )}
                        >
                          {checked ? (
                            <CheckIcon className="size-3" strokeWidth={2.5} />
                          ) : null}
                        </span>
                        <span className="sr-only">
                          {slot.label} {day.label}
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
    </div>
  );
}
