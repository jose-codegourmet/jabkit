import type { ComponentMeta } from "@jabkit/build-registry";

export default {
  name: "skiper-39",
  displayName: "Skiper39",
  version: "1.0.0",
  addedAt: "2026-09-15",
  description:
    "Full-bleed marketing stage with a canvas crowd of walking figures, optional sprite sheets, and a still reading when motion is reduced.",
  sectionCategory: "hero",
  purpose:
    "Gives a landing a living sidewalk so the headline sits over motion instead of an empty field.",
  bestFor: [
    "event and community landings",
    "creative studio heroes",
    "campaign pages that want a populated street without photography",
  ],
  avoidFor: [
    "dense documentation",
    "task UI where a moving crowd would compete with controls",
  ],
  tone: ["playful", "experimental", "confident"],
  industries: ["media", "events", "technology"],
  contentDensity: "low",
  visualWeight: "high",
  layout: {
    type: "full-width",
    alignment: "center",
  },
  slots: ["eyebrow", "headline", "description", "crowd"],
  capabilities: {
    supportsImage: true,
    supportsVideo: false,
    supportsForm: false,
    supportsCTA: false,
    supportsDarkMode: true,
  },
  recommendedAfter: ["navbar"],
  recommendedBefore: ["features", "cta", "footer"],
  tags: [
    "marketing",
    "hero",
    "canvas",
    "crowd",
    "animation",
    "walkers",
    "skiper",
  ],
  dependencies: [],
  registryDependencies: [],
  a11y: { keyboardNav: false, reducedMotion: true },
  preview: {
    layout: "fit",
    width: 1440,
    height: 900,
  },
} satisfies ComponentMeta;
