import type { ComponentMeta } from "@jabkit/build-registry";

export default {
  name: "footer-column",
  displayName: "FooterColumn",
  version: "1.0.0",
  addedAt: "2026-09-06",
  description:
    "Site footer with a brand column, about and service links, a live-help row, contact details, and a legal bar.",
  tags: [
    "footer",
    "marketing",
    "links",
    "social",
    "contact",
    "columns",
    "landing",
  ],
  dependencies: ["lucide-react"],
  registryDependencies: [],
  a11y: { keyboardNav: true, reducedMotion: true },
  preview: { layout: "fit", width: 1440, height: 820 },
} satisfies ComponentMeta;
