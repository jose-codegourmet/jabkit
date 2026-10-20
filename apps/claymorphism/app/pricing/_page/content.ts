import { faqGroups } from "../../_data/faq";
import type { FaqItem } from "../../_data/types";

export const pricingSeo = {
  title: "Pricing — Pillo",
  description:
    "Pillo has a free family plan and a Plus subscription for more boards and customization. Compare what each plan includes.",
} as const;

export const pricingIntro = {
  title: "Simple plans for busy families",
  body: "Start with the free family plan. Move to Plus for more boards and more ways to make them yours.",
  backgroundId: "cla-background-blobs",
} as const;

export const everyPlan = {
  title: "On every plan",
  body: "The parts that make a day feel lighter come with every board.",
  items: [
    {
      id: "next-step",
      title: "One clear next step",
      body: "Children see the next step in big, friendly tiles with few words.",
      tone: "mint",
    },
    {
      id: "owners",
      title: "Who owns each step",
      body: "Each step shows who owns it, so nobody has to ask twice.",
      tone: "butter",
    },
    {
      id: "change",
      title: "Change it any time",
      body: "Swap, skip, or move a step when the morning goes sideways.",
      tone: "lavender",
    },
    {
      id: "no-pressure",
      title: "No streaks or timers",
      body: "Progress is shown, not scored. Tomorrow's board starts fresh.",
      tone: "coral",
    },
  ],
} as const;

export type ComparisonValue = boolean | string;

export const comparison = {
  title: "Compare plans",
  body: "Both plans share the same board. Plus adds room for more routines and more ways to make them yours.",
  rows: [
    {
      feature: "Price",
      free: "Free",
      plus: "[Price — client to confirm]",
    },
    {
      feature: "Family boards",
      free: "[Number of boards — client to confirm]",
      plus: "More boards [Limit — client to confirm]",
    },
    {
      feature: "Child view with next-step tiles",
      free: true,
      plus: true,
    },
    {
      feature: "Progress in words and badges",
      free: true,
      plus: true,
    },
    {
      feature: "Customization",
      free: "[Free options — client to confirm]",
      plus: "[Specific options — client to confirm]",
    },
  ],
} as const satisfies {
  title: string;
  body: string;
  rows: readonly {
    feature: string;
    free: ComparisonValue;
    plus: ComparisonValue;
  }[];
};

export const goodToKnow = {
  title: "Good to know",
  body: "Quick answers before you pick a plan. Anything else is in the full FAQ.",
  faqLink: { label: "Read all FAQs", href: "/faq" },
  contactLink: { label: "Ask us a question", href: "/contact" },
  items: [
    faqGroups[0].items[1],
    {
      question: "Can I cancel Plus?",
      answer: "[Cancellation terms — client to confirm]",
    },
    {
      question: "Is there a trial?",
      answer: "[Trial — client to confirm]",
    },
    {
      question: "What happens to my boards if I go back to Free?",
      answer: "[Downgrade behaviour — client to confirm]",
    },
  ],
} as const satisfies {
  title: string;
  body: string;
  faqLink: { label: string; href: string };
  contactLink: { label: string; href: string };
  items: readonly FaqItem[];
};
