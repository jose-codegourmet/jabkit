import type { ComponentMeta } from "@jabkit/build-registry";

export default {
  name: "light-eagle",
  displayName: "LightEagle",
  version: "1.1.0",
  addedAt: "2026-09-15",
  description:
    "A square-corner isometric cube tessellation at 200px, with three face inks mapped to semantic tokens.",
  sectionCategory: "background",
  purpose:
    "Fills a region with the Uiverse light-eagle hexagonal cube weave without rounding the field to the shared control radius.",
  bestFor: [
    "section covers and empty-state backdrops",
    "card or banner texture behind a short caption",
    "catalogue samples that need a geometric field",
  ],
  avoidFor: [
    "text-heavy reading panes",
    "controls that need a quiet, solid surface",
  ],
  tone: ["playful", "clean"],
  contentDensity: "low",
  visualWeight: "high",
  layout: {
    type: "stack",
    alignment: "center",
  },
  slots: ["field", "caption"],
  capabilities: {
    supportsImage: false,
    supportsVideo: false,
    supportsForm: false,
    supportsCTA: false,
    supportsDarkMode: true,
  },
  inspoUrl: "https://uiverse.io/Juanes200122/light-eagle-27",
  tags: ["pattern", "hexagon", "cube", "geometric", "background", "atom"],
  dependencies: [],
  registryDependencies: [],
  a11y: { keyboardNav: false, reducedMotion: true },
  preview: {
    layout: "center",
    width: 440,
    height: 280,
  },
} satisfies ComponentMeta;
