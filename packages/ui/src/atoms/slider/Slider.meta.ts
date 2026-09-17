import type { ComponentMeta } from "@jabkit/build-registry";

export default {
  name: "slider",
  displayName: "Slider",
  version: "1.0.0",
  addedAt: "2026-09-17",
  description:
    "Accessible range Slider primitive adapted from shadcn/ui Base UI.",
  sectionCategory: "form",
  purpose:
    "Lets users pick a value or range along a continuous scale with keyboard and pointer control.",
  bestFor: ["forms", "settings", "filters", "data entry"],
  tone: ["clean", "professional"],
  contentDensity: "low",
  visualWeight: "low",
  layout: {
    type: "stack",
    alignment: "left",
  },
  slots: ["label", "control", "supportingText"],
  capabilities: {
    supportsImage: false,
    supportsVideo: false,
    supportsForm: true,
    supportsCTA: false,
    supportsDarkMode: true,
  },
  tags: ["slider", "primitive", "accessible", "range"],
  dependencies: [],
  registryDependencies: [],
  a11y: { keyboardNav: true, reducedMotion: true },
} satisfies ComponentMeta;
