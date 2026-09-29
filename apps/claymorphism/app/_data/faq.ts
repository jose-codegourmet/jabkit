import type { FaqGroup, FaqItem } from "./types";

export const faqGroups: FaqGroup[] = [
  {
    id: "getting-started",
    title: "Getting started",
    items: [
      {
        question: "How long does setup take?",
        answer:
          "Most families add a first routine in a few minutes. [Confirm setup time — client to confirm]",
        draft: true,
      },
      {
        question: "Do I need to pay to start?",
        answer:
          "No. The family plan is free. [Confirm no card required — client to confirm]",
        draft: true,
      },
      {
        question: "What ages is Pillo for?",
        answer:
          "Pillo is designed for children aged 6 to 12 and the adults who help them.",
      },
    ],
  },
  {
    id: "sharing",
    title: "Sharing",
    items: [
      {
        question: "Can two caregivers manage a board?",
        answer:
          "Yes. Invite another caregiver and you will both see who owns each step and what is done. [Confirm — client to confirm]",
        draft: true,
      },
      {
        question: "Can a child have their own view?",
        answer:
          "Yes. The child view shows the next step in big tiles with few words.",
        draft: true,
      },
    ],
  },
  {
    id: "what-a-child-sees",
    title: "What a child sees",
    items: [
      {
        question: "What can a child see?",
        answer:
          "Their own board, the next step, their progress, and their badges. [Confirm exact child-view scope — client to confirm]",
        draft: true,
      },
      {
        question: "Does Pillo use streaks or timers?",
        answer:
          "No. Pillo avoids pressure mechanics. Progress is shown, not scored.",
        draft: true,
      },
    ],
  },
  {
    id: "changing-routines",
    title: "Changing routines",
    items: [
      {
        question: "Can a routine be changed?",
        answer:
          "Yes. Add, remove, reorder, or skip a step for today at any time. [Confirm actions — client to confirm]",
        draft: true,
      },
      {
        question: "What if we miss a day?",
        answer: "Nothing breaks. Tomorrow's board starts fresh.",
        draft: true,
      },
    ],
  },
  {
    id: "privacy-and-account",
    title: "Privacy and account",
    items: [
      {
        question: "What information does Pillo keep?",
        answer: "[Privacy answer — client to confirm]",
      },
      {
        question: "How do I delete my account?",
        answer: "[Deletion process — client to confirm]",
      },
    ],
  },
];

/**
 * QA: Home asks for four questions from the Getting started group, but that
 * group has three. This list is those three plus "Can two caregivers manage
 * a board?" from Sharing — the brief's fourth FAQ question.
 */
export const gettingStartedFaqs: FaqItem[] = [
  ...faqGroups[0].items,
  faqGroups[1].items[0],
];
