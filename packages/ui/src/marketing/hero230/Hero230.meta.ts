import type { ComponentMeta } from "@jabkit/build-registry";

export default {
  name: "hero230",
  displayName: "Hero230",
  version: "1.0.0",
  addedAt: "2026-09-01",
  description:
    "Centered marketing hero with a pill kicker, dual pill CTAs, an auto-scrolling logo ticker, and an autoplay filmstrip of raised image cards.",
  sectionCategory: "hero",
  purpose:
    "Balances a direct conversion message with customer recognition and a lively stream of visual examples.",
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
    type: "full-width",
    alignment: "center",
  },
  slots: [
    "eyebrow",
    "headline",
    "description",
    "primaryCTA",
    "secondaryCTA",
    "customerLogos",
    "imageFilmstrip",
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
    "carousel",
    "marquee",
    "filmstrip",
    "cta",
    "logos",
    "landing",
  ],
  dependencies: [],
  registryDependencies: ["button", "badge"],
  a11y: { keyboardNav: true, reducedMotion: true },
  preview: {
    layout: "fit",
    width: 1440,
    height: 900,
    capture: {
      format: "gif",
      gifFrames: 4,
      gifIntervalMs: 3800,
      gifDelayMs: 700,
    },
  },
} satisfies ComponentMeta;
