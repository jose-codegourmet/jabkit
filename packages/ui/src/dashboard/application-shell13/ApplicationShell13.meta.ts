import type { ComponentMeta } from "@jabkit/build-registry";

export default {
  name: "application-shell13",
  displayName: "ApplicationShell13",
  version: "1.0.0",
  addedAt: "2026-09-05",
  description:
    "Top navigation dashboard shell with search, org and user menus, dropdown nav groups, a mobile drawer, and a bottom bar.",
  tags: [
    "dashboard",
    "application-shell",
    "navigation",
    "header",
    "dropdown",
    "search",
    "organization",
    "mobile",
  ],
  dependencies: [],
  registryDependencies: [
    "avatar",
    "badge",
    "button",
    "dialog",
    "dropdown-menu",
    "input",
    "separator",
  ],
  a11y: { keyboardNav: true, reducedMotion: true },
  preview: { layout: "fit", width: 1440, height: 900 },
} satisfies ComponentMeta;
