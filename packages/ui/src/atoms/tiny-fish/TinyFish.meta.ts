import type { ComponentMeta } from "@jabkit/build-registry";

export default {
  name: "tiny-fish",
  displayName: "TinyFish",
  version: "1.0.0",
  addedAt: "2026-09-15",
  description:
    "A playful on-off switch whose thumb is a tiny fish that swims across a token-colored current.",
  sectionCategory: "form",
  purpose:
    "Toggles a binary setting with a memorable motion cue when a quiet switch would disappear on a playful surface.",
  bestFor: [
    "settings with a light or playful voice",
    "feature flags on demo and catalogue pages",
    "ambient or notification toggles",
  ],
  avoidFor: [
    "dense toolbars that need a quiet control",
    "destructive or irreversible confirms",
    "forms that must match a standard switch exactly",
  ],
  tone: ["playful", "clean"],
  contentDensity: "low",
  visualWeight: "medium",
  layout: {
    type: "stack",
    alignment: "left",
  },
  slots: ["control", "fish", "label"],
  capabilities: {
    supportsImage: false,
    supportsVideo: false,
    supportsForm: true,
    supportsCTA: false,
    supportsDarkMode: true,
  },
  tags: ["switch", "toggle", "fish", "form", "atom"],
  dependencies: [],
  registryDependencies: [],
  a11y: { keyboardNav: true, reducedMotion: true },
  preview: {
    layout: "center",
  },
} satisfies ComponentMeta;
