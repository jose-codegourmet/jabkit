"use client";

import { useId, useState } from "react";
import { Progress, ProgressLabel } from "@/atoms/progress";
import { cn } from "@/lib/cn";
import { getMember } from "../_data/members";
import { exampleBadgeLabel } from "../_data/site";
import type { BoardStep } from "../_data/types";
import styles from "../style.module.css";
import { ClaySurface } from "./ClaySurface";
import { InitialAvatar } from "./InitialAvatar";

export type ExampleBoardProps = {
  title: string;
  steps: readonly BoardStep[];
  initialDone?: readonly number[];
  stepMessages?: Readonly<Record<string, string>>;
  allDoneMessage?: string;
  compact?: boolean;
  dayLabel?: string;
  className?: string;
};

const fallbackMessage = "You did it!";

function startingFlags(
  steps: readonly BoardStep[],
  initialDone: readonly number[] | undefined,
) {
  return steps.map((step, index) =>
    initialDone ? initialDone.includes(index) : step.status === "done",
  );
}

function statusFor(flags: readonly boolean[], index: number) {
  if (flags[index]) return { word: "Done", kind: "done" as const };
  const nextIndex = flags.findIndex((flag) => !flag);
  if (index === nextIndex) return { word: "Next up", kind: "next" as const };
  return { word: "Not started", kind: "todo" as const };
}

function StatusIcon({ kind }: { kind: "done" | "next" | "todo" }) {
  if (kind === "done") {
    return (
      <svg aria-hidden="true" viewBox="0 0 16 16">
        <circle cx="8" cy="8" r="7" />
        <path d="M4.5 8.2 7 10.5 11.5 5.5" />
      </svg>
    );
  }
  if (kind === "next") {
    return (
      <svg aria-hidden="true" viewBox="0 0 16 16">
        <circle cx="8" cy="8" r="6" />
        <path d="M8 4.5v4l2.2 1.4" />
      </svg>
    );
  }
  return (
    <svg aria-hidden="true" viewBox="0 0 16 16">
      <circle cx="8" cy="8" r="6" />
    </svg>
  );
}

export function ExampleBoard({
  title,
  steps,
  initialDone,
  stepMessages,
  allDoneMessage,
  compact = false,
  dayLabel,
  className,
}: ExampleBoardProps) {
  const headingId = useId();
  const [done, setDone] = useState(() => startingFlags(steps, initialDone));
  const [toast, setToast] = useState<string | null>(null);

  const total = steps.length;
  const doneCount = done.filter(Boolean).length;
  const nextIndex = done.findIndex((flag) => !flag);
  const allDone = total > 0 && doneCount === total;
  const percent = total === 0 ? 0 : Math.round((doneCount / total) * 100);

  function playSquash(row: HTMLElement) {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    row.animate(
      [
        { transform: "scale(1, 1)" },
        { transform: "scale(1.04, 0.92)", offset: 0.45 },
        { transform: "scale(1, 1)" },
      ],
      { duration: 200, easing: "ease-out" },
    );
  }

  function toggle(index: number, row: HTMLElement) {
    const willComplete = !done[index];
    setDone((current) => {
      const next = [...current];
      next[index] = !next[index];
      return next;
    });
    if (willComplete) {
      const step = steps[index];
      setToast(stepMessages?.[step.label] ?? step.message ?? fallbackMessage);
      playSquash(row);
      return;
    }
    setToast(null);
  }

  function reset() {
    setDone(startingFlags(steps, initialDone));
    setToast(null);
  }

  return (
    <ClaySurface
      className={cn(styles.board, compact && styles.boardCompact, className)}
    >
      <div className={styles.boardHeader}>
        <h2 className={styles.boardTitle} id={headingId}>
          {title}
        </h2>
        <span className={styles.badge}>{exampleBadgeLabel}</span>
        {dayLabel ? <span className={styles.day}>{dayLabel}</span> : null}
      </div>
      <ol className={styles.steps}>
        {steps.map((step, index) => {
          const status = statusFor(done, index);
          const owner = getMember(step.owner);
          return (
            <li key={step.label}>
              <label className={styles.step}>
                <input
                  checked={done[index] ?? false}
                  onChange={(event) => {
                    const row = event.currentTarget.closest("label");
                    if (row) toggle(index, row);
                  }}
                  type="checkbox"
                />
                <span className={styles.owner}>
                  <InitialAvatar memberId={step.owner} />
                  {owner ? <span>{owner.firstName}</span> : null}
                </span>
                <span className={styles.stepLabel}>{step.label}</span>
                <span className={styles.status} data-kind={status.kind}>
                  <StatusIcon kind={status.kind} />
                  {status.word}
                </span>
              </label>
            </li>
          );
        })}
      </ol>
      <Progress className={styles.progress} value={percent}>
        <ProgressLabel className={styles.progressLabel}>
          {doneCount} of {total} steps done
        </ProgressLabel>
      </Progress>
      {nextIndex >= 0 ? (
        <p className={styles.nextStep}>
          Today&apos;s next step: {steps[nextIndex]?.label}
        </p>
      ) : null}
      {toast ? (
        <p className={styles.toast} role="status">
          {toast}
        </p>
      ) : null}
      {allDone ? (
        <p className={styles.allDone}>
          {allDoneMessage ?? `All ${total} steps done. You did it!`}
        </p>
      ) : null}
      <button className={styles.reset} onClick={reset} type="button">
        Reset example
      </button>
    </ClaySurface>
  );
}
