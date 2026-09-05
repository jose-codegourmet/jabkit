import type { ComponentMeta } from "@jabkit/build-registry";

export default {
  name: "about11",
  displayName: "About11",
  version: "1.0.0",
  addedAt: "2026-09-05",
  description:
    "Creative-studio about block with staggered team photos, a process grid, logo marquee, honors table, quote overlay, and two motivation plates.",
  tags: [
    "about",
    "marketing",
    "team",
    "portfolio",
    "agency",
    "marquee",
    "awards",
    "landing",
  ],
  dependencies: [],
  registryDependencies: ["badge", "separator"],
  a11y: { keyboardNav: true, reducedMotion: true },
  preview: { layout: "fit", width: 1440, height: 2800 },
} satisfies ComponentMeta;
