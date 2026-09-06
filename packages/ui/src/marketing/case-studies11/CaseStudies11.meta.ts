import type { ComponentMeta } from "@jabkit/build-registry";

export default {
  name: "case-studies11",
  displayName: "CaseStudies11",
  version: "1.0.0",
  addedAt: "2026-09-03",
  description:
    "Centered case-study section with a three-column grid of portrait poster cards — full-bleed photography, a bottom gradient, company mark, and title.",
  sectionCategory: "case-studies",
  purpose:
    "Turns selected work into visually dominant entry points that encourage visitors to explore detailed stories.",
  bestFor: [
    "agency portfolios",
    "consulting proof",
    "customer success stories",
  ],
  tone: ["editorial", "credible", "premium"],
  industries: ["creative agencies", "architecture", "hospitality"],
  contentDensity: "medium",
  visualWeight: "high",
  layout: {
    type: "grid",
    alignment: "left",
    columns: 3,
  },
  slots: [
    "headline",
    "caseStudyImage",
    "clientName",
    "caseStudyTitle",
    "outcome",
  ],
  capabilities: {
    supportsImage: true,
    supportsVideo: false,
    supportsForm: false,
    supportsCTA: true,
    supportsDarkMode: true,
  },
  recommendedAfter: ["features", "about"],
  recommendedBefore: ["pricing", "testimonials", "cta"],
  tags: [
    "case-studies",
    "marketing",
    "grid",
    "cards",
    "gallery",
    "landing",
    "testimonials",
  ],
  dependencies: [],
  registryDependencies: [],
  a11y: { keyboardNav: true, reducedMotion: true },
  preview: { layout: "fit", width: 1440, height: 900 },
} satisfies ComponentMeta;
