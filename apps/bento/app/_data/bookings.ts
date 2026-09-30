import type { Route } from "next";
import { DEMO_TODAY } from "./portal";
import type { StaffId } from "./staff";

export type BookingStatus = "needs-reply" | "confirmed" | "cancelled";

export const services = [
  "Consultation",
  "Follow-up visit",
  "Standard session",
] as const;

export type Service = (typeof services)[number];

export type Booking = {
  id: string;
  customerId: string;
  customer: string;
  service: Service;
  /** ISO date, e.g. "2026-10-13". */
  date: string;
  /** 24-hour start time, e.g. "09:00". */
  start: string;
  lengthMinutes: number;
  staffId: StaffId;
  status: BookingStatus;
  note: string;
  phone: "Demo number";
};

function booking(
  id: string,
  customer: string,
  service: Service,
  date: string,
  start: string,
  lengthMinutes: number,
  staffId: StaffId,
  status: BookingStatus,
  note: string,
): Booking {
  return {
    id,
    customerId: `c-${customer.toLowerCase().replace(/\s+/g, "-")}`,
    customer,
    service,
    date,
    start,
    lengthMinutes,
    staffId,
    status,
    note,
    phone: "Demo number",
  };
}

/** Fictional demo bookings for Juniper Street Studio. Today is Tuesday 2026-10-13. */
export const bookings: Booking[] = [
  booking(
    "b01",
    "Mara Quinn",
    "Consultation",
    DEMO_TODAY,
    "09:00",
    60,
    "sam",
    "confirmed",
    "First visit. Prefers morning appointments.",
  ),
  booking(
    "b02",
    "Theo Park",
    "Follow-up visit",
    DEMO_TODAY,
    "09:45",
    45,
    "ana",
    "confirmed",
    "Recovering from a shoulder strain; keep the session gentle.",
  ),
  booking(
    "b03",
    "Lina Ortiz",
    "Standard session",
    DEMO_TODAY,
    "10:30",
    60,
    "sam",
    "confirmed",
    "Regular fortnightly booking.",
  ),
  booking(
    "b04",
    "Jo Bennett",
    "Standard session",
    DEMO_TODAY,
    "11:30",
    60,
    "ana",
    "confirmed",
    "Asked about moving to a later slot next month.",
  ),
  booking(
    "b05",
    "Nadia Brooks",
    "Consultation",
    DEMO_TODAY,
    "12:30",
    45,
    "kai",
    "confirmed",
    "Booked by phone.",
  ),
  booking(
    "b06",
    "Ellis Grant",
    "Standard session",
    DEMO_TODAY,
    "14:00",
    60,
    "sam",
    "confirmed",
    "Parking note: arrives by bike.",
  ),
  booking(
    "b07",
    "Ruth Adeyemi",
    "Follow-up visit",
    DEMO_TODAY,
    "14:00",
    45,
    "sam",
    "needs-reply",
    "Requested online; overlaps with another 2:00 pm booking for Sam.",
  ),
  booking(
    "b08",
    "Marco Silva",
    "Standard session",
    DEMO_TODAY,
    "15:30",
    60,
    "kai",
    "confirmed",
    "No notes.",
  ),
  booking(
    "b09",
    "Hana Mori",
    "Consultation",
    "2026-10-14",
    "10:00",
    45,
    "ana",
    "needs-reply",
    "New customer. Asked for a morning slot.",
  ),
  booking(
    "b10",
    "Owen Hart",
    "Standard session",
    "2026-10-15",
    "16:00",
    60,
    "kai",
    "needs-reply",
    "Changed from Wednesday.",
  ),
  booking(
    "b11",
    "Priya Shah",
    "Follow-up visit",
    "2026-10-16",
    "09:30",
    45,
    "sam",
    "confirmed",
    "No notes.",
  ),
  booking(
    "b12",
    "Ben Okafor",
    "Standard session",
    "2026-10-17",
    "11:00",
    60,
    "ana",
    "cancelled",
    "Cancelled by customer.",
  ),
];

export const bookingIds = bookings.map((item) => item.id);

export function getBooking(id: string): Booking | undefined {
  return bookings.find((item) => item.id === id);
}

export function bookingHref(id: string): Route {
  return `/demo/bookings/${id}` as Route;
}

function byStart(a: Booking, b: Booking) {
  return `${a.date}T${a.start}`.localeCompare(`${b.date}T${b.start}`);
}

/** The 8 visits on DEMO_TODAY in start order. */
export function todayVisits(): Booking[] {
  return bookings.filter((item) => item.date === DEMO_TODAY).sort(byStart);
}

export function nextVisits(count: number): Booking[] {
  return todayVisits().slice(0, count);
}

export const needsReply = bookings.filter(
  (item) => item.status === "needs-reply",
);

export type Overlap = { time: string; staffId: StaffId; ids: string[] };

/** Same staff member, same start time, on the same day. */
export function overlaps(): Overlap[] {
  const groups = new Map<string, Booking[]>();
  for (const item of bookings) {
    if (item.status === "cancelled") continue;
    const key = `${item.date}|${item.start}|${item.staffId}`;
    groups.set(key, [...(groups.get(key) ?? []), item]);
  }
  return [...groups.values()]
    .filter((group) => group.length > 1)
    .map((group) => ({
      time: group[0].start,
      staffId: group[0].staffId,
      ids: group.map((item) => item.id),
    }));
}

export const statusCounts: Record<BookingStatus, number> = {
  "needs-reply": bookings.filter((item) => item.status === "needs-reply")
    .length,
  confirmed: bookings.filter((item) => item.status === "confirmed").length,
  cancelled: bookings.filter((item) => item.status === "cancelled").length,
};

export const statusLabels: Record<BookingStatus, string> = {
  "needs-reply": "Needs reply",
  confirmed: "Confirmed",
  cancelled: "Cancelled",
};

/** "14:00" -> "2:00 pm", "09:00" -> "9:00 am". */
export function formatTime(value: string): string {
  const [hours, minutes] = value.split(":").map(Number);
  const suffix = hours >= 12 ? "pm" : "am";
  const hour12 = hours % 12 === 0 ? 12 : hours % 12;
  return `${hour12}:${String(minutes).padStart(2, "0")} ${suffix}`;
}

/** "09:45" -> "9:45" (dashboard rows use the compact form without am/pm). */
export function formatShortTime(value: string): string {
  const [hours, minutes] = value.split(":").map(Number);
  const hour12 = hours % 12 === 0 ? 12 : hours % 12;
  return `${hour12}:${String(minutes).padStart(2, "0")}`;
}

const weekdayNames = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

/** Timezone-independent date formatting: "2026-10-13" -> "Tuesday 13 October". */
export function formatDate(iso: string): string {
  const [year, month, day] = iso.split("-").map(Number);
  const weekday = new Date(Date.UTC(year, month - 1, day)).getUTCDay();
  return `${weekdayNames[weekday]} ${day} ${monthNames[month - 1]}`;
}

/** "2026-10-13" -> "Tue 13 Oct". */
export function formatShortDate(iso: string): string {
  const [year, month, day] = iso.split("-").map(Number);
  const weekday = new Date(Date.UTC(year, month - 1, day)).getUTCDay();
  return `${weekdayNames[weekday].slice(0, 3)} ${day} ${monthNames[month - 1].slice(0, 3)}`;
}
