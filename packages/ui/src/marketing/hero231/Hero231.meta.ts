import type { ComponentMeta } from "@jabkit/build-registry";

export default {
  name: "hero231",
  displayName: "Hero231",
  version: "1.0.0",
  addedAt: "2026-08-30",
  description:
    "Split marketing hero with left-aligned copy and dual CTAs, a faded logo marquee, and a 3D coverflow of portrait cards.",
  sectionCategory: "hero",
  purpose:
    "Gives equal prominence to conversion copy, customer proof, and a dimensional portrait showcase.",
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
    type: "split",
    alignment: "left",
    columns: 2,
  },
  slots: [
    "headline",
    "description",
    "primaryCTA",
    "secondaryCTA",
    "customerLogos",
    "portraitCarousel",
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
  tags: ["hero", "marketing", "carousel", "marquee", "cta", "portraits"],
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
      gifIntervalMs: 4000,
      gifDelayMs: 700,
    },
  },
} satisfies ComponentMeta;
