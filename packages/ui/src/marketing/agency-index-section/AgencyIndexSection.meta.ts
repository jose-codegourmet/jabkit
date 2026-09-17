import type { ComponentMeta } from "@jabkit/build-registry";

export default {
  name: "agency-index-section",
  displayName: "AgencyIndexSection",
  version: "1.0.0",
  addedAt: "2026-09-17",
  description:
    "Agency index intro with numbered heading, manifesto copy, category strip, and selected-work grid.",
  sectionCategory: "hero",
  purpose:
    "Opens the agency page with the Form follows friction intro and a browsable work index.",
  bestFor: ["studio landings", "portfolio indexes", "editorial agency intros"],
  tone: ["editorial", "bold"],
  industries: ["design", "agency"],
  contentDensity: "high",
  visualWeight: "high",
  layout: { type: "full-width", alignment: "left" },
  slots: [
    "kicker",
    "headline",
    "description",
    "primaryCTA",
    "categories",
    "gallery",
  ],
  capabilities: {
    supportsImage: true,
    supportsVideo: false,
    supportsForm: false,
    supportsCTA: true,
    supportsDarkMode: true,
  },
  recommendedAfter: ["navbar"],
  recommendedBefore: ["features"],
  inspoUrl: "https://codepen.io/fchaussin/pen/PwbPEVV",
  tags: ["index", "agency", "hero", "gallery", "marketing"],
  dependencies: [],
  registryDependencies: ["agency-section-heading"],
  a11y: { keyboardNav: true, reducedMotion: true },
  preview: { layout: "fit", width: 1440, height: 1600 },
} satisfies ComponentMeta;
