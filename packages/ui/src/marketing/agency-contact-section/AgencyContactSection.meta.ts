import type { ComponentMeta } from "@jabkit/build-registry";

export default {
  name: "agency-contact-section",
  displayName: "AgencyContactSection",
  version: "1.0.0",
  addedAt: "2026-09-17",
  description:
    "Contact head, studio meta, schematic map, and the agency inquiry form in one section.",
  sectionCategory: "contact",
  purpose:
    "Closes the agency page with booking copy and a validated brief form.",
  bestFor: ["studio contact pages", "agency landings", "project intake"],
  tone: ["editorial", "professional"],
  industries: ["design", "agency"],
  contentDensity: "medium",
  visualWeight: "high",
  layout: { type: "split", alignment: "mixed", columns: 2 },
  slots: ["headline", "description", "studio", "form"],
  capabilities: {
    supportsImage: false,
    supportsVideo: false,
    supportsForm: true,
    supportsCTA: true,
    supportsDarkMode: true,
  },
  recommendedAfter: ["features"],
  recommendedBefore: ["footer"],
  inspoUrl: "https://codepen.io/fchaussin/pen/PwbPEVV",
  tags: ["contact", "agency", "form", "marketing"],
  dependencies: [],
  registryDependencies: ["agency-section-heading", "agency-contact-form"],
  a11y: { keyboardNav: true, reducedMotion: true },
  preview: { layout: "fit", width: 1440, height: 1100 },
} satisfies ComponentMeta;
