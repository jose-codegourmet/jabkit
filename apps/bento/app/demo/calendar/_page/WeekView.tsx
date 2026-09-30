import type { Booking } from "../../../_data/bookings";
import { formatDate } from "../../../_data/bookings";
import { DEMO_TODAY } from "../../../_data/portal";
import styles from "./calendar.module.css";
import { dayNumber } from "./calendar-data";
import { calendarGrid, emptyDay } from "./content";
import { type OpenVisit, VisitButton } from "./VisitButton";

export type WeekDay = {
  date: string;
  visits: Booking[];
  overlapIds: Set<string>;
};

/**
 * Monday–Sunday overview. Stacks by day below 768px; from 768px it is seven
 * columns inside a labelled, focusable region that scrolls on its own when narrow.
 */
export function WeekView({
  days,
  selected,
  onOpen,
  onOpenDay,
}: {
  days: WeekDay[];
  selected: string;
  onOpen: OpenVisit;
  onOpenDay: (date: string) => void;
}) {
  return (
    <section
      aria-label={calendarGrid.weekRegion}
      className={styles.weekScroll}
      // biome-ignore lint/a11y/noNoninteractiveTabindex: scrollable region must be keyboard reachable
      tabIndex={0}
    >
      <ol className={styles.week}>
        {days.map((day) => {
          const [weekday] = formatDate(day.date).split(" ");
          const isToday = day.date === DEMO_TODAY;
          return (
            <li
              aria-current={isToday ? "date" : undefined}
              className={styles.weekDay}
              data-selected={day.date === selected || undefined}
              key={day.date}
            >
              <button
                className={styles.weekDayHead}
                onClick={() => onOpenDay(day.date)}
                type="button"
              >
                <span className={styles.srOnly}>{formatDate(day.date)}</span>
                <span aria-hidden="true" className={styles.weekDayName}>
                  {weekday.slice(0, 3)}
                </span>
                <span aria-hidden="true" className={styles.weekDayNum}>
                  {dayNumber(day.date)}
                </span>
                {isToday ? (
                  <span className={styles.todayTag}>
                    {calendarGrid.todayTag}
                  </span>
                ) : null}
              </button>
              {day.visits.length > 0 ? (
                <ul className={styles.weekVisits}>
                  {day.visits.map((visit) => (
                    <li key={visit.id}>
                      <VisitButton
                        compact
                        onOpen={onOpen}
                        overlap={day.overlapIds.has(visit.id)}
                        visit={visit}
                      />
                    </li>
                  ))}
                </ul>
              ) : (
                <p className={styles.weekEmpty}>{emptyDay.message}</p>
              )}
            </li>
          );
        })}
      </ol>
    </section>
  );
}
