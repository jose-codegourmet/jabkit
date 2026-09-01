import type { ComponentMeta } from "@jabkit/build-registry";

export default {
  name: "hero146",
  displayName: "Hero146",
  version: "1.0.0",
  addedAt: "2026-09-01",
  description:
    "Centered AI-agents hero on a square grid wash, with a gradient headline, metallic get-started pill, and a framed video teaser that exposes a play bar and optional presentation embed.",
  tags: ["hero", "marketing", "video", "cta", "agents", "landing", "grid"],
  dependencies: [],
  registryDependencies: ["button"],
  a11y: { keyboardNav: true, reducedMotion: true },
  preview: { layout: "fit", width: 1440, height: 900 },
} satisfies ComponentMeta;
