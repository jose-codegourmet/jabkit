import type { ComponentMeta } from "@jabkit/build-registry";

export default {
  name: "badge",
  displayName: "Badge",
  version: "1.0.0",
  addedAt: "2026-08-30",
  description: "Accessible Badge primitive adapted from shadcn/ui.",
  sectionCategory: "status",
  purpose:
    "Labels status, category, or short supporting information without competing with primary content.",
  bestFor: ["status labels", "categories", "compact metadata"],
  tone: ["clean", "neutral"],
  contentDensity: "low",
  visualWeight: "low",
  layout: {
    type: "stack",
    alignment: "center",
  },
  slots: ["label"],
  capabilities: {
    supportsImage: false,
    supportsVideo: false,
    supportsForm: false,
    supportsCTA: false,
    supportsDarkMode: true,
  },
  tags: ["badge", "primitive", "accessible"],
  dependencies: [],
  registryDependencies: [],
  a11y: { keyboardNav: true, reducedMotion: true },
} satisfies ComponentMeta;
