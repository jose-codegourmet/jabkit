import type { StepperVerticalInlineProps } from "./StepperVerticalInline.types";

const onboardingSteps = [
  {
    id: "account",
    title: "Create account",
    description: "Add your work email and choose a password for the workspace.",
  },
  {
    id: "profile",
    title: "Set up profile",
    description: "Write a short display name and pick the team you belong to.",
  },
  {
    id: "billing",
    title: "Add billing",
    description: "Save a payment method so the workspace can issue invoices.",
  },
  {
    id: "invite",
    title: "Invite teammates",
    description: "Send seats to the people who will review the first project.",
  },
] as const;

export const stepperVerticalInlineMocks = {
  default: {
    steps: onboardingSteps,
    currentStep: 2,
  },
  alternate: {
    steps: onboardingSteps,
    currentStep: 4,
  },
} satisfies Record<string, StepperVerticalInlineProps>;
