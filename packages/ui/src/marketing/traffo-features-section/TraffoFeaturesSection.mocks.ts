import type {
  TraffoFeatureItem,
  TraffoFeaturesSectionProps,
} from "./TraffoFeaturesSection.types";

export const traffoFeatureItems: TraffoFeatureItem[] = [
  {
    kicker: "01 - Capture",
    title: "Every click. Every scroll. Every form.",
    body: "Drop the snippet, walk away. We capture every meaningful event automatically. No manual tagging, no missed data.",
    tone: "success",
  },
  {
    kicker: "02 - Understand",
    title: "Funnels, cohorts, attribution: visual.",
    body: "Drag-and-drop reports that do not require a PhD in SQL. See where users drop off, why, and what to fix first.",
    tone: "warning",
  },
  {
    kicker: "03 - Convert",
    title: "Ship experiments. Watch numbers move.",
    body: "Native A/B testing with statistical confidence baked in. Stop guessing, start shipping changes that actually compound.",
    tone: "accent",
  },
];

export const traffoFeaturesSectionMocks = {
  default: {
    eyebrow: "02 / Built for teams",
    title: "Three pillars. One platform. Zero busywork.",
    meta: ["Version 4.2", "Shipped May 2026", "24 integrations"],
    items: traffoFeatureItems,
  },
  alternate: {
    eyebrow: "Capabilities",
    title: "Measure less. Decide faster.",
    meta: ["Self-serve"],
    items: traffoFeatureItems.slice(0, 2),
  },
} satisfies Record<string, TraffoFeaturesSectionProps>;
