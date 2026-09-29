import type { FaqItem } from "../../_data/types";

export const pricingSeo = {
  title: "Pricing — Pillo",
  description:
    "Pillo has a free family plan and a Plus subscription for more boards and customization. Compare what each plan includes.",
} as const;

export const pricingIntro = {
  title: "Simple plans for busy families",
  body: "Start with the free family plan. Move to Plus for more boards and more ways to make them yours.",
} as const;

export const goodToKnow = {
  title: "Good to know",
  items: [
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
} as const satisfies { title: string; items: readonly FaqItem[] };
