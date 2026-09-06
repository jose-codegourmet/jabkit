import type { ComponentMeta } from "@jabkit/build-registry";

export default {
  name: "application-shell1",
  displayName: "ApplicationShell1",
  version: "1.0.0",
  addedAt: "2026-09-05",
  description:
    "Collapsible application shell with grouped sidebar navigation, nested submenus, user footer, and a breadcrumb header.",
  sectionCategory: "application-shell",
  purpose:
    "Provides persistent hierarchical navigation and page context for a multi-area desktop application.",
  bestFor: [
    "multi-page SaaS products",
    "administration tools",
    "business dashboards",
  ],
  avoidFor: ["single-purpose forms", "marketing landing pages"],
  tone: ["professional", "structured", "technical"],
  industries: ["SaaS", "enterprise software"],
  contentDensity: "high",
  visualWeight: "high",
  layout: {
    type: "sidebar",
    alignment: "left",
  },
  slots: [
    "brand",
    "primaryNavigation",
    "utilityNavigation",
    "accountMenu",
    "pageHeader",
    "pageContent",
  ],
  capabilities: {
    supportsImage: false,
    supportsVideo: false,
    supportsForm: false,
    supportsCTA: false,
    supportsDarkMode: true,
  },
  tags: [
    "dashboard",
    "shell",
    "sidebar",
    "navigation",
    "breadcrumbs",
    "layout",
  ],
  dependencies: ["lucide-react"],
  registryDependencies: [
    "avatar",
    "button",
    "dropdown-menu",
    "separator",
    "tooltip",
  ],
  a11y: { keyboardNav: true, reducedMotion: true },
  preview: { layout: "fit", width: 1440, height: 900 },
} satisfies ComponentMeta;
