import type { ComponentMeta } from "@jabkit/build-registry";

export default {
  name: "fast-puma",
  displayName: "FastPuma",
  version: "1.1.0",
  addedAt: "2026-09-15",
  description:
    "A pair of squishy plus and minus pads in square wells with circular knobs.",
  sectionCategory: "action",
  purpose:
    "Gives quantity or polarity controls the raised-to-pressed pad feel without flattening the inspo radii.",
  bestFor: [
    "quantity steppers that need a tactile plus and minus pair",
    "playful settings pads that stay on semantic tokens",
    "catalogue and preview entry points",
  ],
  avoidFor: [
    "dense toolbars where the 140px wells would crowd the row",
    "destructive or irreversible actions",
  ],
  tone: ["playful", "bold"],
  contentDensity: "low",
  visualWeight: "medium",
  layout: {
    type: "stack",
    alignment: "center",
  },
  slots: ["plus", "minus"],
  capabilities: {
    supportsImage: false,
    supportsVideo: false,
    supportsForm: true,
    supportsCTA: false,
    supportsDarkMode: true,
  },
  inspoUrl: "https://uiverse.io/FColombati/fast-puma-20",
  tags: ["button", "toggle", "plus", "minus", "neumorphic", "atom"],
  dependencies: [],
  registryDependencies: [],
  a11y: { keyboardNav: true, reducedMotion: true },
  preview: {
    layout: "center",
  },
} satisfies ComponentMeta;
