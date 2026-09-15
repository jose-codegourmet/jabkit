import type { ComponentMeta } from "@jabkit/build-registry";

export default {
  name: "v-checkbox-11",
  displayName: "VCheckbox11",
  version: "1.0.0",
  addedAt: "2026-09-15",
  description:
    "Weekly availability grid with a checkbox for each day and time slot, plus a live selected-count.",
  sectionCategory: "form",
  purpose:
    "Lets someone mark recurring weekly hours in one scan instead of stacking separate day pickers.",
  bestFor: [
    "office hours and coaching availability",
    "recurring weekly booking windows",
    "support coverage grids",
  ],
  avoidFor: [
    "one-off calendar dates",
    "single yes or no form fields",
    "hourly calendars that span months",
  ],
  tone: ["professional", "clean"],
  contentDensity: "medium",
  visualWeight: "medium",
  layout: {
    type: "grid",
    alignment: "left",
    columns: 8,
  },
  slots: ["headline", "selectedCount", "dayHeaders", "timeRows", "clearAction"],
  capabilities: {
    supportsImage: false,
    supportsVideo: false,
    supportsForm: true,
    supportsCTA: false,
    supportsDarkMode: true,
  },
  tags: ["checkbox", "availability", "schedule", "grid", "form", "atom"],
  dependencies: ["lucide-react"],
  registryDependencies: [],
  a11y: { keyboardNav: true, reducedMotion: true },
  preview: {
    layout: "center",
    width: 640,
    height: 420,
    capture: { viewport: { width: 760, height: 480 } },
  },
} satisfies ComponentMeta;
