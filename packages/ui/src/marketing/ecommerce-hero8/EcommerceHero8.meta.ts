import type { ComponentMeta } from "@jabkit/build-registry";

export default {
  name: "ecommerce-hero8",
  displayName: "EcommerceHero8",
  version: "1.0.0",
  addedAt: "2026-09-05",
  description:
    "Full-viewport fashion hero with synced autoplay campaign slides and a product thumbnail rail.",
  sectionCategory: "hero",
  purpose:
    "Opens a fashion storefront with campaign storytelling and direct access to featured products.",
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
  industries: ["fashion", "retail", "ecommerce"],
  contentDensity: "medium",
  visualWeight: "high",
  layout: {
    type: "overlay",
    alignment: "mixed",
  },
  slots: [
    "campaignSlides",
    "campaignHeadline",
    "campaignCTA",
    "productThumbnails",
  ],
  capabilities: {
    supportsImage: true,
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
    "ecommerce",
    "carousel",
    "autoplay",
    "fashion",
    "cta",
  ],
  dependencies: [],
  registryDependencies: ["button"],
  a11y: { keyboardNav: true, reducedMotion: true },
  preview: {
    layout: "fit",
    width: 1440,
    height: 900,
    capture: {
      format: "gif",
      gifFrames: 4,
      gifIntervalMs: 5200,
      gifDelayMs: 700,
    },
  },
} satisfies ComponentMeta;
