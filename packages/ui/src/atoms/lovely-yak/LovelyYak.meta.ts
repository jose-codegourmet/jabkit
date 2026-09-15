import type { ComponentMeta } from "@jabkit/build-registry";

export default {
  name: "lovely-yak",
  displayName: "LovelyYak",
  version: "1.0.0",
  addedAt: "2026-09-15",
  description:
    "A lifted profile card with an accent banner, overlapping mark, brief copy, and an optional action.",
  sectionCategory: "content",
  purpose:
    "Presents a person, plan, or snippet in a compact card that stays on semantic tokens in light and dark.",
  bestFor: [
    "directory or roster tiles",
    "short bios with one follow-up action",
    "catalogue previews that need a friendly card",
  ],
  avoidFor: [
    "dense data tables",
    "primary site navigation",
  ],
  tone: ["playful", "clean"],
  contentDensity: "low",
  visualWeight: "medium",
  layout: {
    type: "stack",
    alignment: "center",
  },
  slots: ["kicker", "title", "description", "action"],
  capabilities: {
    supportsImage: false,
    supportsVideo: false,
    supportsForm: false,
    supportsCTA: true,
    supportsDarkMode: true,
  },
  tags: ["card", "profile", "content", "cta", "atom"],
  dependencies: [],
  registryDependencies: [],
  a11y: { keyboardNav: true, reducedMotion: true },
  preview: {
    layout: "center",
  },
} satisfies ComponentMeta;
