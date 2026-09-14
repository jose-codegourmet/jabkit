import type { ComponentMeta } from "@jabkit/build-registry";

export default {
  name: "product-quick-view4",
  displayName: "ProductQuickView4",
  version: "1.1.0",
  addedAt: "2026-09-05",
  description:
    "Product quick-view dialog with an image carousel, optional price and color groups, size or format options, and a primary action plus details link.",
  sectionCategory: "product",
  purpose:
    "Lets shoppers inspect imagery, price, variants, and purchase actions without leaving a product listing.",
  bestFor: [
    "ecommerce product grids",
    "catalog browsing",
    "fast purchase decisions",
  ],
  tone: ["commercial", "clean", "professional"],
  industries: ["retail", "ecommerce"],
  contentDensity: "high",
  visualWeight: "high",
  layout: {
    type: "overlay",
    alignment: "mixed",
    columns: 2,
  },
  slots: [
    "productImages",
    "productName",
    "price",
    "variantSelectors",
    "purchaseCTA",
    "detailsLink",
  ],
  capabilities: {
    supportsImage: true,
    supportsVideo: false,
    supportsForm: false,
    supportsCTA: true,
    supportsDarkMode: true,
  },
  tags: [
    "product",
    "quick-view",
    "marketing",
    "ecommerce",
    "dialog",
    "carousel",
    "variants",
    "cart",
  ],
  dependencies: ["lucide-react"],
  registryDependencies: ["button", "dialog"],
  a11y: { keyboardNav: true, reducedMotion: true },
  preview: { layout: "fit", width: 1440, height: 900 },
} satisfies ComponentMeta;
