import type { ComponentMeta } from "@jabkit/build-registry";

export default {
  name: "agency-layout-page",
  displayName: "AgencyLayoutPage",
  version: "1.0.0",
  addedAt: "2026-09-17",
  description:
    "Full LAYOUT agency page wiring topbar, index, services, contact form, and footer chrome.",
  sectionCategory: "page",
  purpose:
    "Assembles the agency-layout children into one editorial landing that matches the CodePen.",
  bestFor: [
    "studio landings",
    "independent design practices",
    "source-distributed agency samples",
  ],
  tone: ["editorial", "bold"],
  industries: ["design", "agency"],
  contentDensity: "high",
  visualWeight: "high",
  layout: { type: "full-width", alignment: "mixed" },
  slots: ["navigation", "index", "services", "contact", "footer"],
  capabilities: {
    supportsImage: true,
    supportsVideo: false,
    supportsForm: true,
    supportsCTA: true,
    supportsDarkMode: true,
  },
  inspoUrl: "https://codepen.io/fchaussin/pen/PwbPEVV",
  tags: ["page", "agency", "layout", "contact", "marketing"],
  dependencies: [],
  registryDependencies: [
    "agency-section-heading",
    "agency-topbar",
    "agency-index-section",
    "agency-services-section",
    "agency-contact-form",
    "agency-contact-section",
  ],
  a11y: { keyboardNav: true, reducedMotion: true },
  preview: { layout: "fit", width: 1440, height: 2800 },
} satisfies ComponentMeta;
