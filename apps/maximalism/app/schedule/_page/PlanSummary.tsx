"use client";

import { ChevronDownIcon } from "@radix-ui/react-icons";
import { useId, useRef, useState } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogTitle,
} from "@/atoms/alert-dialog";
import { Button } from "@/atoms/button";
import { DayBadge } from "../../_components/Badges";
import { Sticker } from "../../_components/Sticker";
import { usePlan } from "../../_components/usePlan";
import { days, getArtist } from "../../_data/artists";
import { formatTime, sets, sortSets } from "../../_data/schedule";
import { getStage } from "../../_data/stages";
import { planCopy } from "./content";
import styles from "./schedule.module.css";

export const planHeadingId = "schedule-plan-heading";

/**
 * Side panel on wide screens, collapsible section below 70rem. The plan is
 * read from localStorage through usePlan (reads and writes are try/catch
 * wrapped there).
 */
export function PlanSummary() {
  const { plan, clear } = usePlan();
  const [open, setOpen] = useState(false);
  const bodyId = useId();
  const headingRef = useRef<HTMLHeadingElement>(null);
  /** Set by Clear: the trigger disappears, so focus lands on the heading. */
  const clearedRef = useRef(false);
  const clearWrapRef = useRef<HTMLDivElement>(null);
  const [confirmOpen, setConfirmOpen] = useState(false);

  const planned = sortSets(
    sets.filter((set) => plan.includes(set.slug)),
    "start",
  );
  const count = planned.length;

  return (
    <section aria-labelledby={planHeadingId} className={styles.plan}>
      <Sticker
        className={styles.planSticker}
        motion="spin"
        rotate={-8}
        shape="knob"
        size="3.25rem"
        tone="lime"
      />
      <header className={styles.planHead}>
        <h2
          className={styles.planHeading}
          id={planHeadingId}
          ref={headingRef}
          tabIndex={-1}
        >
          <button
            aria-controls={bodyId}
            aria-expanded={open}
            className={styles.planToggle}
            onClick={() => setOpen((value) => !value)}
            type="button"
          >
            <span>{planCopy.heading}</span>
            <span className={styles.planCount}>{planCopy.count(count)}</span>
            <ChevronDownIcon
              aria-hidden="true"
              className={styles.planChevron}
            />
          </button>
          <span className={styles.planHeadingText}>{planCopy.heading}</span>
        </h2>
        <p className={styles.planCountWide}>{planCopy.count(count)}</p>
      </header>

      <div className={styles.planBody} hidden={!open} id={bodyId}>
        {count === 0 ? (
          <p className={styles.planEmpty}>{planCopy.empty}</p>
        ) : (
          <>
            {days.map((day) => {
              const daySets = planned.filter((set) => set.day === day);
              if (daySets.length === 0) return null;
              return (
                <div className={styles.planDay} key={day}>
                  <h3 className={styles.planDayHeading}>
                    <DayBadge day={day} />
                  </h3>
                  <ol className={styles.planList}>
                    {daySets.map((set) => (
                      <li className={styles.planItem} key={set.slug}>
                        <time
                          className={styles.planTime}
                          dateTime={formatTime(set.startMinutes)}
                        >
                          {formatTime(set.startMinutes)}
                        </time>
                        <span className={styles.planAct}>
                          {getArtist(set.slug)?.name}
                        </span>
                        <span className={styles.planStage}>
                          {getStage(set.stageId).name}
                        </span>
                      </li>
                    ))}
                  </ol>
                </div>
              );
            })}
            <p className={styles.planNote}>{planCopy.savedNote}</p>
            <div className={styles.planClear} ref={clearWrapRef}>
              <Button
                onClick={() => setConfirmOpen(true)}
                size="sm"
                variant="secondary"
              >
                {planCopy.clear}
              </Button>
            </div>
          </>
        )}
      </div>
      <AlertDialog onOpenChange={setConfirmOpen} open={confirmOpen}>
        <AlertDialogContent
          className={styles.confirm}
          finalFocus={() => {
            // After Clear the button is gone, so focus lands on the heading.
            if (clearedRef.current) {
              clearedRef.current = false;
              return headingRef.current;
            }
            return clearWrapRef.current?.querySelector("button") ?? true;
          }}
        >
          <AlertDialogTitle className={styles.confirmTitle}>
            {planCopy.confirmTitle}
          </AlertDialogTitle>
          <AlertDialogDescription className={styles.confirmBody}>
            {planCopy.confirmBody}
          </AlertDialogDescription>
          <div className={styles.confirmActions}>
            <AlertDialogCancel>{planCopy.confirmKeep}</AlertDialogCancel>
            <AlertDialogAction
              onClick={() => {
                clearedRef.current = true;
                clear();
              }}
              variant="destructive"
            >
              {planCopy.confirmClear}
            </AlertDialogAction>
          </div>
        </AlertDialogContent>
      </AlertDialog>
    </section>
  );
}
