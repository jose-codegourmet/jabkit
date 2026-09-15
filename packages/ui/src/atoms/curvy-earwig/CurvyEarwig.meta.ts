import type { ComponentMeta } from "@jabkit/build-registry";

export default {
  name: "curvy-earwig",
  displayName: "CurvyEarwig",
  version: "1.1.0",
  addedAt: "2026-09-15",
  description:
    "A 160px-radius capsule search field that collapses to a 50px disc when the icon is toggled.",
  sectionCategory: "form",
  purpose:
    "Gives headers a compact search target that opens into a wide pill only after the icon is clicked.",
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
  slots: ["toggle", "field", "glyph"],
  capabilities: {
    supportsImage: false,
    supportsVideo: false,
    supportsForm: true,
    supportsCTA: false,
    supportsDarkMode: true,
  },
  tags: ["search", "input", "expand", "atom"],
  dependencies: [],
  registryDependencies: [],
  a11y: { keyboardNav: true, reducedMotion: true },
  preview: {
    layout: "center",
  },
} satisfies ComponentMeta;
