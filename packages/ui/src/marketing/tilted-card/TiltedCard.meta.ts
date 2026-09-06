import type { ComponentMeta } from "@jabkit/build-registry";

export default {
  name: "tilted-card",
  displayName: "TiltedCard",
  version: "1.0.0",
  addedAt: "2026-09-06",
  description:
    "Marketing media card that tilts and lifts toward the pointer, with an overlay title and a caption that follows the cursor.",
  sectionCategory: "features",
  purpose:
    "Turns a poster, album, or product still into a tactile 3D object that reacts to the pointer without leaving semantic tokens.",
  bestFor: [
    "album or campaign drops",
    "product lookbooks",
    "creative studio landings",
  ],
  avoidFor: [
    "dense documentation",
    "task-heavy product UI where pointer effects would compete with controls",
  ],
  tone: ["experimental", "modern", "confident"],
  industries: ["media", "ecommerce", "technology"],
  contentDensity: "low",
  visualWeight: "high",
  layout: {
    type: "stack",
    alignment: "center",
    columns: 3,
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
  recommendedBefore: ["testimonials", "cta", "gallery"],
  tags: [
    "tilt",
    "card",
    "media",
    "marketing",
    "interactive",
    "3d",
    "hover",
    "landing",
  ],
  dependencies: [],
  registryDependencies: [],
  a11y: { keyboardNav: false, reducedMotion: true },
  preview: { layout: "fit", width: 1440, height: 900 },
} satisfies ComponentMeta;
