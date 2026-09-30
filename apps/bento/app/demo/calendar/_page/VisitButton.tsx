import { ExclamationTriangleIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/cn";
import { StatusBadge } from "../../../_components/StatusBadge";
import { type Booking, formatTime } from "../../../_data/bookings";
import { getStaff } from "../../../_data/staff";
import styles from "./calendar.module.css";
import { formatRange } from "./calendar-data";
import { calendarGrid } from "./content";

export type OpenVisit = (visit: Booking, opener: HTMLButtonElement) => void;

/** One visit: always a real button that opens the booking side panel. */
export function VisitButton({
  visit,
  onOpen,
  compact = false,
  overlap = false,
  className,
}: {
  visit: Booking;
  onOpen: OpenVisit;
  /** Week view: start time only, text may wrap. */
  compact?: boolean;
  /** Week view marks overlapping visits on the chip itself. */
  overlap?: boolean;
  className?: string;
}) {
  return (
    <button
      aria-haspopup="dialog"
      className={cn(styles.visit, compact && styles.visitCompact, className)}
      data-staff={visit.staffId}
      onClick={(event) => onOpen(visit, event.currentTarget)}
      type="button"
    >
      <span className={styles.visitTime}>
        {compact ? formatTime(visit.start) : formatRange(visit)}
      </span>
      <span className={styles.visitName}>{visit.customer}</span>
      <span className={styles.visitMeta}>
        {visit.service} · {getStaff(visit.staffId).name}
      </span>
      {overlap ? (
        <span className={styles.flag}>
          <ExclamationTriangleIcon aria-hidden="true" />
          {calendarGrid.overlap}
        </span>
      ) : null}
      {visit.status === "needs-reply" ? (
        <StatusBadge className={styles.visitStatus} status={visit.status} />
      ) : null}
    </button>
  );
}
