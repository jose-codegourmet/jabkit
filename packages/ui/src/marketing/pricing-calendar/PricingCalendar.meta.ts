import type { ComponentMeta } from "@jabkit/build-registry";

export default {
  name: "pricing-calendar",
  displayName: "PricingCalendar",
  version: "1.0.0",
  addedAt: "2026-09-15",
  description:
    "Two-month booking calendar that shows a nightly rate on each day and highlights lower-priced nights.",
  sectionCategory: "pricing",
  purpose:
    "Lets a lodging or event landing page show real nightly rates on a calendar so visitors pick a date with the price already in view.",
  bestFor: [
    "hotel and lodge landing pages",
    "cabin and short-stay booking",
    "ticketed nights with date-based rates",
  ],
  avoidFor: [
    "subscription plan comparison",
    "multi-guest stay forms without rates",
    "dense operations calendars",
  ],
  tone: ["clean", "professional", "warm"],
  industries: ["travel", "hospitality"],
  contentDensity: "medium",
  visualWeight: "medium",
  layout: {
    type: "card",
    alignment: "center",
    columns: 2,
  },
  slots: [
    "headline",
    "description",
    "calendarMonths",
    "nightlyRates",
    "priceLegend",
    "selectedNight",
    "reserveCTA",
  ],
  capabilities: {
    supportsImage: false,
    supportsVideo: false,
    supportsForm: true,
    supportsCTA: true,
    supportsDarkMode: true,
  },
  recommendedAfter: ["hero", "features"],
  recommendedBefore: ["testimonials", "faq", "cta"],
  tags: [
    "pricing",
    "calendar",
    "booking",
    "marketing",
    "lodging",
    "rates",
    "travel",
  ],
  dependencies: ["lucide-react"],
  registryDependencies: ["button"],
  a11y: { keyboardNav: true, reducedMotion: true },
  preview: { layout: "fit", width: 1440, height: 900 },
} satisfies ComponentMeta;
