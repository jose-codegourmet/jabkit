import type { ComponentMeta } from "@jabkit/build-registry";

export default {
  name: "about11",
  displayName: "About11",
  version: "1.0.0",
  addedAt: "2026-09-05",
  description:
    "Creative-studio about block with staggered team photos, a process grid, logo marquee, honors table, quote overlay, and two motivation plates.",
  sectionCategory: "about",
  purpose:
    "Tells a layered studio story through people, process, recognition, clients, and values in one immersive editorial sequence.",
  bestFor: ["company story pages", "brand-led homepages", "culture sections"],
  tone: ["editorial", "premium", "human"],
  industries: ["creative agencies", "design studios"],
  contentDensity: "high",
  visualWeight: "high",
  layout: {
    type: "stack",
    alignment: "mixed",
  },
  slots: [
    "headline",
    "teamImages",
    "processSteps",
    "clientLogos",
    "awards",
    "quote",
    "values",
  ],
  capabilities: {
    supportsImage: true,
    supportsVideo: false,
    supportsForm: false,
    supportsCTA: true,
    supportsDarkMode: true,
  },
  recommendedAfter: ["hero", "logos"],
  recommendedBefore: ["team", "case-studies", "cta"],
  tags: [
    "about",
    "marketing",
    "team",
    "portfolio",
    "agency",
    "marquee",
    "awards",
    "landing",
  ],
  dependencies: [],
  registryDependencies: ["badge", "separator"],
  a11y: { keyboardNav: true, reducedMotion: true },
  preview: { layout: "fit", width: 1440, height: 2800 },
} satisfies ComponentMeta;
