import type { ComponentMeta } from "@jabkit/build-registry";

export default {
  name: "gallery31",
  displayName: "Gallery31",
  version: "1.0.0",
  addedAt: "2026-09-05",
  description:
    "Product bento gallery with a centered kicker, five image tiles, and direction-aware hover overlays for name and price.",
  sectionCategory: "gallery",
  purpose:
    "Presents a curated product range as an image-first collection with lightweight price discovery.",
  bestFor: [
    "visual portfolios",
    "product collections",
    "image-led brand pages",
  ],
  tone: ["editorial", "visual", "premium"],
  industries: ["retail", "ecommerce"],
  contentDensity: "medium",
  visualWeight: "high",
  layout: {
    type: "grid",
    alignment: "center",
    columns: 3,
  },
  slots: [
    "sectionLabel",
    "headline",
    "productImages",
    "productNames",
    "prices",
    "productLinks",
  ],
  capabilities: {
    supportsImage: true,
    supportsVideo: false,
    supportsForm: false,
    supportsCTA: true,
    supportsDarkMode: true,
  },
  recommendedAfter: ["hero", "about"],
  recommendedBefore: ["content", "cta"],
  tags: [
    "gallery",
    "marketing",
    "bento",
    "catalog",
    "hover",
    "products",
    "landing",
  ],
  dependencies: [],
  registryDependencies: ["badge"],
  a11y: { keyboardNav: true, reducedMotion: true },
  preview: { layout: "fit", width: 1440, height: 980 },
} satisfies ComponentMeta;
