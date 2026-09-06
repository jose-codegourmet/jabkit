import type { ComponentMeta } from "@jabkit/build-registry";

export default {
  name: "calendar-with-localisation",
  displayName: "CalendarWithLocalisation",
  version: "1.0.0",
  addedAt: "2026-09-06",
  description:
    "Two-month appointment calendar with a language switcher that localizes copy, weekdays, and month titles.",
  sectionCategory: "calendar",
  purpose:
    "Lets users choose an appointment range while demonstrating locale-sensitive dates and interface copy.",
  bestFor: [
    "scheduling products",
    "booking workflows",
    "date-driven dashboards",
  ],
  tone: ["professional", "structured"],
  contentDensity: "medium",
  visualWeight: "medium",
  layout: {
    type: "grid",
    alignment: "left",
    columns: 2,
  },
  slots: ["localeSelector", "instructions", "calendarMonths", "selectedRange"],
  capabilities: {
    supportsImage: false,
    supportsVideo: false,
    supportsForm: true,
    supportsCTA: false,
    supportsDarkMode: true,
  },
  tags: ["calendar", "locale", "date", "range", "atom"],
  dependencies: ["lucide-react"],
  registryDependencies: ["button"],
  a11y: { keyboardNav: true, reducedMotion: true },
  preview: {
    layout: "center",
    width: 720,
    height: 520,
    capture: { viewport: { width: 840, height: 560 } },
  },
} satisfies ComponentMeta;
