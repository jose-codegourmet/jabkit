import type { ComponentMeta } from "@jabkit/build-registry";

export default {
  name: "strong-squid",
  displayName: "StrongSquid",
  version: "1.2.0",
  addedAt: "2026-09-15",
  description:
    "A pill day-to-night switch whose sun slides into a cratered moon while clouds drop and stars rise.",
  sectionCategory: "form",
  purpose:
    "Lets people flip a persistent on/off setting when the control itself should telegraph day versus night.",
  bestFor: [
    "theme or appearance toggles",
    "settings rows that need a memorable binary control",
    "playful preference panels",
  ],
  avoidFor: [
    "dense data tables",
    "destructive confirmations",
    "forms that need a plain unlabeled checkbox",
  ],
  tone: ["playful", "clean"],
  contentDensity: "low",
  visualWeight: "medium",
  layout: {
    type: "stack",
    alignment: "center",
  },
  slots: ["control", "dayScene", "nightScene"],
  capabilities: {
    supportsImage: false,
    supportsVideo: false,
    supportsForm: true,
    supportsCTA: false,
    supportsDarkMode: true,
  },
  inspoUrl: "https://uiverse.io/Galahhad/strong-squid-82",
  tags: ["switch", "theme", "toggle", "atom", "form"],
  dependencies: [],
  registryDependencies: [],
  a11y: { keyboardNav: true, reducedMotion: true },
  preview: {
    layout: "center",
  },
} satisfies ComponentMeta;
