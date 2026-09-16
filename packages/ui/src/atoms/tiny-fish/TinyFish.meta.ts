import type { ComponentMeta } from "@jabkit/build-registry";

export default {
  name: "tiny-fish",
  displayName: "TinyFish",
  version: "1.1.0",
  addedAt: "2026-09-15",
  description:
    "A compact neo-brutalist switch with a 5px-radius track, hard offset shadow, and a matching square knob.",
  sectionCategory: "form",
  purpose:
    "Toggles a binary setting with the Uiverse hard-edge switch silhouette instead of a pill thumb.",
  bestFor: [
    "settings rows that need a stamped, offset-shadow control",
    "playful forms that stay on semantic tokens",
    "catalogue and preview entry points",
  ],
  avoidFor: [
    "dense toolbars that need a quiet iOS-style pill",
    "destructive or irreversible confirms",
  ],
  tone: ["playful", "bold"],
  contentDensity: "low",
  visualWeight: "medium",
  layout: {
    type: "stack",
    alignment: "left",
  },
  slots: ["control", "knob", "label"],
  capabilities: {
    supportsImage: false,
    supportsVideo: false,
    supportsForm: true,
    supportsCTA: false,
    supportsDarkMode: true,
  },
  inspoUrl: "https://uiverse.io/andrew-demchenk0/tiny-fish-66",
  tags: ["switch", "toggle", "checkbox", "neo-brutalist", "form", "atom"],
  dependencies: [],
  registryDependencies: [],
  a11y: { keyboardNav: true, reducedMotion: true },
  preview: {
    layout: "center",
  },
} satisfies ComponentMeta;
