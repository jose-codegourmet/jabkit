import type { ComponentMeta } from "@jabkit/build-registry";

export default {
  name: "button-group",
  displayName: "ButtonGroup",
  version: "1.0.0",
  addedAt: "2026-09-17",
  description:
    "A container that groups related buttons together with consistent styling.",
  sectionCategory: "action",
  purpose:
    "Joins related actions into one control so people can scan a compact set of buttons, inputs, or split actions.",
  bestFor: [
    "paired actions such as archive and report",
    "split buttons with a primary action and overflow",
    "compact toolbars with an input or prefix label",
  ],
  avoidFor: [
    "toggled selection sets; use a toggle group instead",
    "unrelated actions that should stay separate",
  ],
  tone: ["clean", "professional"],
  contentDensity: "low",
  visualWeight: "low",
  layout: {
    type: "inline",
    alignment: "left",
  },
  slots: ["button", "separator", "text", "input"],
  capabilities: {
    supportsImage: false,
    supportsVideo: false,
    supportsForm: true,
    supportsCTA: true,
    supportsDarkMode: true,
  },
  inspoUrl: "https://ui.shadcn.com/docs/components/base/button-group",
  tags: ["button-group", "button", "toolbar", "split-button", "atom"],
  dependencies: ["@base-ui/react"],
  registryDependencies: ["separator", "button"],
  a11y: { keyboardNav: true, reducedMotion: true },
  preview: {
    layout: "center",
    capture: { viewport: { width: 720, height: 420 } },
  },
} satisfies ComponentMeta;
