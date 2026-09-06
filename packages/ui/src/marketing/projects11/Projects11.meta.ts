import type { ComponentMeta } from "@jabkit/build-registry";

export default {
  name: "projects11",
  displayName: "Projects11",
  version: "1.0.0",
  addedAt: "2026-09-05",
  description:
    "Masonry project photo wall in CSS columns — twelve unframed images that rise into view on scroll and lift with a brightness overlay on hover.",
  sectionCategory: "gallery",
  purpose:
    "Creates an immersive portfolio impression through a dense, minimally captioned wall of project imagery.",
  bestFor: [
    "visual portfolios",
    "product collections",
    "image-led brand pages",
  ],
  tone: ["editorial", "visual", "premium"],
  contentDensity: "medium",
  visualWeight: "high",
  layout: {
    type: "masonry",
    alignment: "mixed",
  },
  slots: ["projectImages", "projectLinks"],
  capabilities: {
    supportsImage: true,
    supportsVideo: false,
    supportsForm: false,
    supportsCTA: false,
    supportsDarkMode: true,
  },
  recommendedAfter: ["hero", "about"],
  recommendedBefore: ["content", "cta"],
  tags: [
    "projects",
    "gallery",
    "marketing",
    "masonry",
    "portfolio",
    "photography",
    "hover",
    "landing",
  ],
  dependencies: [],
  registryDependencies: [],
  a11y: { keyboardNav: true, reducedMotion: true },
  preview: { layout: "fit", width: 1440, height: 1600 },
} satisfies ComponentMeta;
