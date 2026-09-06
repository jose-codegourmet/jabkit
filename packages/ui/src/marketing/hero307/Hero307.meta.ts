import type { ComponentMeta } from "@jabkit/build-registry";

export default {
  name: "hero307",
  displayName: "Hero307",
  version: "1.0.0",
  addedAt: "2026-09-01",
  description:
    "Fullscreen marketing hero with an oversized headline, paired CTAs, and a CSS-built admin dashboard that tilts in a 3D perspective scene.",
  sectionCategory: "hero",
  purpose:
    "Makes a software product feel ambitious by pairing oversized positioning with an immediately recognizable dashboard scene.",
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
  industries: ["SaaS", "technology"],
  contentDensity: "medium",
  visualWeight: "high",
  layout: {
    type: "full-width",
    alignment: "center",
  },
  slots: [
    "headline",
    "description",
    "primaryCTA",
    "secondaryCTA",
    "dashboardPreview",
  ],
  capabilities: {
    supportsImage: false,
    supportsVideo: false,
    supportsForm: false,
    supportsCTA: true,
    supportsDarkMode: true,
  },
  recommendedAfter: ["navbar"],
  recommendedBefore: ["logos", "stats", "features", "about"],
  tags: [
    "hero",
    "marketing",
    "dashboard-preview",
    "3d",
    "cta",
    "fullscreen",
    "landing",
  ],
  dependencies: [],
  registryDependencies: ["button"],
  a11y: { keyboardNav: true, reducedMotion: true },
  preview: { layout: "fit", width: 1440, height: 900 },
} satisfies ComponentMeta;
