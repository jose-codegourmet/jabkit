import type { ComponentMeta } from "@jabkit/build-registry";

export default {
  name: "kanban-board",
  displayName: "KanbanBoard",
  version: "1.0.0",
  addedAt: "2026-09-11",
  description:
    "Drag-and-drop kanban board with priority cards, assignees, and column counts.",
  sectionCategory: "task-management",
  purpose:
    "Lets product teams move work across status columns with tags, due dates, and owners.",
  bestFor: ["sprint boards", "ops work queues", "product delivery dashboards"],
  tone: ["professional", "structured"],
  contentDensity: "high",
  visualWeight: "high",
  layout: {
    type: "grid",
    alignment: "left",
    columns: 4,
  },
  slots: ["boardHeader", "columns", "cards", "assignees"],
  capabilities: {
    supportsImage: true,
    supportsVideo: false,
    supportsForm: true,
    supportsCTA: false,
    supportsDarkMode: true,
  },
  tags: ["dashboard", "kanban", "board", "tasks", "drag-and-drop", "sprint"],
  dependencies: ["lucide-react"],
  registryDependencies: ["avatar", "badge", "button", "input"],
  a11y: { keyboardNav: true, reducedMotion: true },
  preview: { layout: "fit", width: 1440, height: 900 },
} satisfies ComponentMeta;
