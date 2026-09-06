import type { ComponentMeta } from "@jabkit/build-registry";

export default {
  name: "footer-section",
  displayName: "FooterSection",
  version: "1.0.0",
  addedAt: "2026-09-06",
  description:
    "Site footer with a newsletter field, quick links, contact details, social marks, a light/dark toggle, and a legal row.",
  tags: [
    "footer",
    "marketing",
    "newsletter",
    "links",
    "social",
    "theme",
    "landing",
  ],
  dependencies: ["lucide-react"],
  registryDependencies: ["button", "input", "label"],
  a11y: { keyboardNav: true, reducedMotion: true },
  preview: { layout: "fit", width: 1440, height: 820 },
} satisfies ComponentMeta;
