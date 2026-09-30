import type { KanbanBoardColumn } from "@/dashboard/kanban-board/KanbanBoard.types";
import { getStaff, type StaffId } from "./staff";

export type TaskColumnId = "todo" | "in-progress" | "done";

export const taskColumns: { id: TaskColumnId; title: string }[] = [
  { id: "todo", title: "To do" },
  { id: "in-progress", title: "In progress" },
  { id: "done", title: "Done" },
];

export type Task = {
  id: string;
  title: string;
  columnId: TaskColumnId;
  assigneeId?: StaffId;
};

export const tasks: Task[] = [
  {
    id: "t01",
    title: "Restock treatment room 2",
    columnId: "todo",
    assigneeId: "kai",
  },
  {
    id: "t02",
    title: "Update holiday opening hours",
    columnId: "todo",
    assigneeId: "robin",
  },
  {
    id: "t03",
    title: "Prepare new-client forms",
    columnId: "todo",
    assigneeId: "robin",
  },
  {
    id: "t04",
    title: "Call supplier about Friday delivery",
    columnId: "in-progress",
    assigneeId: "ana",
  },
  {
    id: "t05",
    title: "Check waiting-area heater",
    columnId: "done",
    assigneeId: "sam",
  },
];

export const emptyColumnLabel = "Nothing here yet.";

export function toKanbanColumns(list: Task[] = tasks): KanbanBoardColumn[] {
  return taskColumns.map((column) => ({
    id: column.id,
    title: column.title,
    cards: list
      .filter((task) => task.columnId === column.id)
      .map((task) => {
        const person = task.assigneeId ? getStaff(task.assigneeId) : null;
        return {
          id: task.id,
          title: task.title,
          assignee: person
            ? { name: person.name, initials: person.name.slice(0, 1) }
            : undefined,
        };
      }),
  }));
}
