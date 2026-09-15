import type { ComponentMeta } from "@jabkit/build-registry";

export default {
  name: "stupid-insect",
  displayName: "StupidInsect",
  version: "1.0.0",
  addedAt: "2026-09-15",
  description:
    "A tiled concentric-ring field built from semantic tokens, with an optional slow drift that stops under reduced motion.",
  sectionCategory: "content",
  purpose:
    "Gives a surface a repeating radial-ring texture without leaving the token set or introducing vendor hex colors.",
  bestFor: [
    "hero or card backdrop texture",
    "catalogue pattern tiles",
    "playful empty-state backgrounds",
  ],
  avoidFor: [
    "dense data surfaces that need quiet chrome",
    "text-heavy reading columns",
  ],
  tone: ["playful", "bold"],
  contentDensity: "low",
  visualWeight: "high",
  layout: {
    type: "stack",
    alignment: "center",
  },
  slots: ["overlay"],
  capabilities: {
    supportsImage: false,
    supportsVideo: false,
    supportsForm: false,
    supportsCTA: false,
    supportsDarkMode: true,
  },
  tags: ["pattern", "background", "texture", "atom"],
  dependencies: [],
  registryDependencies: [],
  a11y: { keyboardNav: false, reducedMotion: true },
  preview: {
    layout: "center",
    width: 440,
    height: 280,
  },
} satisfies ComponentMeta;
