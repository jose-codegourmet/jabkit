import type { ComponentMeta } from "@jabkit/build-registry";

export default {
  name: "shop-product-grid",
  displayName: "ShopProductGrid",
  version: "1.0.0",
  addedAt: "2026-09-17",
  description:
    "Responsive 3-2-1 collection grid of ShopProductCard tiles with 24px gutters.",
  sectionCategory: "gallery",
  purpose:
    "Lays out a mug collection so shoppers can scan price and image in a tight merchandising rhythm.",
  bestFor: [
    "ecommerce collection pages",
    "limited-run drops",
    "product catalogues",
  ],
  tone: ["clean", "playful"],
  industries: ["retail", "ecommerce"],
  contentDensity: "high",
  visualWeight: "medium",
  layout: {
    type: "grid",
    alignment: "center",
    columns: 3,
  },
  slots: ["productTiles"],
  capabilities: {
    supportsImage: true,
    supportsVideo: false,
    supportsForm: false,
    supportsCTA: true,
    supportsDarkMode: true,
  },
  inspoUrl: "https://codepen.io/jakebogan01/pen/pvNWZWr",
  tags: ["grid", "product", "shop", "ecommerce", "marketing"],
  dependencies: [],
  registryDependencies: ["shop-product-card"],
  a11y: { keyboardNav: true, reducedMotion: true },
  preview: { layout: "fit", width: 1440, height: 1100 },
} satisfies ComponentMeta;
