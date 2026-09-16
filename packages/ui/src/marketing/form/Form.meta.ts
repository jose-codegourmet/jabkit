import type { ComponentMeta } from "@jabkit/build-registry";

export default {
  name: "form",
  displayName: "Form",
  version: "1.1.0",
  addedAt: "2026-09-15",
  description:
    "Compact stay-booking card with a destination field, date-range chip, room and guest chips, and a check-availability CTA.",
  sectionCategory: "form",
  purpose:
    "Lets a travel or lodging landing page collect a stay request as a single compact card, matching a destination-plus-details booking control.",
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
  tone: ["clean", "professional"],
  industries: ["travel", "hospitality"],
  contentDensity: "medium",
  visualWeight: "medium",
  layout: {
    type: "card",
    alignment: "center",
    columns: 1,
  },
  slots: [
    "destinationsField",
    "dateRangeChip",
    "roomsChip",
    "guestsChip",
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
  inspoUrl: "https://21st.dev/@lavikatiyar/components/form",
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
  registryDependencies: [],
  a11y: { keyboardNav: true, reducedMotion: true },
  preview: { layout: "fit", width: 1440, height: 900 },
} satisfies ComponentMeta;
