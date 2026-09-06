import type { ComponentMeta } from "@jabkit/build-registry";

export default {
  name: "case-studies13",
  displayName: "CaseStudies13",
  version: "1.0.0",
  addedAt: "2026-09-03",
  description:
    "Four-column case-study grid with cover photographs, large outcome metrics, category badges, and short client stories.",
  sectionCategory: "case-studies",
  purpose:
    "Proves outcomes with a balanced mix of project imagery, metrics, categories, and narrative context.",
  bestFor: [
    "agency portfolios",
    "consulting proof",
    "customer success stories",
  ],
  tone: ["editorial", "credible", "premium"],
  contentDensity: "medium",
  visualWeight: "high",
  layout: {
    type: "grid",
    alignment: "left",
    columns: 4,
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
    "portfolio",
    "metrics",
    "grid",
    "proof",
    "landing",
  ],
  dependencies: [],
  registryDependencies: ["badge"],
  a11y: { keyboardNav: true, reducedMotion: true },
  preview: { layout: "fit", width: 1440, height: 980 },
} satisfies ComponentMeta;
