import type { ComponentMeta } from "@jabkit/build-registry";

export default {
  name: "cloud-shader",
  displayName: "CloudShader",
  version: "1.0.0",
  addedAt: "2026-09-16",
  description:
    "Full-bleed marketing hero with a token-tinted procedural cloud field, pill CTAs, and either a SaaS ledger preview or a plane-window seat.",
  sectionCategory: "hero",
  purpose:
    "Opens a landing page with drifting sky atmosphere while keeping a clear offer, navigation, and conversion path on top of the field.",
  bestFor: [
    "fintech and travel landing heroes",
    "campaign openers that need living weather",
    "product launches that lead with atmosphere",
  ],
  avoidFor: [
    "dense application screens",
    "pages that cannot afford a WebGL backdrop",
  ],
  tone: ["premium", "calm", "cinematic"],
  industries: ["finance", "travel", "saas"],
  contentDensity: "medium",
  visualWeight: "high",
  layout: {
    type: "overlay",
    alignment: "center",
  },
  slots: [
    "brand",
    "navigation",
    "headline",
    "description",
    "primaryCTA",
    "dashboardPreview",
    "socialProof",
  ],
  capabilities: {
    supportsImage: true,
    supportsVideo: false,
    supportsForm: false,
    supportsCTA: true,
    supportsDarkMode: true,
  },
  recommendedAfter: ["navbar"],
  recommendedBefore: ["features", "logos", "cta"],
  tags: [
    "hero",
    "marketing",
    "shader",
    "canvas",
    "clouds",
    "cta",
    "landing",
    "webgl",
  ],
  dependencies: [],
  registryDependencies: [],
  a11y: { keyboardNav: true, reducedMotion: true },
  preview: { layout: "fit", width: 1440, height: 900 },
} satisfies ComponentMeta;
