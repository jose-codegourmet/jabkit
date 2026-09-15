"use client";

import { CheckIcon } from "lucide-react";
// biome-ignore lint/correctness/noUnusedImports: Storybook supports the classic JSX runtime.
import * as React from "react";
import { useState } from "react";
import { cn } from "@/lib/cn";
import type { StepperVerticalInlineProps } from "./StepperVerticalInline.types";

export function StepperVerticalInline({
  className,
  steps,
  value,
  defaultValue = 2,
  onValueChange,
  caption = "Vertical stepper with inline titles and descriptions",
  ...props
}: StepperVerticalInlineProps) {
  const [uncontrolled, setUncontrolled] = useState(defaultValue);
  const activeStep = value ?? uncontrolled;

  function setActiveStep(step: number) {
    if (steps[step - 1]?.disabled) return;
    if (value === undefined) setUncontrolled(step);
    onValueChange?.(step);
  }

  return (
    <div
      className={cn("min-w-[300px] space-y-8 text-center", className)}
      data-slot="stepper-vertical-inline"
      {...props}
    >
      <div
        className="group/stepper inline-flex w-full flex-col"
        data-orientation="vertical"
        data-slot="stepper-vertical-inline-list"
      >
        {steps.map((item, index) => {
          const step = index + 1;
          const state =
            step < activeStep
              ? "completed"
              : activeStep === step
                ? "active"
                : "inactive";
          const isLast = step === steps.length;

          return (
            <div
              className={cn(
                "group/step relative flex items-start group-data-[orientation=vertical]/stepper:flex-col",
                !isLast && "flex-1",
              )}
              data-slot="stepper-vertical-inline-item"
              data-state={state}
              key={`${item.title}-${step}`}
            >
              <button
                aria-current={state === "active" ? "step" : undefined}
                className={cn(
                  "inline-flex items-start gap-3 rounded-full pb-12 outline-none last:pb-0",
                  "focus-visible:z-10 focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50",
                  "disabled:pointer-events-none disabled:opacity-50",
                )}
                data-slot="stepper-vertical-inline-trigger"
                disabled={item.disabled}
                onClick={() => setActiveStep(step)}
                type="button"
              >
                <span
                  className={cn(
                    "relative flex size-6 shrink-0 items-center justify-center rounded-full bg-muted text-xs font-medium text-muted-foreground",
                    "data-[state=active]:bg-primary data-[state=active]:text-primary-foreground",
                    "data-[state=completed]:bg-primary data-[state=completed]:text-primary-foreground",
                  )}
                  data-slot="stepper-vertical-inline-indicator"
                  data-state={state}
                >
                  <span
                    className={cn(
                      "transition-all motion-reduce:transition-none",
                      "group-data-[state=completed]/step:scale-0 group-data-[state=completed]/step:opacity-0",
                    )}
                  >
                    {step}
                  </span>
                  <CheckIcon
                    aria-hidden="true"
                    className={cn(
                      "absolute size-4 scale-0 opacity-0 transition-all motion-reduce:transition-none",
                      "group-data-[state=completed]/step:scale-100 group-data-[state=completed]/step:opacity-100",
                    )}
                    size={16}
                  />
                </span>
                <div className="mt-0.5 space-y-0.5 px-2 text-left">
                  <h3
                    className="text-sm font-medium"
                    data-slot="stepper-vertical-inline-title"
                  >
                    {item.title}
                  </h3>
                  {item.description ? (
                    <p
                      className="text-sm text-muted-foreground"
                      data-slot="stepper-vertical-inline-description"
                    >
                      {item.description}
                    </p>
                  ) : null}
                </div>
              </button>
              {isLast ? null : (
                <div
                  aria-hidden="true"
                  className={cn(
                    "absolute inset-y-0 left-3 top-[calc(1.5rem+0.125rem)] -order-1 m-0 w-0.5 -translate-x-1/2 bg-muted",
                    "group-data-[orientation=vertical]/stepper:h-[calc(100%-1.5rem-0.25rem)]",
                    "group-data-[state=completed]/step:bg-primary",
                  )}
                  data-slot="stepper-vertical-inline-separator"
                />
              )}
            </div>
          );
        })}
      </div>
      <p
        aria-live="polite"
        className="mt-2 text-xs text-muted-foreground"
        role="region"
      >
        {caption}
      </p>
    </div>
  );
}
