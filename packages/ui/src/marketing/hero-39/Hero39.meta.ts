import type { ComponentMeta } from "@jabkit/build-registry";

export default {
  name: "hero-39",
  displayName: "Hero39",
  version: "1.0.0",
  addedAt: "2026-09-15",
  description:
    "Full-bleed retreat hero with a painterly landscape, pill nav CTA, italic emphasis headline, glass search field, and press wordmarks.",
  sectionCategory: "hero",
  purpose:
    "Opens a hospitality or wellness landing page with a photographic plate, a centered offer, and a search-led conversion.",
  bestFor: [
    "retreat and hospitality landings",
    "wellness campaign pages",
    "brand-led homepages",
  ],
  avoidFor: [
    "dense application screens",
    "pages that need an understated opening",
  ],
  tone: ["calm", "premium", "editorial"],
  industries: ["hospitality", "travel", "wellness"],
  contentDensity: "medium",
  visualWeight: "high",
  layout: {
    type: "overlay",
    alignment: "center",
  },
  slots: [
    "brand",
    "navigation",
    "badge",
    "headline",
    "description",
    "search",
    "pressLogos",
  ],
  capabilities: {
    supportsImage: true,
    supportsVideo: false,
    supportsForm: true,
    supportsCTA: true,
    supportsDarkMode: true,
  },
  recommendedAfter: ["navbar"],
  recommendedBefore: ["logos", "features", "about", "cta"],
  inspoUrl: "https://ui.watermelon.sh/block/hero-39",
  tags: [
    "hero",
    "marketing",
    "cta",
    "landing",
    "search",
    "pill",
    "photo",
    "retreat",
  ],
  dependencies: ["lucide-react"],
  registryDependencies: [],
  a11y: { keyboardNav: true, reducedMotion: true },
  preview: { layout: "fit", width: 1440, height: 900 },
} satisfies ComponentMeta;
