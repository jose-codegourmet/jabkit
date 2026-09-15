import type { HTMLAttributes } from "react";

export interface StepperVerticalInlineStep {
  id: string;
  title: string;
  description?: string;
}

export interface StepperVerticalInlineProps
  extends Omit<HTMLAttributes<HTMLOListElement>, "onChange"> {
  steps: readonly StepperVerticalInlineStep[];
  /** 1-based index of the active step. */
  currentStep?: number;
  onStepChange?: (step: number) => void;
}
