import type { ComponentMeta } from "@jabkit/build-registry";

export default {
  name: "good-donkey",
  displayName: "GoodDonkey",
  version: "1.1.0",
  addedAt: "2026-09-15",
  description:
    "A 40px, 10px-radius message bar with a plus-circle attach control, a 200px field, and a paper-plane send mark.",
  sectionCategory: "form",
  purpose:
    "Gives chat and comment rows the compact composer shape from the source inspo, mapped onto semantic tokens.",
  bestFor: [
    "inline chat or comment composers",
    "support reply fields",
    "demo surfaces that need attach plus send in one row",
  ],
  avoidFor: [
    "long-form editors that need a toolbar",
    "search fields that should stay a single input",
  ],
  tone: ["clean", "playful"],
  contentDensity: "low",
  visualWeight: "low",
  layout: {
    type: "row",
    alignment: "center",
  },
  slots: ["attach", "message", "send"],
  capabilities: {
    supportsImage: false,
    supportsVideo: false,
    supportsForm: true,
    supportsCTA: true,
    supportsDarkMode: true,
  },
  inspoUrl: "https://uiverse.io/vinodjangid07/good-donkey-28",
  tags: ["input", "composer", "chat", "file", "send", "atom"],
  dependencies: [],
  registryDependencies: [],
  a11y: { keyboardNav: true, reducedMotion: true },
  preview: {
    layout: "center",
    width: 420,
    height: 160,
  },
} satisfies ComponentMeta;
