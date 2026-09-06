import type { ComponentMeta } from "@jabkit/build-registry";

export default {
  name: "projects16",
  displayName: "Projects16",
  version: "1.0.0",
  addedAt: "2026-09-05",
  description:
    "Editorial project gallery with a medium-weight heading, a two-column staggered 4:3 and 4:5 photo grid, and a link action beneath a short paragraph.",
  sectionCategory: "projects",
  purpose:
    "Balances a concise portfolio introduction with a spacious, art-directed selection of project photography.",
  bestFor: ["creative portfolios", "agency work indexes", "project archives"],
  tone: ["editorial", "premium", "restrained"],
  contentDensity: "medium",
  visualWeight: "medium",
  layout: {
    type: "grid",
    alignment: "left",
    columns: 2,
  },
  slots: [
    "headline",
    "projectItems",
    "projectImage",
    "projectDescription",
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
  tags: [
    "projects",
    "gallery",
    "marketing",
    "portfolio",
    "photography",
    "editorial",
    "landing",
  ],
  dependencies: [],
  registryDependencies: ["button"],
  a11y: { keyboardNav: true, reducedMotion: true },
  preview: { layout: "fit", width: 1440, height: 1400 },
} satisfies ComponentMeta;
