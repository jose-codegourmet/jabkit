import type { ComponentMeta } from "@jabkit/build-registry";

export default {
  name: "about8",
  displayName: "About8",
  version: "1.0.0",
  addedAt: "2026-09-05",
  description:
    "Fintech about section with a plus-sign field, bordered stats, mission copy, a snap image carousel, a right-aligned product note, and a founding-team plate.",
  sectionCategory: "about",
  purpose:
    "Builds institutional credibility by combining mission, scale metrics, product imagery, and founding-team context.",
  bestFor: ["company story pages", "brand-led homepages", "culture sections"],
  tone: ["editorial", "premium", "human"],
  industries: ["financial technology", "financial services"],
  contentDensity: "high",
  visualWeight: "high",
  layout: {
    type: "stack",
    alignment: "mixed",
  },
  slots: [
    "headline",
    "mission",
    "statistics",
    "imageCarousel",
    "productNote",
    "foundingTeam",
  ],
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
    "stats",
    "carousel",
    "fintech",
    "team",
    "landing",
  ],
  dependencies: [],
  registryDependencies: [],
  a11y: { keyboardNav: true, reducedMotion: true },
  preview: { layout: "fit", width: 1440, height: 1800 },
} satisfies ComponentMeta;
