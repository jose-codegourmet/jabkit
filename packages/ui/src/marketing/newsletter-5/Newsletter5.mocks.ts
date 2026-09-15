import type { Newsletter5Props } from "./Newsletter5.types";

export const newsletter5Mocks = {
  default: {
    eyebrow: "Friday dispatch",
    title: "One useful product letter every week",
    description:
      "A short read on launches, retention loops, design systems, and the small interface choices that help teams ship with more clarity.",
    emailLabel: "Email address",
    emailPlaceholder: "you@studio.work",
    subscribeLabel: "Subscribe",
    reassurance: "No spam, no daily drip, and no sponsored clutter.",
  },
  alternate: {
    eyebrow: "Studio notes",
    title: "Field notes for people who ship interfaces",
    description:
      "What we tried last week, what broke, and one pattern worth stealing before Monday standup.",
    emailLabel: "Work email",
    emailPlaceholder: "lead@jobsite.co",
    subscribeLabel: "Get the notes",
    reassurance: "One email a week. Leave any time.",
  },
} satisfies Record<"default" | "alternate", Newsletter5Props>;
