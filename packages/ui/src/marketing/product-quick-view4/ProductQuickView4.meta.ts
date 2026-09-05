import type { ComponentMeta } from "@jabkit/build-registry";

export default {
  name: "product-quick-view4",
  displayName: "ProductQuickView4",
  version: "1.0.0",
  addedAt: "2026-09-05",
  description:
    "Storefront product quick-view dialog with an image carousel, sale price, color and size options, and add-to-cart plus details actions.",
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
