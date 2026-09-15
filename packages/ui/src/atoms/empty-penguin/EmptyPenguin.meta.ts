import type { ComponentMeta } from "@jabkit/build-registry";

export default {
  name: "empty-penguin",
  displayName: "EmptyPenguin",
  version: "1.1.0",
  addedAt: "2026-09-15",
  description:
    "A 70 by 36 neo-brutalist on/off switch: 100px pill track, 2px ink border, 4px offset shadow, and a labeled thumb that slides the well.",
  sectionCategory: "form",
  purpose:
    "Lets people flip a single persistent setting with the Uiverse empty-penguin motion, without flattening the 100px radii.",
  bestFor: [
    "settings and preference toggles",
    "playful form rows that need an on/off caption in the thumb",
    "feature flags in light product UI",
  ],
  avoidFor: [
    "multi-select choices",
    "actions that submit or navigate",
    "destructive confirmations",
  ],
  tone: ["playful", "bold"],
  contentDensity: "low",
  visualWeight: "low",
  layout: {
    type: "stack",
    alignment: "center",
  },
  slots: ["control"],
  capabilities: {
    supportsImage: false,
    supportsVideo: false,
    supportsForm: true,
    supportsCTA: false,
    supportsDarkMode: true,
  },
  tags: ["switch", "toggle", "form", "control", "atom"],
  dependencies: [],
  registryDependencies: [],
  a11y: { keyboardNav: true, reducedMotion: true },
  preview: {
    layout: "center",
  },
} satisfies ComponentMeta;
