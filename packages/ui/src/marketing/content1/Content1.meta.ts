import type { ComponentMeta } from "@jabkit/build-registry";

export default {
  name: "content1",
  displayName: "Content1",
  version: "1.0.0",
  addedAt: "2026-09-05",
  description:
    "Long-form marketing article with a sticky in-page outline, scroll-linked active sections, and rich body blocks for images, lists, tables, and callouts.",
  sectionCategory: "content",
  purpose:
    "Supports deep reading while keeping a long, structured article navigable through a persistent outline.",
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
  usedIn: [
    {
      site: "minimal",
      role: "Project case body with a sticky outline on work detail pages.",
    },
    {
      site: "neo-brutalism",
      role: "Case study body with a sticky outline on work detail pages.",
    },
    {
      site: "editorial",
      role: "Editorial process sections on the about page.",
    },
    {
      site: "luxury",
      role: "House details and room specification sections.",
    },
    {
      site: "retro",
      role: "Studio guide sections on how-it-works.",
    },
  ],
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
