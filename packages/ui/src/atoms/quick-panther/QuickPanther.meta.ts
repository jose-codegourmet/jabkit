import type { ComponentMeta } from "@jabkit/build-registry";

export default {
  name: "quick-panther",
  displayName: "QuickPanther",
  version: "1.0.0",
  addedAt: "2026-09-15",
  description:
    "Vertical subscription radio list with a glowing selected row and high-contrast plan details.",
  sectionCategory: "form",
  purpose:
    "Lets someone compare and pick one plan or billing option without leaving a compact, scannable stack.",
  bestFor: [
    "pricing plan pickers",
    "billing cycle radios",
    "single-choice subscription settings",
  ],
  avoidFor: [
    "multi-select add-ons",
    "long surveys with many radios",
    "binary on or off toggles",
  ],
  tone: ["professional", "clean"],
  contentDensity: "medium",
  visualWeight: "medium",
  layout: {
    type: "stack",
    alignment: "left",
  },
  slots: ["legend", "description", "optionTitle", "optionDescription", "price"],
  capabilities: {
    supportsImage: false,
    supportsVideo: false,
    supportsForm: true,
    supportsCTA: false,
    supportsDarkMode: true,
  },
  tags: ["radio", "subscription", "pricing", "form", "glow", "atom"],
  dependencies: [],
  registryDependencies: [],
  a11y: { keyboardNav: true, reducedMotion: true },
  preview: {
    layout: "center",
    width: 420,
    height: 360,
  },
} satisfies ComponentMeta;
