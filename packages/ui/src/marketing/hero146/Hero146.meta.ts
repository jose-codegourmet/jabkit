import type { ComponentMeta } from "@jabkit/build-registry";

export default {
  name: "hero146",
  displayName: "Hero146",
  version: "1.0.0",
  addedAt: "2026-09-01",
  description:
    "Centered AI-agents hero on a square grid wash, with a gradient headline, metallic get-started pill, and a framed video teaser that exposes a play bar and optional presentation embed.",
  sectionCategory: "hero",
  purpose:
    "Introduces a technical AI product with focused copy and a product demonstration as the primary evidence.",
  bestFor: [
    "brand-led homepages",
    "product launches",
    "campaign landing pages",
  ],
  avoidFor: [
    "dense application screens",
    "pages that need an understated opening",
  ],
  tone: ["bold", "premium", "editorial"],
  industries: ["artificial intelligence", "developer tools", "technology"],
  contentDensity: "medium",
  visualWeight: "high",
  layout: {
    type: "full-width",
    alignment: "center",
  },
  slots: ["eyebrow", "headline", "description", "primaryCTA", "videoTeaser"],
  capabilities: {
    supportsImage: true,
    supportsVideo: true,
    supportsForm: false,
    supportsCTA: true,
    supportsDarkMode: true,
  },
  recommendedAfter: ["navbar"],
  recommendedBefore: ["logos", "stats", "features", "about"],
  tags: ["hero", "marketing", "video", "cta", "agents", "landing", "grid"],
  dependencies: [],
  registryDependencies: ["button"],
  a11y: { keyboardNav: true, reducedMotion: true },
  preview: { layout: "fit", width: 1440, height: 900 },
} satisfies ComponentMeta;
