import type { ComponentMeta } from "@jabkit/build-registry";

export default {
  name: "skiper-52",
  displayName: "Skiper52",
  version: "1.1.0",
  addedAt: "2026-09-15",
  description:
    "Rounded-3xl hover-expand image rack: idle strips stay 5rem, the active plate opens to 24rem.",
  sectionCategory: "gallery",
  purpose:
    "Lets a landing page show many photographs in one row without losing a readable hero frame for the active image.",
  bestFor: [
    "editorial or studio lookbooks",
    "product plate galleries",
    "cast or campaign stills on a marketing page",
  ],
  avoidFor: [
    "dense documentation",
    "galleries that need equal tile sizes at all times",
    "pages where hover is the only way to see image text",
  ],
  tone: ["modern", "confident", "editorial"],
  industries: ["media", "fashion", "design"],
  contentDensity: "low",
  visualWeight: "high",
  layout: {
    type: "row",
    alignment: "center",
    columns: 1,
  },
  slots: ["headline", "content", "featureVisuals"],
  capabilities: {
    supportsImage: true,
    supportsVideo: false,
    supportsForm: false,
    supportsCTA: false,
    supportsDarkMode: true,
  },
  recommendedAfter: ["hero", "logos"],
  recommendedBefore: ["testimonials", "cta"],
  inspoUrl: "https://skiper-ui.com/v1/skiper52",
  tags: [
    "gallery",
    "hover",
    "expand",
    "images",
    "marketing",
    "interactive",
    "lookbook",
    "skiper",
  ],
  dependencies: [],
  registryDependencies: [],
  a11y: { keyboardNav: true, reducedMotion: true },
  preview: { layout: "fit", width: 1440, height: 900 },
} satisfies ComponentMeta;
