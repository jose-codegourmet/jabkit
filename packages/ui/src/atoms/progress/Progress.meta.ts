import type { ComponentMeta } from "@jabkit/build-registry";

export default {
  name: "progress",
  displayName: "Progress",
  version: "1.0.0",
  addedAt: "2026-09-17",
  description:
    "A completion bar that shows how far a task has progressed, with optional label and value.",
  sectionCategory: "feedback",
  purpose:
    "Gives people a clear reading of remaining work on uploads, installs, and other long-running tasks.",
  bestFor: [
    "file upload and download status",
    "multi-step task completion",
    "install or export progress",
  ],
  avoidFor: [
    "determinate steps that should use a stepper",
    "binary loading that should use a spinner",
  ],
  tone: ["clean", "professional"],
  contentDensity: "low",
  visualWeight: "low",
  layout: {
    type: "stack",
    alignment: "left",
  },
  slots: ["label", "value", "track", "indicator"],
  capabilities: {
    supportsImage: false,
    supportsVideo: false,
    supportsForm: false,
    supportsCTA: false,
    supportsDarkMode: true,
  },
  inspoUrl: "https://ui.shadcn.com/docs/components/base/progress",
  tags: ["progress", "progress-bar", "feedback", "loading", "atom"],
  dependencies: ["@base-ui/react"],
  registryDependencies: [],
  a11y: { keyboardNav: false, reducedMotion: true },
  preview: {
    layout: "center",
    capture: { viewport: { width: 720, height: 360 } },
  },
} satisfies ComponentMeta;
