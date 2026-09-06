import type { ComponentMeta } from "@jabkit/build-registry";

export default {
  name: "fullscreen-calendar",
  displayName: "FullscreenCalendar",
  version: "1.0.0",
  addedAt: "2026-09-06",
  description:
    "Fullscreen month calendar with day cells, event lists, and today / month navigation.",
  sectionCategory: "calendar",
  purpose:
    "Maximizes month-level schedule visibility for products where events are the primary workspace.",
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
    supportsForm: false,
    supportsCTA: false,
    supportsDarkMode: true,
  },
  tags: ["dashboard", "calendar", "schedule", "events", "month"],
  dependencies: ["lucide-react"],
  registryDependencies: ["button"],
  a11y: { keyboardNav: true, reducedMotion: true },
  preview: { layout: "fit", width: 1440, height: 900 },
} satisfies ComponentMeta;
