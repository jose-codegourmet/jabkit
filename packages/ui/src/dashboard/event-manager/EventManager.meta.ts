import type { ComponentMeta } from "@jabkit/build-registry";

export default {
  name: "event-manager",
  displayName: "EventManager",
  version: "1.0.0",
  addedAt: "2026-09-06",
  description:
    "Calendar event manager with month, week, day, and list views, search, and tag filters.",
  sectionCategory: "calendar",
  purpose:
    "Supports finding, filtering, creating, and editing events across multiple calendar views.",
  bestFor: [
    "scheduling products",
    "booking workflows",
    "date-driven dashboards",
  ],
  tone: ["professional", "structured"],
  contentDensity: "high",
  visualWeight: "high",
  layout: {
    type: "grid",
    alignment: "left",
    columns: 7,
  },
  slots: ["calendarHeader", "dateControls", "calendarGrid", "events"],
  capabilities: {
    supportsImage: false,
    supportsVideo: false,
    supportsForm: true,
    supportsCTA: false,
    supportsDarkMode: true,
  },
  tags: [
    "dashboard",
    "calendar",
    "events",
    "schedule",
    "tags",
    "search",
    "month",
    "week",
  ],
  dependencies: ["lucide-react"],
  registryDependencies: [
    "badge",
    "button",
    "dialog",
    "input",
    "label",
    "textarea",
  ],
  a11y: { keyboardNav: true, reducedMotion: true },
  preview: { layout: "fit", width: 1440, height: 900 },
} satisfies ComponentMeta;
