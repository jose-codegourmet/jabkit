import type { ComponentMeta } from "@jabkit/build-registry";

export default {
  name: "odd-fish",
  displayName: "OddFish",
  version: "1.1.0",
  addedAt: "2026-09-15",
  description:
    "A square neo-brutalist profile plate: striped header, hard offset shadow, three counts, and a full-width follow.",
  sectionCategory: "content",
  purpose:
    "Keeps the inspo card square and hatched instead of flattening it to the control radius, while mapping ink and fill to semantic tokens.",
  bestFor: [
    "profile or member tiles",
    "catalogue cards that need a hard frame",
    "compact identity blocks beside other atoms",
  ],
  avoidFor: [
    "soft rounded marketing heroes",
    "dense data that needs a plain table",
    "primary form controls",
  ],
  tone: ["playful", "bold"],
  contentDensity: "medium",
  visualWeight: "high",
  layout: {
    type: "stack",
    alignment: "left",
  },
  slots: ["header", "handle", "name", "bio", "stats", "action"],
  capabilities: {
    supportsImage: false,
    supportsVideo: false,
    supportsForm: false,
    supportsCTA: true,
    supportsDarkMode: true,
  },
  tags: ["card", "profile", "brutalist", "hover", "atom"],
  dependencies: [],
  registryDependencies: [],
  a11y: { keyboardNav: true, reducedMotion: true },
  preview: {
    layout: "center",
  },
} satisfies ComponentMeta;
