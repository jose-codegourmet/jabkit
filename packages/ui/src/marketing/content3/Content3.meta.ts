import type { ComponentMeta } from "@jabkit/build-registry";

export default {
  name: "content3",
  displayName: "Content3",
  version: "1.0.0",
  addedAt: "2026-09-05",
  description:
    "Knowledge-style marketing article with breadcrumbs, headline actions, a sticky topic rail, inline figures, a data table, and a callout.",
  tags: [
    "content",
    "marketing",
    "article",
    "docs",
    "breadcrumbs",
    "sidebar",
    "table",
    "guide",
  ],
  dependencies: [],
  registryDependencies: ["button", "badge", "separator"],
  a11y: { keyboardNav: true, reducedMotion: true },
  preview: { layout: "fit", width: 1440, height: 1200 },
} satisfies ComponentMeta;
