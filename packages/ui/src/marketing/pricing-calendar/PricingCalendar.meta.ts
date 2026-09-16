import type { ComponentMeta } from "@jabkit/build-registry";

export default {
  name: "pricing-calendar",
  displayName: "PricingCalendar",
  version: "1.1.0",
  addedAt: "2026-09-15",
  description:
    "Two-month DayPicker-style calendar with a nightly price on each day and a lower-rate highlight.",
  sectionCategory: "pricing",
  purpose:
    "Lets a lodging or event landing page show nightly rates on a two-month calendar so visitors pick a date with the price already in view.",
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
  tone: ["clean", "professional"],
  industries: ["travel", "hospitality"],
  contentDensity: "medium",
  visualWeight: "medium",
  layout: {
    type: "card",
    alignment: "center",
    columns: 2,
  },
  slots: ["calendarMonths", "nightlyRates", "attribution"],
  capabilities: {
    supportsImage: false,
    supportsVideo: false,
    supportsForm: false,
    supportsCTA: false,
    supportsDarkMode: true,
  },
  recommendedAfter: ["hero", "features"],
  recommendedBefore: ["testimonials", "faq", "cta"],
  inspoUrl: "https://21st.dev/@originui/components/calendar/pricing-calendar",
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
  registryDependencies: [],
  a11y: { keyboardNav: true, reducedMotion: true },
  preview: { layout: "fit", width: 1440, height: 900 },
} satisfies ComponentMeta;
