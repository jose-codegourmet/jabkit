import type { ComponentMeta } from "@jabkit/build-registry";

export default {
  name: "avatar",
  displayName: "Avatar",
  version: "1.0.0",
  addedAt: "2026-08-30",
  description: "Accessible Avatar primitive adapted from shadcn/ui.",
  sectionCategory: "identity",
  purpose:
    "Represents a person or organization in compact identity contexts, with a fallback when no image is available.",
  bestFor: ["user profiles", "author bylines", "member lists"],
  tone: ["neutral", "professional"],
  contentDensity: "low",
  visualWeight: "low",
  layout: {
    type: "stack",
    alignment: "center",
  },
  slots: ["image", "fallback"],
  capabilities: {
    supportsImage: true,
    supportsVideo: false,
    supportsForm: false,
    supportsCTA: false,
    supportsDarkMode: true,
  },
  tags: ["avatar", "primitive", "accessible"],
  dependencies: [],
  registryDependencies: [],
  a11y: { keyboardNav: true, reducedMotion: true },
} satisfies ComponentMeta;
