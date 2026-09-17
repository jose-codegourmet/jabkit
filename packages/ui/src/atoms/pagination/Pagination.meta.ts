import type { ComponentMeta } from "@jabkit/build-registry";

export default {
  name: "pagination",
  displayName: "Pagination",
  version: "1.0.0",
  addedAt: "2026-09-17",
  description:
    "Page navigation with previous, next, numbered links, and an ellipsis for long ranges.",
  sectionCategory: "navigation",
  purpose:
    "Lets people move through a paged list, table, or catalog without losing their place in the set.",
  bestFor: [
    "search results and catalogues",
    "data tables with multiple pages",
    "docs or archives that split content by page",
  ],
  avoidFor: [
    "single-page lists that should infinite-scroll",
    "stepped wizards that need a stepper instead",
  ],
  tone: ["clean", "professional"],
  contentDensity: "low",
  visualWeight: "low",
  layout: {
    type: "inline",
    alignment: "center",
  },
  slots: ["content", "item", "link", "previous", "next", "ellipsis"],
  capabilities: {
    supportsImage: false,
    supportsVideo: false,
    supportsForm: false,
    supportsCTA: true,
    supportsDarkMode: true,
  },
  inspoUrl: "https://ui.shadcn.com/docs/components/base/pagination",
  tags: ["pagination", "navigation", "pages", "pager", "atom"],
  dependencies: ["lucide-react"],
  registryDependencies: [],
  a11y: { keyboardNav: true, reducedMotion: true },
  preview: {
    layout: "center",
    capture: { viewport: { width: 720, height: 360 } },
  },
} satisfies ComponentMeta;
