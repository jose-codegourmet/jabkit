import type { ComponentMeta } from "@jabkit/build-registry";

export default {
  name: "quick-panther",
  displayName: "QuickPanther",
  version: "1.1.0",
  addedAt: "2026-09-15",
  description:
    "Vertical radio stack with a 10px clip and a glowing rail that slides to the checked option.",
  sectionCategory: "form",
  purpose:
    "Lets someone pick one timing or status option in a compact stacked list with a moving highlight.",
  bestFor: [
    "when-to-start pickers",
    "single-choice status radios",
    "compact settings lists",
  ],
  avoidFor: [
    "multi-select add-ons",
    "long surveys with many radios",
    "binary on or off toggles",
  ],
  tone: ["professional", "clean"],
  contentDensity: "low",
  visualWeight: "medium",
  layout: {
    type: "stack",
    alignment: "left",
  },
  slots: ["legend", "optionTitle"],
  capabilities: {
    supportsImage: false,
    supportsVideo: false,
    supportsForm: true,
    supportsCTA: false,
    supportsDarkMode: true,
  },
  inspoUrl: "https://uiverse.io/Smit-Prajapati/quick-panther-98",
  tags: ["radio", "glider", "form", "glow", "atom"],
  dependencies: [],
  registryDependencies: [],
  a11y: { keyboardNav: true, reducedMotion: true },
  preview: {
    layout: "center",
    width: 320,
    height: 280,
  },
} satisfies ComponentMeta;
