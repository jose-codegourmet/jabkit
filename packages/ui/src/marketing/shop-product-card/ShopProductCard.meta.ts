import type { ComponentMeta } from "@jabkit/build-registry";

export default {
  name: "shop-product-card",
  displayName: "ShopProductCard",
  version: "1.0.0",
  addedAt: "2026-09-17",
  description:
    "Mugsys-style product tile with a 16px card, square photo, compare-at price, and circular cart and favorite actions.",
  sectionCategory: "product",
  purpose:
    "Presents one collection SKU with price, image, and quick cart or favorite actions.",
  bestFor: [
    "ecommerce collection grids",
    "limited-edition product tiles",
    "catalogue merchandising",
  ],
  tone: ["playful", "clean"],
  industries: ["retail", "ecommerce"],
  contentDensity: "medium",
  visualWeight: "medium",
  layout: {
    type: "stack",
    alignment: "left",
  },
  slots: ["image", "price", "title", "cartAction", "favoriteAction"],
  capabilities: {
    supportsImage: true,
    supportsVideo: false,
    supportsForm: false,
    supportsCTA: true,
    supportsDarkMode: true,
  },
  inspoUrl: "https://codepen.io/jakebogan01/pen/pvNWZWr",
  tags: ["product", "card", "shop", "ecommerce", "marketing"],
  dependencies: ["lucide-react"],
  registryDependencies: [],
  a11y: { keyboardNav: true, reducedMotion: true },
  preview: { layout: "center", width: 420, height: 560 },
} satisfies ComponentMeta;
