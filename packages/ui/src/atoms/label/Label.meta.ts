import type { ComponentMeta } from "@jabkit/build-registry";

export default {
  name: "label",
  displayName: "Label",
  version: "1.0.0",
  addedAt: "2026-08-30",
  description: "Accessible Label primitive adapted from shadcn/ui.",
  sectionCategory: "form",
  purpose:
    "Associates concise instructions with a form control so its purpose remains clear and accessible.",
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
    supportsForm: false,
    supportsCTA: false,
    supportsDarkMode: true,
  },
  tags: ["label", "primitive", "accessible"],
  dependencies: [],
  registryDependencies: [],
  a11y: { keyboardNav: true, reducedMotion: true },
} satisfies ComponentMeta;
