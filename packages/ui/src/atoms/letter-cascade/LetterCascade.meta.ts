import type { ComponentMeta } from "@jabkit/build-registry";

export default {
  name: "letter-cascade",
  displayName: "LetterCascade",
  version: "1.0.0",
  addedAt: "2026-09-16",
  description:
    "A 3D split-flap word where each glyph tilts back while its echo flips up in a staggered spring wave.",
  sectionCategory: "content",
  purpose:
    "Adds a kinetic wordmark or hover label when a line of text should feel mechanical and dimensional without leaving the token set.",
  bestFor: [
    "interactive headlines and wordmarks",
    "hover or click micro-copy on marketing heroes",
    "demo labels that need a split-flap cascade",
  ],
  avoidFor: [
    "long body copy or paragraphs",
    "critical form labels that must stay still",
  ],
  tone: ["playful", "expressive"],
  contentDensity: "low",
  visualWeight: "medium",
  layout: {
    type: "inline",
    alignment: "center",
  },
  slots: ["text"],
  capabilities: {
    supportsImage: false,
    supportsVideo: false,
    supportsForm: false,
    supportsCTA: false,
    supportsDarkMode: true,
  },
  tags: ["text", "animation", "split-flap", "hover", "atom"],
  dependencies: [],
  registryDependencies: [],
  a11y: { keyboardNav: true, reducedMotion: true },
  preview: {
    layout: "center",
  },
} satisfies ComponentMeta;
