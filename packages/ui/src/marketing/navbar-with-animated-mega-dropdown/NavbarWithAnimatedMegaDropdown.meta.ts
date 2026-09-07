import type { ComponentMeta } from "@jabkit/build-registry";

export default {
  name: "navbar-with-animated-mega-dropdown",
  displayName: "NavbarWithAnimatedMegaDropdown",
  version: "1.0.0",
  addedAt: "2026-09-07",
  description:
    "Marketing header with animated desktop mega menus, a primary CTA, and a slide-in overlay for small screens.",
  sectionCategory: "navbar",
  purpose:
    "Lets visitors scan products and resources from a compact header, with a shared animated mega panel on desktop and a disclosure drawer on mobile.",
  bestFor: [
    "primary site navigation",
    "SaaS marketing headers",
    "multi-column mega menus",
  ],
  avoidFor: [
    "in-page tabs",
    "dense storefront utility bars",
    "sidebar app chrome",
  ],
  tone: ["clean", "professional"],
  industries: ["SaaS", "technology"],
  contentDensity: "medium",
  visualWeight: "medium",
  layout: {
    type: "full-width",
    alignment: "mixed",
  },
  slots: ["brand", "navigationItems", "megaContent", "cta", "mobileNavigation"],
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
    "mega-menu",
    "dropdown",
    "mobile",
    "cta",
  ],
  dependencies: ["lucide-react"],
  registryDependencies: ["navigation-menu", "button", "dialog"],
  a11y: { keyboardNav: true, reducedMotion: true },
  preview: {
    layout: "fit",
    width: 1440,
    height: 560,
    capture: { viewport: { width: 1440, height: 640 } },
  },
} satisfies ComponentMeta;
