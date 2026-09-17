import type { ComponentMeta } from "@jabkit/build-registry";

export default {
  name: "agency-services-section",
  displayName: "AgencyServicesSection",
  version: "1.0.0",
  addedAt: "2026-09-17",
  description:
    "Numbered agency services block with a What I do heading and expandable practice categories.",
  sectionCategory: "features",
  purpose:
    "Lists identity, editorial, web, and direction as one accordion that matches the LAYOUT pen.",
  bestFor: [
    "studio service menus",
    "practice offerings",
    "editorial capability lists",
  ],
  tone: ["editorial", "professional"],
  industries: ["design", "agency"],
  contentDensity: "medium",
  visualWeight: "medium",
  layout: { type: "stack", alignment: "left" },
  slots: ["headline", "serviceList"],
  capabilities: {
    supportsImage: false,
    supportsVideo: false,
    supportsForm: false,
    supportsCTA: false,
    supportsDarkMode: true,
  },
  recommendedAfter: ["hero"],
  recommendedBefore: ["contact"],
  inspoUrl: "https://codepen.io/fchaussin/pen/PwbPEVV",
  tags: ["services", "agency", "accordion", "marketing"],
  dependencies: [],
  registryDependencies: ["agency-section-heading"],
  a11y: { keyboardNav: true, reducedMotion: true },
  preview: { layout: "fit", width: 1440, height: 900 },
} satisfies ComponentMeta;
