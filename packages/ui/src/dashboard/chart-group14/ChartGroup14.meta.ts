import type { ComponentMeta } from "@jabkit/build-registry";

export default {
  name: "chart-group14",
  displayName: "ChartGroup14",
  version: "1.0.0",
  addedAt: "2026-09-05",
  description:
    "Analytics bento dashboard with date presets, a custom range calendar, KPI cards, a revenue area chart, traffic donut, top pages, and active people.",
  tags: [
    "dashboard",
    "charts",
    "analytics",
    "bento",
    "kpi",
    "date-range",
    "donut",
  ],
  dependencies: ["lucide-react"],
  registryDependencies: [
    "avatar",
    "badge",
    "button",
    "dialog",
    "dropdown-menu",
  ],
  a11y: { keyboardNav: true, reducedMotion: true },
  preview: { layout: "fit", width: 1440, height: 1180 },
} satisfies ComponentMeta;
