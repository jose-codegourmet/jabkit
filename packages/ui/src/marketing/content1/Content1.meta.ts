import type { ComponentMeta } from "@jabkit/build-registry";

export default {
  name: "content1",
  displayName: "Content1",
  version: "1.0.0",
  addedAt: "2026-09-05",
  description:
    "Long-form marketing article with a sticky in-page outline, scroll-linked active sections, and rich body blocks for images, lists, tables, and callouts.",
  tags: [
    "content",
    "marketing",
    "article",
    "outline",
    "story",
    "docs",
    "landing",
  ],
  dependencies: [],
  registryDependencies: ["badge"],
  a11y: { keyboardNav: true, reducedMotion: true },
  preview: { layout: "fit", width: 1440, height: 1600 },
} satisfies ComponentMeta;
