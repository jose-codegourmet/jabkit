import type { ComponentMeta } from "@jabkit/build-registry";

export default {
  name: "feature261",
  displayName: "Feature261",
  version: "1.0.0",
  addedAt: "2026-09-05",
  description:
    "Marketing bento mosaic mixing a tall photo, a stat callout, a pricing tile, a short promo, an avatar cluster, and a supporting image.",
  tags: [
    "feature",
    "marketing",
    "bento",
    "stats",
    "pricing",
    "avatars",
    "media",
    "landing",
  ],
  dependencies: [],
  registryDependencies: ["avatar", "button"],
  a11y: { keyboardNav: true, reducedMotion: true },
  preview: { layout: "fit", width: 1440, height: 1100 },
} satisfies ComponentMeta;
