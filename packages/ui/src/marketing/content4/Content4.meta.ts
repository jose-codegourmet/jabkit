import type { ComponentMeta } from "@jabkit/build-registry";

export default {
  name: "content4",
  displayName: "Content4",
  version: "1.0.0",
  addedAt: "2026-09-05",
  description:
    "Publication-style long read with breadcrumbs, author byline, inline figures, a scroll-aware table of contents, and a back-to-top control.",
  sectionCategory: "content",
  purpose:
    "Creates an editorial reading experience with authorship, figures, section navigation, and a return path.",
  bestFor: ["documentation", "editorial resources", "educational pages"],
  tone: ["editorial", "informative", "structured"],
  contentDensity: "high",
  visualWeight: "medium",
  layout: {
    type: "sidebar",
    alignment: "left",
  },
  slots: [
    "breadcrumbs",
    "headline",
    "bodyContent",
    "sectionNavigation",
    "figures",
  ],
  capabilities: {
    supportsImage: true,
    supportsVideo: false,
    supportsForm: false,
    supportsCTA: false,
    supportsDarkMode: true,
  },
  recommendedAfter: ["hero", "navbar"],
  recommendedBefore: ["related-content", "cta", "footer"],
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
