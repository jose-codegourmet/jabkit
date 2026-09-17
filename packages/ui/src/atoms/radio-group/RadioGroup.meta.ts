import type { ComponentMeta } from "@jabkit/build-registry";

export default {
  name: "radio-group",
  displayName: "RadioGroup",
  version: "1.0.0",
  addedAt: "2026-09-17",
  description:
    "A set of radio buttons where only one option can be selected at a time.",
  sectionCategory: "form",
  purpose:
    "Collects a single exclusive choice from a short, visible list of options.",
  bestFor: [
    "settings that allow one value",
    "plan or preference pickers",
    "short exclusive form choices",
  ],
  avoidFor: [
    "independent on/off choices; use a checkbox",
    "long searchable lists; use a select or combobox",
  ],
  tone: ["clean", "professional"],
  contentDensity: "low",
  visualWeight: "low",
  layout: {
    type: "stack",
    alignment: "left",
  },
  slots: ["group", "item", "label"],
  capabilities: {
    supportsImage: false,
    supportsVideo: false,
    supportsForm: true,
    supportsCTA: false,
    supportsDarkMode: true,
  },
  inspoUrl: "https://ui.shadcn.com/docs/components/base/radio-group",
  tags: ["radio", "radio-group", "form", "choice", "atom"],
  dependencies: ["@base-ui/react"],
  registryDependencies: ["label"],
  a11y: { keyboardNav: true, reducedMotion: true },
} satisfies ComponentMeta;
