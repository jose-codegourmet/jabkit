import type { ComponentMeta } from "@jabkit/build-registry";

export default {
  name: "random-letter-swap",
  displayName: "RandomLetterSwap",
  version: "1.0.0",
  addedAt: "2026-09-07",
  description:
    "Horizontal marketing navigation whose link labels shuffle glyphs in a random vertical swap on hover.",
  sectionCategory: "navbar",
  purpose:
    "Gives compact primary navigation a glitchy, kinetic type moment without leaving semantic tokens or reduced-motion support.",
  bestFor: [
    "studio and agency sites",
    "portfolio landings with few destinations",
    "editorial brands that treat type as the visual",
  ],
  avoidFor: [
    "dense application shells",
    "ecommerce catalogs with nested categories",
    "utility sites that need always-static labels",
  ],
  tone: ["playful", "editorial", "kinetic"],
  industries: ["design", "media", "fashion"],
  contentDensity: "low",
  visualWeight: "low",
  layout: {
    type: "navbar",
    alignment: "mixed",
  },
  slots: ["brand", "navigationItems", "cta"],
  capabilities: {
    supportsImage: false,
    supportsVideo: false,
    supportsForm: false,
    supportsCTA: true,
    supportsDarkMode: true,
  },
  recommendedBefore: ["hero", "content"],
  tags: [
    "navbar",
    "marketing",
    "navigation",
    "header",
    "kinetic",
    "typography",
    "hover",
    "text",
  ],
  dependencies: [],
  registryDependencies: [],
  a11y: { keyboardNav: true, reducedMotion: true },
  preview: { layout: "fit", width: 1440, height: 420 },
} satisfies ComponentMeta;
