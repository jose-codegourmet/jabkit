import type { QuickPantherProps } from "./QuickPanther.types";

export const quickPantherMocks = {
  default: {
    defaultValue: "now",
    legend: "Choose when",
  },
  alternate: {
    defaultValue: "week",
    legend: "Choose a window",
    options: [
      { value: "today", title: "Today" },
      { value: "week", title: "This week" },
      { value: "month", title: "This month" },
      { value: "later", title: "Later" },
    ],
  },
} satisfies Record<string, QuickPantherProps>;
