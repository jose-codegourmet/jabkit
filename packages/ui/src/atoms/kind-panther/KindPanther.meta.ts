import type { ComponentMeta } from "@jabkit/build-registry";

export default {
  name: "kind-panther",
  displayName: "KindPanther",
  version: "1.1.0",
  addedAt: "2026-09-15",
  description:
    "A square honeycomb field of 120deg hex cells at 37px, with token-mapped fill and ground.",
  sectionCategory: "background",
  purpose:
    "Drops the inspo hexagon tessellation behind a caption or empty state without rounding it to the control radius.",
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
  inspoUrl: "https://uiverse.io/marcelodolza/kind-panther-75",
  tags: ["pattern", "honeycomb", "hexagon", "background", "atom"],
  dependencies: [],
  registryDependencies: [],
  a11y: { keyboardNav: false, reducedMotion: true },
  preview: {
    layout: "center",
  },
} satisfies ComponentMeta;
