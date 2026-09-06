import type { ComponentMeta } from "@jabkit/build-registry";

export default {
  name: "toast",
  displayName: "Toast",
  version: "1.0.0",
  addedAt: "2026-09-06",
  description:
    "Temporary status messages with stacking, swipe dismiss, actions, and success, info, warning, and error types.",
  tags: ["toast", "notification", "feedback", "alert", "atom"],
  dependencies: ["@base-ui/react", "lucide-react"],
  registryDependencies: [],
  a11y: { keyboardNav: true, reducedMotion: true },
} satisfies ComponentMeta;
