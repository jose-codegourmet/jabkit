import type { ComponentMeta } from "@jabkit/build-registry";

export default {
  name: "hero-32",
  displayName: "Hero32",
  version: "1.0.0",
  addedAt: "2026-09-15",
  description:
    "Full-bleed sunflower-field hero with a floating pill nav, serif headline, glass demo CTA, and a circular play control.",
  sectionCategory: "hero",
  purpose:
    "Opens a landing page with a photographic plate, a compact pill header, and a single centered offer.",
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
    type: "overlay",
    alignment: "center",
  },
  slots: [
    "brand",
    "navigation",
    "headline",
    "description",
    "primaryCTA",
    "playCTA",
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
  tags: ["hero", "marketing", "cta", "landing", "pill", "photo"],
  dependencies: ["lucide-react"],
  registryDependencies: [],
  a11y: { keyboardNav: true, reducedMotion: true },
  preview: { layout: "fit", width: 1440, height: 900 },
} satisfies ComponentMeta;
