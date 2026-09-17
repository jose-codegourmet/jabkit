import type { ComponentMeta } from "@jabkit/build-registry";

export default {
  name: "agency-topbar",
  displayName: "AgencyTopbar",
  version: "1.0.0",
  addedAt: "2026-09-17",
  description:
    "Sticky agency chrome with a LAYOUT brand, primary anchors, and a live local-time clock.",
  sectionCategory: "navbar",
  purpose:
    "Pins editorial agency navigation and a client-safe local clock above numbered page sections.",
  bestFor: [
    "agency landings",
    "editorial studio sites",
    "single-page section navigation",
  ],
  tone: ["editorial", "professional"],
  industries: ["design", "agency"],
  contentDensity: "low",
  visualWeight: "low",
  layout: { type: "full-width", alignment: "mixed" },
  slots: ["brand", "navigationItems", "localTime", "mobileNavigation"],
  capabilities: {
    supportsImage: false,
    supportsVideo: false,
    supportsForm: false,
    supportsCTA: true,
    supportsDarkMode: true,
  },
  recommendedBefore: ["hero"],
  inspoUrl: "https://codepen.io/fchaussin/pen/PwbPEVV",
  tags: ["navbar", "agency", "clock", "marketing"],
  dependencies: [],
  registryDependencies: [],
  a11y: { keyboardNav: true, reducedMotion: true },
  preview: { layout: "fit", width: 1440, height: 180 },
} satisfies ComponentMeta;
