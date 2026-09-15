import type { ComponentMeta } from "@jabkit/build-registry";

export default {
  name: "clever-panther",
  displayName: "CleverPanther",
  version: "1.0.0",
  addedAt: "2026-09-15",
  description:
    "A compact note card with a token-tinted sheen and a quiet spotted field that stays readable in light and dark.",
  sectionCategory: "content",
  purpose:
    "Presents a short title, caption, and optional action on a dark-leaning card without leaving semantic tokens.",
  bestFor: [
    "catalogue or story notes",
    "compact feature blurbs",
    "hoverable teaser cards on product or marketing surfaces",
  ],
  avoidFor: [
    "primary form controls",
    "dense data that needs a plain table surface",
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
  tags: ["card", "sheen", "note", "content", "atom"],
  dependencies: [],
  registryDependencies: [],
  a11y: { keyboardNav: false, reducedMotion: true },
  preview: {
    layout: "center",
  },
} satisfies ComponentMeta;
