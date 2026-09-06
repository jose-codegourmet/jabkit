import type { ComponentMeta } from "@jabkit/build-registry";

export default {
  name: "switch",
  displayName: "Switch",
  version: "1.0.0",
  addedAt: "2026-08-30",
  description: "Accessible Switch primitive adapted from shadcn/ui.",
  sectionCategory: "form",
  purpose:
    "Lets users immediately toggle a persistent setting between on and off states.",
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
  tags: ["switch", "primitive", "accessible"],
  dependencies: [],
  registryDependencies: [],
  a11y: { keyboardNav: true, reducedMotion: true },
} satisfies ComponentMeta;
