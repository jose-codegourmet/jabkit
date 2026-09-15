import type { ComponentMeta } from "@jabkit/build-registry";

export default {
  name: "jolly-parrot",
  displayName: "JollyParrot",
  version: "1.0.0",
  addedAt: "2026-09-15",
  description:
    "A compact diamond tessellation field painted with chart and primary tokens.",
  sectionCategory: "background",
  purpose:
    "Drops a playful tiled surface behind a caption or empty state without leaving the semantic token set.",
  bestFor: [
    "decorative catalogue tiles",
    "empty-state or wait-list backdrops",
    "small marketing accents that stay in atoms",
  ],
  avoidFor: [
    "data-dense charts that need a quiet canvas",
    "text-heavy reading surfaces",
  ],
  tone: ["playful", "bold"],
  contentDensity: "low",
  visualWeight: "medium",
  layout: {
    type: "stack",
    alignment: "center",
  },
  slots: ["caption"],
  capabilities: {
    supportsImage: false,
    supportsVideo: false,
    supportsForm: false,
    supportsCTA: false,
    supportsDarkMode: true,
  },
  tags: ["pattern", "diamond", "background", "atom"],
  dependencies: [],
  registryDependencies: [],
  a11y: { keyboardNav: false, reducedMotion: true },
  preview: {
    layout: "center",
  },
} satisfies ComponentMeta;
