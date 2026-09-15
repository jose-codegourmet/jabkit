import type { ComponentMeta } from "@jabkit/build-registry";

export default {
  name: "wise-lizard",
  displayName: "WiseLizard",
  version: "1.1.0",
  addedAt: "2026-09-15",
  description:
    "A square brutalist 3D username field: hard offset shadow, warning plaque, and a native text input that lifts on hover.",
  sectionCategory: "form",
  purpose:
    "Collects a short identity value with a tilted poster frame while keeping a native text control and square corners.",
  bestFor: [
    "sign-in or handle fields that can afford visual weight",
    "neo-brutalist forms and catalogue demos",
    "onboarding rows that need a labeled username control",
  ],
  avoidFor: [
    "dense data-entry tables",
    "quiet enterprise forms that need a low-contrast input",
  ],
  tone: ["bold", "playful"],
  contentDensity: "low",
  visualWeight: "high",
  layout: {
    type: "stack",
    alignment: "left",
  },
  slots: ["badge", "mark", "control"],
  capabilities: {
    supportsImage: false,
    supportsVideo: false,
    supportsForm: true,
    supportsCTA: false,
    supportsDarkMode: true,
  },
  tags: ["input", "username", "brutalism", "form", "atom"],
  dependencies: [],
  registryDependencies: [],
  a11y: { keyboardNav: true, reducedMotion: true },
  preview: {
    layout: "center",
    width: 560,
    height: 280,
  },
} satisfies ComponentMeta;
