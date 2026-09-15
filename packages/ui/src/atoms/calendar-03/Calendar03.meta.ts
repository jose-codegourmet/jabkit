import type { ComponentMeta } from "@jabkit/build-registry";

export default {
  name: "calendar-03",
  displayName: "Calendar03",
  version: "1.0.0",
  addedAt: "2026-09-15",
  description:
    "Single-month appointment calendar paired with a scrollable list of time slots.",
  sectionCategory: "calendar",
  purpose:
    "Lets a user choose a visit date and an open time in one compact picker instead of stepping through separate screens.",
  bestFor: [
    "clinic and salon booking",
    "consult scheduling",
    "service appointment flows",
  ],
  avoidFor: ["multi-month range selection", "full-page operations calendars"],
  tone: ["professional", "clean"],
  contentDensity: "medium",
  visualWeight: "medium",
  layout: {
    type: "split",
    alignment: "left",
    columns: 2,
  },
  slots: ["headline", "monthGrid", "timeList", "confirmAction"],
  capabilities: {
    supportsImage: false,
    supportsVideo: false,
    supportsForm: true,
    supportsCTA: true,
    supportsDarkMode: true,
  },
  tags: ["calendar", "appointment", "time", "booking", "atom"],
  dependencies: ["lucide-react"],
  registryDependencies: ["button", "scroll-area"],
  a11y: { keyboardNav: true, reducedMotion: true },
  preview: {
    layout: "center",
    width: 720,
    height: 520,
    capture: { viewport: { width: 840, height: 560 } },
  },
} satisfies ComponentMeta;
