import type { Todo9Props, Todo9Tag, Todo9Task } from "./Todo9.types";

const tags: Todo9Tag[] = [
  { id: "design", label: "Design" },
  { id: "launch", label: "Launch" },
  { id: "review", label: "Review" },
  { id: "ops", label: "Ops" },
  { id: "bug", label: "Bug" },
];

const defaultTasks: Todo9Task[] = [
  {
    id: "pricing",
    title: "Draft the Northline pricing table",
    tagIds: ["design", "launch"],
  },
  {
    id: "onboarding",
    title: "Review Harbor onboarding copy",
    tagIds: ["review"],
  },
  {
    id: "waitlist",
    title: "Ship waitlist confirmation mail",
    tagIds: ["launch", "ops"],
  },
  {
    id: "tax",
    title: "Reproduce the billing tax edge case",
    completed: true,
    tagIds: ["bug"],
  },
  {
    id: "empty-state",
    title: "Cut the dashboard empty state",
    tagIds: ["design"],
  },
];

const alternateTasks: Todo9Task[] = [
  {
    id: "sprint-kickoff",
    title: "Lock Friday sprint kickoff notes",
    completed: true,
    tagIds: ["ops"],
  },
  {
    id: "invoice-filter",
    title: "Add unpaid filter to invoices",
    tagIds: ["bug", "ops"],
  },
  {
    id: "cover",
    title: "Export the Harbor cover frames",
    tagIds: ["design"],
  },
  {
    id: "qa",
    title: "QA the two-factor recovery path",
    tagIds: ["review", "launch"],
  },
];

export const todo9Mocks = {
  default: {
    title: "Today",
    description: "Search, tag, and reorder the Northline queue.",
    searchPlaceholder: "Search tasks",
    addPlaceholder: "Add a task",
    addLabel: "Add",
    emptyLabel: "No tasks match this search.",
    allTagsLabel: "All",
    tags,
    defaultTasks,
  },
  alternate: {
    title: "Harbor sprint",
    description: "A quieter board with more completed work.",
    searchPlaceholder: "Filter by title",
    addPlaceholder: "New Harbor task",
    addLabel: "Queue",
    emptyLabel: "Nothing in this slice.",
    allTagsLabel: "Any tag",
    tags,
    defaultTasks: alternateTasks,
    defaultSearch: "invoice",
    defaultTagFilter: "ops",
  },
} satisfies Record<string, Todo9Props>;
