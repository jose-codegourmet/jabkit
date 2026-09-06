import type { ComponentMeta } from "@jabkit/build-registry";

export default {
  name: "about14",
  displayName: "About14",
  version: "1.0.0",
  addedAt: "2026-09-05",
  description:
    "Six-column about block with a large headline, full-width hero image, labeled intro, inline avatar profile, and a philosophy statement.",
  sectionCategory: "about",
  purpose:
    "Introduces an organization through a strong visual manifesto, founder identity, and concise philosophy.",
  bestFor: ["company story pages", "brand-led homepages", "culture sections"],
  tone: ["editorial", "premium", "human"],
  contentDensity: "high",
  visualWeight: "high",
  layout: {
    type: "grid",
    alignment: "mixed",
    columns: 6,
  },
  slots: ["headline", "heroImage", "introduction", "profile", "philosophy"],
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
    "portrait",
    "photography",
    "grid",
    "landing",
  ],
  dependencies: [],
  registryDependencies: ["avatar"],
  a11y: { keyboardNav: true, reducedMotion: true },
  preview: { layout: "fit", width: 1440, height: 980 },
} satisfies ComponentMeta;
