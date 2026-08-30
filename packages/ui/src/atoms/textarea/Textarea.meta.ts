import type { ComponentMeta } from "@jabkit/build-registry";

export default {
  name: "textarea",
  displayName: "Textarea",
  version: "1.0.0",
  addedAt: "2026-08-30",
  description: "Accessible Textarea primitive adapted from shadcn/ui.",
  tags: ["textarea", "primitive", "accessible"],
  dependencies: [],
  registryDependencies: [],
  a11y: { keyboardNav: true, reducedMotion: true },
} satisfies ComponentMeta;
