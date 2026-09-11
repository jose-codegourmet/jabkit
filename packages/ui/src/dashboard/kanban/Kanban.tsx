"use client";

import { GripVerticalIcon } from "lucide-react";
import * as React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/atoms/avatar/Avatar";
import { cn } from "@/lib/cn";
import type {
  KanbanColumn,
  KanbanItem,
  KanbanProps,
  KanbanTone,
} from "./Kanban.types";

const TONE_DOT: Record<KanbanTone, string> = {
  muted: "bg-muted-foreground",
  warning: "bg-warning",
  success: "bg-success",
  "chart-1": "bg-chart-1",
  "chart-2": "bg-chart-2",
  "chart-3": "bg-chart-3",
  "chart-4": "bg-chart-4",
  "chart-5": "bg-chart-5",
};

const defaults = {
  title: "Harbor roadmap",
  description: "Move features across Planned, In Progress, and Done.",
  emptyColumnLabel: "No features in this status.",
} as const;

function initialsFor(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .map((part) => part[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

function formatDate(value: string, withYear = false) {
  const parsed = new Date(`${value}T00:00:00`);
  if (Number.isNaN(parsed.getTime())) return value;
  return parsed.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    ...(withYear ? { year: "numeric" } : {}),
  });
}

function formatRange(startAt?: string, endAt?: string) {
  if (!startAt && !endAt) return null;
  if (startAt && endAt) {
    return `${formatDate(startAt)} – ${formatDate(endAt, true)}`;
  }
  return formatDate((startAt ?? endAt) as string, true);
}

function itemsInColumn(items: KanbanItem[], columnId: string) {
  return items.filter((item) => item.columnId === columnId);
}

function moveItem(
  items: KanbanItem[],
  itemId: string,
  columnId: string,
  targetIndex?: number,
): KanbanItem[] {
  const fromIndex = items.findIndex((item) => item.id === itemId);
  if (fromIndex < 0) return items;
  const moving = items[fromIndex];
  const without = items.filter((item) => item.id !== itemId);
  const columnItems = itemsInColumn(without, columnId);
  let insertAt = targetIndex ?? columnItems.length;
  insertAt = Math.min(Math.max(insertAt, 0), columnItems.length);

  if (moving.columnId === columnId) {
    const currentIndex = itemsInColumn(items, columnId).findIndex(
      (item) => item.id === itemId,
    );
    if (currentIndex === insertAt) return items;
  }

  const insertBefore = columnItems[insertAt];
  const nextMoving = { ...moving, columnId };
  if (!insertBefore) return [...without, nextMoving];
  const spliceAt = without.findIndex((item) => item.id === insertBefore.id);
  const next = [...without];
  next.splice(spliceAt, 0, nextMoving);
  return next;
}

function moveItemByColumn(
  items: KanbanItem[],
  columns: KanbanColumn[],
  itemId: string,
  offset: number,
): KanbanItem[] {
  const item = items.find((entry) => entry.id === itemId);
  if (!item) return items;
  const columnIndex = columns.findIndex(
    (column) => column.id === item.columnId,
  );
  const nextColumn = columns[columnIndex + offset];
  if (!nextColumn) return items;
  return moveItem(items, itemId, nextColumn.id);
}

function moveItemByIndex(
  items: KanbanItem[],
  itemId: string,
  offset: number,
): KanbanItem[] {
  const item = items.find((entry) => entry.id === itemId);
  if (!item) return items;
  const columnItems = itemsInColumn(items, item.columnId);
  const currentIndex = columnItems.findIndex((entry) => entry.id === itemId);
  return moveItem(items, itemId, item.columnId, currentIndex + offset);
}

export function Kanban({
  className,
  title = defaults.title,
  description = defaults.description,
  columns = [],
  items: itemsProp,
  defaultItems = [],
  emptyColumnLabel = defaults.emptyColumnLabel,
  onItemsChange,
  onItemMove,
  ...props
}: KanbanProps) {
  const headingId = React.useId();
  const isControlled = itemsProp !== undefined;
  const [uncontrolledItems, setUncontrolledItems] =
    React.useState<KanbanItem[]>(defaultItems);
  const items = isControlled ? itemsProp : uncontrolledItems;
  const [draggingId, setDraggingId] = React.useState<string | null>(null);
  const [overColumnId, setOverColumnId] = React.useState<string | null>(null);

  const commitItems = React.useCallback(
    (next: KanbanItem[]) => {
      if (!isControlled) setUncontrolledItems(next);
      onItemsChange?.(next);
    },
    [isControlled, onItemsChange],
  );

  const applyMove = (
    itemId: string,
    columnId: string,
    targetIndex?: number,
  ) => {
    const next = moveItem(items, itemId, columnId, targetIndex);
    if (next === items) return;
    commitItems(next);
    const columnItems = itemsInColumn(next, columnId);
    const index = columnItems.findIndex((item) => item.id === itemId);
    if (index >= 0) onItemMove?.(itemId, columnId, index);
  };

  return (
    <section
      data-slot="kanban"
      aria-labelledby={headingId}
      className={cn(
        "flex min-h-[100dvh] flex-col bg-background px-4 py-10 text-foreground sm:px-6",
        className,
      )}
      {...props}
    >
      <header className="mx-auto mb-8 w-full max-w-6xl">
        <h1
          id={headingId}
          className="text-2xl font-semibold tracking-tight sm:text-3xl"
        >
          {title}
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">{description}</p>
      </header>

      <div className="mx-auto flex w-full max-w-6xl gap-4 overflow-x-auto pb-2">
        {columns.map((column) => (
          <StatusColumn
            key={column.id}
            column={column}
            items={itemsInColumn(items, column.id)}
            emptyColumnLabel={emptyColumnLabel}
            draggingId={draggingId}
            over={overColumnId === column.id}
            onDragStart={setDraggingId}
            onDragOverColumn={() => setOverColumnId(column.id)}
            onDragEnd={() => {
              setDraggingId(null);
              setOverColumnId(null);
            }}
            onDropItem={(itemId, index) => applyMove(itemId, column.id, index)}
            onMoveColumn={(itemId, offset) => {
              const next = moveItemByColumn(items, columns, itemId, offset);
              if (next === items) return;
              commitItems(next);
              const moved = next.find((item) => item.id === itemId);
              if (!moved) return;
              const index = itemsInColumn(next, moved.columnId).findIndex(
                (item) => item.id === itemId,
              );
              onItemMove?.(itemId, moved.columnId, index);
            }}
            onMoveIndex={(itemId, offset) => {
              const next = moveItemByIndex(items, itemId, offset);
              if (next === items) return;
              commitItems(next);
              const index = itemsInColumn(next, column.id).findIndex(
                (item) => item.id === itemId,
              );
              if (index >= 0) onItemMove?.(itemId, column.id, index);
            }}
          />
        ))}
      </div>
    </section>
  );
}

function StatusColumn({
  column,
  items,
  emptyColumnLabel,
  draggingId,
  over,
  onDragStart,
  onDragOverColumn,
  onDragEnd,
  onDropItem,
  onMoveColumn,
  onMoveIndex,
}: {
  column: KanbanColumn;
  items: KanbanItem[];
  emptyColumnLabel: string;
  draggingId: string | null;
  over: boolean;
  onDragStart: (id: string) => void;
  onDragOverColumn: () => void;
  onDragEnd: () => void;
  onDropItem: (itemId: string, index?: number) => void;
  onMoveColumn: (itemId: string, offset: number) => void;
  onMoveIndex: (itemId: string, offset: number) => void;
}) {
  const headingId = React.useId();
  const tone = column.tone ?? "muted";

  return (
    <section
      aria-labelledby={headingId}
      onDragOver={(event) => {
        event.preventDefault();
        onDragOverColumn();
      }}
      onDrop={(event) => {
        event.preventDefault();
        const itemId = event.dataTransfer.getData("text/plain");
        if (itemId) onDropItem(itemId);
        onDragEnd();
      }}
      className={cn(
        "flex min-h-[22rem] w-72 shrink-0 flex-col gap-3",
        over && draggingId && "rounded-[--radius] ring-2 ring-ring",
      )}
    >
      <div className="flex items-center gap-2 px-1">
        <span
          className={cn("size-2 shrink-0 rounded-full", TONE_DOT[tone])}
          aria-hidden="true"
        />
        <h2 id={headingId} className="truncate text-sm font-medium">
          {column.name}
        </h2>
        <span className="text-xs text-muted-foreground">{items.length}</span>
      </div>

      <ul className="flex flex-1 flex-col gap-2">
        {items.length === 0 ? (
          <li className="rounded-[--radius] border border-dashed border-border px-3 py-8 text-center text-sm text-muted-foreground">
            {emptyColumnLabel}
          </li>
        ) : (
          items.map((item, index) => (
            <FeatureCard
              key={item.id}
              item={item}
              columnName={column.name}
              index={index}
              count={items.length}
              dragging={draggingId === item.id}
              onDragStart={() => onDragStart(item.id)}
              onDragEnd={onDragEnd}
              onDropBefore={(itemId) => onDropItem(itemId, index)}
              onMoveColumn={(offset) => onMoveColumn(item.id, offset)}
              onMoveIndex={(offset) => onMoveIndex(item.id, offset)}
            />
          ))
        )}
      </ul>
    </section>
  );
}

function FeatureCard({
  item,
  columnName,
  index,
  count,
  dragging,
  onDragStart,
  onDragEnd,
  onDropBefore,
  onMoveColumn,
  onMoveIndex,
}: {
  item: KanbanItem;
  columnName: string;
  index: number;
  count: number;
  dragging: boolean;
  onDragStart: () => void;
  onDragEnd: () => void;
  onDropBefore: (itemId: string) => void;
  onMoveColumn: (offset: number) => void;
  onMoveIndex: (offset: number) => void;
}) {
  const initials = item.owner
    ? (item.owner.initials ?? initialsFor(item.owner.name))
    : "";
  const range = formatRange(item.startAt, item.endAt);

  return (
    <li
      draggable
      onDragStart={(event) => {
        event.dataTransfer.setData("text/plain", item.id);
        event.dataTransfer.effectAllowed = "move";
        onDragStart();
      }}
      onDragEnd={onDragEnd}
      onDragOver={(event) => event.preventDefault()}
      onDrop={(event) => {
        event.preventDefault();
        event.stopPropagation();
        const itemId = event.dataTransfer.getData("text/plain");
        if (itemId) onDropBefore(itemId);
        onDragEnd();
      }}
      className={cn(
        "rounded-[--radius] border border-border bg-card p-3 shadow-sm",
        dragging && "opacity-50",
      )}
    >
      <div className="flex items-start justify-between gap-2">
        <div className="min-w-0 flex-1">
          <p className="m-0 truncate text-sm font-medium">{item.name}</p>
          {item.initiative ? (
            <p className="m-0 mt-1 truncate text-xs text-muted-foreground">
              {item.initiative}
            </p>
          ) : null}
        </div>
        <div className="flex shrink-0 items-center gap-1">
          {item.owner ? (
            <Avatar size="sm" className="size-4">
              {item.owner.imageSrc ? (
                <AvatarImage src={item.owner.imageSrc} alt={item.owner.name} />
              ) : null}
              <AvatarFallback>{initials}</AvatarFallback>
            </Avatar>
          ) : null}
          <button
            type="button"
            aria-label={`Move ${item.name} in ${columnName}. ${index + 1} of ${count}. Use arrow keys to move.`}
            className="inline-flex size-6 items-center justify-center rounded-[calc(var(--radius)-4px)] text-muted-foreground hover:bg-accent hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            onKeyDown={(event) => {
              if (event.key === "ArrowLeft") {
                event.preventDefault();
                onMoveColumn(-1);
              }
              if (event.key === "ArrowRight") {
                event.preventDefault();
                onMoveColumn(1);
              }
              if (event.key === "ArrowUp") {
                event.preventDefault();
                onMoveIndex(-1);
              }
              if (event.key === "ArrowDown") {
                event.preventDefault();
                onMoveIndex(1);
              }
            }}
          >
            <GripVerticalIcon className="size-3.5" />
          </button>
        </div>
      </div>
      {range ? (
        <p className="m-0 mt-2 text-xs text-muted-foreground">{range}</p>
      ) : null}
    </li>
  );
}
