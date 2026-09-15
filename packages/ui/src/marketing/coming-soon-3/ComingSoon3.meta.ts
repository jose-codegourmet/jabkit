import type { ComponentMeta } from "@jabkit/build-registry";

export default {
  name: "coming-soon-3",
  displayName: "ComingSoon3",
  version: "1.0.1",
  addedAt: "2026-09-15",
  description:
    "Centered coming-soon page with a live day-hour-minute-second countdown and an email notify form.",
  sectionCategory: "form",
  purpose:
    "Holds a pre-launch page with a readable countdown and a single email capture so visitors can wait for a fixed open date.",
  bestFor: ["product launches", "waitlists", "timed announcements"],
  avoidFor: ["live products", "multi-step onboarding"],
  tone: ["clean", "professional"],
  contentDensity: "low",
  visualWeight: "medium",
  layout: {
    type: "stack",
    alignment: "center",
  },
  slots: ["launchStatus", "headline", "description", "countdown", "emailForm"],
  capabilities: {
    supportsImage: false,
    supportsVideo: false,
    supportsForm: true,
    supportsCTA: true,
    supportsDarkMode: true,
  },
  tags: [
    "coming-soon",
    "countdown",
    "timer",
    "waitlist",
    "marketing",
    "form",
    "landing",
  ],
  dependencies: ["lucide-react"],
  registryDependencies: [],
  a11y: { keyboardNav: true, reducedMotion: true },
  preview: { layout: "fit", width: 1440, height: 900 },
} satisfies ComponentMeta;
