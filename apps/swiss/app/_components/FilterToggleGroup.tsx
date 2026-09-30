"use client";

import type { ReactNode } from "react";
import styles from "../style.module.css";

export interface FilterOption {
  value: string;
  label: string;
}

export function FilterToggleGroup({
  label,
  options,
  selected,
  onChange,
  onClear,
  clearSlot,
}: {
  label: string;
  options: FilterOption[];
  selected: string[];
  onChange: (values: string[]) => void;
  onClear?: () => void;
  clearSlot?: ReactNode;
}) {
  return (
    <fieldset className={styles.filterGroup}>
      <legend>{label}</legend>
      <div className={styles.filters}>
        {options.map((option) => {
          const active = selected.includes(option.value);
          return (
            <button
              key={option.value}
              type="button"
              className={styles.filterButton}
              aria-pressed={active}
              onClick={() =>
                onChange(
                  active
                    ? selected.filter((value) => value !== option.value)
                    : [...selected, option.value],
                )
              }
            >
              {active ? <span aria-hidden="true">✓ </span> : null}
              {option.label}
            </button>
          );
        })}
        {clearSlot ??
          (onClear ? (
            <button
              type="button"
              className={styles.clearFilters}
              onClick={onClear}
            >
              Clear filters
            </button>
          ) : null)}
      </div>
    </fieldset>
  );
}
