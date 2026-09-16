import type { ComponentMeta } from "@jabkit/build-registry";

export default {
  name: "clever-panther",
  displayName: "CleverPanther",
  version: "1.2.0",
  addedAt: "2026-09-15",
  description:
    "A compact dark balance card with revenue metrics, an aurora chart, and a report action.",
  sectionCategory: "content",
  purpose:
    "Presents a concise financial snapshot with two metrics and a trend line for dashboard or marketing surfaces.",
  bestFor: [
    "decorative catalogue tiles",
    "empty-state or wait-list slabs",
    "small marketing accents that stay in atoms",
  ],
  avoidFor: [
    "primary form controls",
    "dense data that needs a plain table surface",
  ],
  tone: ["playful", "clean"],
  contentDensity: "low",
  visualWeight: "medium",
  layout: {
    type: "stack",
    alignment: "center",
  },
  slots: ["heading", "metrics", "trend", "action"],
  capabilities: {
    supportsImage: false,
    supportsVideo: false,
    supportsForm: false,
    supportsCTA: false,
    supportsDarkMode: true,
  },
  inspoUrl: "https://uiverse.io/Gidarx/clever-panther-6",
  tags: ["card", "finance", "metrics", "chart", "dashboard", "atom"],
  dependencies: [],
  registryDependencies: [],
  a11y: { keyboardNav: false, reducedMotion: true },
  preview: {
    layout: "center",
    width: 520,
    height: 460,
  },
} satisfies ComponentMeta;
