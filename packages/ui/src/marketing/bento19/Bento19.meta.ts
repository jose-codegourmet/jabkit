import type { ComponentMeta } from "@jabkit/build-registry";

export default {
  name: "bento19",
  displayName: "Bento19",
  version: "1.0.0",
  addedAt: "2026-09-05",
  description:
    "Three-column masonry bento of six bordered cards with integration pills, compact charts, and AI ops illustrations.",
  tags: [
    "bento",
    "marketing",
    "features",
    "masonry",
    "integrations",
    "ai",
    "landing",
    "grid",
  ],
  dependencies: [],
  registryDependencies: ["badge"],
  a11y: { keyboardNav: true, reducedMotion: true },
  preview: { layout: "fit", width: 1440, height: 1180 },
} satisfies ComponentMeta;
