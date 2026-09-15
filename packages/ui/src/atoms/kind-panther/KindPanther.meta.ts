import type { ComponentMeta } from "@jabkit/build-registry";

export default {
  name: "kind-panther",
  displayName: "KindPanther",
  version: "1.0.0",
  addedAt: "2026-09-15",
  description:
    "A token-tinted isometric tessellation tile with an optional caption and a slow drift that pauses under reduced motion.",
  sectionCategory: "content",
  purpose:
    "Gives empty states, catalogue cards, and section backdrops a geometric field that stays on semantic tokens in light and dark.",
  bestFor: [
    "decorative tiles behind captions",
    "catalogue or story frames that need texture",
    "quiet pattern fills on marketing or product surfaces",
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
  tags: ["pattern", "tessellation", "background", "texture", "atom"],
  dependencies: [],
  registryDependencies: [],
  a11y: { keyboardNav: false, reducedMotion: true },
  preview: {
    layout: "center",
  },
} satisfies ComponentMeta;
