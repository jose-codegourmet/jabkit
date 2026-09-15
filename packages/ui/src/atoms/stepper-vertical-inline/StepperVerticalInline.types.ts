import type { HTMLAttributes } from "react";

export interface StepperVerticalInlineStep {
  title: string;
  description?: string;
  disabled?: boolean;
}

export interface StepperVerticalInlineProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "onChange"> {
  steps: readonly StepperVerticalInlineStep[];
  value?: number;
  defaultValue?: number;
  onValueChange?: (step: number) => void;
  caption?: string;
}
