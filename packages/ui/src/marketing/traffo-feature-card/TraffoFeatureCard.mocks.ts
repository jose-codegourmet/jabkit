import type { TraffoFeatureCardProps } from "./TraffoFeatureCard.types";

export const traffoFeatureCardMocks = {
  default: {
    kicker: "01 - Capture",
    title: "Every click. Every scroll. Every form.",
    body: "Drop the snippet, walk away. We capture every meaningful event automatically. No manual tagging, no missed data.",
    tone: "success",
  },
  alternate: {
    kicker: "02 - Understand",
    title: "Funnels, cohorts, attribution: visual.",
    body: "Drag-and-drop reports that do not require a PhD in SQL. See where users drop off, why, and what to fix first.",
    tone: "warning",
  },
} satisfies Record<string, TraffoFeatureCardProps>;
