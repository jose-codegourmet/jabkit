"use client";

import {
  CalendarIcon,
  GripVerticalIcon,
  MessageCircleIcon,
  PaperclipIcon,
  PlusIcon,
} from "lucide-react";
import * as React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/atoms/avatar/Avatar";
import { Badge } from "@/atoms/badge";
import { Button } from "@/atoms/button";
import { Input } from "@/atoms/input";
import { cn } from "@/lib/cn";
import type {
  KanbanBoardCard,
  KanbanBoardColumn,
  KanbanBoardPriority,
  KanbanBoardProps,
  KanbanBoardTone,
} from "./KanbanBoard.types";

const TONE_DOT: Record<KanbanBoardTone, string> = {
  "chart-1": "bg-chart-1",
  "chart-2": "bg-chart-2",
  "chart-3": "bg-chart-3",
  "chart-4": "bg-chart-4",
  "chart-5": "bg-chart-5",
};

const PRIORITY_CHIP: Record<KanbanBoardPriority, string> = {
  high: "border-destructive/40 bg-destructive/15 text-destructive",
  medium: "border-chart-3/40 bg-chart-3/15 text-chart-3",
  low: "border-border bg-muted text-muted-foreground",
};

const defaults = {
  title: "Harbor board",
  description: "Drag cards across the Northline cut.",
  addCardPlaceholder: "Add a card",
  addCardLabel: "Add",
  emptyColumnLabel: "No cards in this column.",
} as const;

function createCardId() {
  return `card-${Math.random().toString(36).slice(2, 10)}`;
}

function initialsFor(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .map((part) => part[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

function formatDueDate(value: string) {
  const parsed = new Date(`${value}T00:00:00`);
  if (Number.isNaN(parsed.getTime())) return value;
  return parsed.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  });
}

function findCard(
  columns: KanbanBoardColumn[],
  cardId: string,
): { columnIndex: number; cardIndex: number; card: KanbanBoardCard } | null {
  for (let columnIndex = 0; columnIndex < columns.length; columnIndex += 1) {
    const cardIndex = columns[columnIndex].cards.findIndex(
      (card) => card.id === cardId,
    );
    if (cardIndex >= 0) {
      return {
        columnIndex,
        cardIndex,
        card: columns[columnIndex].cards[cardIndex],
      };
    }
  }
  return null;
}

function moveCard(
  columns: KanbanBoardColumn[],
  cardId: string,
  targetColumnId: string,
  targetIndex?: number,
): KanbanBoardColumn[] {
  const located = findCard(columns, cardId);
  if (!located) return columns;
  const targetColumnIndex = columns.findIndex(
    (column) => column.id === targetColumnId,
  );
  if (targetColumnIndex < 0) return columns;

  const next = columns.map((column) => ({
    ...column,
    cards: [...column.cards],
  }));
  const [moved] = next[located.columnIndex].cards.splice(located.cardIndex, 1);
  if (!moved) return columns;

  let insertAt = targetIndex ?? next[targetColumnIndex].cards.length;
  if (
    located.columnIndex === targetColumnIndex &&
    located.cardIndex < insertAt
  ) {
    insertAt -= 1;
  }
  insertAt = Math.min(
    Math.max(insertAt, 0),
    next[targetColumnIndex].cards.length,
  );
  if (
    located.columnIndex === targetColumnIndex &&
    located.cardIndex === insertAt
  ) {
    return columns;
  }
  next[targetColumnIndex].cards.splice(insertAt, 0, moved);
  return next;
}

function moveCardByColumn(
  columns: KanbanBoardColumn[],
  cardId: string,
  columnOffset: number,
): KanbanBoardColumn[] {
  const located = findCard(columns, cardId);
  if (!located) return columns;
  const targetColumnIndex = located.columnIndex + columnOffset;
  if (targetColumnIndex < 0 || targetColumnIndex >= columns.length) {
    return columns;
  }
  return moveCard(columns, cardId, columns[targetColumnIndex].id);
}

function moveCardByIndex(
  columns: KanbanBoardColumn[],
  cardId: string,
  offset: number,
): KanbanBoardColumn[] {
  const located = findCard(columns, cardId);
  if (!located) return columns;
  return moveCard(
    columns,
    cardId,
    columns[located.columnIndex].id,
    located.cardIndex + offset,
  );
}

export function KanbanBoard({
  className,
  title = defaults.title,
  description = defaults.description,
  columns: columnsProp,
  defaultColumns = [],
  addCardPlaceholder = defaults.addCardPlaceholder,
  addCardLabel = defaults.addCardLabel,
  emptyColumnLabel = defaults.emptyColumnLabel,
  onColumnsChange,
  onCardMove,
  onAddCard,
  ...props
}: KanbanBoardProps) {
  const headingId = React.useId();
  const isControlled = columnsProp !== undefined;
  const [uncontrolledColumns, setUncontrolledColumns] =
    React.useState<KanbanBoardColumn[]>(defaultColumns);
  const columns = isControlled ? columnsProp : uncontrolledColumns;
  const [draggingId, setDraggingId] = React.useState<string | null>(null);
  const [overColumnId, setOverColumnId] = React.useState<string | null>(null);
  const [addingColumnId, setAddingColumnId] = React.useState<string | null>(
    null,
  );
  const [draft, setDraft] = React.useState("");

  const commitColumns = React.useCallback(
    (next: KanbanBoardColumn[]) => {
      if (!isControlled) setUncontrolledColumns(next);
      onColumnsChange?.(next);
    },
    [isControlled, onColumnsChange],
  );

  const applyMove = (
    cardId: string,
    columnId: string,
    targetIndex?: number,
  ) => {
    const next = moveCard(columns, cardId, columnId, targetIndex);
    if (next === columns) return;
    commitColumns(next);
    const located = findCard(next, cardId);
    if (located) onCardMove?.(cardId, columnId, located.cardIndex);
  };

  const addCard = (columnId: string) => {
    const titleValue = draft.trim();
    if (!titleValue) return;
    const nextCard: KanbanBoardCard = {
      id: createCardId(),
      title: titleValue,
    };
    commitColumns(
      columns.map((column) =>
        column.id === columnId
          ? { ...column, cards: [...column.cards, nextCard] }
          : column,
      ),
    );
    onAddCard?.(columnId, titleValue);
    setDraft("");
    setAddingColumnId(null);
  };

  return (
    <section
      data-slot="kanban-board"
      aria-labelledby={headingId}
      className={cn(
        "flex min-h-[100dvh] flex-col bg-background px-4 py-10 text-foreground sm:px-6",
        className,
      )}
      {...props}
    >
      <header className="mx-auto mb-8 w-full max-w-6xl text-center">
        <h1
          id={headingId}
          className="text-3xl font-light tracking-[-0.03em] sm:text-4xl"
        >
          {title}
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">{description}</p>
      </header>

      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
        {columns.map((column) => (
          <ColumnLane
            key={column.id}
            column={column}
            emptyColumnLabel={emptyColumnLabel}
            addCardPlaceholder={addCardPlaceholder}
            addCardLabel={addCardLabel}
            draggingId={draggingId}
            over={overColumnId === column.id}
            adding={addingColumnId === column.id}
            draft={draft}
            onDraftChange={setDraft}
            onStartAdd={() => {
              setAddingColumnId(column.id);
              setDraft("");
            }}
            onCancelAdd={() => {
              setAddingColumnId(null);
              setDraft("");
            }}
            onAdd={() => addCard(column.id)}
            onDragStart={setDraggingId}
            onDragOverColumn={() => setOverColumnId(column.id)}
            onDragEnd={() => {
              setDraggingId(null);
              setOverColumnId(null);
            }}
            onDropCard={(cardId, index) => applyMove(cardId, column.id, index)}
            onMoveColumn={(cardId, offset) => {
              const next = moveCardByColumn(columns, cardId, offset);
              if (next === columns) return;
              commitColumns(next);
              const located = findCard(next, cardId);
              if (located) {
                onCardMove?.(
                  cardId,
                  next[located.columnIndex].id,
                  located.cardIndex,
                );
              }
            }}
            onMoveIndex={(cardId, offset) => {
              const next = moveCardByIndex(columns, cardId, offset);
              if (next === columns) return;
              commitColumns(next);
              const located = findCard(next, cardId);
              if (located) {
                onCardMove?.(cardId, column.id, located.cardIndex);
              }
            }}
          />
        ))}
      </div>
    </section>
  );
}

function ColumnLane({
  column,
  emptyColumnLabel,
  addCardPlaceholder,
  addCardLabel,
  draggingId,
  over,
  adding,
  draft,
  onDraftChange,
  onStartAdd,
  onCancelAdd,
  onAdd,
  onDragStart,
  onDragOverColumn,
  onDragEnd,
  onDropCard,
  onMoveColumn,
  onMoveIndex,
}: {
  column: KanbanBoardColumn;
  emptyColumnLabel: string;
  addCardPlaceholder: string;
  addCardLabel: string;
  draggingId: string | null;
  over: boolean;
  adding: boolean;
  draft: string;
  onDraftChange: (value: string) => void;
  onStartAdd: () => void;
  onCancelAdd: () => void;
  onAdd: () => void;
  onDragStart: (id: string) => void;
  onDragOverColumn: () => void;
  onDragEnd: () => void;
  onDropCard: (cardId: string, index?: number) => void;
  onMoveColumn: (cardId: string, offset: number) => void;
  onMoveIndex: (cardId: string, offset: number) => void;
}) {
  const headingId = React.useId();
  const addId = React.useId();
  const tone = column.tone ?? "chart-1";

  return (
    <section
      aria-labelledby={headingId}
      onDragOver={(event) => {
        event.preventDefault();
        onDragOverColumn();
      }}
      onDrop={(event) => {
        event.preventDefault();
        const cardId = event.dataTransfer.getData("text/plain");
        if (cardId) onDropCard(cardId);
        onDragEnd();
      }}
      className={cn(
        "flex min-h-[22rem] flex-col rounded-3xl border border-border bg-muted/40 p-5",
        over && draggingId && "ring-2 ring-ring",
      )}
    >
      <div className="mb-5 flex items-center justify-between gap-3">
        <div className="flex min-w-0 items-center gap-3">
          <span
            className={cn("size-3 shrink-0 rounded-full", TONE_DOT[tone])}
            aria-hidden="true"
          />
          <h2 id={headingId} className="truncate font-semibold">
            {column.title}
          </h2>
          <Badge variant="secondary">{column.cards.length}</Badge>
        </div>
        <Button
          type="button"
          variant="ghost"
          size="sm"
          className="size-8 p-0"
          aria-label={`Add card to ${column.title}`}
          onClick={onStartAdd}
        >
          <PlusIcon className="size-4" />
        </Button>
      </div>

      <ul className="flex flex-1 flex-col gap-4">
        {column.cards.length === 0 && !adding ? (
          <li className="rounded-[--radius] border border-dashed border-border px-3 py-8 text-center text-sm text-muted-foreground">
            {emptyColumnLabel}
          </li>
        ) : (
          column.cards.map((card, index) => (
            <TaskCard
              key={card.id}
              card={card}
              columnTitle={column.title}
              index={index}
              count={column.cards.length}
              dragging={draggingId === card.id}
              onDragStart={() => onDragStart(card.id)}
              onDragEnd={onDragEnd}
              onDropBefore={(cardId) => onDropCard(cardId, index)}
              onMoveColumn={(offset) => onMoveColumn(card.id, offset)}
              onMoveIndex={(offset) => onMoveIndex(card.id, offset)}
            />
          ))
        )}
      </ul>

      {adding ? (
        <form
          className="mt-4 flex gap-2"
          onSubmit={(event) => {
            event.preventDefault();
            onAdd();
          }}
        >
          <Input
            id={addId}
            value={draft}
            onChange={(event) => onDraftChange(event.target.value)}
            placeholder={addCardPlaceholder}
            aria-label={addCardPlaceholder}
            className="h-9 rounded-[--radius]"
          />
          <Button type="submit" size="sm" className="h-9 px-3">
            {addCardLabel}
          </Button>
          <Button
            type="button"
            variant="ghost"
            size="sm"
            className="h-9 px-3"
            onClick={onCancelAdd}
          >
            Cancel
          </Button>
        </form>
      ) : null}
    </section>
  );
}

function TaskCard({
  card,
  columnTitle,
  index,
  count,
  dragging,
  onDragStart,
  onDragEnd,
  onDropBefore,
  onMoveColumn,
  onMoveIndex,
}: {
  card: KanbanBoardCard;
  columnTitle: string;
  index: number;
  count: number;
  dragging: boolean;
  onDragStart: () => void;
  onDragEnd: () => void;
  onDropBefore: (cardId: string) => void;
  onMoveColumn: (offset: number) => void;
  onMoveIndex: (offset: number) => void;
}) {
  const initials = card.assignee
    ? (card.assignee.initials ?? initialsFor(card.assignee.name))
    : "";

  return (
    <li
      draggable
      onDragStart={(event) => {
        event.dataTransfer.setData("text/plain", card.id);
        event.dataTransfer.effectAllowed = "move";
        onDragStart();
      }}
      onDragEnd={onDragEnd}
      onDragOver={(event) => event.preventDefault()}
      onDrop={(event) => {
        event.preventDefault();
        event.stopPropagation();
        const cardId = event.dataTransfer.getData("text/plain");
        if (cardId) onDropBefore(cardId);
        onDragEnd();
      }}
      className={cn(
        "rounded-2xl border border-border bg-card p-5 shadow-[0_18px_40px_-32px_color-mix(in_oklab,var(--jk-foreground),transparent_82%)]",
        dragging && "opacity-50",
      )}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <h3 className="font-semibold leading-tight">{card.title}</h3>
          {card.priority ? (
            <Badge
              variant="outline"
              className={cn("mt-2 capitalize", PRIORITY_CHIP[card.priority])}
            >
              {card.priority}
            </Badge>
          ) : null}
        </div>
        <button
          type="button"
          aria-label={`Move ${card.title} in ${columnTitle}. ${index + 1} of ${count}. Use arrow keys to move.`}
          className="inline-flex size-8 shrink-0 items-center justify-center rounded-[calc(var(--radius)-4px)] text-muted-foreground hover:bg-accent hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
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
          <GripVerticalIcon className="size-5" />
        </button>
      </div>

      {card.description ? (
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          {card.description}
        </p>
      ) : null}

      {card.tags?.length ? (
        <div className="mt-4 flex flex-wrap gap-2">
          {card.tags.map((tag) => (
            <Badge key={tag} variant="outline">
              {tag}
            </Badge>
          ))}
        </div>
      ) : null}

      <div className="mt-4 flex items-center justify-between gap-3 border-t border-border pt-3">
        <div className="flex flex-wrap items-center gap-3 text-muted-foreground">
          {card.dueDate ? (
            <span className="inline-flex items-center gap-1 text-xs font-medium">
              <CalendarIcon className="size-4" aria-hidden="true" />
              <span>{formatDueDate(card.dueDate)}</span>
            </span>
          ) : null}
          {card.comments ? (
            <span className="inline-flex items-center gap-1 text-xs font-medium">
              <MessageCircleIcon className="size-4" aria-hidden="true" />
              <span>{card.comments}</span>
            </span>
          ) : null}
          {card.attachments ? (
            <span className="inline-flex items-center gap-1 text-xs font-medium">
              <PaperclipIcon className="size-4" aria-hidden="true" />
              <span>{card.attachments}</span>
            </span>
          ) : null}
        </div>
        {card.assignee ? (
          <Avatar size="sm" className="ring-2 ring-background">
            {card.assignee.imageSrc ? (
              <AvatarImage
                src={card.assignee.imageSrc}
                alt={card.assignee.name}
              />
            ) : null}
            <AvatarFallback>{initials}</AvatarFallback>
          </Avatar>
        ) : null}
      </div>
    </li>
  );
}
