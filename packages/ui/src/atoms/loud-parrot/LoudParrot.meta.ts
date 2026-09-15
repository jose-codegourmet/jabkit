import type { ComponentMeta } from "@jabkit/build-registry";

export default {
  name: "loud-parrot",
  displayName: "LoudParrot",
  version: "1.0.0",
  addedAt: "2026-09-15",
  description:
    "A faceted isometric tile field built from three semantic tones for decorative fills and swatches.",
  sectionCategory: "content",
  purpose:
    "Adds a repeating cubic lattice backdrop that tracks light and dark tokens instead of a fixed palette.",
  bestFor: [
    "decorative section fills",
    "catalogue swatches",
    "empty-state or card backgrounds",
  ],
  avoidFor: [
    "text-heavy regions that need a flat reading surface",
    "controls that must stay visually quiet",
  ],
  tone: ["playful", "bold"],
  contentDensity: "low",
  visualWeight: "high",
  layout: {
    type: "stack",
    alignment: "center",
  },
  slots: ["field", "content"],
  capabilities: {
    supportsImage: false,
    supportsVideo: false,
    supportsForm: false,
    supportsCTA: false,
    supportsDarkMode: true,
  },
  tags: ["pattern", "isometric", "background", "decorative", "atom"],
  dependencies: [],
  registryDependencies: [],
  a11y: { keyboardNav: false, reducedMotion: true },
  preview: {
    layout: "center",
  },
} satisfies ComponentMeta;
