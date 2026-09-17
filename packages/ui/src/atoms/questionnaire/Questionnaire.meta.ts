import type { ComponentMeta } from "@jabkit/build-registry";

export default {
  name: "questionnaire",
  displayName: "Questionnaire",
  version: "1.0.0",
  addedAt: "2026-09-17",
  description:
    "A multi-step questionnaire with single-choice, multiple-choice, freeform, and skippable questions.",
  sectionCategory: "form",
  purpose:
    "Collects structured answers one question at a time with progress, validation, and optional skip.",
  bestFor: [
    "intake or briefing flows",
    "single-choice and multiple-choice surveys",
    "skippable follow-up questions with a freeform fallback",
  ],
  avoidFor: [
    "long single-page forms with many fields visible at once",
    "unstructured free-text only, with no choices",
  ],
  tone: ["clean", "professional"],
  contentDensity: "medium",
  visualWeight: "low",
  layout: {
    type: "stack",
    alignment: "left",
  },
  slots: [
    "progress",
    "title",
    "description",
    "choices",
    "input",
    "error",
    "actions",
  ],
  capabilities: {
    supportsImage: false,
    supportsVideo: false,
    supportsForm: true,
    supportsCTA: true,
    supportsDarkMode: true,
  },
  inspoUrl: "https://ui.shadcn.com/docs/components/base/questionnaire",
  tags: ["questionnaire", "form", "survey", "multi-step", "choices", "atom"],
  dependencies: ["lucide-react"],
  registryDependencies: ["button"],
  a11y: { keyboardNav: true, reducedMotion: true },
  preview: {
    layout: "center",
    capture: { viewport: { width: 720, height: 640 } },
  },
} satisfies ComponentMeta;
