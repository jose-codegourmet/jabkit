import type { ComponentMeta } from "@jabkit/build-registry";

export default {
  name: "about6",
  displayName: "About6",
  version: "1.0.0",
  addedAt: "2026-09-05",
  description:
    "Two-column about section with story copy, a staggered workplace photo grid, and an offset second column of images and paragraphs.",
  sectionCategory: "about",
  purpose:
    "Humanizes a company with a readable narrative and candid workplace imagery.",
  bestFor: ["company story pages", "brand-led homepages", "culture sections"],
  tone: ["editorial", "premium", "human"],
  contentDensity: "high",
  visualWeight: "high",
  layout: {
    type: "split",
    alignment: "mixed",
    columns: 2,
  },
  slots: ["headline", "storyParagraphs", "workplaceImages"],
  capabilities: {
    supportsImage: true,
    supportsVideo: false,
    supportsForm: false,
    supportsCTA: false,
    supportsDarkMode: true,
  },
  recommendedAfter: ["hero", "logos"],
  recommendedBefore: ["team", "case-studies", "cta"],
  tags: [
    "about",
    "marketing",
    "story",
    "photos",
    "team",
    "workplace",
    "landing",
  ],
  dependencies: [],
  registryDependencies: [],
  a11y: { keyboardNav: true, reducedMotion: true },
  preview: { layout: "fit", width: 1440, height: 1200 },
} satisfies ComponentMeta;
