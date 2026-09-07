import type { ComponentMeta } from "@jabkit/build-registry";

export default {
  name: "avatar-border",
  displayName: "AvatarBorder",
  version: "1.0.0",
  addedAt: "2026-09-07",
  description:
    "Identity avatar wrapped in a token-colored conic ring that can spin or stay still.",
  sectionCategory: "identity",
  purpose:
    "Highlights a person or brand mark with a theme-aware border so profile faces stay distinct in dense lists and headers.",
  bestFor: [
    "profile photos in headers",
    "author bylines that need extra emphasis",
    "online presence and member cards",
  ],
  avoidFor: [
    "large galleries of faces",
    "decorative images that are not identity",
  ],
  tone: ["clean", "professional"],
  contentDensity: "low",
  visualWeight: "low",
  layout: {
    type: "stack",
    alignment: "center",
  },
  slots: ["image", "fallback", "ring"],
  capabilities: {
    supportsImage: true,
    supportsVideo: false,
    supportsForm: false,
    supportsCTA: false,
    supportsDarkMode: true,
  },
  recommendedAfter: ["avatar"],
  tags: ["avatar", "border", "identity", "ring", "atom"],
  dependencies: [],
  registryDependencies: ["avatar"],
  a11y: { keyboardNav: false, reducedMotion: true },
  preview: {
    layout: "center",
  },
} satisfies ComponentMeta;
