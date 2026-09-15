import type { ComponentMeta } from "@jabkit/build-registry";

export default {
  name: "bright-lizard",
  displayName: "BrightLizard",
  version: "1.1.0",
  addedAt: "2026-09-15",
  description:
    "A circular letter-bounce loader with a token-mapped inset-shadow ring.",
  sectionCategory: "feedback",
  purpose:
    "Signals an in-progress wait with the Uiverse bright-lizard letter ring, remapped onto semantic tokens.",
  bestFor: [
    "full-panel async waits",
    "empty-state and overlay loading",
    "route or workspace sync indicators",
  ],
  avoidFor: [
    "progress that has a known percentage",
    "skeleton layouts that should hold content shape",
  ],
  tone: ["playful", "clean"],
  contentDensity: "low",
  visualWeight: "medium",
  layout: {
    type: "stack",
    alignment: "center",
  },
  slots: ["statusLabel"],
  capabilities: {
    supportsImage: false,
    supportsVideo: false,
    supportsForm: false,
    supportsCTA: false,
    supportsDarkMode: true,
  },
  tags: ["loader", "spinner", "feedback", "status", "atom"],
  dependencies: [],
  registryDependencies: [],
  a11y: { keyboardNav: false, reducedMotion: true },
  preview: {
    layout: "center",
  },
} satisfies ComponentMeta;
