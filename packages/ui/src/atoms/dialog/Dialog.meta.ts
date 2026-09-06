import type { ComponentMeta } from "@jabkit/build-registry";

export default {
  name: "dialog",
  displayName: "Dialog",
  version: "1.0.0",
  addedAt: "2026-08-30",
  description: "Accessible Dialog primitive adapted from shadcn/ui.",
  sectionCategory: "overlay",
  purpose:
    "Moves a focused task or decision into a modal layer while preserving the surrounding page context.",
  bestFor: ["focused workflows", "confirmations", "quick views"],
  tone: ["professional", "focused"],
  contentDensity: "medium",
  visualWeight: "medium",
  layout: {
    type: "overlay",
    alignment: "center",
  },
  slots: ["trigger", "title", "description", "content", "actions"],
  capabilities: {
    supportsImage: false,
    supportsVideo: false,
    supportsForm: false,
    supportsCTA: false,
    supportsDarkMode: true,
  },
  tags: ["dialog", "primitive", "accessible"],
  dependencies: [],
  registryDependencies: [],
  a11y: { keyboardNav: true, reducedMotion: true },
} satisfies ComponentMeta;
