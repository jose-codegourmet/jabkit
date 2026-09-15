import type { ComponentMeta } from "@jabkit/build-registry";

export default {
  name: "stepper-vertical-inline",
  displayName: "StepperVerticalInline",
  version: "1.0.0",
  addedAt: "2026-09-15",
  description:
    "Vertical progress stepper with a numbered rail and inline titles plus descriptions.",
  sectionCategory: "navigation",
  purpose:
    "Shows where someone is in a short sequential flow without hiding the remaining steps.",
  bestFor: [
    "account onboarding",
    "checkout or setup wizards",
    "multi-step forms with few stages",
  ],
  avoidFor: [
    "horizontal compact toolbars",
    "long processes with more than about eight stages",
    "branching workflows that are not linear",
  ],
  tone: ["professional", "clean"],
  contentDensity: "medium",
  visualWeight: "low",
  layout: {
    type: "stack",
    alignment: "left",
  },
  slots: ["indicator", "title", "description", "connector"],
  capabilities: {
    supportsImage: false,
    supportsVideo: false,
    supportsForm: false,
    supportsCTA: false,
    supportsDarkMode: true,
  },
  tags: ["stepper", "progress", "onboarding", "wizard", "atom"],
  dependencies: ["lucide-react"],
  registryDependencies: [],
  a11y: { keyboardNav: true, reducedMotion: true },
  preview: {
    layout: "center",
    width: 480,
    height: 440,
    capture: { viewport: { width: 640, height: 520 } },
  },
} satisfies ComponentMeta;
