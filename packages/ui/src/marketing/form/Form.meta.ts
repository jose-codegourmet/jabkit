import type { ComponentMeta } from "@jabkit/build-registry";

export default {
  name: "form",
  displayName: "Form",
  version: "1.0.0",
  addedAt: "2026-09-15",
  description:
    "Compact stay-booking card with destination, check-in and check-out dates, room and guest steppers, and a search CTA.",
  sectionCategory: "form",
  purpose:
    "Lets a travel or lodging landing page collect a stay request without sending visitors into a full reservation checkout.",
  bestFor: [
    "hotel and inn landing pages",
    "short-stay rental campaigns",
    "lodge and cabin booking",
  ],
  avoidFor: [
    "ride or transfer booking",
    "multi-step checkout with payment",
    "account sign-in forms",
  ],
  tone: ["clean", "professional", "warm"],
  industries: ["travel", "hospitality"],
  contentDensity: "medium",
  visualWeight: "medium",
  layout: {
    type: "card",
    alignment: "center",
    columns: 1,
  },
  slots: [
    "headline",
    "description",
    "destinationField",
    "checkInField",
    "checkOutField",
    "roomsStepper",
    "guestsStepper",
    "searchCTA",
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
    "booking",
    "stay",
    "hotel",
    "marketing",
    "travel",
    "conversion",
  ],
  dependencies: ["lucide-react"],
  registryDependencies: ["button", "input", "label"],
  a11y: { keyboardNav: true, reducedMotion: true },
  preview: { layout: "fit", width: 1440, height: 900 },
} satisfies ComponentMeta;
