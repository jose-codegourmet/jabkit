import type { ComponentMeta } from "@jabkit/build-registry";

export default {
  name: "loud-parrot",
  displayName: "LoudParrot",
  version: "1.1.0",
  addedAt: "2026-09-15",
  description:
    "A square isometric cube lattice with the Uiverse loud-parrot tile geometry on semantic faces.",
  sectionCategory: "content",
  purpose:
    "Fills a region with the exact layered-conic cube tessellation, keeping square corners and token-mapped faces.",
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
  inspoUrl: "https://uiverse.io/mobinkakei/loud-parrot-63",
  tags: ["pattern", "isometric", "background", "decorative", "atom"],
  dependencies: [],
  registryDependencies: [],
  a11y: { keyboardNav: false, reducedMotion: false },
  preview: {
    layout: "center",
  },
} satisfies ComponentMeta;
