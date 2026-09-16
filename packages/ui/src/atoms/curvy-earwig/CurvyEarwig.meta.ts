import type { ComponentMeta } from "@jabkit/build-registry";

export default {
  name: "curvy-earwig",
  displayName: "CurvyEarwig",
  version: "1.2.0",
  addedAt: "2026-09-15",
  description:
    "A 301px by 56px search field with layered conic borders, a filter affordance, and focus glow.",
  sectionCategory: "form",
  purpose:
    "Gives headers a high-contrast search target with a subtle animated edge and native text input.",
  bestFor: [
    "header or toolbar search that should stay quiet until used",
    "playful catalogue filters that still need a native text field",
    "demo surfaces that show a collapsed and open search state",
  ],
  avoidFor: [
    "always-visible search on dense data tables",
    "forms that need a labeled field sitting in a grid",
  ],
  tone: ["playful", "clean"],
  contentDensity: "low",
  visualWeight: "medium",
  layout: {
    type: "stack",
    alignment: "center",
  },
  slots: ["field", "search icon", "filter action", "animated border"],
  capabilities: {
    supportsImage: false,
    supportsVideo: false,
    supportsForm: true,
    supportsCTA: false,
    supportsDarkMode: true,
  },
  inspoUrl: "https://uiverse.io/Lakshay-art/curvy-earwig-22",
  tags: ["search", "input", "expand", "atom"],
  dependencies: [],
  registryDependencies: [],
  a11y: { keyboardNav: true, reducedMotion: true },
  preview: {
    layout: "center",
  },
} satisfies ComponentMeta;
