import type { ComponentMeta } from "@jabkit/build-registry";

export default {
  name: "shopping-layout-page",
  displayName: "ShoppingLayoutPage",
  version: "1.0.0",
  addedAt: "2026-09-17",
  description:
    "Full Mugsys Mugs shopping layout wiring store nav, collection hero, product grid, and footer chrome.",
  sectionCategory: "page",
  purpose:
    "Assembles the shopping-layout children into one collection page that matches the CodePen storefront.",
  bestFor: [
    "ecommerce collection pages",
    "limited-edition shop landings",
    "source-distributed storefront samples",
  ],
  tone: ["bold", "playful"],
  industries: ["retail", "ecommerce"],
  contentDensity: "high",
  visualWeight: "high",
  layout: {
    type: "full-width",
    alignment: "mixed",
  },
  slots: ["navigation", "hero", "productGrid", "footer"],
  capabilities: {
    supportsImage: true,
    supportsVideo: false,
    supportsForm: false,
    supportsCTA: true,
    supportsDarkMode: true,
  },
  inspoUrl: "https://codepen.io/jakebogan01/pen/pvNWZWr",
  tags: ["page", "shop", "ecommerce", "collection", "marketing"],
  dependencies: [],
  registryDependencies: [
    "shop-animated-button",
    "shop-product-card",
    "shop-product-grid",
    "shop-collection-hero",
    "shop-top-nav",
  ],
  a11y: { keyboardNav: true, reducedMotion: true },
  preview: { layout: "fit", width: 1440, height: 2200 },
} satisfies ComponentMeta;
