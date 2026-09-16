import type { ComponentMeta } from "@jabkit/build-registry";

export default {
  name: "hero-33",
  displayName: "Hero33",
  version: "1.0.0",
  addedAt: "2026-09-15",
  description:
    "Full-bleed aviation hero with a sunset window plate, staggered title lines, squared CTAs, and two feature highlights.",
  sectionCategory: "hero",
  purpose:
    "Opens a travel or lifestyle landing page with cinematic photography, a left-aligned offer, and compact amenity proof.",
  bestFor: [
    "travel and aviation landings",
    "campaign launch pages",
    "brand-led homepages",
  ],
  avoidFor: [
    "dense application screens",
    "pages that need an understated opening",
  ],
  tone: ["bold", "premium", "editorial"],
  industries: ["travel", "hospitality"],
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
    "primaryCTA",
    "secondaryCTA",
    "featureHighlights",
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
  inspoUrl: "https://ui.watermelon.sh/block/hero-33",
  tags: ["hero", "marketing", "cta", "landing", "photo", "travel"],
  dependencies: ["lucide-react"],
  registryDependencies: [],
  a11y: { keyboardNav: true, reducedMotion: true },
  preview: { layout: "fit", width: 1440, height: 900 },
} satisfies ComponentMeta;
