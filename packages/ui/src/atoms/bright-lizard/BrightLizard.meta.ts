import type { ComponentMeta } from "@jabkit/build-registry";

export default {
  name: "bright-lizard",
  displayName: "BrightLizard",
  version: "1.0.0",
  addedAt: "2026-09-15",
  description:
    "A bright orbital loading indicator with a token-colored arc and a pulsing core.",
  sectionCategory: "feedback",
  purpose:
    "Signals an in-progress wait with a compact spinner that stays on semantic tokens in light and dark.",
  bestFor: [
    "inline async waits",
    "empty-state and overlay loading",
    "button or panel pending states",
  ],
  avoidFor: [
    "progress that has a known percentage",
    "skeleton layouts that should hold content shape",
  ],
  tone: ["playful", "clean"],
  contentDensity: "low",
  visualWeight: "low",
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
