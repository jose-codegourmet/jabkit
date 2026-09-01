import type { ComponentMeta } from "@jabkit/build-registry";

export default {
  name: "hero307",
  displayName: "Hero307",
  version: "1.0.0",
  addedAt: "2026-09-01",
  description:
    "Fullscreen marketing hero with an oversized headline, paired CTAs, and a CSS-built admin dashboard that tilts in a 3D perspective scene.",
  tags: [
    "hero",
    "marketing",
    "dashboard-preview",
    "3d",
    "cta",
    "fullscreen",
    "landing",
  ],
  dependencies: [],
  registryDependencies: ["button"],
  a11y: { keyboardNav: true, reducedMotion: true },
  preview: { layout: "fit", width: 1440, height: 900 },
} satisfies ComponentMeta;
