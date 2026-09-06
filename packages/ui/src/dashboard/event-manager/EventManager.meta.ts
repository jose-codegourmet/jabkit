import type { ComponentMeta } from "@jabkit/build-registry";

export default {
  name: "event-manager",
  displayName: "EventManager",
  version: "1.0.0",
  addedAt: "2026-09-06",
  description:
    "Calendar event manager with month, week, day, and list views, search, and tag filters.",
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
