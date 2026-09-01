import type { ComponentMeta } from "@jabkit/build-registry";

export default {
  name: "hero-section-5",
  displayName: "HeroSection5",
  version: "1.0.0",
  addedAt: "2026-09-01",
  description:
    "Cinematic marketing hero with a framed looping video panel, bottom-left offer, a light header, and a logo marquee.",
  tags: ["hero", "marketing", "video", "marquee", "cta", "landing"],
  dependencies: [],
  registryDependencies: ["button"],
  a11y: { keyboardNav: true, reducedMotion: true },
  preview: { layout: "fit", width: 1440, height: 900 },
} satisfies ComponentMeta;
