import type { ComponentMeta } from "@jabkit/build-registry";

export default {
  name: "feature261",
  displayName: "Feature261",
  version: "1.0.0",
  addedAt: "2026-09-05",
  description:
    "Marketing bento mosaic mixing a tall photo, a stat callout, a pricing tile, a short promo, an avatar cluster, and a supporting image.",
  sectionCategory: "features",
  purpose:
    "Communicates a broad value proposition through varied proof points, pricing, people, and product imagery in one mosaic.",
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
  slots: [
    "featureMedia",
    "statistic",
    "price",
    "promoCopy",
    "customerAvatars",
    "primaryCTA",
  ],
  capabilities: {
    supportsImage: true,
    supportsVideo: false,
    supportsForm: false,
    supportsCTA: true,
    supportsDarkMode: true,
  },
  recommendedAfter: ["hero", "about", "logos"],
  recommendedBefore: ["case-studies", "pricing", "testimonials", "cta"],
  tags: [
    "feature",
    "marketing",
    "bento",
    "stats",
    "pricing",
    "avatars",
    "media",
    "landing",
  ],
  dependencies: [],
  registryDependencies: ["avatar", "button"],
  a11y: { keyboardNav: true, reducedMotion: true },
  preview: { layout: "fit", width: 1440, height: 1100 },
} satisfies ComponentMeta;
