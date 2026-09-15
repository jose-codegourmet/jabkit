import type { ComponentMeta } from "@jabkit/build-registry";

export default {
  name: "shy-rattlesnake",
  displayName: "ShyRattlesnake",
  version: "1.0.0",
  addedAt: "2026-09-15",
  description:
    "A perforated event pass with a 3D hover tilt, drifting grid, barcode stub, and seat mark.",
  sectionCategory: "content",
  purpose:
    "Turns admission details into a tactile ticket instead of a flat card, while staying on semantic tokens.",
  bestFor: [
    "conference or festival pass previews",
    "checkout confirmation for ticketed events",
    "showcase tiles that need a physical paper cue",
  ],
  avoidFor: [
    "dense data tables",
    "forms that need native inputs inside the pass",
  ],
  tone: ["playful", "bold"],
  contentDensity: "medium",
  visualWeight: "high",
  layout: {
    type: "stack",
    alignment: "center",
  },
  slots: ["brand", "badge", "title", "subtitle", "details", "barcode", "seat"],
  capabilities: {
    supportsImage: false,
    supportsVideo: false,
    supportsForm: false,
    supportsCTA: false,
    supportsDarkMode: true,
  },
  tags: ["ticket", "pass", "card", "event", "atom"],
  dependencies: [],
  registryDependencies: [],
  a11y: { keyboardNav: false, reducedMotion: true },
  preview: {
    layout: "center",
  },
} satisfies ComponentMeta;
