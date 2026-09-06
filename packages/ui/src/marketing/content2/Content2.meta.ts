import type { ComponentMeta } from "@jabkit/build-registry";

export default {
  name: "content2",
  displayName: "Content2",
  version: "1.0.0",
  addedAt: "2026-09-05",
  description:
    "Content-hub explainer with a labeled intro, icon type grid, create and manage how-to panels, and an inline tip alert.",
  sectionCategory: "content",
  purpose:
    "Teaches a multi-part content model through categorized concepts and task-oriented how-to panels.",
  bestFor: ["documentation", "editorial resources", "educational pages"],
  tone: ["editorial", "informative", "structured"],
  contentDensity: "high",
  visualWeight: "medium",
  layout: {
    type: "stack",
    alignment: "left",
  },
  slots: [
    "sectionLabel",
    "headline",
    "contentTypeGrid",
    "howToPanels",
    "tipCallout",
  ],
  capabilities: {
    supportsImage: false,
    supportsVideo: false,
    supportsForm: false,
    supportsCTA: false,
    supportsDarkMode: true,
  },
  recommendedAfter: ["hero", "navbar"],
  recommendedBefore: ["related-content", "cta", "footer"],
  tags: [
    "content",
    "marketing",
    "grid",
    "onboarding",
    "cms",
    "docs",
    "landing",
  ],
  dependencies: [],
  registryDependencies: ["badge", "separator"],
  a11y: { keyboardNav: true, reducedMotion: true },
  preview: { layout: "fit", width: 1440, height: 1100 },
} satisfies ComponentMeta;
