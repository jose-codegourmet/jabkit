import type { ComingSoon3Props } from "./ComingSoon3.types";

export const comingSoon3Mocks = {
  default: {
    logo: { name: "Keel Log", href: "#home" },
    badge: "Launch window",
    title: "Keel Log opens soon",
    description:
      "Shared watch notes for the deck, not another inbox. We mail once when seats unlock.",
    targetDate: "2027-04-12T14:00:00.000Z",
    unitLabels: {
      days: "Days",
      hours: "Hours",
      minutes: "Minutes",
      seconds: "Seconds",
    },
    emailLabel: "Work email",
    emailPlaceholder: "you@crew.work",
    submitLabel: "Notify me",
    successTitle: "You are on the list",
    successDescription: "We will send one note when Keel Log unlocks seats.",
    launchedTitle: "Keel Log is open",
    launchedDescription: "Seats are live. Use the same email to claim a desk.",
    footnote: "© 2026 Keel Log. One note when we open.",
  },
  alternate: {
    logo: { name: "Silt Press", href: "#home" },
    badge: "Issue one",
    title: "Silt Press prints in November",
    description:
      "A quarterly for printers who still keep a stone. Leave an email for the first binding date.",
    targetDate: "2027-11-03T09:00:00.000Z",
    unitLabels: {
      days: "Days",
      hours: "Hours",
      minutes: "Minutes",
      seconds: "Seconds",
    },
    emailLabel: "Studio email",
    emailPlaceholder: "press@studio.ink",
    submitLabel: "Hold a copy",
    successTitle: "Saved for issue one",
    successDescription: "We will write when the first binding date is set.",
    launchedTitle: "Issue one is at press",
    launchedDescription: "The first run is open. Use the same email to reserve.",
    footnote: "© 2026 Silt Press. Printed in small runs.",
  },
} satisfies Record<"default" | "alternate", ComingSoon3Props>;
