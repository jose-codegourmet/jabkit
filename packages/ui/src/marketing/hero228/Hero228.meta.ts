import type { ComponentMeta } from "@jabkit/build-registry";

export default {
  name: "hero228",
  displayName: "Hero228",
  version: "1.0.0",
  addedAt: "2026-08-30",
  description:
    "Centered marketing hero with a mixed serif headline, muted supporting copy, and an autoplay fan carousel of portraits with animated tick bars and name crossfades.",
  sectionCategory: "hero",
  purpose:
    "Builds an editorial, people-centered opening where rotating portraits carry more emotional weight than conversion controls.",
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
  contentDensity: "low",
  visualWeight: "high",
  layout: {
    type: "full-width",
    alignment: "center",
  },
  slots: ["headline", "description", "portraitCarousel", "personNames"],
  capabilities: {
    supportsImage: true,
    supportsVideo: false,
    supportsForm: false,
    supportsCTA: false,
    supportsDarkMode: true,
  },
  recommendedAfter: ["navbar"],
  recommendedBefore: ["logos", "stats", "features", "about"],
  tags: [
    "hero",
    "marketing",
    "carousel",
    "portraits",
    "autoplay",
    "landing",
    "editorial",
  ],
  dependencies: [],
  registryDependencies: [],
  a11y: { keyboardNav: true, reducedMotion: true },
  preview: {
    layout: "fit",
    width: 1440,
    height: 900,
    capture: {
      format: "gif",
      gifFrames: 4,
      gifIntervalMs: 2800,
      gifDelayMs: 700,
    },
  },
} satisfies ComponentMeta;
