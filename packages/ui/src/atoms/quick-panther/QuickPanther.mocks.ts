import type { QuickPantherProps } from "./QuickPanther.types";

export const quickPantherMocks = {
  default: {
    defaultValue: "pro",
    legend: "Choose a plan",
    description: "Switch plans anytime. Billed monthly.",
  },
  alternate: {
    defaultValue: "annual",
    legend: "Billing cycle",
    description: "Pick how often you want to be charged.",
    options: [
      {
        value: "monthly",
        title: "Monthly",
        description: "Flexible month to month.",
        price: "$29",
      },
      {
        value: "annual",
        title: "Annual",
        description: "Two months free versus monthly.",
        price: "$24",
      },
      {
        value: "lifetime",
        title: "Lifetime",
        description: "One payment, updates included.",
        price: "$240",
      },
    ],
  },
} satisfies Record<string, QuickPantherProps>;
