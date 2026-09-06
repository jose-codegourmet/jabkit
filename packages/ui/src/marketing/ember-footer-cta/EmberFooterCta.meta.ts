import type { ComponentMeta } from "@jabkit/build-registry";

export default {
  name: "ember-footer-cta",
  displayName: "EmberFooterCta",
  version: "1.0.0",
  addedAt: "2026-09-06",
  description:
    "Closing marketing footer with a waitlist form, serif headline, slim link row, and a token-based ember bed along the baseline.",
  tags: [
    "footer",
    "cta",
    "marketing",
    "waitlist",
    "newsletter",
    "form",
    "landing",
  ],
  dependencies: [],
  registryDependencies: ["button", "input", "label"],
  a11y: { keyboardNav: true, reducedMotion: true },
  preview: { layout: "fit", width: 1440, height: 780 },
} satisfies ComponentMeta;
