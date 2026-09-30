import { ExclamationTriangleIcon } from "@radix-ui/react-icons";
import type { CSSProperties } from "react";
import { formatTime } from "../../../_data/bookings";
import { getStaff, type StaffId } from "../../../_data/staff";
import styles from "./calendar.module.css";
import {
  bookableStaffIds,
  type DayEntry,
  fromMinutes,
  HOURS,
  hourLabel,
  rowsFor,
  SLOT_MINUTES,
  toMinutes,
} from "./calendar-data";
import { calendarGrid } from "./content";
import { type OpenVisit, VisitButton } from "./VisitButton";

type Vars = CSSProperties & Record<`--${string}`, string | number>;

function placement(
  lane: number,
  start: number,
  end: number,
  extra: Vars = {},
): Vars {
  const rows = rowsFor(start, end);
  return {
    "--lane": lane,
    "--row-start": rows.start,
    "--row-end": rows.end,
    ...extra,
  };
}

/**
 * One day on a time grid (8:00 am – 6:00 pm), one lane per selected staff member.
 * The DOM is a single chronological list, so below 768px it reads as a stacked
 * agenda and from 768px CSS places each entry on the grid by lane and time.
 */
export function DayView({
  entries,
  staffIds,
  onOpen,
}: {
  entries: DayEntry[];
  staffIds: readonly StaffId[];
  onOpen: OpenVisit;
}) {
  const lanes = bookableStaffIds.filter((id) => staffIds.includes(id));
  const laneOf = (id: StaffId) => lanes.indexOf(id) + 1;
  let overlapIndex = 0;

  return (
    <div className={styles.day} style={{ "--lanes": lanes.length } as Vars}>
      <div aria-hidden="true" className={styles.laneHeads}>
        <span />
        {lanes.map((id) => {
          const person = getStaff(id);
          return (
            <span className={styles.laneHead} data-staff={id} key={id}>
              <span className={styles.chipDot} />
              {person.name}
              {person.shift ? <small>{person.shift}</small> : null}
            </span>
          );
        })}
      </div>

      <div className={styles.board}>
        <div aria-hidden="true" className={styles.axis}>
          {HOURS.map((hour) => (
            <span
              key={hour}
              style={{ "--h": hour - HOURS[0] } as Vars}
              className={styles.axisLabel}
            >
              {hourLabel(hour)}
            </span>
          ))}
        </div>

        <div className={styles.track}>
          <div aria-hidden="true" className={styles.backdrop}>
            {lanes.map((id) => (
              <span className={styles.laneTrack} key={id} />
            ))}
          </div>

          <ol className={styles.entries}>
            {entries.map((entry) => {
              if (entry.kind === "visit") {
                const start = toMinutes(entry.visit.start);
                return (
                  <li
                    className={styles.entry}
                    key={entry.key}
                    style={placement(
                      laneOf(entry.visit.staffId),
                      start,
                      start + entry.visit.lengthMinutes,
                    )}
                  >
                    <VisitButton onOpen={onOpen} visit={entry.visit} />
                  </li>
                );
              }

              overlapIndex += 1;
              const flagId = `overlap-flag-${entry.key}`;
              const span = (entry.end - entry.start) / SLOT_MINUTES;
              return (
                <li
                  aria-labelledby={flagId}
                  className={styles.overlapGroup}
                  id={
                    overlapIndex === 1 ? "overlap" : `overlap-${overlapIndex}`
                  }
                  key={entry.key}
                  style={placement(
                    laneOf(entry.staffId),
                    entry.start,
                    entry.end,
                    { "--span": span },
                  )}
                  tabIndex={-1}
                >
                  <p className={styles.flag} id={flagId}>
                    <ExclamationTriangleIcon aria-hidden="true" />
                    {calendarGrid.overlap}
                    <span className={styles.srOnly}>
                      {calendarGrid.overlapDetail(
                        formatTime(fromMinutes(entry.start)),
                        getStaff(entry.staffId).name,
                        entry.visits.length,
                      )}
                    </span>
                  </p>
                  <ul className={styles.overlapList}>
                    {entry.visits.map((visit) => (
                      <li
                        key={visit.id}
                        style={
                          {
                            "--offset":
                              (toMinutes(visit.start) - entry.start) /
                              SLOT_MINUTES,
                            "--len": visit.lengthMinutes / SLOT_MINUTES,
                          } as Vars
                        }
                      >
                        <VisitButton onOpen={onOpen} visit={visit} />
                      </li>
                    ))}
                  </ul>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </div>
  );
}
