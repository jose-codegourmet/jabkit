import type { ComponentMeta } from "@jabkit/build-registry";

export default {
  name: "good-donkey",
  displayName: "GoodDonkey",
  version: "1.0.0",
  addedAt: "2026-09-15",
  description:
    "A compact message composer with file attach, a text field, and a send control.",
  sectionCategory: "form",
  purpose:
    "Gives chat, comment, and support surfaces a short compose bar that stays on semantic tokens.",
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
  tags: ["input", "composer", "chat", "file", "send", "atom"],
  dependencies: ["lucide-react"],
  registryDependencies: [],
  a11y: { keyboardNav: true, reducedMotion: true },
  preview: {
    layout: "center",
    width: 420,
    height: 160,
  },
} satisfies ComponentMeta;
