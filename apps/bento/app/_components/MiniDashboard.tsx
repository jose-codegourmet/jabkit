import { ExclamationTriangleIcon } from "@radix-ui/react-icons";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import {
  formatShortTime,
  nextVisits,
  overlaps,
  todayVisits,
} from "../_data/bookings";
import { followUps } from "../_data/customers";
import { DEMO_BUSINESS, DEMO_TODAY_LABEL } from "../_data/portal";
import { deskCoverage, getStaff, teamTileLine } from "../_data/staff";
import { getTile } from "../_data/tiles";
import { thisWeek } from "../_data/weekly";
import styles from "../style.module.css";
import { StatusBadge } from "./StatusBadge";
import { VisitsChart } from "./VisitsChart";

/**
 * A scaled, static preview of the /demo dashboard built from the same data and parts.
 * Nothing in it is a link: it is a picture of the portal, and the page around it holds
 * the real calls to action.
 */
export function MiniDashboard({
  caption,
  className,
}: {
  caption?: ReactNode;
  className?: string;
}) {
  const today = getTile("today");
  const bookings = getTile("bookings");
  const follow = getTile("follow-ups");
  const team = getTile("team");
  const trend = getTile("trend");

  return (
    <figure
      aria-label="Sample DAYMARK dashboard with demo data"
      className={cn(styles.mini, className)}
    >
      <div aria-hidden="true" className={styles.miniBar}>
        <span className={styles.miniDots}>
          <span />
          <span />
          <span />
        </span>
        <span>
          {DEMO_TODAY_LABEL} · {DEMO_BUSINESS}
        </span>
      </div>
      <div className={styles.miniGrid}>
        <section
          aria-label={today.label}
          className={cn(styles.miniTile, styles.miniToday)}
        >
          <p className={styles.tileLabel}>{today.label}</p>
          <p className={styles.miniFigure}>{today.primary}</p>
          <ul className={styles.miniList}>
            {nextVisits(3).map((visit) => (
              <li key={visit.id}>
                <time>{formatShortTime(visit.start)}</time>
                <span>
                  {visit.customer} · {visit.service} ·{" "}
                  {getStaff(visit.staffId).name}
                </span>
              </li>
            ))}
          </ul>
          <DayTimeline />
        </section>
        <section
          aria-label={bookings.label}
          className={cn(styles.miniTile, styles.miniHalf)}
          data-state="warning"
        >
          <p className={styles.miniFlag}>
            <ExclamationTriangleIcon aria-hidden="true" />
            Needs attention
          </p>
          <p className={styles.miniFigure}>{bookings.primary}</p>
          <StatusBadge status="needs-reply" />
        </section>
        <section
          aria-label={follow.label}
          className={cn(styles.miniTile, styles.miniHalf)}
        >
          <p className={styles.tileLabel}>{follow.label}</p>
          <p className={styles.miniFigure}>{follow.primary}</p>
          <p className={styles.miniCaption}>
            {followUps.map((customer) => customer.name).join(", ")}
          </p>
        </section>
        <section
          aria-label={team.label}
          className={cn(styles.miniTile, styles.miniWide, styles.miniHalf)}
        >
          <p className={styles.tileLabel}>{team.label}</p>
          <p className={styles.miniFigure}>{team.primary}</p>
          <p className={styles.miniCaption}>{teamTileLine}</p>
          <div aria-hidden="true" className={styles.miniProgress}>
            <span style={{ width: `${deskCoverage.percent}%` }} />
          </div>
          <p className={styles.miniCaption}>{deskCoverage.label}</p>
        </section>
        <section
          aria-label={trend.label}
          className={cn(styles.miniTile, styles.miniWide, styles.miniHalf)}
        >
          <p className={styles.tileLabel}>{trend.label}</p>
          <p className={styles.miniFigure}>{trend.primary}</p>
          <VisitsChart size="mini" textMode="caption" week={thisWeek} />
        </section>
      </div>
      {caption ? (
        <figcaption className={styles.miniCaption}>{caption}</figcaption>
      ) : null}
    </figure>
  );
}

const OPEN_HOUR = 8;
const CLOSE_HOUR = 18;

function minutesFromOpen(start: string) {
  const [hours, minutes] = start.split(":").map(Number);
  return (hours - OPEN_HOUR) * 60 + minutes;
}

/** Today's visits placed on an 8:00–6:00 strip; the overlapping pair is marked. */
export function DayTimeline() {
  const span = (CLOSE_HOUR - OPEN_HOUR) * 60;
  const overlapping = new Set(overlaps().flatMap((item) => item.ids));
  const hours = [8, 10, 12, 14, 16, 18];
  return (
    <div aria-hidden="true" className={styles.timeline}>
      <div className={styles.timelineTrack}>
        {todayVisits().map((visit, index) => (
          <span
            className={styles.timelineVisit}
            data-overlap={overlapping.has(visit.id) || undefined}
            key={visit.id}
            style={{
              left: `${(minutesFromOpen(visit.start) / span) * 100}%`,
              width: `${(visit.lengthMinutes / span) * 100}%`,
              top: overlapping.has(visit.id) && index % 2 === 0 ? "50%" : 0,
              height: overlapping.has(visit.id) ? "50%" : "100%",
            }}
          />
        ))}
      </div>
      <div className={styles.timelineHours}>
        {hours.map((hour) => (
          <span key={hour}>{hour > 12 ? hour - 12 : hour}</span>
        ))}
      </div>
    </div>
  );
}
