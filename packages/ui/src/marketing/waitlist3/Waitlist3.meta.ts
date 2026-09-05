import type { ComponentMeta } from "@jabkit/build-registry";

export default {
  name: "waitlist3",
  displayName: "Waitlist3",
  version: "1.0.0",
  addedAt: "2026-09-05",
  description:
    "Split coming-soon waitlist with a company mark, launch badge, email form, overlapping avatars, copyright, and a full-height photo.",
  tags: [
    "waitlist",
    "marketing",
    "form",
    "coming-soon",
    "split",
    "photography",
    "landing",
  ],
  dependencies: ["lucide-react"],
  registryDependencies: ["avatar", "badge", "button", "input", "label"],
  a11y: { keyboardNav: true, reducedMotion: true },
  preview: { layout: "fit", width: 1440, height: 900 },
} satisfies ComponentMeta;
