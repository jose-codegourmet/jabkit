import type { ComponentMeta } from "@jabkit/build-registry";

export default {
  name: "skiper-67",
  displayName: "Skiper67",
  version: "1.0.0",
  addedAt: "2026-09-15",
  description:
    "Marketing video teaser with a pointer-following play mark that opens a modal player with play, seek, and mute controls.",
  sectionCategory: "content",
  purpose:
    "Turns a still into a showreel invitation: the play control tracks the pointer, then a focused overlay plays the cut with custom controls.",
  bestFor: [
    "studio and agency showreels",
    "product walkthrough landings",
    "campaign pages that lead with motion",
  ],
  avoidFor: [
    "pages that cannot host video",
    "dense application chrome where a modal player would interrupt a task",
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
  slots: ["headline", "videoTeaser", "modalPlayer"],
  capabilities: {
    supportsImage: true,
    supportsVideo: true,
    supportsForm: false,
    supportsCTA: true,
    supportsDarkMode: true,
  },
  recommendedAfter: ["hero", "navbar"],
  recommendedBefore: ["features", "testimonials", "cta"],
  tags: [
    "video",
    "player",
    "modal",
    "showreel",
    "hover",
    "marketing",
    "skiper",
    "landing",
  ],
  dependencies: ["lucide-react"],
  registryDependencies: ["dialog"],
  a11y: { keyboardNav: true, reducedMotion: true },
  preview: { layout: "fit", width: 1440, height: 900 },
} satisfies ComponentMeta;
