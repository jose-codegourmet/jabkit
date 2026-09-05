import type { ComponentMeta } from "@jabkit/build-registry";

export default {
  name: "ecommerce-hero8",
  displayName: "EcommerceHero8",
  version: "1.0.0",
  addedAt: "2026-09-05",
  description:
    "Full-viewport fashion hero with synced autoplay campaign slides and a product thumbnail rail.",
  tags: [
    "hero",
    "marketing",
    "ecommerce",
    "carousel",
    "autoplay",
    "fashion",
    "cta",
  ],
  dependencies: [],
  registryDependencies: ["button"],
  a11y: { keyboardNav: true, reducedMotion: true },
  preview: { layout: "fit", width: 1440, height: 900 },
} satisfies ComponentMeta;
