import type { ComponentMeta } from "@jabkit/build-registry";

export default {
  name: "command",
  displayName: "Command",
  version: "1.0.0",
  addedAt: "2026-09-17",
  description:
    "Command menu for search and quick actions, with groups, shortcuts, and an optional dialog palette.",
  sectionCategory: "overlay",
  purpose:
    "Lets people filter and run commands or jump to destinations without leaving the current page.",
  bestFor: [
    "command palettes",
    "inline searchable action lists",
    "grouped shortcuts for settings and navigation",
  ],
  avoidFor: [
    "simple single-select fields; use a select or combobox",
    "long-form navigation that belongs on a page",
  ],
  tone: ["clean", "professional"],
  contentDensity: "medium",
  visualWeight: "low",
  layout: {
    type: "stack",
    alignment: "left",
  },
  slots: ["input", "list", "group", "item", "empty", "shortcut"],
  capabilities: {
    supportsImage: false,
    supportsVideo: false,
    supportsForm: true,
    supportsCTA: true,
    supportsDarkMode: true,
  },
  inspoUrl: "https://ui.shadcn.com/docs/components/base/command",
  tags: ["command", "palette", "search", "cmdk", "atom"],
  dependencies: ["cmdk", "lucide-react"],
  registryDependencies: ["dialog"],
  a11y: { keyboardNav: true, reducedMotion: true },
  preview: {
    layout: "center",
    capture: { viewport: { width: 720, height: 560 } },
  },
} satisfies ComponentMeta;
