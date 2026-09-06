import type { ComponentMeta } from "@jabkit/build-registry";

export default {
  name: "glowing-shadow",
  displayName: "GlowingShadow",
  version: "1.0.0",
  addedAt: "2026-09-06",
  description:
    "Marketing block with a rotating, color-cycling token glow behind display type. Hover brightens blur, opacity, and scale.",
  sectionCategory: "features",
  purpose:
    "Puts a kinetic light field behind a wordmark or short claim so a landing moment feels lit without leaving semantic tokens.",
  bestFor: [
    "product launches",
    "creative studio landings",
    "feature moments that need a glow without extra chrome",
  ],
  avoidFor: [
    "dense documentation",
    "forms or task UI where a spinning field would compete with controls",
  ],
  tone: ["experimental", "modern", "confident"],
  industries: ["technology", "media", "ecommerce"],
  contentDensity: "low",
  visualWeight: "high",
  layout: {
    type: "stack",
    alignment: "center",
    columns: 3,
  },
  slots: ["headline", "content", "featureVisuals"],
  capabilities: {
    supportsImage: false,
    supportsVideo: false,
    supportsForm: false,
    supportsCTA: false,
    supportsDarkMode: true,
  },
  recommendedAfter: ["hero", "logos"],
  recommendedBefore: ["pricing", "cta", "testimonials"],
  tags: [
    "glow",
    "shadow",
    "conic",
    "marketing",
    "hover",
    "landing",
    "interactive",
  ],
  dependencies: [],
  registryDependencies: [],
  a11y: { keyboardNav: false, reducedMotion: true },
  preview: { layout: "fit", width: 1440, height: 900 },
} satisfies ComponentMeta;
