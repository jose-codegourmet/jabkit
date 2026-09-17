import type { ComponentMeta } from "@jabkit/build-registry";

export default {
  name: "agency-contact-form",
  displayName: "AgencyContactForm",
  version: "1.0.0",
  addedAt: "2026-09-17",
  description:
    "Agency contact form with numbered fields, project and budget selects, and inline validation UX.",
  sectionCategory: "form",
  purpose:
    "Collects a brief with required name, email, project type, and budget before submit.",
  bestFor: [
    "studio inquiry forms",
    "project briefing",
    "agency contact blocks",
  ],
  tone: ["editorial", "professional"],
  industries: ["design", "agency"],
  contentDensity: "medium",
  visualWeight: "medium",
  layout: { type: "grid", alignment: "left", columns: 2 },
  slots: ["name", "email", "projectType", "budget", "brief", "submit"],
  capabilities: {
    supportsImage: false,
    supportsVideo: false,
    supportsForm: true,
    supportsCTA: true,
    supportsDarkMode: true,
  },
  recommendedAfter: ["contact"],
  inspoUrl: "https://codepen.io/fchaussin/pen/PwbPEVV",
  tags: ["form", "contact", "agency", "validation", "marketing"],
  dependencies: [],
  registryDependencies: [],
  a11y: { keyboardNav: true, reducedMotion: true },
  preview: { layout: "fit", width: 960, height: 900 },
} satisfies ComponentMeta;
