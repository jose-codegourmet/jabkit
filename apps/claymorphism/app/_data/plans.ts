import type { Plan } from "./types";

export const plans: Plan[] = [
  {
    id: "free",
    name: "Free",
    homeSummary: "For one family getting started.",
    homeDetail: "[Free plan limits — client to confirm]",
    summary: "Everything a family needs to start.",
    price: "Free",
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
    homeSummary: "More boards and more ways to make them yours.",
    homeDetail: "[Price — client to confirm]",
    summary: "More boards and more ways to make them yours.",
    price: "[Price — client to confirm] / [Billing period — client to confirm]",
    includes: [
      "Additional boards [Limit — client to confirm]",
      "Customization [Specific options — client to confirm]",
      "Everything in Free",
    ],
    cta: { label: "Start with Free, upgrade anytime", href: "/start" },
  },
];
