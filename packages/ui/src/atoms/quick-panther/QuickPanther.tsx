"use client";

// biome-ignore lint/correctness/noUnusedImports: packages/ui uses the classic JSX runtime.
import * as React from "react";
import { cn } from "@/lib/cn";
import type { QuickPantherOption, QuickPantherProps } from "./QuickPanther.types";

const DEFAULT_OPTIONS: readonly QuickPantherOption[] = [
  {
    value: "starter",
    title: "Starter",
    description: "Solo projects and weekend experiments.",
    price: "$9",
  },
  {
    value: "pro",
    title: "Pro",
    description: "Shared workspaces with priority support.",
    price: "$24",
  },
  {
    value: "studio",
    title: "Studio",
    description: "Unlimited seats and custom reviews.",
    price: "$64",
  },
];

export function QuickPanther({
  className,
  options = DEFAULT_OPTIONS,
  value,
  defaultValue,
  name,
  onValueChange,
  legend = "Choose a plan",
  description,
  disabled = false,
  ...props
}: QuickPantherProps) {
  const generatedName = React.useId();
  const headingId = React.useId();
  const descriptionId = React.useId();
  const groupName = name ?? generatedName;
  const fallback = defaultValue ?? options[0]?.value ?? "";
  const [uncontrolled, setUncontrolled] = React.useState(fallback);
  const selected = value ?? uncontrolled;

  const commit = (next: string) => {
    if (value === undefined) setUncontrolled(next);
    onValueChange?.(next);
  };

  return (
    <fieldset
      aria-describedby={description ? descriptionId : undefined}
      className={cn(
        "jk-quick-panther w-full max-w-[22rem] rounded-[--radius] border border-border bg-card p-2 text-card-foreground",
        className,
      )}
      data-slot="quick-panther"
      disabled={disabled}
      {...props}
    >
      <style href="jk-quick-panther" precedence="default">{`
        .jk-quick-panther-option {
          box-shadow: inset 0 0 0 1px transparent;
        }
        .jk-quick-panther-option:hover {
          background: color-mix(in oklch, var(--jk-accent) 72%, transparent);
        }
        .jk-quick-panther-option[data-checked="true"] {
          background: color-mix(in oklch, var(--jk-primary) 14%, var(--jk-card));
          box-shadow:
            inset 0 0 0 1px color-mix(in oklch, var(--jk-primary) 70%, var(--jk-border)),
            0 0 22px color-mix(in oklch, var(--jk-ring) 38%, transparent);
        }
        .jk-quick-panther-dot {
          box-shadow: inset 0 0 0 1.5px var(--jk-input);
        }
        .jk-quick-panther-option[data-checked="true"] .jk-quick-panther-dot {
          background: var(--jk-primary);
          box-shadow:
            inset 0 0 0 2px var(--jk-card),
            0 0 0 2px var(--jk-primary),
            0 0 16px color-mix(in oklch, var(--jk-ring) 55%, transparent);
        }
        .jk-quick-panther-option:has(:focus-visible) {
          outline: 2px solid var(--jk-ring);
          outline-offset: 2px;
        }
        @media (prefers-reduced-motion: no-preference) {
          .jk-quick-panther-option,
          .jk-quick-panther-dot {
            transition:
              background-color 220ms ease,
              box-shadow 220ms ease,
              transform 180ms ease;
          }
          .jk-quick-panther-option[data-checked="true"] {
            transform: translateY(-1px);
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .jk-quick-panther-option,
          .jk-quick-panther-dot {
            transition: none;
          }
        }
      `}</style>
      <legend
        className="px-2 pt-1 text-sm font-semibold tracking-tight text-foreground"
        id={headingId}
      >
        {legend}
      </legend>
      {description ? (
        <p
          className="px-2 pb-2 text-xs text-muted-foreground"
          id={descriptionId}
        >
          {description}
        </p>
      ) : null}
      <div className="flex flex-col gap-1.5" role="presentation">
        {options.map((option) => {
          const checked = option.value === selected;
          const optionDisabled = disabled || option.disabled;
          return (
            <label
              className={cn(
                "jk-quick-panther-option relative flex cursor-pointer items-start gap-3 rounded-[calc(var(--radius)-2px)] px-3 py-2.5",
                optionDisabled && "pointer-events-none opacity-50",
              )}
              data-checked={checked ? "true" : "false"}
              key={option.value}
            >
              <input
                checked={checked}
                className="sr-only"
                disabled={optionDisabled}
                name={groupName}
                onChange={() => commit(option.value)}
                type="radio"
                value={option.value}
              />
              <span
                aria-hidden="true"
                className="jk-quick-panther-dot mt-0.5 size-4 shrink-0 rounded-full bg-background"
              />
              <span className="min-w-0 flex-1">
                <span className="flex items-baseline justify-between gap-3">
                  <span className="text-sm font-medium text-foreground">
                    {option.title}
                  </span>
                  {option.price ? (
                    <span className="shrink-0 text-sm font-semibold tabular-nums text-foreground">
                      {option.price}
                    </span>
                  ) : null}
                </span>
                {option.description ? (
                  <span className="mt-0.5 block text-xs leading-relaxed text-muted-foreground">
                    {option.description}
                  </span>
                ) : null}
              </span>
            </label>
          );
        })}
      </div>
    </fieldset>
  );
}
