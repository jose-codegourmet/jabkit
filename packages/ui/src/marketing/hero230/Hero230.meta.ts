import type { ComponentMeta } from "@jabkit/build-registry";

export default {
  name: "hero230",
  displayName: "Hero230",
  version: "1.0.0",
  addedAt: "2026-09-01",
  description:
    "Centered marketing hero with a pill kicker, dual pill CTAs, an auto-scrolling logo ticker, and an autoplay filmstrip of raised image cards.",
  tags: [
    "hero",
    "marketing",
    "carousel",
    "marquee",
    "filmstrip",
    "cta",
    "logos",
    "landing",
  ],
  dependencies: [],
  registryDependencies: ["button", "badge"],
  a11y: { keyboardNav: true, reducedMotion: true },
  preview: {
    layout: "fit",
    width: 1440,
    height: 900,
    capture: {
      format: "gif",
      gifFrames: 4,
      gifIntervalMs: 3800,
      gifDelayMs: 700,
    },
  },
} satisfies ComponentMeta;
