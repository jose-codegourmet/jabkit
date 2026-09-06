import type { ComponentMeta } from "@jabkit/build-registry";

export default {
  name: "calendar-with-localisation",
  displayName: "CalendarWithLocalisation",
  version: "1.0.0",
  addedAt: "2026-09-06",
  description:
    "Two-month appointment calendar with a language switcher that localizes copy, weekdays, and month titles.",
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
