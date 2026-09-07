import type { ComponentMeta } from "@jabkit/build-registry";

export default {
  name: "navigation-menu",
  displayName: "NavigationMenu",
  version: "1.0.0",
  addedAt: "2026-09-07",
  description:
    "Accessible site navigation with desktop mega menus, compact link lists, and a mobile disclosure drawer.",
  sectionCategory: "navigation",
  purpose:
    "Lets visitors scan products, company pages, and primary actions from a compact header without leaving the current page.",
  bestFor: [
    "marketing site headers",
    "SaaS product navigation",
    "multi-level mega menus",
  ],
  avoidFor: ["in-page tabs", "sidebar app chrome", "overflow action menus"],
  tone: ["clean", "professional"],
  contentDensity: "medium",
  visualWeight: "low",
  layout: {
    type: "full-width",
    alignment: "center",
  },
  slots: ["brand", "triggers", "megaContent", "links", "cta", "mobileNav"],
  capabilities: {
    supportsImage: false,
    supportsVideo: false,
    supportsForm: false,
    supportsCTA: true,
    supportsDarkMode: true,
  },
  recommendedAfter: ["button"],
  tags: [
    "navigation-menu",
    "navbar",
    "mega-menu",
    "primitive",
    "accessible",
    "atom",
  ],
  dependencies: ["@base-ui/react", "lucide-react"],
  registryDependencies: ["button", "dialog"],
  a11y: { keyboardNav: true, reducedMotion: true },
  preview: {
    layout: "center",
    width: 1100,
    height: 560,
    capture: { viewport: { width: 1200, height: 640 } },
  },
} satisfies ComponentMeta;
