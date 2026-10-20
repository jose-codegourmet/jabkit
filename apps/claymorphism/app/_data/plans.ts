import type { Plan } from "./types";

export const plans: Plan[] = [
  {
    id: "free",
    name: "Free",
    badge: "Start here",
    homeSummary: "For one family getting started.",
    homeDetail: "[Free plan limits — client to confirm]",
    summary: "Everything a family needs to start.",
    price: { amount: "Free", note: "For one family getting started" },
    includesTitle: "What's included",
    includes: [
      "Shared family board [Number of boards — client to confirm]",
      "Child view with next-step tiles",
      "Progress in words and badges",
      "[Other Free limits — client to confirm]",
    ],
    cta: { label: "Create a free board", href: "/start" },
  },
  {
    id: "plus",
    name: "Plus",
    badge: "More room to grow",
    featured: true,
    homeSummary: "More boards and more ways to make them yours.",
    homeDetail: "[Price — client to confirm]",
    summary: "More boards and more ways to make them yours.",
    price: {
      amount: "[Price — client to confirm]",
      note: "Per [Billing period — client to confirm]",
    },
    includesTitle: "Everything in Free, plus",
    includes: [
      "Additional boards [Limit — client to confirm]",
      "Customization [Specific options — client to confirm]",
    ],
    cta: { label: "Start with Free, upgrade anytime", href: "/start" },
  },
];
