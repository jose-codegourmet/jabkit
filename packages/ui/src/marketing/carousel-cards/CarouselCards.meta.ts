import type { ComponentMeta } from "@jabkit/build-registry";

export default {
  name: "carousel-cards",
  displayName: "CarouselCards",
  version: "1.0.0",
  addedAt: "2026-09-07",
  description:
    "Horizontally scrollable marketing rail of listing cards with image, rating, price, and a favorite control.",
  sectionCategory: "features",
  purpose:
    "Lets a landing page show bookable experiences or products in a snappy, keyboard-reachable card row without a full gallery.",
  bestFor: [
    "experience or listing landings",
    "product discovery rails",
    "city-guide marketing sections",
  ],
  avoidFor: [
    "dense application tables",
    "single-item product pages",
    "content that must stay fully visible without scrolling",
  ],
  tone: ["editorial", "modern", "calm"],
  industries: ["travel", "ecommerce", "hospitality"],
  contentDensity: "medium",
  visualWeight: "medium",
  layout: {
    type: "carousel",
    alignment: "left",
    columns: 4,
  },
  slots: ["headline", "listings", "cta"],
  capabilities: {
    supportsImage: true,
    supportsVideo: false,
    supportsForm: false,
    supportsCTA: true,
    supportsDarkMode: true,
  },
  recommendedAfter: ["hero", "logos"],
  recommendedBefore: ["testimonials", "pricing", "cta"],
  tags: [
    "carousel",
    "cards",
    "listings",
    "marketing",
    "gallery",
    "favorites",
    "ecommerce",
  ],
  dependencies: ["lucide-react"],
  registryDependencies: ["badge", "button"],
  a11y: { keyboardNav: true, reducedMotion: true },
  preview: { layout: "fit", width: 1440, height: 900 },
} satisfies ComponentMeta;
