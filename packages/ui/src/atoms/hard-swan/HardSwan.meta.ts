import type { ComponentMeta } from "@jabkit/build-registry";

export default {
  name: "hard-swan",
  displayName: "HardSwan",
  version: "1.1.0",
  addedAt: "2026-09-15",
  description:
    "A square-corner 45-degree dual-tone hatch tiled at 95px by 15px with a 135px offset.",
  sectionCategory: "content",
  purpose:
    "Fills a region with the Uiverse hard-swan weave, mapped to tokens, without rounding the field to the shared control radius.",
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
  tags: ["pattern", "texture", "hatch", "background", "atom"],
  dependencies: [],
  registryDependencies: [],
  a11y: { keyboardNav: false, reducedMotion: true },
  preview: {
    layout: "center",
    width: 560,
    height: 280,
  },
} satisfies ComponentMeta;
