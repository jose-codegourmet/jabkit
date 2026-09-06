import type { ComponentMeta } from "@jabkit/build-registry";

export default {
  name: "liquid-metal-button",
  displayName: "LiquidMetalButton",
  version: "1.0.0",
  addedAt: "2026-09-06",
  description:
    "Marketing CTA block with a liquid-metal pill, token chrome field, glowing rim, and hover pour. Still when motion is reduced.",
  sectionCategory: "cta",
  purpose:
    "Puts a tactile chrome CTA on a landing beat so a primary action feels poured rather than flat.",
  bestFor: [
    "product launches",
    "hero closers",
    "campaign moments that need a metallic CTA without leaving semantic tokens",
  ],
  avoidFor: [
    "dense forms",
    "task UI where a moving metal field would compete with inputs",
  ],
  tone: ["experimental", "premium", "confident"],
  industries: ["technology", "media", "ecommerce"],
  contentDensity: "low",
  visualWeight: "high",
  layout: {
    type: "stack",
    alignment: "center",
  },
  slots: ["headline", "primaryAction", "iconAction"],
  capabilities: {
    supportsImage: false,
    supportsVideo: false,
    supportsForm: false,
    supportsCTA: true,
    supportsDarkMode: true,
  },
  recommendedAfter: ["hero", "features"],
  recommendedBefore: ["pricing", "footer"],
  tags: [
    "cta",
    "button",
    "liquid",
    "metal",
    "chrome",
    "marketing",
    "hover",
    "landing",
    "interactive",
  ],
  dependencies: ["lucide-react"],
  registryDependencies: [],
  a11y: { keyboardNav: true, reducedMotion: true },
  preview: { layout: "fit", width: 1440, height: 780 },
} satisfies ComponentMeta;
