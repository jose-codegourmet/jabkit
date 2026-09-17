import type { ComponentMeta } from "@jabkit/build-registry";

export default {
  name: "shop-top-nav",
  displayName: "ShopTopNav",
  version: "1.0.0",
  addedAt: "2026-09-17",
  description:
    "Mugsys store chrome with brand mark, four destination links, a sliding Explore CTA, and a compact mobile menu.",
  sectionCategory: "navbar",
  purpose:
    "Gives a collection storefront a single-line header that routes into Home, About, Company, Stores, and the collection.",
  bestFor: [
    "ecommerce headers",
    "collection landing chrome",
    "compact store navigation",
  ],
  tone: ["clean", "playful"],
  industries: ["retail", "ecommerce"],
  contentDensity: "low",
  visualWeight: "low",
  layout: {
    type: "full-width",
    alignment: "mixed",
  },
  slots: ["brand", "navigationItems", "primaryCTA", "mobileNavigation"],
  capabilities: {
    supportsImage: false,
    supportsVideo: false,
    supportsForm: false,
    supportsCTA: true,
    supportsDarkMode: true,
  },
  recommendedBefore: ["hero"],
  inspoUrl: "https://codepen.io/jakebogan01/pen/pvNWZWr",
  tags: ["navbar", "shop", "ecommerce", "marketing"],
  dependencies: ["lucide-react"],
  registryDependencies: ["shop-animated-button"],
  a11y: { keyboardNav: true, reducedMotion: true },
  preview: { layout: "fit", width: 1440, height: 220 },
} satisfies ComponentMeta;
