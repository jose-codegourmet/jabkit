"use client";

import { CheckIcon } from "lucide-react";
// biome-ignore lint/correctness/noUnusedImports: Storybook supports the classic JSX runtime.
import * as React from "react";
import { useId, useState } from "react";
import { cn } from "@/lib/cn";
import type { StepperWithTitlesProps } from "./StepperWithTitles.types";

export function StepperWithTitles({
  className,
  steps,
  value,
  defaultValue = 1,
  onValueChange,
  ...props
}: StepperWithTitlesProps) {
  const labelId = useId();
  const [uncontrolled, setUncontrolled] = useState(defaultValue);
  const current = value ?? uncontrolled;
  const currentTitle = steps[current - 1]?.title ?? "";

  function selectStep(step: number) {
    if (steps[step - 1]?.disabled) return;
    if (value === undefined) setUncontrolled(step);
    onValueChange?.(step);
  }

  function moveBy(delta: number) {
    let next = current + delta;
    while (next >= 1 && next <= steps.length && steps[next - 1]?.disabled) {
      next += delta;
    }
    if (next >= 1 && next <= steps.length) selectStep(next);
  }

  return (
    <div
      className={cn("w-full min-w-[20rem] text-center", className)}
      data-slot="stepper-with-titles"
      onKeyDown={(event) => {
        if (event.key === "ArrowRight") {
          event.preventDefault();
          moveBy(1);
        }
        if (event.key === "ArrowLeft") {
          event.preventDefault();
          moveBy(-1);
        }
      }}
      {...props}
    >
      <ol
        aria-labelledby={labelId}
        className="flex w-full items-start"
        data-orientation="horizontal"
      >
        {steps.map((item, index) => {
          const step = index + 1;
          const isComplete = step < current;
          const isCurrent = step === current;
          const isLast = step === steps.length;

          return (
            <li
              className="group/step relative flex flex-1 flex-col items-center"
              data-complete={isComplete || undefined}
              data-current={isCurrent || undefined}
              key={`${item.title}-${step}`}
            >
              {!isLast ? (
                <span
                  aria-hidden="true"
                  className={cn(
                    "pointer-events-none absolute top-3 left-[calc(50%+0.875rem)] h-px w-[calc(100%-1.75rem)] -translate-y-1/2 motion-reduce:transition-none",
                    isComplete ? "bg-primary" : "bg-border",
                    "motion-safe:transition-colors motion-safe:duration-200",
                  )}
                />
              ) : null}
              <button
                aria-current={isCurrent ? "step" : undefined}
                className={cn(
                  "relative z-10 flex w-full flex-col items-center gap-3 rounded-[--radius] px-1 outline-none",
                  "focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                  "disabled:pointer-events-none disabled:opacity-50",
                )}
                disabled={item.disabled}
                onClick={() => selectStep(step)}
                type="button"
              >
                <span
                  className={cn(
                    "flex size-6 shrink-0 items-center justify-center rounded-full text-xs font-medium",
                    "motion-reduce:transition-none motion-safe:transition-colors motion-safe:duration-200",
                    isComplete || isCurrent
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground",
                  )}
                >
                  {isComplete ? (
                    <CheckIcon aria-hidden="true" className="size-3.5" />
                  ) : (
                    step
                  )}
                </span>
                <span className="space-y-0.5 px-1">
                  <span
                    className={cn(
                      "block text-sm font-medium",
                      isCurrent || isComplete
                        ? "text-foreground"
                        : "text-muted-foreground",
                    )}
                  >
                    {item.title}
                  </span>
                  {item.description ? (
                    <span className="hidden text-xs text-muted-foreground sm:block">
                      {item.description}
                    </span>
                  ) : null}
                </span>
              </button>
            </li>
          );
        })}
      </ol>
      <p className="sr-only" id={labelId}>
        Progress
      </p>
      <p
        aria-live="polite"
        className="mt-3 text-xs text-muted-foreground"
        role="status"
      >
        {currentTitle ? `Current step: ${currentTitle}` : null}
      </p>
    </div>
  );
}
