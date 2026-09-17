import type { ComponentMeta } from "@jabkit/build-registry";

export default {
  name: "stupid-insect",
  displayName: "StupidInsect",
  version: "1.1.0",
  addedAt: "2026-09-15",
  description:
    "A square-corner concentric-ring tile at 150px, with sand and navy inks mapped to semantic tokens.",
  sectionCategory: "background",
  purpose:
    "Fills a region with the Uiverse stupid-insect radial weave without rounding the field to the shared control radius.",
  bestFor: [
    "section covers and empty-state backdrops",
    "card or banner texture behind a short caption",
    "catalogue samples that need a decorative field",
  ],
  avoidFor: [
    "text-heavy reading panes",
    "controls that need a quiet, solid surface",
  ],
  tone: ["playful", "bold"],
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
  inspoUrl: "https://uiverse.io/csemszepp/stupid-insect-76",
  tags: ["pattern", "texture", "rings", "background", "atom"],
  dependencies: [],
  registryDependencies: [],
  a11y: { keyboardNav: false, reducedMotion: true },
  preview: {
    layout: "center",
    width: 440,
    height: 280,
  },
} satisfies ComponentMeta;
