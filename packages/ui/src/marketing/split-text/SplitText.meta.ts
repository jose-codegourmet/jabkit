import type { ComponentMeta } from "@jabkit/build-registry";

export default {
  name: "split-text",
  displayName: "SplitText",
  version: "1.0.0",
  addedAt: "2026-09-06",
  description:
    "Marketing headline that splits into characters or words and staggers each unit into view, honoring prefers-reduced-motion.",
  tags: [
    "marketing",
    "text",
    "animation",
    "headline",
    "hero",
    "split",
    "stagger",
  ],
  dependencies: [],
  registryDependencies: [],
  a11y: { keyboardNav: false, reducedMotion: true },
  preview: { layout: "fit", width: 1440, height: 640 },
} satisfies ComponentMeta;
