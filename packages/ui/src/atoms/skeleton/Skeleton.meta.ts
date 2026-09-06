import type { ComponentMeta } from "@jabkit/build-registry";

export default {
  name: "skeleton",
  displayName: "Skeleton",
  version: "1.0.0",
  addedAt: "2026-08-30",
  description: "Accessible Skeleton primitive adapted from shadcn/ui.",
  sectionCategory: "feedback",
  purpose:
    "Preserves layout and communicates loading while content is not yet available.",
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
  tags: ["skeleton", "primitive", "accessible"],
  dependencies: [],
  registryDependencies: [],
  a11y: { keyboardNav: true, reducedMotion: true },
} satisfies ComponentMeta;
