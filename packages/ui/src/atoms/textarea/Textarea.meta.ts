import type { ComponentMeta } from "@jabkit/build-registry";

export default {
  name: "textarea",
  displayName: "Textarea",
  version: "1.0.0",
  addedAt: "2026-08-30",
  description: "Accessible Textarea primitive adapted from shadcn/ui.",
  sectionCategory: "form",
  purpose:
    "Collects longer free-form responses such as messages, notes, or descriptions.",
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
  tags: ["textarea", "primitive", "accessible"],
  dependencies: [],
  registryDependencies: [],
  a11y: { keyboardNav: true, reducedMotion: true },
} satisfies ComponentMeta;
