import type { ComponentMeta } from "@jabkit/build-registry";

export default {
  name: "agency-section-heading",
  displayName: "AgencySectionHeading",
  version: "1.0.0",
  addedAt: "2026-09-17",
  description:
    "Numbered agency section label in the [05] / Contact pattern, with optional title and emphasis highlight.",
  sectionCategory: "content",
  purpose:
    "Marks editorial agency sections with a mono index, a display title, and a single emphasized word.",
  bestFor: [
    "editorial agency landings",
    "numbered portfolio sections",
    "contact and services heads",
  ],
  tone: ["editorial", "professional"],
  industries: ["design", "agency"],
  contentDensity: "low",
  visualWeight: "medium",
  layout: { type: "stack", alignment: "left" },
  slots: ["index", "label", "meta", "headline", "emphasis"],
  capabilities: {
    supportsImage: false,
    supportsVideo: false,
    supportsForm: false,
    supportsCTA: false,
    supportsDarkMode: true,
  },
  inspoUrl: "https://codepen.io/fchaussin/pen/PwbPEVV",
  tags: ["heading", "agency", "index", "atom"],
  dependencies: [],
  registryDependencies: [],
  a11y: { keyboardNav: true, reducedMotion: true },
} satisfies ComponentMeta;
