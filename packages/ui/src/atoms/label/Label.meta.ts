import type { ComponentMeta } from "@jabkit/build-registry";

export default {
  name: "label",
  displayName: "Label",
  version: "1.0.0",
  addedAt: "2026-08-30",
  description: "Accessible Label primitive adapted from shadcn/ui.",
  sectionCategory: "form",
  purpose:
    "Associates concise instructions with a form control so its purpose remains clear and accessible.",
  bestFor: ["forms", "settings", "data entry"],
  tone: ["clean", "professional"],
  contentDensity: "low",
  visualWeight: "low",
  layout: {
    type: "stack",
    alignment: "left",
  },
  slots: ["label", "control", "supportingText"],
  capabilities: {
    supportsImage: false,
    supportsVideo: false,
    supportsForm: false,
    supportsCTA: false,
    supportsDarkMode: true,
  },
  usedIn: [
    {
      site: "minimal",
      role: "Inquiry form labels paired with Input and Textarea.",
    },
    {
      site: "neo-brutalism",
      role: "Brief and work-search labels, including Checkbox options.",
    },
    {
      site: "editorial",
      role: "Archive search and membership preview field labels.",
    },
    {
      site: "luxury",
      role: "Stay-inquiry field labels.",
    },
    {
      site: "retro",
      role: "Collection-filter search label.",
    },
  ],
  tags: ["label", "primitive", "accessible"],
  dependencies: [],
  registryDependencies: [],
  a11y: { keyboardNav: true, reducedMotion: true },
} satisfies ComponentMeta;
