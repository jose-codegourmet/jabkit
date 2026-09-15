import type { ComponentMeta } from "@jabkit/build-registry";

export default {
  name: "clever-panther",
  displayName: "CleverPanther",
  version: "1.1.0",
  addedAt: "2026-09-15",
  description:
    "A 190 by 254 neumorphic slab with a 30px corner, dual 15px shadows, and no control-radius flatten.",
  sectionCategory: "content",
  purpose:
    "Recreates the Gidarx clever-panther-6 extruded tile so a catalogue or empty state can sit on the page field without borrowing Button rounding.",
  bestFor: [
    "decorative catalogue tiles",
    "empty-state or wait-list slabs",
    "small marketing accents that stay in atoms",
  ],
  avoidFor: [
    "primary form controls",
    "dense data that needs a plain table surface",
  ],
  tone: ["playful", "clean"],
  contentDensity: "low",
  visualWeight: "medium",
  layout: {
    type: "stack",
    alignment: "center",
  },
  slots: ["caption"],
  capabilities: {
    supportsImage: false,
    supportsVideo: false,
    supportsForm: false,
    supportsCTA: false,
    supportsDarkMode: true,
  },
  tags: ["card", "neumorphic", "slab", "content", "atom"],
  dependencies: [],
  registryDependencies: [],
  a11y: { keyboardNav: false, reducedMotion: true },
  preview: {
    layout: "center",
  },
} satisfies ComponentMeta;
