import type { ComponentMeta } from "@jabkit/build-registry";

export default {
  name: "wise-lizard",
  displayName: "WiseLizard",
  version: "1.0.0",
  addedAt: "2026-09-15",
  description:
    "A tilted brutalist username field with a warning plaque, hard offset shadow, and a user mark.",
  sectionCategory: "form",
  purpose:
    "Collects a short identity value with a 3D poster frame that still reads as a native text input.",
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
  dependencies: ["lucide-react"],
  registryDependencies: [],
  a11y: { keyboardNav: true, reducedMotion: true },
  preview: {
    layout: "center",
    width: 560,
    height: 280,
  },
} satisfies ComponentMeta;
