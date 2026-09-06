import type { ComponentMeta } from "@jabkit/build-registry";

export default {
  name: "fullscreen-calendar",
  displayName: "FullscreenCalendar",
  version: "1.0.0",
  addedAt: "2026-09-06",
  description:
    "Fullscreen month calendar with day cells, event lists, and today / month navigation.",
  tags: ["dashboard", "calendar", "schedule", "events", "month"],
  dependencies: ["lucide-react"],
  registryDependencies: ["button"],
  a11y: { keyboardNav: true, reducedMotion: true },
  preview: { layout: "fit", width: 1440, height: 900 },
} satisfies ComponentMeta;
