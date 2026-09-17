import type { ComponentMeta } from "@jabkit/build-registry";

export default {
  name: "combobox",
  displayName: "Combobox",
  version: "1.0.0",
  addedAt: "2026-09-17",
  description:
    "Autocomplete input with a filterable list of suggestions, including multi-select chips.",
  sectionCategory: "form",
  purpose:
    "Lets people pick one or more values from a list by typing to filter, without leaving the field.",
  bestFor: [
    "framework or option pickers",
    "searchable select fields",
    "multi-select tags with chips",
  ],
  avoidFor: [
    "short fixed lists with no search; use a select",
    "free-form text with no suggestions",
  ],
  tone: ["clean", "professional"],
  contentDensity: "medium",
  visualWeight: "low",
  layout: {
    type: "stack",
    alignment: "left",
  },
  slots: ["input", "list", "item", "empty", "chips"],
  capabilities: {
    supportsImage: false,
    supportsVideo: false,
    supportsForm: true,
    supportsCTA: false,
    supportsDarkMode: true,
  },
  inspoUrl: "https://ui.shadcn.com/docs/components/base/combobox",
  tags: ["combobox", "autocomplete", "select", "filter", "atom"],
  dependencies: ["@base-ui/react", "lucide-react"],
  registryDependencies: ["button", "input"],
  a11y: { keyboardNav: true, reducedMotion: true },
  preview: {
    layout: "center",
    capture: { viewport: { width: 720, height: 560 } },
  },
} satisfies ComponentMeta;
