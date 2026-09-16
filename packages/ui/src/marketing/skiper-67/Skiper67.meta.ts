import type { ComponentMeta } from "@jabkit/build-registry";

export default {
  name: "skiper-67",
  displayName: "Skiper67",
  version: "1.1.0",
  addedAt: "2026-09-15",
  description:
    "Square looping teaser with a cursor-following Play mark that expands into a full-bleed player overlay.",
  sectionCategory: "content",
  purpose:
    "Mirrors Skiper video player 001: a sharp 180px loop, exclusion-blend Play that springs with the pointer, then a clip-path expand into overlay controls.",
  bestFor: [
    "studio and agency showreels",
    "product walkthrough landings",
    "campaign pages that lead with a small motion still",
  ],
  avoidFor: [
    "pages that cannot host video",
    "dense application chrome where a viewport overlay would interrupt a task",
  ],
  tone: ["cinematic", "modern", "confident"],
  industries: ["media", "technology", "design"],
  contentDensity: "low",
  visualWeight: "high",
  layout: {
    type: "stack",
    alignment: "center",
    columns: 1,
  },
  slots: ["hint", "videoTeaser", "overlayPlayer"],
  capabilities: {
    supportsImage: true,
    supportsVideo: true,
    supportsForm: false,
    supportsCTA: true,
    supportsDarkMode: true,
  },
  recommendedAfter: ["hero", "navbar"],
  recommendedBefore: ["features", "testimonials", "cta"],
  inspoUrl: "https://skiper-ui.com/v1/skiper67",
  tags: [
    "video",
    "player",
    "overlay",
    "showreel",
    "hover",
    "marketing",
    "skiper",
    "landing",
  ],
  dependencies: ["lucide-react"],
  registryDependencies: [],
  a11y: { keyboardNav: true, reducedMotion: true },
  preview: { layout: "fit", width: 1440, height: 900 },
} satisfies ComponentMeta;
