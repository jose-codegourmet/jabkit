import type { ComponentMeta } from "@jabkit/build-registry";

export default {
  name: "horrible-shrimp",
  displayName: "HorribleShrimp",
  version: "1.1.0",
  addedAt: "2026-09-15",
  description:
    "A compact outlined switch with a 1em pill track and a circular thumb that lifts on hover and slides when on.",
  sectionCategory: "form",
  purpose:
    "Toggles a persistent on or off preference with a tactile, hard-outline control that stays readable in light and dark.",
  bestFor: [
    "settings rows that need a visible on and off state",
    "notification or feature flags in compact forms",
    "demo surfaces that want a physical switch without extra chrome",
  ],
  avoidFor: [
    "multi-option choices that need a radio group",
    "destructive confirmations that should use a button",
  ],
  tone: ["playful", "bold"],
  contentDensity: "low",
  visualWeight: "medium",
  layout: {
    type: "stack",
    alignment: "left",
  },
  slots: ["label", "control"],
  capabilities: {
    supportsImage: false,
    supportsVideo: false,
    supportsForm: true,
    supportsCTA: false,
    supportsDarkMode: true,
  },
  tags: ["switch", "toggle", "form", "atom"],
  dependencies: [],
  registryDependencies: [],
  a11y: { keyboardNav: true, reducedMotion: true },
  preview: {
    layout: "center",
  },
} satisfies ComponentMeta;
