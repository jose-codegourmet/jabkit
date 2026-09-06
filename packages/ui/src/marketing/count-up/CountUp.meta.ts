import type { ComponentMeta } from "@jabkit/build-registry";

export default {
  name: "count-up",
  displayName: "CountUp",
  version: "1.0.0",
  addedAt: "2026-09-06",
  description:
    "Marketing proof figure that counts from a start value to a target when it enters view, honoring prefers-reduced-motion.",
  sectionCategory: "stats",
  purpose:
    "Draws attention to a single proof point or KPI with restrained entrance motion.",
  bestFor: ["KPI highlights", "social proof", "impact metrics"],
  tone: ["confident", "minimal"],
  contentDensity: "low",
  visualWeight: "low",
  layout: {
    type: "stack",
    alignment: "center",
  },
  slots: ["value", "prefix", "suffix", "label"],
  capabilities: {
    supportsImage: false,
    supportsVideo: false,
    supportsForm: false,
    supportsCTA: false,
    supportsDarkMode: true,
  },
  recommendedAfter: ["hero", "logos"],
  recommendedBefore: ["features", "case-studies"],
  tags: [
    "marketing",
    "text",
    "animation",
    "counter",
    "stats",
    "metrics",
    "number",
  ],
  dependencies: [],
  registryDependencies: [],
  a11y: { keyboardNav: false, reducedMotion: true },
  preview: { layout: "fit", width: 1440, height: 640 },
} satisfies ComponentMeta;
