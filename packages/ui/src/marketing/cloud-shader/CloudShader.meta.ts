import type { ComponentMeta } from "@jabkit/build-registry";

export default {
  name: "cloud-shader",
  displayName: "CloudShader",
  version: "2.0.0",
  addedAt: "2026-09-16",
  description:
    "Soft procedural clouds that drift across a sky. Tune speed, count, and colors, then draw any content above the field.",
  sectionCategory: "background",
  purpose:
    "Gives a landing page or hero a living sky without shipping image assets, while leaving the offer and chrome to the consumer.",
  bestFor: [
    "travel and fintech heroes",
    "campaign openers that need weather",
    "full-bleed backgrounds behind marketing copy",
  ],
  avoidFor: [
    "dense application screens",
    "pages that cannot afford a WebGL backdrop",
  ],
  tone: ["premium", "calm", "cinematic"],
  industries: ["finance", "travel", "saas"],
  contentDensity: "low",
  visualWeight: "high",
  layout: {
    type: "full-width",
    alignment: "center",
  },
  slots: ["children"],
  capabilities: {
    supportsImage: false,
    supportsVideo: false,
    supportsForm: false,
    supportsCTA: false,
    supportsDarkMode: true,
  },
  recommendedAfter: ["navbar"],
  recommendedBefore: ["features", "logos", "cta"],
  inspoUrl: "https://ui.aceternity.com/components/cloud-shader",
  tags: [
    "background",
    "marketing",
    "shader",
    "canvas",
    "clouds",
    "sky",
    "webgl",
  ],
  dependencies: [],
  registryDependencies: [],
  a11y: { keyboardNav: false, reducedMotion: true },
  preview: {
    layout: "fit",
    width: 1440,
    height: 900,
    capture: { waitMs: 400 },
  },
} satisfies ComponentMeta;
