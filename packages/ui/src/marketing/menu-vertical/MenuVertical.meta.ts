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
    "Gives landing pages a bold vertical index of destinations with a kinetic cue that fires on hover and keyboard focus and stays on semantic tokens.",
  bestFor: [
    "studio and agency landings",
    "portfolio site indexes",
    "full-screen overlay menus",
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
  usedIn: [
    {
      site: "minimal",
      role: "Project index inside a full-screen Dialog; onPointerOver and onFocus sync Motion preview images.",
    },
  ],
  inspoUrl: "https://21st.dev/@berlix/components/menu-vertical",
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
