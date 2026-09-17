import type { ComponentMeta } from "@jabkit/build-registry";

export default {
  name: "sidebar",
  displayName: "Sidebar",
  version: "1.0.0",
  addedAt: "2026-09-17",
  description:
    "Composable application sidebar with header, groups, menus, rail, and an inset content pane.",
  sectionCategory: "navigation",
  purpose:
    "Gives product shells a persistent navigation column that can collapse to icons or slide in on small screens.",
  bestFor: [
    "application shells with nested destinations",
    "workspace switchers and project lists",
    "icon-collapsed desktop navigation with a mobile sheet",
  ],
  avoidFor: [
    "marketing site headers; use a navigation menu",
    "simple in-page tabs or steppers",
  ],
  tone: ["professional", "focused"],
  contentDensity: "medium",
  visualWeight: "medium",
  layout: {
    type: "split",
    alignment: "left",
    columns: 2,
  },
  slots: [
    "header",
    "content",
    "group",
    "menu",
    "footer",
    "rail",
    "inset",
    "trigger",
  ],
  capabilities: {
    supportsImage: false,
    supportsVideo: false,
    supportsForm: true,
    supportsCTA: true,
    supportsDarkMode: true,
  },
  inspoUrl: "https://ui.shadcn.com/docs/components/base/sidebar",
  tags: ["sidebar", "navigation", "shell", "atom"],
  dependencies: ["@base-ui/react", "@radix-ui/react-slot", "lucide-react"],
  registryDependencies: ["button", "input", "separator", "skeleton", "tooltip"],
  a11y: { keyboardNav: true, reducedMotion: true },
  preview: {
    layout: "fit",
    width: 960,
    height: 560,
  },
} satisfies ComponentMeta;
