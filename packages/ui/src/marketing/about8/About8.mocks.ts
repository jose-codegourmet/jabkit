import type { About8Props } from "./About8.types";

export const about8Mocks = {
  default: {
    title: "Infrastructure for money that has to settle.",
    description:
      "We build the rails teams use when a ledger cannot be approximate — clearing, reconciliation, and the audit trail that follows every transfer.",
    stats: [
      { value: "48B", label: "Annual volume" },
      { value: "12ms", label: "Median settle" },
      { value: "99.99%", label: "Uptime SLO" },
      { value: "40+", label: "Markets live" },
    ],
    mission: {
      title: "Keep every transfer accountable.",
      paragraphs: [
        "Finance teams should not wait overnight for a number they already posted. We treat settlement as a product surface: readable, timed, and owned by the same API that moved the funds.",
        "That means idempotent writes, a journal you can query, and operators who can explain a mismatch without opening a war room.",
      ],
    },
    gallery: [
      {
        src: "/assets/7292f284c2f30594.webp",
        alt: "Glass office towers against a clear sky",
      },
      {
        src: "/assets/6c0006cce3d4fa6c.webp",
        alt: "Two colleagues reviewing a screen together",
      },
      {
        src: "/assets/e89d407a6298dce2.webp",
        alt: "Laptop showing charts on a wooden desk",
      },
    ],
    product: {
      title: "LedgerKit is the control plane.",
      description:
        "One contract for authorizations, postings, and statements. Partners integrate once, then route payouts, collections, and FX through the same numbered events.",
    },
    team: {
      title: "Founding operators, still on the floor.",
      description:
        "The first six people still own incidents, partner reviews, and the weekly journal walkthrough. We hire people who can read a ledger as fluently as a pull request.",
      image: {
        src: "/assets/9beb102cf6681c6c.webp",
        alt: "Collaborative workshop around a table",
      },
    },
  },
  alternate: {
    title: "Treasury tools for teams that ship weekly.",
    description:
      "A quieter about page for product studios that need payouts, invoicing, and cash visibility without standing up a bank.",
    stats: [
      { value: "6.2k", label: "Active ledgers" },
      { value: "8min", label: "First payout" },
      { value: "SOC2", label: "Type II" },
      { value: "24/7", label: "On-call" },
    ],
    mission: {
      title: "Make cash as inspectable as code.",
      paragraphs: [
        "Founders should see what left the account, who approved it, and which invoice it closed — in the same session they shipped the feature.",
        "We keep the vocabulary small: balances, holds, and releases. Everything else is a view on that journal.",
      ],
    },
    gallery: [
      {
        src: "/assets/462c849dc9a41e59.webp",
        alt: "Sunlit studio desks with plants and open notebooks",
      },
      {
        src: "/assets/93fa233184780d37.webp",
        alt: "Quiet desk with a laptop and coffee",
      },
      {
        src: "/assets/93fd8594b461fae0.webp",
        alt: "Team gathered around laptops in a bright workspace",
      },
    ],
    product: {
      title: "Harbor Pay sits beside the product.",
      description:
        "Embed payouts in the dashboard your customers already use. Webhooks, statements, and a sandbox that mirrors production event order.",
    },
    team: {
      title: "A desk, not a boardroom.",
      description:
        "Eight people across engineering, risk, and partner success. We still run the onboarding calls ourselves so the API stays honest.",
      image: {
        src: "/assets/c65bd1bf12b0d631.webp",
        alt: "Small team meeting around a conference table",
      },
    },
  },
} satisfies Record<string, About8Props>;
