import type { ComponentMeta } from "@jabkit/build-registry";

export default {
  name: "separator",
  displayName: "Separator",
  version: "1.0.0",
  addedAt: "2026-08-30",
  description: "Accessible Separator primitive adapted from shadcn/ui.",
  sectionCategory: "content",
  purpose:
    "Creates a subtle semantic boundary between adjacent content groups.",
  bestFor: ["documentation", "editorial resources", "educational pages"],
  tone: ["editorial", "informative", "structured"],
  contentDensity: "low",
  visualWeight: "low",
  layout: {
    type: "full-width",
  },
  slots: ["divider"],
  capabilities: {
    supportsImage: false,
    supportsVideo: false,
    supportsForm: false,
    supportsCTA: false,
    supportsDarkMode: true,
  },
  tags: ["separator", "primitive", "accessible"],
  dependencies: [],
  registryDependencies: [],
  a11y: { keyboardNav: true, reducedMotion: true },
} satisfies ComponentMeta;
