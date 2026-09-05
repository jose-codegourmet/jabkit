import type { ComponentMeta } from "@jabkit/build-registry";

export default {
  name: "hero231",
  displayName: "Hero231",
  version: "1.0.0",
  addedAt: "2026-08-30",
  description:
    "Split marketing hero with left-aligned copy and dual CTAs, a faded logo marquee, and a 3D coverflow of portrait cards.",
  tags: ["hero", "marketing", "carousel", "marquee", "cta", "portraits"],
  dependencies: [],
  registryDependencies: ["button"],
  a11y: { keyboardNav: true, reducedMotion: true },
  preview: {
    layout: "fit",
    width: 1440,
    height: 900,
    capture: {
      format: "gif",
      gifFrames: 4,
      gifIntervalMs: 4000,
      gifDelayMs: 700,
    },
  },
} satisfies ComponentMeta;
