import type { ComponentMeta } from "@jabkit/build-registry";

export default {
  name: "checkbox",
  displayName: "Checkbox",
  version: "1.0.0",
  addedAt: "2026-08-30",
  description: "Accessible Checkbox primitive adapted from shadcn/ui.",
  sectionCategory: "form",
  purpose:
    "Captures an independent binary choice or supports multi-select groups in forms and filters.",
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
  tags: ["checkbox", "primitive", "accessible"],
  dependencies: [],
  registryDependencies: [],
  a11y: { keyboardNav: true, reducedMotion: true },
} satisfies ComponentMeta;
