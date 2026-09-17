import type { ComponentMeta } from "@jabkit/build-registry";

export default {
  name: "context-menu",
  displayName: "ContextMenu",
  version: "1.0.0",
  addedAt: "2026-09-17",
  description:
    "Right-click menu of contextual actions, with groups, shortcuts, nested menus, and selection items.",
  sectionCategory: "overlay",
  purpose:
    "Keeps pointer-local actions next to the clicked surface instead of a distant toolbar.",
  bestFor: [
    "canvas and list item actions",
    "file and document operations",
    "view toggles next to selected content",
  ],
  avoidFor: [
    "primary navigation",
    "actions that must stay visible without a pointer",
  ],
  tone: ["clean", "professional"],
  contentDensity: "medium",
  visualWeight: "low",
  layout: {
    type: "overlay",
    alignment: "left",
  },
  slots: ["trigger", "menuItems", "groups", "submenu"],
  capabilities: {
    supportsImage: false,
    supportsVideo: false,
    supportsForm: false,
    supportsCTA: false,
    supportsDarkMode: true,
  },
  inspoUrl: "https://ui.shadcn.com/docs/components/base/context-menu",
  tags: ["context-menu", "overlay", "primitive", "accessible", "atom"],
  dependencies: ["@base-ui/react", "lucide-react"],
  registryDependencies: [],
  a11y: { keyboardNav: true, reducedMotion: true },
  preview: {
    layout: "center",
    capture: { viewport: { width: 720, height: 480 } },
  },
} satisfies ComponentMeta;
