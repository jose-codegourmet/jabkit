import type { ComponentMeta } from "@jabkit/build-registry";

export default {
  name: "application-shell1",
  displayName: "ApplicationShell1",
  version: "1.0.0",
  addedAt: "2026-09-05",
  description:
    "Collapsible application shell with grouped sidebar navigation, nested submenus, user footer, and a breadcrumb header.",
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
