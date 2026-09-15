import type { ComponentMeta } from "@jabkit/build-registry";

export default {
  name: "odd-fish",
  displayName: "OddFish",
  version: "1.0.0",
  addedAt: "2026-09-15",
  description:
    "A compact content card with a token-mixed fin, hover sheen, and room for a title, body, and action.",
  sectionCategory: "content",
  purpose:
    "Gives a single idea a readable surface that lifts on hover without leaving semantic tokens in light or dark.",
  bestFor: [
    "catalogue tiles and note cards",
    "short feature blurbs beside other atoms",
    "empty or placeholder slots that still need a headline",
  ],
  avoidFor: [
    "primary form controls",
    "full-bleed marketing sections",
    "dense data that needs a plain table",
  ],
  tone: ["playful", "clean"],
  contentDensity: "low",
  visualWeight: "medium",
  layout: {
    type: "stack",
    alignment: "left",
  },
  slots: ["eyebrow", "title", "description", "action"],
  capabilities: {
    supportsImage: false,
    supportsVideo: false,
    supportsForm: false,
    supportsCTA: true,
    supportsDarkMode: true,
  },
  tags: ["card", "content", "hover", "atom"],
  dependencies: [],
  registryDependencies: [],
  a11y: { keyboardNav: false, reducedMotion: true },
  preview: {
    layout: "center",
  },
} satisfies ComponentMeta;
