import type { ComponentMeta } from "@jabkit/build-registry";

export default {
  name: "checkbox",
  displayName: "Checkbox",
  version: "1.0.0",
  addedAt: "2026-08-30",
  description: "Accessible Checkbox primitive adapted from shadcn/ui.",
  tags: ["checkbox", "primitive", "accessible"],
  dependencies: [],
  registryDependencies: [],
  a11y: { keyboardNav: true, reducedMotion: true },
} satisfies ComponentMeta;
