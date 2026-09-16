import type { ComponentMeta } from "@jabkit/build-registry";

export default {
  name: "stepper-with-titles",
  displayName: "StepperWithTitles",
  version: "1.0.0",
  addedAt: "2026-09-15",
  description:
    "Horizontal stepper with circular markers, titles stacked below, and descriptions.",
  sectionCategory: "navigation",
  purpose:
    "Shows where a person is in a short linear flow and lets them jump to a completed or upcoming step.",
  bestFor: [
    "checkout and billing flows",
    "account onboarding",
    "multi-step forms with named stages",
  ],
  avoidFor: [
    "non-linear tasks that need a sidebar or tabs",
    "dense wizards with more than a handful of steps",
  ],
  tone: ["clean", "professional"],
  contentDensity: "medium",
  visualWeight: "low",
  layout: {
    type: "row",
    alignment: "center",
    columns: 3,
  },
  slots: ["stepTitle", "stepDescription", "stepIndicator"],
  capabilities: {
    supportsImage: false,
    supportsVideo: false,
    supportsForm: false,
    supportsCTA: false,
    supportsDarkMode: true,
  },
  inspoUrl: "https://21st.dev/@originui/components/stepper/with-titles-and-descriptions",
  tags: ["stepper", "progress", "wizard", "navigation", "atom"],
  dependencies: ["lucide-react"],
  registryDependencies: [],
  a11y: { keyboardNav: true, reducedMotion: true },
  preview: {
    layout: "center",
    width: 720,
    height: 220,
  },
} satisfies ComponentMeta;
