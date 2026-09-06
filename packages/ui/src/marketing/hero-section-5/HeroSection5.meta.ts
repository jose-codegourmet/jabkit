import type { ComponentMeta } from "@jabkit/build-registry";

export default {
  name: "hero-section-5",
  displayName: "HeroSection5",
  version: "1.0.0",
  addedAt: "2026-09-01",
  description:
    "Cinematic marketing hero with a framed looping video panel, bottom-left offer, a light header, and a logo marquee.",
  sectionCategory: "hero",
  purpose:
    "Creates an immersive brand-first opening while retaining a clear offer, primary action, and customer-logo proof.",
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
  contentDensity: "medium",
  visualWeight: "high",
  layout: {
    type: "overlay",
    alignment: "left",
  },
  slots: [
    "brand",
    "navigation",
    "video",
    "headline",
    "description",
    "primaryCTA",
    "customerLogos",
  ],
  capabilities: {
    supportsImage: true,
    supportsVideo: true,
    supportsForm: false,
    supportsCTA: true,
    supportsDarkMode: true,
  },
  recommendedAfter: ["navbar"],
  recommendedBefore: ["logos", "stats", "features", "about"],
  tags: ["hero", "marketing", "video", "marquee", "cta", "landing"],
  dependencies: [],
  registryDependencies: ["button"],
  a11y: { keyboardNav: true, reducedMotion: true },
  preview: {
    layout: "fit",
    width: 1440,
    height: 900,
    capture: {
      format: "gif",
      gifFrames: 6,
      gifIntervalMs: 400,
      gifDelayMs: 200,
    },
  },
} satisfies ComponentMeta;
