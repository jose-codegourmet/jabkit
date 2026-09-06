import type { ComponentMeta } from "@jabkit/build-registry";

export default {
  name: "holo-card",
  displayName: "HoloCard",
  version: "1.0.0",
  addedAt: "2026-09-06",
  description:
    "Marketing block with holographic trading cards: pointer-driven 3D tilt, token rainbow foil, and a contact shadow that leans with the surface.",
  sectionCategory: "features",
  purpose:
    "Turns a product or drop announcement into a tactile foil card that reacts to the pointer without leaving semantic tokens.",
  bestFor: [
    "product launches",
    "collectible or limited-drop pages",
    "creative studio landings",
  ],
  avoidFor: [
    "dense documentation",
    "task-heavy product UI where pointer effects would compete with controls",
  ],
  tone: ["experimental", "modern", "confident"],
  industries: ["technology", "media", "ecommerce"],
  contentDensity: "low",
  visualWeight: "high",
  layout: {
    type: "stack",
    alignment: "center",
    columns: 3,
  },
  slots: ["headline", "content", "featureVisuals"],
  capabilities: {
    supportsImage: false,
    supportsVideo: false,
    supportsForm: false,
    supportsCTA: false,
    supportsDarkMode: true,
  },
  recommendedAfter: ["hero", "logos"],
  recommendedBefore: ["pricing", "cta", "testimonials"],
  tags: [
    "holo",
    "holographic",
    "foil",
    "card",
    "marketing",
    "tilt",
    "interactive",
    "landing",
  ],
  dependencies: [],
  registryDependencies: ["badge"],
  a11y: { keyboardNav: false, reducedMotion: true },
  preview: { layout: "fit", width: 1440, height: 900 },
} satisfies ComponentMeta;
