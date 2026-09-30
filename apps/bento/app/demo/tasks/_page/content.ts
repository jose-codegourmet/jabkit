export const tasksSeo = {
  title: "Tasks — DAYMARK demo",
  description:
    "A sample DAYMARK task board with keyboard-friendly moves and today's team roster. Fictional demo data.",
} as const;

export const tasksHeader = {
  title: "Tasks",
  addTask: "Add task",
} as const;

export const boardCopy = {
  label: "Task board",
  moveTo: "Move to…",
  moved: (column: string) => `Moved to ${column}.`,
  added: (column: string) => `Added to ${column}.`,
  unassigned: "Unassigned",
  task: "task",
  tasks: "tasks",
  loading: "Loading tasks…",
  error: "Tasks couldn't load. Try again.",
} as const;

export const addTaskCopy = {
  title: "Add task",
  description: "New tasks start in To do.",
  label: "Task",
  submit: "Add task",
  cancel: "Cancel",
  required: "Enter a task name.",
} as const;

export const rosterCopy = {
  id: "roster",
  title: "On shift today",
} as const;
