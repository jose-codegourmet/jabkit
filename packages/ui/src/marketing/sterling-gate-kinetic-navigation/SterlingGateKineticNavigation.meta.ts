import type { ComponentMeta } from "@jabkit/build-registry";

export default {
  name: "sterling-gate-kinetic-navigation",
  displayName: "SterlingGateKineticNavigation",
  version: "1.0.0",
  addedAt: "2026-09-07",
  description:
    "Full-screen kinetic navigation that reveals a typography-heavy overlay from a focused header, with ripple hover on destinations.",
  sectionCategory: "navbar",
  purpose:
    "Turns primary site navigation into an immersive index for luxury and agency pages that need a quiet, heavy-weighted reveal.",
  bestFor: [
    "agency and studio sites",
    "luxury brand landing pages",
    "portfolio sites with few destinations",
  ],
  avoidFor: [
    "dense application shells",
    "ecommerce catalogs with many nested categories",
    "utility sites that need persistent inline links",
  ],
  tone: ["premium", "editorial", "quiet"],
  industries: ["design", "architecture", "hospitality"],
  contentDensity: "low",
  visualWeight: "high",
  layout: {
    type: "overlay",
    alignment: "left",
    columns: 1,
  },
  slots: ["brand", "menuTrigger", "navigationItems", "cta", "pageCanvas"],
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
    "overlay",
    "fullscreen",
    "kinetic",
    "menu",
    "luxury",
  ],
  dependencies: ["lucide-react"],
  registryDependencies: [],
  a11y: { keyboardNav: true, reducedMotion: true },
  preview: { layout: "fit", width: 1440, height: 900 },
} satisfies ComponentMeta;
