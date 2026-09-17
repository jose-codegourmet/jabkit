import type { ComponentMeta } from "@jabkit/build-registry";

export default {
  name: "shop-collection-hero",
  displayName: "ShopCollectionHero",
  version: "1.0.0",
  addedAt: "2026-09-17",
  description:
    "Mugsys collection hero with oversized brand type, premium copy, satisfaction badge, and an Explore the Collection CTA.",
  sectionCategory: "hero",
  purpose:
    "Opens a storefront collection with limited-edition positioning and a motion CTA into the product grid.",
  bestFor: [
    "ecommerce collection landings",
    "limited-edition drops",
    "branded shop heroes",
  ],
  tone: ["bold", "playful"],
  industries: ["retail", "ecommerce"],
  contentDensity: "medium",
  visualWeight: "high",
  layout: {
    type: "full-width",
    alignment: "mixed",
  },
  slots: [
    "brand",
    "kicker",
    "body",
    "shopCTA",
    "productImage",
    "socialProof",
    "headline",
    "description",
    "primaryCTA",
  ],
  capabilities: {
    supportsImage: true,
    supportsVideo: false,
    supportsForm: false,
    supportsCTA: true,
    supportsDarkMode: true,
  },
  recommendedAfter: ["navbar"],
  recommendedBefore: ["gallery"],
  inspoUrl: "https://codepen.io/jakebogan01/pen/pvNWZWr",
  tags: ["hero", "shop", "collection", "cta", "marketing"],
  dependencies: ["lucide-react"],
  registryDependencies: ["shop-animated-button"],
  a11y: { keyboardNav: true, reducedMotion: true },
  preview: { layout: "fit", width: 1440, height: 1100 },
} satisfies ComponentMeta;
