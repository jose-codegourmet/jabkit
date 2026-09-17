import type { ComponentMeta } from "@jabkit/build-registry";

export default {
  name: "resizable",
  displayName: "Resizable",
  version: "1.0.0",
  addedAt: "2026-09-17",
  description:
    "Accessible resizable panel groups and layouts with keyboard support.",
  sectionCategory: "layout",
  purpose:
    "Lets people drag a divider to grow or shrink neighboring panes without leaving the page.",
  bestFor: [
    "sidebars next to a main pane",
    "split editors and inspectors",
    "nested horizontal and vertical workspaces",
  ],
  avoidFor: [
    "fixed marketing columns",
    "layouts that must stay a single width on every screen",
  ],
  tone: ["professional", "clean"],
  contentDensity: "medium",
  visualWeight: "low",
  layout: {
    type: "split",
    alignment: "left",
    columns: 2,
  },
  slots: ["panel", "handle"],
  capabilities: {
    supportsImage: false,
    supportsVideo: false,
    supportsForm: false,
    supportsCTA: false,
    supportsDarkMode: true,
  },
  inspoUrl: "https://ui.shadcn.com/docs/components/base/resizable",
  tags: ["resizable", "split", "panels", "layout", "atom"],
  dependencies: ["react-resizable-panels"],
  registryDependencies: [],
  a11y: { keyboardNav: true, reducedMotion: true },
  preview: {
    layout: "center",
    capture: { viewport: { width: 720, height: 480 } },
  },
} satisfies ComponentMeta;
