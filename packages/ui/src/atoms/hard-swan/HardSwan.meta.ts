import type { ComponentMeta } from "@jabkit/build-registry";

export default {
  name: "hard-swan",
  displayName: "HardSwan",
  version: "1.0.0",
  addedAt: "2026-09-15",
  description:
    "A dual-tone diagonal hatch field for covers, banners, and empty surfaces.",
  sectionCategory: "content",
  purpose:
    "Fills a region with a token-mapped weave so a page can show texture without a photo or a flat fill.",
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
