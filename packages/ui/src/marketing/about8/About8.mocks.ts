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
        src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&h=1200&q=80",
        alt: "Glass office towers against a clear sky",
      },
      {
        src: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=900&h=1200&q=80",
        alt: "Two colleagues reviewing a screen together",
      },
      {
        src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&h=1200&q=80",
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
        src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1400&h=900&q=80",
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
        src: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=900&h=1200&q=80",
        alt: "Sunlit studio desks with plants and open notebooks",
      },
      {
        src: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=900&h=1200&q=80",
        alt: "Quiet desk with a laptop and coffee",
      },
      {
        src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=900&h=1200&q=80",
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
        src: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1400&h=900&q=80",
        alt: "Small team meeting around a conference table",
      },
    },
  },
} satisfies Record<string, About8Props>;
