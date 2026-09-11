import type { HTMLAttributes } from "react";

export type KanbanBoardPriority = "low" | "medium" | "high";

export type KanbanBoardTone =
  | "chart-1"
  | "chart-2"
  | "chart-3"
  | "chart-4"
  | "chart-5";

export interface KanbanBoardAssignee {
  name: string;
  initials?: string;
  imageSrc?: string;
}

export interface KanbanBoardCard {
  id: string;
  title: string;
  description?: string;
  priority?: KanbanBoardPriority;
  assignee?: KanbanBoardAssignee;
  tags?: string[];
  dueDate?: string;
  attachments?: number;
  comments?: number;
}

export interface KanbanBoardColumn {
  id: string;
  title: string;
  tone?: KanbanBoardTone;
  cards: KanbanBoardCard[];
}

export interface KanbanBoardProps
  extends Omit<HTMLAttributes<HTMLElement>, "title"> {
  title?: string;
  description?: string;
  columns?: KanbanBoardColumn[];
  defaultColumns?: KanbanBoardColumn[];
  addCardPlaceholder?: string;
  addCardLabel?: string;
  emptyColumnLabel?: string;
  onColumnsChange?: (columns: KanbanBoardColumn[]) => void;
  onCardMove?: (cardId: string, columnId: string, index: number) => void;
  onAddCard?: (columnId: string, title: string) => void;
}
