export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export const faqGroups: {
  id: "access" | "arrival" | "refunds" | "contact";
  index: string;
  title: string;
  items: FaqItem[];
}[] = [
  {
    id: "access",
    index: "01",
    title: "Access",
    items: [
      {
        id: "access-venues",
        question: "Are the venues accessible?",
        answer: "[Venue access details — client to confirm].",
      },
      {
        id: "access-screenings",
        question: "Are screenings captioned or audio described?",
        answer:
          "Each film page lists accessibility for that screening. [Captioning policy — client to confirm].",
      },
    ],
  },
  {
    id: "arrival",
    index: "02",
    title: "Arrival",
    items: [
      {
        id: "arrival-time",
        question: "When should I arrive?",
        answer: "[Arrival guidance — client to confirm].",
      },
      {
        id: "arrival-late-entry",
        question: "Is there late entry?",
        answer: "[Late entry policy — client to confirm].",
      },
    ],
  },
  {
    id: "refunds",
    index: "03",
    title: "Refunds",
    items: [
      {
        id: "refunds-policy",
        question: "Can I get a refund or exchange?",
        answer: "[Refund policy — client to confirm].",
      },
    ],
  },
  {
    id: "contact",
    index: "04",
    title: "Contact",
    items: [
      {
        id: "contact-festival",
        question: "How do I contact the festival?",
        answer:
          "Email [email — client to confirm]. Press: [press email — client to confirm].",
      },
    ],
  },
];

export function getFaqItems(ids: string[]) {
  const wanted = new Set(ids);
  return faqGroups
    .flatMap((group) => group.items)
    .filter((item) => wanted.has(item.id));
}
