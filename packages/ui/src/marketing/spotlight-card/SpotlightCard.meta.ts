import type { ComponentMeta } from "@jabkit/build-registry";

export default {
  name: "spotlight-card",
  displayName: "SpotlightCard",
  version: "1.0.0",
  addedAt: "2026-09-06",
  description:
    "Marketing feature cards with a radial spotlight that tracks the pointer, using semantic tokens in light and dark.",
  sectionCategory: "features",
  purpose:
    "Draws attention to a small set of feature panels by lighting the surface under the pointer, without leaving semantic tokens.",
  bestFor: [
    "landing feature grids",
    "product capability rows",
    "studio or tool marketing pages",
  ],
  avoidFor: [
    "dense documentation",
    "forms or tables where a moving highlight would compete with controls",
  ],
  tone: ["modern", "confident", "professional"],
  industries: ["technology", "saas", "media"],
  contentDensity: "low",
  visualWeight: "medium",
  layout: {
    type: "grid",
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
    "spotlight",
    "card",
    "hover",
    "pointer",
    "marketing",
    "features",
    "interactive",
    "landing",
  ],
  dependencies: [],
  registryDependencies: [],
  a11y: { keyboardNav: false, reducedMotion: true },
  preview: { layout: "fit", width: 1440, height: 900 },
} satisfies ComponentMeta;
