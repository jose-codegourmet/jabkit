import type { ComponentMeta } from "@jabkit/build-registry";

export default {
  name: "agndex-dashboard",
  displayName: "AgndexDashboard",
  version: "1.0.0",
  addedAt: "2026-09-15",
  description:
    "Developer portal for search indexes, API credentials, billing, and project settings.",
  sectionCategory: "application-shell",
  purpose:
    "Frames a search-index product with a sidebar portal, project switcher, and credential or billing views.",
  bestFor: [
    "developer portals",
    "search and index products",
    "API credential consoles",
  ],
  avoidFor: ["marketing landing pages", "single-purpose auth forms"],
  tone: ["technical", "professional", "structured"],
  industries: ["SaaS", "developer tools"],
  contentDensity: "high",
  visualWeight: "high",
  layout: {
    type: "sidebar",
    alignment: "left",
    columns: 2,
  },
  slots: [
    "brand",
    "sidebarNavigation",
    "projectSwitcher",
    "appearanceToggle",
    "accountMenu",
    "indexList",
    "credentials",
    "billing",
  ],
  capabilities: {
    supportsImage: false,
    supportsVideo: false,
    supportsForm: false,
    supportsCTA: true,
    supportsDarkMode: true,
  },
  inspoUrl: "https://ui.watermelon.sh/dashboard/agndex-dashboard",
  tags: [
    "dashboard",
    "developer-portal",
    "indexes",
    "api-keys",
    "billing",
    "sidebar",
    "project",
  ],
  dependencies: ["lucide-react"],
  registryDependencies: ["avatar", "dropdown-menu"],
  a11y: { keyboardNav: true, reducedMotion: true },
  preview: { layout: "fit", width: 1440, height: 900 },
} satisfies ComponentMeta;
