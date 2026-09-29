"use client";

import { useId, useState } from "react";
import { Badge } from "@/atoms/badge";
import { Checkbox } from "@/atoms/checkbox";
import { Progress, ProgressLabel } from "@/atoms/progress";
import { ClaySurface } from "../_components/ClaySurface";
import { InitialAvatar } from "../_components/InitialAvatar";
import { getMember } from "../_data/members";
import { homeMorningBoard } from "../_data/routines";
import { exampleBadgeLabel } from "../_data/site";
import type { BoardStep, MemberId } from "../_data/types";
import shared from "../style.module.css";
import styles from "./home.module.css";

const steps = homeMorningBoard.steps;

function startingFlags(items: readonly BoardStep[]) {
  return items.map((step) => step.status === "done");
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

function peopleOnBoard(items: readonly BoardStep[]): MemberId[] {
  const seen = new Set<MemberId>();
  const people: MemberId[] = [];
  for (const step of items) {
    if (seen.has(step.owner)) continue;
    seen.add(step.owner);
    people.push(step.owner);
  }
  return people;
}

export function ProductPreview() {
  const headingId = useId();
  const [done, setDone] = useState(() => startingFlags(steps));
  const [toast, setToast] = useState<string | null>(null);

  const total = steps.length;
  const doneCount = done.filter(Boolean).length;
  const nextIndex = done.findIndex((flag) => !flag);
  const allDone = total > 0 && doneCount === total;
  const percent = total === 0 ? 0 : Math.round((doneCount / total) * 100);
  const people = peopleOnBoard(steps);

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

  function reset() {
    setDone(startingFlags(steps));
    setToast(null);
  }

  return (
    <section aria-labelledby={headingId} className={styles.section}>
      <div className={styles.sectionIntro}>
        <h2 className="jk-heading" id={headingId}>
          A little clarity for the whole crew.
        </h2>
        <p className="jk-body">
          Here is a real-looking morning board. Try ticking a step.
        </p>
      </div>
      <div className={styles.mosaic}>
        <ClaySurface className={shared.board}>
          <div className={shared.boardHeader}>
            <h3 className={shared.boardTitle}>{homeMorningBoard.title}</h3>
            <Badge className={shared.badge}>{exampleBadgeLabel}</Badge>
            <span className={shared.day}>{homeMorningBoard.dayLabel}</span>
          </div>
          <ol className={shared.steps}>
            {steps.map((step, index) => {
              const status = statusFor(done, index);
              const owner = getMember(step.owner);
              return (
                <li key={step.label}>
                  <label
                    className={shared.step}
                    htmlFor={`home-step-check-${index}`}
                    id={`home-step-row-${index}`}
                  >
                    <Checkbox
                      aria-label={`${step.label}, ${status.word}`}
                      checked={done[index] ?? false}
                      className={`${styles.check} size-6`}
                      id={`home-step-check-${index}`}
                      onCheckedChange={(checked) => {
                        const nextChecked = checked === true;
                        const row = document.getElementById(
                          `home-step-row-${index}`,
                        );
                        setDone((current) => {
                          const next = [...current];
                          next[index] = nextChecked;
                          return next;
                        });
                        if (nextChecked) {
                          setToast(
                            step.message ?? homeMorningBoard.genericMessage,
                          );
                          if (row) playSquash(row);
                          return;
                        }
                        setToast(null);
                      }}
                    />
                    <span className={shared.owner}>
                      <InitialAvatar memberId={step.owner} />
                      {owner ? <span>{owner.firstName}</span> : null}
                    </span>
                    <span className={shared.stepLabel}>{step.label}</span>
                    <span className={shared.status} data-kind={status.kind}>
                      <StatusIcon kind={status.kind} />
                      {status.word}
                    </span>
                  </label>
                </li>
              );
            })}
          </ol>
        </ClaySurface>

        <ClaySurface className={styles.progressTile} tone="mint">
          <Progress className={shared.progress} value={percent}>
            <ProgressLabel className={shared.progressLabel}>
              {doneCount} of {total} steps done
            </ProgressLabel>
          </Progress>
          {nextIndex >= 0 ? (
            <p className={shared.nextStep}>
              Today&apos;s next step: {steps[nextIndex]?.label}
            </p>
          ) : null}
          {toast ? (
            <p className={shared.toast} role="status">
              {toast}
            </p>
          ) : null}
          {allDone ? (
            <p className={shared.allDone}>{homeMorningBoard.allDone}</p>
          ) : null}
          <button className={shared.reset} onClick={reset} type="button">
            {homeMorningBoard.resetLabel}
          </button>
        </ClaySurface>

        <ClaySurface className={styles.peopleTile} tone="lavender">
          <ul className={styles.peopleList}>
            {people.map((memberId) => {
              const member = getMember(memberId);
              if (!member) return null;
              return (
                <li key={memberId}>
                  <InitialAvatar memberId={memberId} size="lg" />
                  <span>{member.firstName}</span>
                </li>
              );
            })}
          </ul>
        </ClaySurface>
      </div>
    </section>
  );
}
