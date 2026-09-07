import type { ComponentMeta } from "@jabkit/build-registry";

export default {
  name: "menu-vertical",
  displayName: "MenuVertical",
  version: "1.0.0",
  addedAt: "2026-09-07",
  description:
    "Stacked large-type marketing navigation that slides an arrow in and optionally skews labels on hover.",
  sectionCategory: "navbar",
  purpose:
    "Gives landing pages a bold vertical index of destinations with a kinetic hover cue that stays on semantic tokens.",
  bestFor: [
    "studio and agency landings",
    "portfolio site indexes",
    "minimal marketing sites with few destinations",
  ],
  avoidFor: [
    "dense application sidebars",
    "ecommerce catalogs with nested categories",
    "compact utility headers",
  ],
  tone: ["editorial", "kinetic", "bold"],
  industries: ["design", "media", "fashion"],
  contentDensity: "low",
  visualWeight: "medium",
  layout: {
    type: "stack",
    alignment: "left",
  },
  slots: ["navigationItems"],
  capabilities: {
    supportsImage: false,
    supportsVideo: false,
    supportsForm: false,
    supportsCTA: false,
    supportsDarkMode: true,
  },
  recommendedBefore: ["hero", "content"],
  tags: [
    "navbar",
    "marketing",
    "navigation",
    "menu",
    "vertical",
    "hover",
    "kinetic",
    "typography",
  ],
  dependencies: ["lucide-react"],
  registryDependencies: [],
  a11y: { keyboardNav: true, reducedMotion: true },
  preview: { layout: "fit", width: 1440, height: 720 },
} satisfies ComponentMeta;
