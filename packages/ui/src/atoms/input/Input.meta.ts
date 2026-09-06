import type { ComponentMeta } from "@jabkit/build-registry";

export default {
  name: "input",
  displayName: "Input",
  version: "1.0.0",
  addedAt: "2026-08-30",
  description: "Accessible Input primitive adapted from shadcn/ui.",
  sectionCategory: "form",
  purpose:
    "Collects a short, single-line value with consistent states across forms.",
  bestFor: ["forms", "settings", "data entry"],
  tone: ["clean", "professional"],
  contentDensity: "low",
  visualWeight: "low",
  layout: {
    type: "stack",
    alignment: "left",
  },
  slots: ["label", "control", "supportingText"],
  capabilities: {
    supportsImage: false,
    supportsVideo: false,
    supportsForm: true,
    supportsCTA: false,
    supportsDarkMode: true,
  },
  tags: ["input", "primitive", "accessible"],
  dependencies: [],
  registryDependencies: [],
  a11y: { keyboardNav: true, reducedMotion: true },
} satisfies ComponentMeta;
