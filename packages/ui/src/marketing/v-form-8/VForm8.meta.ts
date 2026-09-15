import type { ComponentMeta } from "@jabkit/build-registry";

export default {
  name: "v-form-8",
  displayName: "VForm8",
  version: "1.1.0",
  addedAt: "2026-09-15",
  description:
    "Three-step onboarding wizard with account details, plan cards and a newsletter opt-in, a confirm summary, and a success state.",
  sectionCategory: "form",
  purpose:
    "Lets a product landing page collect a new account, a plan choice, and confirmation without sending visitors into a full checkout.",
  bestFor: [
    "SaaS sign-up landings",
    "workspace and membership onboarding",
    "plan-first account creation",
  ],
  avoidFor: [
    "payment checkout with billing details",
    "single-field waitlists",
    "signed-in settings pages",
  ],
  tone: ["clean", "professional", "confident"],
  industries: ["technology", "media", "productivity"],
  contentDensity: "medium",
  visualWeight: "medium",
  layout: {
    type: "card",
    alignment: "center",
    columns: 1,
  },
  slots: [
    "stepper",
    "accountFields",
    "planCards",
    "newsletterOptIn",
    "reviewSummary",
    "successState",
    "navigation",
  ],
  capabilities: {
    supportsImage: false,
    supportsVideo: false,
    supportsForm: true,
    supportsCTA: true,
    supportsDarkMode: true,
  },
  recommendedAfter: ["hero", "features"],
  recommendedBefore: ["testimonials", "cta"],
  tags: [
    "form",
    "onboarding",
    "wizard",
    "signup",
    "plans",
    "marketing",
    "conversion",
  ],
  dependencies: ["lucide-react"],
  registryDependencies: ["checkbox", "input", "label"],
  a11y: { keyboardNav: true, reducedMotion: true },
  preview: { layout: "fit", width: 1440, height: 900 },
} satisfies ComponentMeta;
