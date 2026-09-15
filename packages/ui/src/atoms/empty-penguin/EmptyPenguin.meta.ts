import type { ComponentMeta } from "@jabkit/build-registry";

export default {
  name: "empty-penguin",
  displayName: "EmptyPenguin",
  version: "1.0.0",
  addedAt: "2026-09-15",
  description:
    "A compact on/off switch with a sliding thumb, token-colored track, and a quiet unused state.",
  sectionCategory: "form",
  purpose:
    "Lets people flip a single persistent setting without a labeled checkbox or a full settings row.",
  bestFor: [
    "settings and preference toggles",
    "compact form rows",
    "feature flags in light product UI",
  ],
  avoidFor: [
    "multi-select choices",
    "actions that submit or navigate",
    "destructive confirmations",
  ],
  tone: ["clean", "playful"],
  contentDensity: "low",
  visualWeight: "low",
  layout: {
    type: "stack",
    alignment: "center",
  },
  slots: ["control"],
  capabilities: {
    supportsImage: false,
    supportsVideo: false,
    supportsForm: true,
    supportsCTA: false,
    supportsDarkMode: true,
  },
  tags: ["switch", "toggle", "form", "control", "atom"],
  dependencies: [],
  registryDependencies: [],
  a11y: { keyboardNav: true, reducedMotion: true },
  preview: {
    layout: "center",
  },
} satisfies ComponentMeta;
