"use client";

import { CaretDownIcon } from "@radix-ui/react-icons";
import { useRouter } from "next/navigation";
import { type DragEvent, type ReactNode, useRef, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/atoms/dropdown-menu/DropdownMenu";
import { BentoGrid, Tile } from "../../../_components/Bento";
import type { DemoState } from "../../../_components/demo-state";
import { PortalPageHeader } from "../../../_components/PortalPageHeader";
import { ErrorState, TileSkeleton } from "../../../_components/TileStates";
import { getStaff } from "../../../_data/staff";
import {
  emptyColumnLabel,
  type Task,
  type TaskColumnId,
  taskColumns,
  tasks,
} from "../../../_data/tasks";
import { AddTaskDialog } from "./AddTaskDialog";
import { boardCopy, tasksHeader } from "./content";
import styles from "./tasks.module.css";

const moveButtonId = (id: string) => `move-${id}`;

function columnTitle(id: TaskColumnId): string {
  return taskColumns.find((column) => column.id === id)?.title ?? id;
}

/**
 * Focus the moved card's "Move to…" button once it has re-mounted in its new
 * column (two frames: the menu closes, then the new card commits).
 */
function focusMoveButton(id: string) {
  requestAnimationFrame(() =>
    requestAnimationFrame(() => {
      document.getElementById(moveButtonId(id))?.focus();
    }),
  );
}

function TaskCard({
  task,
  dragging,
  onMove,
  onDragStart,
  onDragEnd,
}: {
  task: Task;
  dragging: boolean;
  onMove: (columnId: TaskColumnId) => void;
  onDragStart: () => void;
  onDragEnd: () => void;
}) {
  const person = task.assigneeId ? getStaff(task.assigneeId) : null;
  const targets = taskColumns.filter((column) => column.id !== task.columnId);

  return (
    <li
      className={styles.card}
      data-dragging={dragging ? "" : undefined}
      draggable
      onDragEnd={onDragEnd}
      onDragStart={(event) => {
        event.dataTransfer.setData("text/plain", task.id);
        event.dataTransfer.effectAllowed = "move";
        onDragStart();
      }}
    >
      <h3 className={styles.cardTitle}>{task.title}</h3>
      <div className={styles.cardFoot}>
        {person ? (
          <span className={styles.assignee}>
            <span aria-hidden="true" className={styles.initial}>
              {person.name.charAt(0)}
            </span>
            {person.name}
          </span>
        ) : (
          <span className={styles.unassigned}>{boardCopy.unassigned}</span>
        )}
        <DropdownMenu>
          <DropdownMenuTrigger
            render={
              <button
                className={styles.moveButton}
                id={moveButtonId(task.id)}
                type="button"
              >
                <span className="sr-only-text">{task.title}, </span>
                {boardCopy.moveTo}
                <CaretDownIcon aria-hidden="true" />
              </button>
            }
          />
          <DropdownMenuContent align="end" className={styles.menu}>
            {targets.map((column) => (
              <DropdownMenuItem
                className={styles.menuItem}
                key={column.id}
                onClick={() => onMove(column.id)}
              >
                {column.title}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </li>
  );
}

/** Header (with "Add task") plus the board. Moves and adds stay in memory. */
export function TaskBoard({ state }: { state: DemoState }) {
  const router = useRouter();
  const [list, setList] = useState<Task[]>(() =>
    state === "empty" ? [] : tasks,
  );
  const [announcement, setAnnouncement] = useState({ id: 0, text: "" });
  const [dragId, setDragId] = useState<string | null>(null);
  const [overColumn, setOverColumn] = useState<TaskColumnId | null>(null);
  const added = useRef(0);

  function announce(text: string) {
    setAnnouncement((previous) => ({ id: previous.id + 1, text }));
  }

  function move(id: string, columnId: TaskColumnId, focus: boolean) {
    const task = list.find((item) => item.id === id);
    if (!task || task.columnId === columnId) return;
    setList((previous) => [
      ...previous.filter((item) => item.id !== id),
      { ...task, columnId },
    ]);
    announce(boardCopy.moved(columnTitle(columnId)));
    if (focus) focusMoveButton(id);
  }

  function add(title: string) {
    added.current += 1;
    setList((previous) => [
      ...previous,
      { id: `new-${added.current}`, title, columnId: "todo" },
    ]);
    announce(boardCopy.added(columnTitle("todo")));
  }

  function endDrag() {
    setDragId(null);
    setOverColumn(null);
  }

  function dropHandlers(columnId: TaskColumnId) {
    return {
      onDragOver: (event: DragEvent<HTMLElement>) => {
        if (!dragId) return;
        event.preventDefault();
        event.dataTransfer.dropEffect = "move";
        if (overColumn !== columnId) setOverColumn(columnId);
      },
      onDragLeave: (event: DragEvent<HTMLElement>) => {
        if (event.currentTarget.contains(event.relatedTarget as Node | null))
          return;
        setOverColumn(null);
      },
      onDrop: (event: DragEvent<HTMLElement>) => {
        event.preventDefault();
        const id = event.dataTransfer.getData("text/plain") || dragId;
        if (id) move(id, columnId, false);
        endDrag();
      },
    };
  }

  let board: ReactNode;
  if (state === "loading") {
    board = (
      <Tile state="loading">
        <TileSkeleton message={boardCopy.loading} rows={5} />
      </Tile>
    );
  } else if (state === "error") {
    board = (
      <Tile state="error">
        <ErrorState
          message={boardCopy.error}
          onRetry={() => router.replace("/demo/tasks", { scroll: false })}
        />
      </Tile>
    );
  } else {
    board = (
      <BentoGrid className={styles.board}>
        {taskColumns.map((column) => {
          const cards = list.filter((task) => task.columnId === column.id);
          const headingId = `column-${column.id}`;
          return (
            <Tile
              as="section"
              className={styles.column}
              data-drop-target={overColumn === column.id ? "" : undefined}
              key={column.id}
              kind="action"
              labelledBy={headingId}
              state={cards.length === 0 ? "empty" : "default"}
              tone="chalk"
              {...dropHandlers(column.id)}
            >
              <div className={styles.columnHead}>
                <h2 className={styles.columnTitle} id={headingId}>
                  {column.title}
                </h2>
                <span className={styles.count}>
                  {cards.length}
                  <span className="sr-only-text">
                    {" "}
                    {cards.length === 1 ? boardCopy.task : boardCopy.tasks}
                  </span>
                </span>
              </div>
              {cards.length === 0 ? (
                <p className={styles.emptyColumn}>{emptyColumnLabel}</p>
              ) : (
                <ul className={styles.cards}>
                  {cards.map((task) => (
                    <TaskCard
                      dragging={dragId === task.id}
                      key={task.id}
                      onDragEnd={endDrag}
                      onDragStart={() => setDragId(task.id)}
                      onMove={(target) => move(task.id, target, true)}
                      task={task}
                    />
                  ))}
                </ul>
              )}
            </Tile>
          );
        })}
      </BentoGrid>
    );
  }

  return (
    <>
      <PortalPageHeader
        actions={<AddTaskDialog onAdd={add} />}
        title={tasksHeader.title}
      />
      <section aria-label={boardCopy.label} className={styles.boardSection}>
        <p aria-atomic="true" aria-live="polite" className="sr-only-text">
          <span key={announcement.id}>{announcement.text}</span>
        </p>
        {board}
      </section>
    </>
  );
}
