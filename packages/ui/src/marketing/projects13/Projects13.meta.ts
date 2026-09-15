import type { ComponentMeta } from "@jabkit/build-registry";

export default {
  name: "projects13",
  displayName: "Projects13",
  version: "1.1.0",
  addedAt: "2026-09-05",
  description:
    "Editorial project index: numbered rows with title, launch date, large description, and a small thumbnail, separated by hairline borders. Optional per-row hrefs render as title text links.",
  sectionCategory: "projects",
  purpose:
    "Lets visitors evaluate a body of work through descriptive, chronological project rows rather than an image-led gallery.",
  bestFor: ["creative portfolios", "agency work indexes", "project archives"],
  tone: ["editorial", "premium", "restrained"],
  contentDensity: "medium",
  visualWeight: "medium",
  layout: {
    type: "table",
    alignment: "left",
    columns: 4,
  },
  slots: [
    "projectNumber",
    "projectTitle",
    "launchDate",
    "projectDescription",
    "thumbnail",
    "projectLink",
  ],
  capabilities: {
    supportsImage: true,
    supportsVideo: false,
    supportsForm: false,
    supportsCTA: true,
    supportsDarkMode: true,
  },
  recommendedAfter: ["hero", "about"],
  recommendedBefore: ["case-studies", "cta"],
  usedIn: [
    {
      site: "neo-brutalism",
      role: "Filtered case list on the work index, labeled Case list.",
    },
  ],
  tags: [
    "projects",
    "list",
    "marketing",
    "portfolio",
    "index",
    "editorial",
    "landing",
  ],
  dependencies: [],
  registryDependencies: [],
  a11y: { keyboardNav: true, reducedMotion: true },
  preview: { layout: "fit", width: 1440, height: 1100 },
} satisfies ComponentMeta;
