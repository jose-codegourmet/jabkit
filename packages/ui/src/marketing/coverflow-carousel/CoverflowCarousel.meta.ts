import type { ComponentMeta } from "@jabkit/build-registry";

export default {
  name: "coverflow-carousel",
  displayName: "CoverflowCarousel",
  version: "1.0.0",
  addedAt: "2026-09-15",
  description:
    "Marketing gallery of square covers in an inverse 3D rack: the centre face is square, side plates swing their outer edges forward, and the caption follows drag or keyboard.",
  sectionCategory: "gallery",
  purpose:
    "Lets a landing show a short catalogue of sleeves, portraits, or stills as a tactile rack instead of a flat strip.",
  bestFor: [
    "album or edition launches",
    "studio portfolio landings",
    "campaign galleries with a handful of hero stills",
  ],
  avoidFor: [
    "long catalogues that need search and filters",
    "product grids that must show every item at once",
    "dashboards where 3D motion would fight the task",
  ],
  tone: ["editorial", "modern", "confident"],
  industries: ["media", "ecommerce", "entertainment"],
  contentDensity: "low",
  visualWeight: "high",
  layout: {
    type: "carousel",
    alignment: "center",
    columns: 5,
  },
  slots: ["headline", "covers", "caption"],
  capabilities: {
    supportsImage: true,
    supportsVideo: false,
    supportsForm: false,
    supportsCTA: false,
    supportsDarkMode: true,
  },
  recommendedAfter: ["hero", "logos"],
  recommendedBefore: ["testimonials", "pricing", "cta"],
  tags: [
    "coverflow",
    "carousel",
    "gallery",
    "covers",
    "3d",
    "marketing",
    "drag",
  ],
  dependencies: [],
  registryDependencies: [],
  a11y: { keyboardNav: true, reducedMotion: true },
  preview: { layout: "fit", width: 1440, height: 900 },
} satisfies ComponentMeta;
