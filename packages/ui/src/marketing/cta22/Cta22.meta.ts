import type { ComponentMeta } from "@jabkit/build-registry";

export default {
  name: "cta22",
  displayName: "Cta22",
  version: "1.0.0",
  addedAt: "2026-09-05",
  description:
    "Marketing CTA with a dark app-download panel, store badges, overlapping phone imagery, and a muted newsletter form in a three-column grid.",
  tags: [
    "cta",
    "marketing",
    "download",
    "newsletter",
    "app-store",
    "form",
    "landing",
  ],
  dependencies: ["lucide-react"],
  registryDependencies: ["button", "input", "label"],
  a11y: { keyboardNav: true, reducedMotion: true },
  preview: { layout: "fit", width: 1440, height: 780 },
} satisfies ComponentMeta;
