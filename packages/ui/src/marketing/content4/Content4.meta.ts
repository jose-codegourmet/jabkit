import type { ComponentMeta } from "@jabkit/build-registry";

export default {
  name: "content4",
  displayName: "Content4",
  version: "1.0.0",
  addedAt: "2026-09-05",
  description:
    "Publication-style long read with breadcrumbs, author byline, inline figures, a scroll-aware table of contents, and a back-to-top control.",
  tags: [
    "content",
    "marketing",
    "article",
    "article-layout",
    "editorial",
    "toc",
    "blog",
    "journal",
    "landing",
  ],
  dependencies: [],
  registryDependencies: ["avatar", "button", "separator"],
  a11y: { keyboardNav: true, reducedMotion: true },
  preview: { layout: "fit", width: 1440, height: 1600 },
} satisfies ComponentMeta;
