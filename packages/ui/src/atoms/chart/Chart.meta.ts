import type { ComponentMeta } from "@jabkit/build-registry";

export default {
  name: "chart",
  displayName: "Chart",
  version: "1.0.0",
  addedAt: "2026-09-17",
  description: "Beautiful charts. Built using Recharts.",
  sectionCategory: "data",
  purpose:
    "Styles Recharts with semantic chart tokens, tooltips, and legends so series stay readable in light and dark.",
  bestFor: [
    "dashboard visitor and revenue series",
    "comparing a few named metrics over time",
    "composed bar, line, or area charts with a shared config",
  ],
  avoidFor: [
    "tables that need exact cell-level comparison",
    "maps or non-cartesian visualizations Recharts does not cover",
  ],
  tone: ["clean", "professional"],
  contentDensity: "medium",
  visualWeight: "medium",
  layout: {
    type: "stack",
    alignment: "left",
  },
  slots: ["config", "series", "tooltip", "legend"],
  capabilities: {
    supportsImage: false,
    supportsVideo: false,
    supportsForm: false,
    supportsCTA: false,
    supportsDarkMode: true,
  },
  inspoUrl: "https://ui.shadcn.com/docs/components/base/chart",
  tags: ["chart", "recharts", "data", "tooltip", "legend", "atom"],
  dependencies: ["recharts"],
  registryDependencies: ["card"],
  a11y: { keyboardNav: true, reducedMotion: true },
  preview: {
    layout: "center",
    capture: { viewport: { width: 800, height: 600 } },
  },
} satisfies ComponentMeta;
