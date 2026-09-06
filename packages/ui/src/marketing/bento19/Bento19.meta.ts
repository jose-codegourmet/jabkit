import type { ComponentMeta } from "@jabkit/build-registry";

export default {
  name: "bento19",
  displayName: "Bento19",
  version: "1.0.0",
  addedAt: "2026-09-05",
  description:
    "Three-column masonry bento of six bordered cards with integration pills, compact charts, and AI ops illustrations.",
  sectionCategory: "features",
  purpose:
    "Explains several technical product benefits through varied visual demonstrations instead of uniform feature cards.",
  bestFor: [
    "SaaS landing pages",
    "technical products",
    "product benefit overviews",
  ],
  tone: ["technical", "modern", "confident"],
  industries: ["SaaS", "technology"],
  contentDensity: "high",
  visualWeight: "high",
  layout: {
    type: "masonry",
    alignment: "mixed",
    columns: 3,
  },
  slots: ["headline", "featureItems", "featureVisuals", "supportingMetrics"],
  capabilities: {
    supportsImage: false,
    supportsVideo: false,
    supportsForm: false,
    supportsCTA: false,
    supportsDarkMode: true,
  },
  recommendedAfter: ["hero", "about", "logos"],
  recommendedBefore: ["case-studies", "pricing", "testimonials", "cta"],
  tags: [
    "bento",
    "marketing",
    "features",
    "masonry",
    "integrations",
    "ai",
    "landing",
    "grid",
  ],
  dependencies: [],
  registryDependencies: ["badge"],
  a11y: { keyboardNav: true, reducedMotion: true },
  preview: { layout: "fit", width: 1440, height: 1180 },
} satisfies ComponentMeta;
