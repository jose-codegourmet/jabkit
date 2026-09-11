import type { KanbanBoardColumn, KanbanBoardProps } from "./KanbanBoard.types";

const defaultColumns: KanbanBoardColumn[] = [
  {
    id: "todo",
    title: "To do",
    tone: "chart-4",
    cards: [
      {
        id: "design-audit",
        title: "Harbor token audit",
        description: "Reconcile cover frames with the semantic token map.",
        priority: "high",
        assignee: {
          name: "Lina Park",
          initials: "LP",
          imageSrc: "/assets/bd48582e630a15fa.webp",
        },
        tags: ["Design", "System"],
        dueDate: "2026-09-15",
        attachments: 3,
        comments: 7,
      },
      {
        id: "research",
        title: "Waitlist interview notes",
        description: "Summarize the last round of Harbor onboarding calls.",
        priority: "medium",
        assignee: {
          name: "Omar Wells",
          initials: "OW",
          imageSrc: "/assets/8e9489842d5e2cdf.webp",
        },
        tags: ["Research", "UX"],
        dueDate: "2026-09-18",
        comments: 4,
      },
    ],
  },
  {
    id: "progress",
    title: "In progress",
    tone: "chart-2",
    cards: [
      {
        id: "mobile-nav",
        title: "Northline mobile nav",
        description: "Ship the compressed dock pattern for tablet widths.",
        priority: "high",
        assignee: {
          name: "Mina Cho",
          initials: "MC",
          imageSrc: "/assets/4132445424a19cc6.webp",
        },
        tags: ["Mobile", "UI"],
        attachments: 8,
        comments: 12,
      },
    ],
  },
  {
    id: "review",
    title: "Review",
    tone: "chart-3",
    cards: [
      {
        id: "api-docs",
        title: "Recovery path docs",
        description: "Finish the invoice-filter developer notes.",
        priority: "medium",
        assignee: {
          name: "Priya Shah",
          initials: "PS",
          imageSrc: "/assets/8c18989537b833e8.webp",
        },
        tags: ["Docs", "API"],
        dueDate: "2026-09-20",
        comments: 2,
      },
    ],
  },
  {
    id: "done",
    title: "Done",
    tone: "chart-1",
    cards: [
      {
        id: "landing",
        title: "Cover conversion pass",
        description: "Landing CTA lift recorded at twenty-three percent.",
        priority: "low",
        assignee: {
          name: "Ellis Grant",
          initials: "EG",
          imageSrc: "/assets/9b8fa9955b8bd54f.webp",
        },
        tags: ["Web", "Launch"],
        attachments: 2,
        comments: 8,
      },
    ],
  },
];

const alternateColumns: KanbanBoardColumn[] = [
  {
    id: "backlog",
    title: "Ops backlog",
    tone: "chart-5",
    cards: [
      {
        id: "tax-edge",
        title: "Billing tax edge case",
        description: "Reproduce the unpaid-filter mismatch before Friday.",
        priority: "high",
        assignee: { name: "Jonah Reed", initials: "JR" },
        tags: ["Ops", "Billing"],
        dueDate: "2026-10-12",
        comments: 3,
      },
      {
        id: "empty-state",
        title: "Invoice empty state",
        description: "Cut copy for the zero-results Harbor table.",
        priority: "medium",
        assignee: { name: "Asha Cole", initials: "AC" },
        tags: ["Copy"],
      },
    ],
  },
  {
    id: "doing",
    title: "This cut",
    tone: "chart-1",
    cards: [
      {
        id: "confirm-mail",
        title: "Waitlist confirmation mail",
        description: "Ship the recovery-path template with ops.",
        priority: "high",
        assignee: { name: "Devon Hale", initials: "DH" },
        tags: ["Launch"],
        attachments: 1,
        comments: 5,
        dueDate: "2026-10-14",
      },
    ],
  },
  {
    id: "shipped",
    title: "Shipped",
    tone: "chart-2",
    cards: [],
  },
];

export const kanbanBoardMocks = {
  default: {
    title: "Harbor board",
    description: "Drag cards across the Northline cut.",
    defaultColumns,
    addCardPlaceholder: "Add a card",
    addCardLabel: "Add",
    emptyColumnLabel: "No cards in this column.",
  },
  alternate: {
    title: "Ops cut",
    description: "A quieter three-column board for billing work.",
    defaultColumns: alternateColumns,
    addCardPlaceholder: "Queue a task",
    addCardLabel: "Queue",
    emptyColumnLabel: "Nothing queued here.",
  },
} satisfies Record<string, KanbanBoardProps>;
