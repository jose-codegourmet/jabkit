import type { ComponentMeta } from "@jabkit/build-registry";

export default {
  name: "compare5",
  displayName: "Compare5",
  version: "1.0.0",
  addedAt: "2026-09-03",
  description:
    "Centered old-versus-new marketing compare with two tall photo cards, bottom scrims, outline actions, and a circular OR chip in the gutter.",
  tags: ["compare", "marketing", "cards", "cta", "landing", "photography"],
  dependencies: [],
  registryDependencies: ["button"],
  a11y: { keyboardNav: true, reducedMotion: true },
  preview: { layout: "fit", width: 1440, height: 980 },
} satisfies ComponentMeta;
