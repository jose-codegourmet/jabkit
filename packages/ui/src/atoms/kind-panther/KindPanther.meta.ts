import type { ComponentMeta } from "@jabkit/build-registry";

export default {
  name: "kind-panther",
  displayName: "KindPanther",
  version: "2.0.0",
  addedAt: "2026-09-15",
  description:
    "A repeating interlocking wave field of concentric radial bands, token-mapped warm and cool, with an optional slow drift.",
  sectionCategory: "background",
  purpose:
    "Drops the inspo salmon-and-navy ripple tessellation behind a caption or empty state without rounding it to the control radius.",
  bestFor: [
    "decorative catalogue tiles",
    "empty-state or wait-list backdrops",
    "small marketing accents that stay in atoms",
  ],
  avoidFor: [
    "data-dense charts that need a quiet canvas",
    "text-heavy reading surfaces",
  ],
  tone: ["retro", "bold"],
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
  tags: ["pattern", "wave", "ripple", "retro", "background", "atom"],
  dependencies: [],
  registryDependencies: [],
  a11y: { keyboardNav: false, reducedMotion: true },
  preview: {
    layout: "center",
  },
} satisfies ComponentMeta;
