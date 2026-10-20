"use client";

import { type KeyboardEvent, useRef } from "react";
import { cn } from "@/lib/cn";
import styles from "../style.module.css";

export type SegmentedOption<T extends string> = {
  value: T;
  label: string;
  /** Tabs mode: id of the panel this tab controls. */
  controls?: string;
};

export type SegmentedProps<T extends string> = {
  /** Accessible name for the group, e.g. "Day" or "View". */
  label: string;
  options: readonly SegmentedOption<T>[];
  value: T;
  onChange: (value: T) => void;
  /**
   * "tabs": role=tablist with aria-selected (Day tabs).
   * "toggle": a toggle group with aria-pressed (Cards / List).
   */
  mode?: "tabs" | "toggle";
  /** Show the group label visibly before the buttons. */
  showLabel?: boolean;
  className?: string;
};

/**
 * Accessible tablist / toggle group with a roving tabindex: one Tab stop,
 * arrow keys (and Home/End) move between options and select them.
 */
export function Segmented<T extends string>({
  label,
  options,
  value,
  onChange,
  mode = "tabs",
  showLabel = false,
  className,
}: SegmentedProps<T>) {
  const refs = useRef<(HTMLButtonElement | null)[]>([]);
  const selectedIndex = Math.max(
    0,
    options.findIndex((option) => option.value === value),
  );

  function focusAndSelect(index: number) {
    const next = (index + options.length) % options.length;
    refs.current[next]?.focus();
    onChange(options[next].value);
  }

  function onKeyDown(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    switch (event.key) {
      case "ArrowRight":
      case "ArrowDown":
        event.preventDefault();
        focusAndSelect(index + 1);
        break;
      case "ArrowLeft":
      case "ArrowUp":
        event.preventDefault();
        focusAndSelect(index - 1);
        break;
      case "Home":
        event.preventDefault();
        focusAndSelect(0);
        break;
      case "End":
        event.preventDefault();
        focusAndSelect(options.length - 1);
        break;
    }
  }

  const buttonProps = (option: SegmentedOption<T>, index: number) => ({
    className: styles.segment,
    "data-selected": index === selectedIndex ? "true" : undefined,
    onClick: () => onChange(option.value),
    onKeyDown: (event: KeyboardEvent<HTMLButtonElement>) =>
      onKeyDown(event, index),
    ref: (node: HTMLButtonElement | null) => {
      refs.current[index] = node;
    },
    tabIndex: index === selectedIndex ? 0 : -1,
    type: "button" as const,
  });

  return (
    <div className={cn(styles.segmentedWrap, className)}>
      {showLabel ? (
        <span aria-hidden="true" className={styles.segmentedLabel}>
          {label}
        </span>
      ) : null}
      {mode === "tabs" ? (
        <div aria-label={label} className={styles.segmented} role="tablist">
          {options.map((option, index) => (
            <button
              {...buttonProps(option, index)}
              aria-controls={option.controls}
              aria-selected={index === selectedIndex}
              key={option.value}
              role="tab"
            >
              {option.label}
            </button>
          ))}
        </div>
      ) : (
        <fieldset className={styles.segmented}>
          <legend className="sr-only">{label}</legend>
          {options.map((option, index) => (
            <button
              {...buttonProps(option, index)}
              aria-pressed={index === selectedIndex}
              key={option.value}
            >
              {option.label}
            </button>
          ))}
        </fieldset>
      )}
    </div>
  );
}
