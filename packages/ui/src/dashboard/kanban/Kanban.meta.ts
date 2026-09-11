import type { ComponentMeta } from "@jabkit/build-registry";

export default {
  name: "kanban",
  displayName: "Kanban",
  version: "1.0.0",
  addedAt: "2026-09-11",
  description:
    "Compact status kanban for roadmap features with owners, initiatives, and date ranges.",
  sectionCategory: "task-management",
  purpose:
    "Visualizes planned work across status columns so teams can move features without a heavy card chrome.",
  bestFor: [
    "product roadmaps",
    "feature status boards",
    "lightweight sprint tracking",
  ],
  avoidFor: [
    "dense delivery boards that need tags, comments, and add-card forms",
  ],
  tone: ["professional", "structured", "calm"],
  contentDensity: "medium",
  visualWeight: "medium",
  layout: {
    type: "grid",
    alignment: "left",
    columns: 3,
  },
  slots: ["boardHeader", "statusColumns", "featureCards", "owners"],
  capabilities: {
    supportsImage: true,
    supportsVideo: false,
    supportsForm: false,
    supportsCTA: false,
    supportsDarkMode: true,
  },
  tags: [
    "dashboard",
    "kanban",
    "roadmap",
    "status",
    "features",
    "drag-and-drop",
  ],
  dependencies: ["lucide-react"],
  registryDependencies: ["avatar"],
  a11y: { keyboardNav: true, reducedMotion: true },
  preview: { layout: "fit", width: 1440, height: 900 },
} satisfies ComponentMeta;
