// biome-ignore lint/correctness/noUnusedImports: Storybook supports the classic JSX runtime.
import * as React from "react";
import { CheckIcon } from "lucide-react";
import { cn } from "@/lib/cn";
import type { StepperVerticalInlineProps } from "./StepperVerticalInline.types";

function stepState(index: number, currentStep: number) {
  const step = index + 1;
  if (currentStep > step) return "complete" as const;
  if (currentStep === step) return "current" as const;
  return "upcoming" as const;
}

export function StepperVerticalInline({
  className,
  steps,
  currentStep = 1,
  onStepChange,
  ...props
}: StepperVerticalInlineProps) {
  return (
    <ol
      className={cn("flex w-full max-w-md flex-col", className)}
      data-slot="stepper-vertical-inline"
      {...props}
    >
      {steps.map((item, index) => {
        const step = index + 1;
        const state = stepState(index, currentStep);
        const isLast = index === steps.length - 1;
        const Indicator = onStepChange ? "button" : "span";

        return (
          <li
            aria-current={state === "current" ? "step" : undefined}
            className="flex gap-4"
            data-slot="stepper-vertical-inline-item"
            data-state={state}
            key={item.id}
          >
            <div className="flex flex-col items-center">
              <Indicator
                aria-label={
                  onStepChange
                    ? `Go to ${item.title}, step ${step} of ${steps.length}`
                    : undefined
                }
                className={cn(
                  "flex size-8 shrink-0 items-center justify-center rounded-full border-2 text-sm font-medium transition-[background-color,border-color,color,transform] duration-200 ease-out motion-reduce:transition-none",
                  onStepChange &&
                    "cursor-pointer focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:outline-none active:scale-95 motion-reduce:active:scale-100",
                  state === "upcoming" &&
                    "border-border bg-background text-muted-foreground",
                  state !== "upcoming" &&
                    "border-primary bg-primary text-primary-foreground",
                )}
                data-slot="stepper-vertical-inline-indicator"
                {...(onStepChange
                  ? { onClick: () => onStepChange(step), type: "button" as const }
                  : {})}
              >
                {state === "complete" ? (
                  <CheckIcon aria-hidden="true" className="size-4" />
                ) : (
                  step
                )}
              </Indicator>
              {isLast ? null : (
                <span
                  aria-hidden="true"
                  className={cn(
                    "mt-2 w-px flex-1 min-h-6",
                    currentStep > step ? "bg-primary" : "bg-border",
                  )}
                  data-slot="stepper-vertical-inline-connector"
                />
              )}
            </div>
            <div className={cn("min-w-0 pt-1", !isLast && "pb-8")}>
              <p
                className={cn(
                  "text-sm font-medium leading-5",
                  state === "upcoming"
                    ? "text-muted-foreground"
                    : "text-foreground",
                )}
              >
                {item.title}
              </p>
              {item.description ? (
                <p className="mt-1 text-sm leading-6 text-muted-foreground">
                  {item.description}
                </p>
              ) : null}
            </div>
          </li>
        );
      })}
    </ol>
  );
}
