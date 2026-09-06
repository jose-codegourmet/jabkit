import type { ComponentMeta } from "@jabkit/build-registry";

export default {
  name: "tooltip",
  displayName: "Tooltip",
  version: "1.0.0",
  addedAt: "2026-08-30",
  description: "Accessible Tooltip primitive adapted from shadcn/ui.",
  sectionCategory: "feedback",
  purpose:
    "Reveals brief contextual help for an unfamiliar control without adding permanent visual noise.",
  bestFor: ["loading states", "contextual help", "progressive disclosure"],
  tone: ["subtle", "clean"],
  contentDensity: "low",
  visualWeight: "low",
  layout: {
    type: "overlay",
    alignment: "center",
  },
  slots: ["trigger", "feedbackContent"],
  capabilities: {
    supportsImage: false,
    supportsVideo: false,
    supportsForm: false,
    supportsCTA: false,
    supportsDarkMode: true,
  },
  tags: ["tooltip", "primitive", "accessible"],
  dependencies: [],
  registryDependencies: [],
  a11y: { keyboardNav: true, reducedMotion: true },
} satisfies ComponentMeta;
