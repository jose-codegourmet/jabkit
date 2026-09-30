import {
  type Booking,
  formatDate,
  formatShortTime,
  formatTime,
  type Service,
} from "../../../_data/bookings";
import { bookableStaff, type StaffId } from "../../../_data/staff";
import { calendarGrid } from "./content";

export type CalendarView = "day" | "week";
export const calendarViews: readonly CalendarView[] = ["day", "week"];

/** The day grid runs 8:00 am – 6:00 pm in 5-minute rows. */
export const DAY_START = 8 * 60;
export const DAY_END = 18 * 60;
export const SLOT_MINUTES = 5;
export const TOTAL_SLOTS = (DAY_END - DAY_START) / SLOT_MINUTES;
export const HOURS = Array.from(
  { length: (DAY_END - DAY_START) / 60 + 1 },
  (_, index) => DAY_START / 60 + index,
);

export const bookableStaffIds: StaffId[] = bookableStaff.map(
  (person) => person.id,
);

/** Default visit lengths for visits added in the demo dialog. */
export const serviceLengths: Record<Service, number> = {
  Consultation: 45,
  "Follow-up visit": 45,
  "Standard session": 60,
};

export function toMinutes(value: string): number {
  const [hours, minutes] = value.split(":").map(Number);
  return hours * 60 + minutes;
}

export function fromMinutes(total: number): string {
  const hours = Math.floor(total / 60);
  const minutes = total % 60;
  return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}`;
}

export function endMinutes(visit: Booking): number {
  return toMinutes(visit.start) + visit.lengthMinutes;
}

/** "9:00–10:00 am", "11:30 am–12:30 pm". */
export function formatRange(visit: Booking): string {
  const start = formatTime(visit.start);
  const end = formatTime(fromMinutes(endMinutes(visit)));
  return start.slice(-2) === end.slice(-2)
    ? `${formatShortTime(visit.start)}–${end}`
    : `${start}–${end}`;
}

/** "8:00 am" for the time axis. */
export function hourLabel(hour: number): string {
  return formatTime(fromMinutes(hour * 60));
}

/* ---------- Timezone-independent ISO date helpers (never `new Date()` for today) ---------- */

function parseIso(iso: string): number {
  const [year, month, day] = iso.split("-").map(Number);
  return Date.UTC(year, month - 1, day);
}

export function isIsoDate(value: string): boolean {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) return false;
  const time = parseIso(value);
  return (
    !Number.isNaN(time) && new Date(time).toISOString().slice(0, 10) === value
  );
}

export function addDays(iso: string, amount: number): string {
  return new Date(parseIso(iso) + amount * 86_400_000)
    .toISOString()
    .slice(0, 10);
}

/** 0 = Sunday … 6 = Saturday. */
export function weekdayOf(iso: string): number {
  return new Date(parseIso(iso)).getUTCDay();
}

/** Monday-to-Sunday week containing `iso`. */
export function weekDates(iso: string): string[] {
  const monday = addDays(iso, -((weekdayOf(iso) + 6) % 7));
  return Array.from({ length: 7 }, (_, index) => addDays(monday, index));
}

export function dayNumber(iso: string): number {
  return Number(iso.slice(8, 10));
}

export function headingFor(view: CalendarView, date: string): string {
  return view === "day"
    ? formatDate(date)
    : `${calendarGrid.weekOf} ${formatDate(weekDates(date)[0])}`;
}

/* ---------- Visits and overlaps ---------- */

/** Calendar visits: cancelled bookings are not placed on the calendar. */
export function visitsOn(
  all: Booking[],
  date: string,
  staffIds: readonly StaffId[],
): Booking[] {
  return all
    .filter(
      (item) =>
        item.date === date &&
        item.status !== "cancelled" &&
        staffIds.includes(item.staffId),
    )
    .sort(
      (a, b) =>
        toMinutes(a.start) - toMinutes(b.start) ||
        bookableStaffIds.indexOf(a.staffId) -
          bookableStaffIds.indexOf(b.staffId),
    );
}

export type VisitEntry = { kind: "visit"; key: string; visit: Booking };
export type OverlapEntry = {
  kind: "overlap";
  key: string;
  staffId: StaffId;
  start: number;
  end: number;
  visits: Booking[];
};
export type DayEntry = VisitEntry | OverlapEntry;

/**
 * Groups one day's visits into single visits and overlap clusters
 * (same staff member, time ranges that intersect), in start order.
 */
export function dayEntries(visits: Booking[]): DayEntry[] {
  const entries: DayEntry[] = [];
  for (const staffId of bookableStaffIds) {
    const own = visits.filter((item) => item.staffId === staffId);
    let cluster: Booking[] = [];
    let clusterEnd = -1;
    const flush = () => {
      if (cluster.length === 1) {
        entries.push({ kind: "visit", key: cluster[0].id, visit: cluster[0] });
      } else if (cluster.length > 1) {
        entries.push({
          kind: "overlap",
          key: cluster.map((item) => item.id).join("-"),
          staffId,
          start: toMinutes(cluster[0].start),
          end: clusterEnd,
          visits: cluster,
        });
      }
    };
    for (const visit of own) {
      if (cluster.length > 0 && toMinutes(visit.start) < clusterEnd) {
        cluster.push(visit);
        clusterEnd = Math.max(clusterEnd, endMinutes(visit));
      } else {
        flush();
        cluster = [visit];
        clusterEnd = endMinutes(visit);
      }
    }
    flush();
  }
  const startOf = (entry: DayEntry) =>
    entry.kind === "visit" ? toMinutes(entry.visit.start) : entry.start;
  const staffOf = (entry: DayEntry) =>
    entry.kind === "visit" ? entry.visit.staffId : entry.staffId;
  return entries.sort(
    (a, b) =>
      startOf(a) - startOf(b) ||
      bookableStaffIds.indexOf(staffOf(a)) -
        bookableStaffIds.indexOf(staffOf(b)),
  );
}

/** Ids of every visit that sits in an overlap cluster on its day. */
export function overlapIdsFor(visits: Booking[]): Set<string> {
  const ids = new Set<string>();
  for (const entry of dayEntries(visits)) {
    if (entry.kind === "overlap") {
      for (const item of entry.visits) ids.add(item.id);
    }
  }
  return ids;
}

/** Grid rows (1-based) for a time range, clamped to the 8:00–18:00 grid. */
export function rowsFor(start: number, end: number) {
  const minimum = 45;
  const from = Math.min(Math.max(start, DAY_START), DAY_END - minimum);
  const to = Math.min(Math.max(end, from + minimum), DAY_END);
  return {
    start: Math.floor((from - DAY_START) / SLOT_MINUTES) + 1,
    end: Math.ceil((to - DAY_START) / SLOT_MINUTES) + 1,
  };
}
