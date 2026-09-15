import type { ComponentMeta } from "@jabkit/build-registry";

export default {
  name: "demostack-dashboard",
  displayName: "DemostackDashboard",
  version: "1.0.0",
  addedAt: "2026-09-15",
  description:
    "Product-demo workspace with organization switching, resource discovery, and team Demostack libraries.",
  sectionCategory: "application-shell",
  purpose:
    "Frames a demo-enablement product with a collapsible sidebar, search top bar, and library or home views.",
  bestFor: [
    "product demo workspaces",
    "sales enablement portals",
    "team content libraries",
  ],
  avoidFor: ["marketing landing pages", "single-purpose auth forms"],
  tone: ["professional", "structured", "product"],
  industries: ["SaaS", "sales enablement"],
  contentDensity: "high",
  visualWeight: "high",
  layout: {
    type: "sidebar",
    alignment: "left",
    columns: 2,
  },
  slots: [
    "brand",
    "organizationSwitcher",
    "sidebarNavigation",
    "search",
    "notifications",
    "homeActions",
    "tips",
    "resources",
    "stackLibrary",
  ],
  capabilities: {
    supportsImage: true,
    supportsVideo: false,
    supportsForm: false,
    supportsCTA: true,
    supportsDarkMode: true,
  },
  tags: [
    "dashboard",
    "demostack",
    "workspace",
    "sidebar",
    "library",
    "organization",
  ],
  dependencies: ["lucide-react"],
  registryDependencies: ["avatar", "dropdown-menu", "tooltip"],
  a11y: { keyboardNav: true, reducedMotion: true },
  preview: { layout: "fit", width: 1440, height: 900 },
} satisfies ComponentMeta;
