import type { ComponentMeta } from "@jabkit/build-registry";

export default {
  name: "faq12",
  displayName: "Faq12",
  version: "1.0.0",
  addedAt: "2026-09-05",
  description:
    "Documentation-style FAQ with a category sidebar, per-topic accordions, and scroll-synced active highlighting.",
  tags: ["faq", "marketing", "accordion", "sidebar", "docs", "help", "landing"],
  dependencies: ["lucide-react"],
  registryDependencies: ["button"],
  a11y: { keyboardNav: true, reducedMotion: true },
  preview: { layout: "fit", width: 1440, height: 1280 },
} satisfies ComponentMeta;
