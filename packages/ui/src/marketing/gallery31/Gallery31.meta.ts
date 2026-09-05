import type { ComponentMeta } from "@jabkit/build-registry";

export default {
  name: "gallery31",
  displayName: "Gallery31",
  version: "1.0.0",
  addedAt: "2026-09-05",
  description:
    "Product bento gallery with a centered kicker, five image tiles, and direction-aware hover overlays for name and price.",
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
