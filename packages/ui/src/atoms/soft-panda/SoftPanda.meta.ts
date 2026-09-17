import type { ComponentMeta } from "@jabkit/build-registry";

export default {
  name: "soft-panda",
  displayName: "SoftPanda",
  version: "1.1.0",
  addedAt: "2026-09-15",
  description:
    "A square dual-tone mosaic field with 45-degree tiles, token-mapped ink and lemon, and an optional slow drift.",
  sectionCategory: "background",
  purpose:
    "Fills a region with a high-contrast diamond mosaic without photographs or palette hex colors.",
  bestFor: [
    "decorative section fills",
    "catalogue swatches",
    "empty-state or card backgrounds",
  ],
  avoidFor: [
    "text-heavy regions that need a flat reading surface",
    "controls that must stay visually quiet",
  ],
  tone: ["playful", "clean"],
  contentDensity: "low",
  visualWeight: "medium",
  layout: {
    type: "stack",
    alignment: "center",
  },
  slots: ["field", "content"],
  capabilities: {
    supportsImage: false,
    supportsVideo: false,
    supportsForm: false,
    supportsCTA: false,
    supportsDarkMode: true,
  },
  inspoUrl: "https://uiverse.io/aadium/soft-panda-93",
  tags: ["pattern", "mosaic", "background", "decorative", "atom"],
  dependencies: [],
  registryDependencies: [],
  a11y: { keyboardNav: false, reducedMotion: true },
  preview: {
    layout: "center",
  },
} satisfies ComponentMeta;
