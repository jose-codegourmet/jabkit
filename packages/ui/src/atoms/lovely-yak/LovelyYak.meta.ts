import type { ComponentMeta } from "@jabkit/build-registry";

export default {
  name: "lovely-yak",
  displayName: "LovelyYak",
  version: "1.1.0",
  addedAt: "2026-09-15",
  description:
    "A compact analytics card with a token gradient rim, two stats, a seven-bar spark, and a local-radius details action.",
  sectionCategory: "content",
  purpose:
    "Presents a live performance snapshot in the same stacked dashboard-card shape as the Uiverse inspo, without flattening radii through Button.",
  bestFor: [
    "catalogue or dashboard snapshot tiles",
    "weekly views and conversion summaries",
    "compact live-metric cards with one follow-up action",
  ],
  avoidFor: [
    "dense data tables",
    "full analytics pages",
  ],
  tone: ["professional", "clean"],
  contentDensity: "medium",
  visualWeight: "medium",
  layout: {
    type: "stack",
    alignment: "left",
  },
  slots: ["title", "live", "stats", "chart", "period", "action"],
  capabilities: {
    supportsImage: false,
    supportsVideo: false,
    supportsForm: false,
    supportsCTA: true,
    supportsDarkMode: true,
  },
  inspoUrl: "https://uiverse.io/themrsami/lovely-yak-39",
  tags: ["card", "analytics", "dashboard", "cta", "atom"],
  dependencies: [],
  registryDependencies: [],
  a11y: { keyboardNav: true, reducedMotion: true },
  preview: {
    layout: "center",
  },
} satisfies ComponentMeta;
