import type { Route } from "next";
import type { FilterTabItem } from "../../../_components/FilterTabs";
import { type BookingStatus, statusCounts } from "../../../_data/bookings";

export const bookingsSeo = {
  title: "Bookings — DAYMARK demo",
  description:
    "A sample DAYMARK bookings table with filters for bookings that need a reply. Fictional demo data.",
} as const;

export const bookingsHeader = {
  title: "Bookings",
  sub: "All upcoming bookings for Juniper Street Studio (demo).",
} as const;

export const bookingsPath = "/demo/bookings" as Route;

/** Values accepted by ?status=. "All" clears the param. */
export const statusFilters: readonly BookingStatus[] = [
  "needs-reply",
  "confirmed",
  "cancelled",
];

export const bookingFiltersLabel = "Filter bookings by status";

export const bookingFilterTabs: FilterTabItem[] = [
  { label: "All", value: null },
  {
    label: `Needs reply (${statusCounts["needs-reply"]})`,
    value: "needs-reply",
  },
  { label: "Confirmed", value: "confirmed" },
  { label: "Cancelled", value: "cancelled" },
];

export const bookingSearch = {
  id: "booking-search",
  label: "Search bookings",
  placeholder: "Customer or service",
} as const;

export const bookingTable = {
  caption: "Bookings",
  sortedAscending: "sorted by date and time, earliest first",
  sortedDescending: "sorted by date and time, latest first",
  columns: {
    customer: "Customer",
    service: "Service",
    date: "Date and time",
    staff: "Staff",
    status: "Status",
    action: "Action",
  },
  review: "Review",
  /** Screen-reader suffix so each "Review" link names its booking. */
  reviewFor: (customer: string) => ` booking for ${customer}`,
  /** Screen-reader announcement when the search or filter changes the rows. */
  shown: (count: number) =>
    count === 1 ? "1 booking shown." : `${count} bookings shown.`,
} as const;

export const bookingStates = {
  loading: "Loading bookings…",
  emptyFilter: "No bookings match this filter.",
  clearFilter: "Clear filter",
  emptyNeedsReply: "All bookings have a reply.",
  error: "Bookings couldn't load. Try again.",
  retry: "Try again",
} as const;
