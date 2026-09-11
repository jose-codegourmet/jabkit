import type { HTMLAttributes } from "react";

export type KanbanTone =
  | "muted"
  | "warning"
  | "success"
  | "chart-1"
  | "chart-2"
  | "chart-3"
  | "chart-4"
  | "chart-5";

export interface KanbanOwner {
  name: string;
  initials?: string;
  imageSrc?: string;
}

export interface KanbanColumn {
  id: string;
  name: string;
  tone?: KanbanTone;
}

export interface KanbanItem {
  id: string;
  name: string;
  columnId: string;
  initiative?: string;
  startAt?: string;
  endAt?: string;
  owner?: KanbanOwner;
}

export interface KanbanProps
  extends Omit<HTMLAttributes<HTMLElement>, "title"> {
  title?: string;
  description?: string;
  columns?: KanbanColumn[];
  items?: KanbanItem[];
  defaultItems?: KanbanItem[];
  emptyColumnLabel?: string;
  onItemsChange?: (items: KanbanItem[]) => void;
  onItemMove?: (itemId: string, columnId: string, index: number) => void;
}
