import type { StepperVerticalInlineProps } from "./StepperVerticalInline.types";

const inlineSteps = [
  {
    title: "Step One",
    description: "Desc for step one",
  },
  {
    title: "Step Two",
    description: "Desc for step two",
  },
  {
    title: "Step Three",
    description: "Desc for step three",
  },
] as const;

export const stepperVerticalInlineMocks = {
  default: {
    defaultValue: 2,
    steps: inlineSteps,
  },
  alternate: {
    defaultValue: 3,
    steps: inlineSteps,
  },
} satisfies Record<string, StepperVerticalInlineProps>;
