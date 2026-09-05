import type { ComponentMeta } from "@jabkit/build-registry";

export default {
  name: "team14",
  displayName: "Team14",
  version: "1.0.0",
  addedAt: "2026-09-05",
  description:
    "Split hiring section with a bordered statement panel, ghost CTA, and a row of tall member portraits that becomes a looping carousel on small screens.",
  tags: [
    "team",
    "marketing",
    "hiring",
    "portraits",
    "carousel",
    "cta",
    "landing",
  ],
  dependencies: ["lucide-react"],
  registryDependencies: ["button"],
  a11y: { keyboardNav: true, reducedMotion: true },
  preview: { layout: "fit", width: 1440, height: 900 },
} satisfies ComponentMeta;
