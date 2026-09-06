import type { ComponentMeta } from "@jabkit/build-registry";

export default {
  name: "projects13",
  displayName: "Projects13",
  version: "1.0.0",
  addedAt: "2026-09-05",
  description:
    "Editorial project index: numbered rows with title, launch date, large description, and a small thumbnail, separated by hairline borders.",
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
  ],
  capabilities: {
    supportsImage: true,
    supportsVideo: false,
    supportsForm: false,
    supportsCTA: false,
    supportsDarkMode: true,
  },
  recommendedAfter: ["hero", "about"],
  recommendedBefore: ["case-studies", "cta"],
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
  a11y: { keyboardNav: false, reducedMotion: true },
  preview: { layout: "fit", width: 1440, height: 1100 },
} satisfies ComponentMeta;
