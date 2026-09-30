import { formatShortTime, todayVisits } from "../_data/bookings";
import { getStaff } from "../_data/staff";
import { taskColumns, tasks } from "../_data/tasks";
import styles from "../style.module.css";
import { StatusBadge } from "./StatusBadge";

/**
 * Tiny code-built previews for drill-down cards. They are decorative (aria-hidden):
 * the card title around them gives the link its name.
 */

export function MiniTable() {
  const rows = todayVisits().slice(4, 7);
  return (
    <div aria-hidden="true" className={styles.preview}>
      {rows.map((row) => (
        <div className={styles.previewRow} key={row.id}>
          <span>{formatShortTime(row.start)}</span>
          <span>{row.customer}</span>
          <StatusBadge status={row.status} />
        </div>
      ))}
    </div>
  );
}

export function MiniKanban() {
  return (
    <div aria-hidden="true" className={styles.preview}>
      <div className={styles.previewColumns}>
        {taskColumns.map((column) => {
          const first = tasks.find((task) => task.columnId === column.id);
          return (
            <div className={styles.previewColumn} key={column.id}>
              <span>{column.title}</span>
              {first ? (
                <span className={styles.previewChip}>{first.title}</span>
              ) : null}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export function MiniCalendarColumn() {
  const visits = todayVisits().slice(0, 4);
  return (
    <div
      aria-hidden="true"
      className={`${styles.preview} ${styles.previewDay}`}
    >
      {visits.map((visit) => (
        <div className={styles.previewSlot} key={visit.id}>
          <time>{formatShortTime(visit.start)}</time>
          <span className={styles.previewVisit}>
            {visit.customer} · {getStaff(visit.staffId).name}
          </span>
        </div>
      ))}
    </div>
  );
}
