import type { ComingSoon3Props } from "./ComingSoon3.types";

export const comingSoon3Mocks = {
  default: {
    badge: "Coming Soon",
    title: "The countdown to our biggest launch yet",
    description:
      "We go live the moment the timer hits zero. Drop your email and we will make sure you are first through the door.",
    targetDate: "2027-04-12T14:00:00.000Z",
    unitLabels: {
      days: "Days",
      hours: "Hours",
      minutes: "Minutes",
      seconds: "Seconds",
    },
    emailLabel: "Email address",
    emailPlaceholder: "you@example.com",
    submitLabel: "Notify me",
    successTitle: "You are on the list",
    successDescription: "We will write once, when the timer hits zero.",
    launchedTitle: "We are live",
    launchedDescription:
      "The countdown is over. Use the same email to walk through the door.",
  },
  alternate: {
    badge: "Coming Soon",
    title: "Silt Press prints the first issue soon",
    description:
      "A quarterly for printers who still keep a stone. Leave an email and we will write when binding starts.",
    targetDate: "2027-11-03T09:00:00.000Z",
    unitLabels: {
      days: "Days",
      hours: "Hours",
      minutes: "Minutes",
      seconds: "Seconds",
    },
    emailLabel: "Studio email",
    emailPlaceholder: "press@studio.ink",
    submitLabel: "Notify me",
    successTitle: "Saved for issue one",
    successDescription: "We will write when the first binding date is set.",
    launchedTitle: "Issue one is at press",
    launchedDescription: "The first run is open. Use the same email to reserve.",
  },
} satisfies Record<"default" | "alternate", ComingSoon3Props>;
