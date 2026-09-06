import type { ComponentMeta } from "@jabkit/build-registry";

export default {
  name: "todo9",
  displayName: "Todo9",
  version: "1.0.0",
  addedAt: "2026-09-05",
  description:
    "Searchable todo list with tag filters, per-task tag editing, and keyboard-friendly reorder.",
  sectionCategory: "task-management",
  purpose:
    "Helps users search, classify, complete, edit, and reorder a focused list of tasks.",
  bestFor: [
    "personal productivity tools",
    "team task dashboards",
    "tagged work queues",
  ],
  tone: ["professional", "structured", "approachable"],
  contentDensity: "high",
  visualWeight: "medium",
  layout: {
    type: "stack",
    alignment: "left",
  },
  slots: ["search", "tagFilters", "taskItems", "taskStatus", "taskActions"],
  capabilities: {
    supportsImage: false,
    supportsVideo: false,
    supportsForm: false,
    supportsCTA: false,
    supportsDarkMode: true,
  },
  tags: ["dashboard", "todo", "tasks", "tags", "search", "list"],
  dependencies: ["lucide-react"],
  registryDependencies: [
    "badge",
    "button",
    "checkbox",
    "dropdown-menu",
    "input",
  ],
  a11y: { keyboardNav: true, reducedMotion: true },
  preview: { layout: "fit", width: 1440, height: 900 },
} satisfies ComponentMeta;
