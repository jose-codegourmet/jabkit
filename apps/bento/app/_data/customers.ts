import type { Route } from "next";
import { bookings } from "./bookings";
import { DEMO_TODAY } from "./portal";

export type Customer = {
  /** Slug such as "c-mara-quinn" (matches Booking.customerId). */
  id: string;
  name: string;
  /** ISO date of the last visit, or null for a new customer. */
  lastVisit: string | null;
  /** ISO date of the next booked visit, derived from bookings. */
  nextVisit: string | null;
  followUp: { reason: string } | null;
};

/** Plan-chosen last visits (fictional). Hana Mori is a new customer. */
const lastVisits: Record<string, string | null> = {
  "Mara Quinn": null,
  "Theo Park": "2026-10-06",
  "Lina Ortiz": "2026-09-29",
  "Jo Bennett": "2026-10-01",
  "Nadia Brooks": "2026-09-17",
  "Ellis Grant": "2026-09-24",
  "Ruth Adeyemi": "2026-09-22",
  "Marco Silva": "2026-10-02",
  "Hana Mori": null,
  "Owen Hart": "2026-09-30",
  "Priya Shah": "2026-10-07",
  "Ben Okafor": "2026-09-19",
};

const followUpReasons: Record<string, string> = {
  "Theo Park": "Check how recovery is going",
  "Jo Bennett": "Send rebooking options",
};

function nextVisitFor(name: string): string | null {
  const upcoming = bookings
    .filter(
      (item) =>
        item.customer === name &&
        item.status !== "cancelled" &&
        item.date >= DEMO_TODAY,
    )
    .map((item) => item.date)
    .sort();
  return upcoming[0] ?? null;
}

export const customers: Customer[] = bookings.map((item) => ({
  id: item.customerId,
  name: item.customer,
  lastVisit: lastVisits[item.customer] ?? null,
  nextVisit: nextVisitFor(item.customer),
  followUp: followUpReasons[item.customer]
    ? { reason: followUpReasons[item.customer] }
    : null,
}));

export function getCustomer(id: string): Customer | undefined {
  return customers.find((item) => item.id === id);
}

export const followUps = customers.filter((item) => item.followUp !== null);

export function customerHref(id: string): Route {
  return `/demo/customers#${id}` as Route;
}
