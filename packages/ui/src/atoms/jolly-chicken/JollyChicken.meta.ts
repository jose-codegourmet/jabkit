import type { ComponentMeta } from "@jabkit/build-registry";

export default {
  name: "jolly-chicken",
  displayName: "JollyChicken",
  version: "1.0.0",
  addedAt: "2026-09-15",
  description:
    "A day-to-night switch that slides a sun into a moon while clouds yield to stars.",
  sectionCategory: "form",
  purpose:
    "Gives appearance or quiet-hours toggles a readable scene instead of a plain thumb, still using semantic tokens.",
  bestFor: [
    "theme or night-mode controls",
    "playful settings rows that still need a native checkbox",
    "demo surfaces that show light and dark in one control",
  ],
  avoidFor: [
    "dense toolbars that need a compact switch",
    "forms that must stay visually quiet",
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
  tags: ["switch", "toggle", "theme", "checkbox", "atom"],
  dependencies: [],
  registryDependencies: [],
  a11y: { keyboardNav: true, reducedMotion: true },
  preview: {
    layout: "center",
  },
} satisfies ComponentMeta;
