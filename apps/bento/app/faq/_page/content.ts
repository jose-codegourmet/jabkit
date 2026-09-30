import type { Route } from "next";
import type { TileSpan } from "../../_components/Bento";
import { headerPrimary, placeholders } from "../../_data/site";

export const faqSeo = {
  title: "FAQ — DAYMARK",
  description:
    "Answers about DAYMARK roles, setup, pricing inquiries, support and the demo data used on this site.",
} as const;

export const faqHeader = {
  title: "Questions, answered plainly.",
  body: "If something isn't covered here, ask it during your walkthrough.",
  topicsLabel: "Jump to a topic",
} as const;

export type FaqItem = {
  question: string;
  /** May contain "[… — client to confirm]" placeholders; rendered with WithPlaceholders. */
  answer: string;
};

export type FaqGroup = {
  id: string;
  title: string;
  span: TileSpan;
  items: readonly FaqItem[];
  /** Open the first answer on load. */
  openFirst?: boolean;
  action?: { label: string; href: Route };
};

/** FAQ items live here: only this page uses them. Answers are verbatim from the spec. */
export const faqGroups: readonly FaqGroup[] = [
  {
    id: "roles",
    title: "Roles",
    span: 5,
    items: [
      {
        question: "Who can use DAYMARK?",
        answer:
          "Owners, front-desk staff and team leads each sign in with their own profile. Everyone sees the same overview.",
      },
      {
        question: "Can staff see different things?",
        answer: placeholders.rolePermissions,
      },
    ],
  },
  {
    id: "setup",
    title: "Setup",
    span: 7,
    items: [
      {
        question: "How long does setup take?",
        answer: placeholders.setupTimeline,
      },
      {
        question: "Can I bring my existing bookings?",
        answer: placeholders.importOptions,
      },
      {
        question: "Does DAYMARK connect to other tools?",
        answer: `${placeholders.integrationList}. We don't list integrations until they're available.`,
      },
    ],
  },
  {
    id: "pricing",
    title: "Pricing",
    span: 5,
    items: [
      {
        question: "How much does DAYMARK cost?",
        answer: `${placeholders.price}. Ask for pricing when you request a walkthrough.`,
      },
    ],
    action: headerPrimary,
  },
  {
    id: "support",
    title: "Support",
    span: 7,
    items: [
      {
        question: "How do I get help?",
        answer: placeholders.supportHours,
      },
      {
        question: "Where is my data stored?",
        answer: placeholders.dataHandling,
      },
    ],
  },
  {
    id: "demo-data",
    title: "Demo data",
    span: 12,
    openFirst: true,
    items: [
      {
        question: "Are the numbers on this site real?",
        answer:
          "No. The dashboard and portal use a fictional studio and sample numbers to show how DAYMARK works. They are not customer results.",
      },
    ],
  },
];
