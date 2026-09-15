import type { ComponentMeta } from "@jabkit/build-registry";

export default {
  name: "light-eagle",
  displayName: "LightEagle",
  version: "1.0.0",
  addedAt: "2026-09-15",
  description:
    "A token-tinted chevron wing field with an optional caption and a slow glide that pauses under reduced motion.",
  sectionCategory: "content",
  purpose:
    "Gives empty states, catalogue cards, and section backdrops a feathered chevron texture that stays on semantic tokens in light and dark.",
  bestFor: [
    "decorative tiles behind captions",
    "catalogue or story frames that need a light geometric field",
    "quiet pattern fills on product surfaces",
  ],
  avoidFor: [
    "primary actions or form controls",
    "dense data that needs a plain surface",
  ],
  tone: ["playful", "clean"],
  contentDensity: "low",
  visualWeight: "medium",
  layout: {
    type: "stack",
    alignment: "left",
  },
  slots: ["caption"],
  capabilities: {
    supportsImage: false,
    supportsVideo: false,
    supportsForm: false,
    supportsCTA: false,
    supportsDarkMode: true,
  },
  tags: ["pattern", "chevron", "background", "texture", "atom"],
  dependencies: [],
  registryDependencies: [],
  a11y: { keyboardNav: false, reducedMotion: true },
  preview: {
    layout: "center",
  },
} satisfies ComponentMeta;
