import type { HTMLAttributes } from "react";

export interface Todo9Tag {
  id: string;
  label: string;
}

export interface Todo9Task {
  id: string;
  title: string;
  completed?: boolean;
  tagIds?: string[];
}

export interface Todo9Props extends Omit<HTMLAttributes<HTMLElement>, "title"> {
  title?: string;
  description?: string;
  searchPlaceholder?: string;
  addPlaceholder?: string;
  addLabel?: string;
  emptyLabel?: string;
  allTagsLabel?: string;
  tags?: Todo9Tag[];
  tasks?: Todo9Task[];
  defaultTasks?: Todo9Task[];
  defaultSearch?: string;
  defaultTagFilter?: string | null;
  onTasksChange?: (tasks: Todo9Task[]) => void;
  onToggleTask?: (taskId: string, completed: boolean) => void;
  onAddTask?: (title: string) => void;
  onReorder?: (tasks: Todo9Task[]) => void;
}
