import type { ComponentMeta } from "@jabkit/build-registry";

export default {
  name: "hero-31",
  displayName: "Hero31",
  version: "1.0.0",
  addedAt: "2026-09-15",
  description:
    "Full-bleed cinematic hero with a glowing curtain plate, italic wordmark, square metal CTAs, word-staggered headline, and a trusted-by logo row.",
  sectionCategory: "hero",
  purpose:
    "Opens a landing page with atmosphere first, then a short offer and square actions that keep the original sharp geometry.",
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
    "headline",
    "description",
    "primaryCTA",
    "customerLogos",
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
  tags: ["hero", "marketing", "cta", "landing", "curtain", "logos"],
  dependencies: ["lucide-react"],
  registryDependencies: [],
  a11y: { keyboardNav: true, reducedMotion: true },
  preview: { layout: "fit", width: 1440, height: 900 },
} satisfies ComponentMeta;
