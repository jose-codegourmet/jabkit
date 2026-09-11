import type { KanbanColumn, KanbanItem, KanbanProps } from "./Kanban.types";

const defaultColumns: KanbanColumn[] = [
  { id: "planned", name: "Planned", tone: "muted" },
  { id: "progress", name: "In Progress", tone: "warning" },
  { id: "done", name: "Done", tone: "success" },
];

const defaultItems: KanbanItem[] = [
  {
    id: "scene-analysis",
    name: "Scene analysis",
    columnId: "planned",
    initiative: "Capture intelligence",
    startAt: "2026-03-01",
    endAt: "2026-09-06",
    owner: {
      name: "Lina Park",
      initials: "LP",
      imageSrc: "/assets/bd48582e630a15fa.webp",
    },
  },
  {
    id: "shared-timeline",
    name: "Shared timeline",
    columnId: "progress",
    initiative: "Live collaboration",
    startAt: "2026-04-01",
    endAt: "2026-09-06",
    owner: {
      name: "Omar Wells",
      initials: "OW",
      imageSrc: "/assets/8e9489842d5e2cdf.webp",
    },
  },
  {
    id: "grade-assist",
    name: "Grade assist",
    columnId: "done",
    initiative: "Capture intelligence",
    startAt: "2026-05-01",
    endAt: "2026-09-06",
    owner: {
      name: "Mina Cho",
      initials: "MC",
      imageSrc: "/assets/4132445424a19cc6.webp",
    },
  },
  {
    id: "voice-captions",
    name: "Voice captions",
    columnId: "progress",
    initiative: "Capture intelligence",
    startAt: "2026-07-01",
    endAt: "2026-09-06",
    owner: {
      name: "Priya Shah",
      initials: "PS",
      imageSrc: "/assets/8c18989537b833e8.webp",
    },
  },
  {
    id: "cloud-library",
    name: "Cloud library",
    columnId: "done",
    initiative: "Harbor cloud",
    startAt: "2026-08-01",
    endAt: "2026-09-30",
    owner: {
      name: "Ellis Grant",
      initials: "EG",
      imageSrc: "/assets/9b8fa9955b8bd54f.webp",
    },
  },
  {
    id: "cut-suggestions",
    name: "Cut suggestions",
    columnId: "planned",
    initiative: "Capture intelligence",
    startAt: "2026-09-01",
    endAt: "2026-10-31",
    owner: {
      name: "Devon Hale",
      initials: "DH",
      imageSrc: "/assets/8d9df3eb6166e07f.webp",
    },
  },
  {
    id: "permission-matrix",
    name: "Permission matrix",
    columnId: "planned",
    initiative: "Live collaboration",
    startAt: "2026-12-01",
    endAt: "2027-01-31",
    owner: {
      name: "Asha Cole",
      initials: "AC",
      imageSrc: "/assets/2d2e13918d75791c.webp",
    },
  },
  {
    id: "project-pulse",
    name: "Project pulse",
    columnId: "done",
    initiative: "Harbor cloud",
    startAt: "2027-02-01",
    endAt: "2027-03-31",
    owner: {
      name: "Jonah Reed",
      initials: "JR",
    },
  },
];

const alternateColumns: KanbanColumn[] = [
  { id: "brief", name: "Brief", tone: "chart-5" },
  { id: "draft", name: "Draft", tone: "chart-3" },
  { id: "edit", name: "Edit", tone: "chart-1" },
  { id: "live", name: "Live", tone: "chart-2" },
];

const alternateItems: KanbanItem[] = [
  {
    id: "cover-story",
    name: "Northline cover story",
    columnId: "brief",
    initiative: "Launch week",
    startAt: "2026-09-08",
    endAt: "2026-09-22",
    owner: { name: "Lina Park", initials: "LP" },
  },
  {
    id: "waitlist-mail",
    name: "Waitlist confirmation",
    columnId: "draft",
    initiative: "Lifecycle",
    startAt: "2026-09-10",
    endAt: "2026-09-18",
    owner: { name: "Omar Wells", initials: "OW" },
  },
  {
    id: "billing-note",
    name: "Billing recovery note",
    columnId: "edit",
    initiative: "Ops copy",
    startAt: "2026-09-12",
    endAt: "2026-09-20",
    owner: { name: "Priya Shah", initials: "PS" },
  },
  {
    id: "empty-table",
    name: "Invoice empty state",
    columnId: "live",
    initiative: "Ops copy",
    startAt: "2026-08-20",
    endAt: "2026-09-04",
    owner: { name: "Ellis Grant", initials: "EG" },
  },
];

export const kanbanMocks = {
  default: {
    title: "Harbor roadmap",
    description: "Move features across Planned, In Progress, and Done.",
    columns: defaultColumns,
    defaultItems,
    emptyColumnLabel: "No features in this status.",
  },
  alternate: {
    title: "Editorial cut",
    description: "A four-lane board for brief through live copy.",
    columns: alternateColumns,
    defaultItems: alternateItems,
    emptyColumnLabel: "Nothing in this lane.",
  },
} satisfies Record<string, KanbanProps>;
