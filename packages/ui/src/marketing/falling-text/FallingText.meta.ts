import type { ComponentMeta } from "@jabkit/build-registry";

export default {
  name: "falling-text",
  displayName: "FallingText",
  version: "1.0.0",
  addedAt: "2026-09-09",
  description:
    "Marketing headline whose words fall with a physics-like tumble on click, hover, auto, or scroll, with semantic highlights and a static reduced-motion reading.",
  sectionCategory: "content",
  purpose:
    "Turns a short landing line into a gravity beat so highlighted claims stay readable while the rest of the sentence drops into place.",
  bestFor: [
    "product launches",
    "campaign heroes that need a kinetic headline",
    "editorial landings that can afford a playful line",
  ],
  avoidFor: [
    "dense documentation",
    "forms or task UI where falling copy would compete with controls",
  ],
  tone: ["experimental", "playful", "confident"],
  industries: ["technology", "media", "ecommerce"],
  contentDensity: "low",
  visualWeight: "medium",
  layout: {
    type: "stack",
    alignment: "center",
  },
  slots: ["headline", "highlightedWords", "description"],
  capabilities: {
    supportsImage: false,
    supportsVideo: false,
    supportsForm: false,
    supportsCTA: false,
    supportsDarkMode: true,
  },
  recommendedAfter: ["hero", "navbar"],
  recommendedBefore: ["features", "cta", "footer"],
  tags: [
    "marketing",
    "text",
    "animation",
    "headline",
    "physics",
    "falling",
    "gravity",
    "interactive",
  ],
  dependencies: [],
  registryDependencies: [],
  a11y: { keyboardNav: true, reducedMotion: true },
  preview: {
    layout: "fit",
    width: 1440,
    height: 720,
    capture: {
      format: "gif",
      gifStories: ["Default"],
      gifFrames: 6,
      gifIntervalMs: 380,
      gifDelayMs: 180,
      waitMs: 240,
    },
  },
} satisfies ComponentMeta;
