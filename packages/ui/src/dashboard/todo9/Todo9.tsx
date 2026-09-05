"use client";

import {
  CheckIcon,
  GripVerticalIcon,
  PlusIcon,
  SearchIcon,
  XIcon,
} from "lucide-react";
import * as React from "react";
import { Badge } from "@/atoms/badge";
import { Button } from "@/atoms/button";
import { Checkbox } from "@/atoms/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/atoms/dropdown-menu/DropdownMenu";
import { Input } from "@/atoms/input";
import { cn } from "@/lib/cn";
import type { Todo9Props, Todo9Tag, Todo9Task } from "./Todo9.types";

const DEFAULT_TAGS: Todo9Tag[] = [
  { id: "design", label: "Design" },
  { id: "launch", label: "Launch" },
  { id: "review", label: "Review" },
  { id: "ops", label: "Ops" },
  { id: "bug", label: "Bug" },
];

const DEFAULT_TASKS: Todo9Task[] = [
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

const defaults = {
  title: "Today",
  description: "Search, tag, and reorder the Northline queue.",
  searchPlaceholder: "Search tasks",
  addPlaceholder: "Add a task",
  addLabel: "Add",
  emptyLabel: "No tasks match this search.",
  allTagsLabel: "All",
} as const;

function moveTask(tasks: Todo9Task[], fromId: string, toId: string) {
  if (fromId === toId) return tasks;
  const fromIndex = tasks.findIndex((task) => task.id === fromId);
  const toIndex = tasks.findIndex((task) => task.id === toId);
  if (fromIndex < 0 || toIndex < 0) return tasks;
  const next = [...tasks];
  const [moved] = next.splice(fromIndex, 1);
  next.splice(toIndex, 0, moved);
  return next;
}

function moveTaskBy(tasks: Todo9Task[], taskId: string, offset: number) {
  const fromIndex = tasks.findIndex((task) => task.id === taskId);
  if (fromIndex < 0) return tasks;
  const toIndex = Math.min(Math.max(fromIndex + offset, 0), tasks.length - 1);
  if (fromIndex === toIndex) return tasks;
  return moveTask(tasks, taskId, tasks[toIndex].id);
}

function createTaskId() {
  return `task-${Math.random().toString(36).slice(2, 10)}`;
}

export function Todo9({
  className,
  title = defaults.title,
  description = defaults.description,
  searchPlaceholder = defaults.searchPlaceholder,
  addPlaceholder = defaults.addPlaceholder,
  addLabel = defaults.addLabel,
  emptyLabel = defaults.emptyLabel,
  allTagsLabel = defaults.allTagsLabel,
  tags = DEFAULT_TAGS,
  tasks: tasksProp,
  defaultTasks = DEFAULT_TASKS,
  defaultSearch = "",
  defaultTagFilter = null,
  onTasksChange,
  onToggleTask,
  onAddTask,
  onReorder,
  ...props
}: Todo9Props) {
  const headingId = React.useId();
  const searchId = React.useId();
  const addId = React.useId();
  const tagById = React.useMemo(
    () => new Map(tags.map((tag) => [tag.id, tag])),
    [tags],
  );
  const isControlled = tasksProp !== undefined;
  const [uncontrolledTasks, setUncontrolledTasks] =
    React.useState<Todo9Task[]>(defaultTasks);
  const tasks = isControlled ? tasksProp : uncontrolledTasks;
  const [query, setQuery] = React.useState(defaultSearch);
  const [tagFilter, setTagFilter] = React.useState<string | null>(
    defaultTagFilter,
  );
  const [draft, setDraft] = React.useState("");
  const [draggingId, setDraggingId] = React.useState<string | null>(null);
  const [overId, setOverId] = React.useState<string | null>(null);

  const commitTasks = React.useCallback(
    (next: Todo9Task[]) => {
      if (!isControlled) setUncontrolledTasks(next);
      onTasksChange?.(next);
    },
    [isControlled, onTasksChange],
  );

  const visibleTasks = React.useMemo(() => {
    const needle = query.trim().toLowerCase();
    return tasks.filter((task) => {
      const matchesQuery =
        needle.length === 0 || task.title.toLowerCase().includes(needle);
      const matchesTag =
        tagFilter === null || (task.tagIds ?? []).includes(tagFilter);
      return matchesQuery && matchesTag;
    });
  }, [query, tagFilter, tasks]);

  const openCount = tasks.filter((task) => !task.completed).length;

  const applyReorder = (next: Todo9Task[]) => {
    if (next === tasks) return;
    commitTasks(next);
    onReorder?.(next);
  };

  const toggleCompleted = (taskId: string, completed: boolean) => {
    commitTasks(
      tasks.map((task) => (task.id === taskId ? { ...task, completed } : task)),
    );
    onToggleTask?.(taskId, completed);
  };

  const toggleTag = (taskId: string, tagId: string) => {
    commitTasks(
      tasks.map((task) => {
        if (task.id !== taskId) return task;
        const current = task.tagIds ?? [];
        const tagIds = current.includes(tagId)
          ? current.filter((id) => id !== tagId)
          : [...current, tagId];
        return { ...task, tagIds };
      }),
    );
  };

  const addTask = () => {
    const titleValue = draft.trim();
    if (!titleValue) return;
    const nextTask: Todo9Task = {
      id: createTaskId(),
      title: titleValue,
      tagIds: tagFilter ? [tagFilter] : [],
    };
    commitTasks([...tasks, nextTask]);
    onAddTask?.(titleValue);
    setDraft("");
  };

  return (
    <section
      data-slot="todo9"
      aria-labelledby={headingId}
      className={cn(
        "flex min-h-[100dvh] items-start justify-center bg-background px-6 py-12 text-foreground",
        className,
      )}
      {...props}
    >
      <div className="w-full max-w-xl rounded-[--radius] border border-border bg-card p-6 shadow-[0_24px_60px_-36px_color-mix(in_oklab,var(--jk-foreground),transparent_82%)]">
        <header className="flex items-start justify-between gap-4">
          <div className="min-w-0">
            <h1
              id={headingId}
              className="text-xl font-semibold tracking-[-0.03em]"
            >
              {title}
            </h1>
            <p className="mt-1 text-sm text-muted-foreground">{description}</p>
          </div>
          <p className="shrink-0 rounded-full border border-border bg-muted px-2.5 py-1 text-xs font-medium text-muted-foreground">
            {openCount} open
          </p>
        </header>

        <div className="relative mt-6">
          <SearchIcon
            aria-hidden="true"
            className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground"
          />
          <Input
            id={searchId}
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder={searchPlaceholder}
            aria-label={searchPlaceholder}
            className="h-10 rounded-[--radius] pr-3 pl-9"
          />
        </div>

        <fieldset className="mt-4 flex flex-wrap gap-2 border-0 p-0">
          <legend className="sr-only">Filter by tag</legend>
          <FilterChip
            active={tagFilter === null}
            onClick={() => setTagFilter(null)}
          >
            {allTagsLabel}
          </FilterChip>
          {tags.map((tag) => (
            <FilterChip
              key={tag.id}
              active={tagFilter === tag.id}
              onClick={() =>
                setTagFilter((current) => (current === tag.id ? null : tag.id))
              }
            >
              {tag.label}
            </FilterChip>
          ))}
        </fieldset>

        <ul className="mt-5 divide-y divide-border border-y border-border">
          {visibleTasks.length === 0 ? (
            <li className="px-1 py-8 text-center text-sm text-muted-foreground">
              {emptyLabel}
            </li>
          ) : (
            visibleTasks.map((task, index) => (
              <TaskRow
                key={task.id}
                task={task}
                tags={tags}
                tagById={tagById}
                index={index}
                count={visibleTasks.length}
                dragging={draggingId === task.id}
                over={overId === task.id && draggingId !== task.id}
                onDragStart={() => setDraggingId(task.id)}
                onDragOver={() => setOverId(task.id)}
                onDragEnd={() => {
                  setDraggingId(null);
                  setOverId(null);
                }}
                onDrop={(fromId) => {
                  applyReorder(moveTask(tasks, fromId, task.id));
                  setDraggingId(null);
                  setOverId(null);
                }}
                onMove={(offset) =>
                  applyReorder(moveTaskBy(tasks, task.id, offset))
                }
                onToggle={(completed) => toggleCompleted(task.id, completed)}
                onToggleTag={(tagId) => toggleTag(task.id, tagId)}
              />
            ))
          )}
        </ul>

        <form
          className="mt-5 flex gap-2"
          onSubmit={(event) => {
            event.preventDefault();
            addTask();
          }}
        >
          <Input
            id={addId}
            value={draft}
            onChange={(event) => setDraft(event.target.value)}
            placeholder={addPlaceholder}
            aria-label={addPlaceholder}
            className="h-10 rounded-[--radius]"
          />
          <Button type="submit" size="sm" className="h-10 px-4">
            {addLabel}
          </Button>
        </form>
      </div>
    </section>
  );
}

function FilterChip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={cn(
        "rounded-full border px-3 py-1 text-xs font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        active
          ? "border-primary bg-primary text-primary-foreground"
          : "border-border bg-background text-muted-foreground hover:bg-accent hover:text-accent-foreground",
      )}
    >
      {children}
    </button>
  );
}

function TaskRow({
  task,
  tags,
  tagById,
  index,
  count,
  dragging,
  over,
  onDragStart,
  onDragOver,
  onDragEnd,
  onDrop,
  onMove,
  onToggle,
  onToggleTag,
}: {
  task: Todo9Task;
  tags: Todo9Tag[];
  tagById: Map<string, Todo9Tag>;
  index: number;
  count: number;
  dragging: boolean;
  over: boolean;
  onDragStart: () => void;
  onDragOver: () => void;
  onDragEnd: () => void;
  onDrop: (fromId: string) => void;
  onMove: (offset: number) => void;
  onToggle: (completed: boolean) => void;
  onToggleTag: (tagId: string) => void;
}) {
  const assigned = task.tagIds ?? [];
  const completed = Boolean(task.completed);

  return (
    <li
      className={cn(
        "flex items-start gap-2 py-3",
        dragging && "opacity-50",
        over && "bg-accent",
      )}
      onDragOver={(event) => {
        event.preventDefault();
        onDragOver();
      }}
      onDrop={(event) => {
        event.preventDefault();
        const fromId = event.dataTransfer.getData("text/plain");
        if (fromId) onDrop(fromId);
      }}
    >
      <button
        type="button"
        draggable
        aria-label={`Reorder ${task.title}. ${index + 1} of ${count}. Use arrow keys to move.`}
        className="mt-0.5 inline-flex size-8 shrink-0 cursor-grab items-center justify-center rounded-[calc(var(--radius)-4px)] text-muted-foreground hover:bg-accent hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring active:cursor-grabbing"
        onDragStart={(event) => {
          event.dataTransfer.setData("text/plain", task.id);
          event.dataTransfer.effectAllowed = "move";
          onDragStart();
        }}
        onDragEnd={onDragEnd}
        onKeyDown={(event) => {
          if (event.key === "ArrowUp") {
            event.preventDefault();
            onMove(-1);
          }
          if (event.key === "ArrowDown") {
            event.preventDefault();
            onMove(1);
          }
        }}
      >
        <GripVerticalIcon className="size-4" />
      </button>
      <Checkbox
        checked={completed}
        onCheckedChange={(value) => onToggle(value === true)}
        aria-label={`Mark ${task.title} complete`}
        className="mt-1.5"
      />
      <div className="min-w-0 flex-1">
        <p
          className={cn(
            "text-sm leading-6",
            completed && "text-muted-foreground line-through",
          )}
        >
          {task.title}
        </p>
        <div className="mt-2 flex flex-wrap items-center gap-1.5">
          {assigned.map((tagId) => {
            const tag = tagById.get(tagId);
            if (!tag) return null;
            return (
              <Badge key={tagId} variant="outline" className="gap-1 pr-1">
                {tag.label}
                <button
                  type="button"
                  aria-label={`Remove ${tag.label} from ${task.title}`}
                  className="inline-flex size-4 items-center justify-center rounded-full text-muted-foreground hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  onClick={() => onToggleTag(tagId)}
                >
                  <XIcon className="size-3" />
                </button>
              </Badge>
            );
          })}
          <DropdownMenu>
            <DropdownMenuTrigger
              render={
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-6 gap-1 px-2 text-xs text-muted-foreground"
                  aria-label={`Add tag to ${task.title}`}
                >
                  <PlusIcon className="size-3.5" />
                  Tag
                </Button>
              }
            />
            <DropdownMenuContent align="start" className="min-w-40">
              <DropdownMenuLabel>Tags</DropdownMenuLabel>
              {tags.map((tag) => {
                const selected = assigned.includes(tag.id);
                return (
                  <DropdownMenuItem
                    key={tag.id}
                    onClick={() => onToggleTag(tag.id)}
                  >
                    <span className="flex w-4 justify-center">
                      {selected ? <CheckIcon className="size-3.5" /> : null}
                    </span>
                    {tag.label}
                  </DropdownMenuItem>
                );
              })}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </li>
  );
}
