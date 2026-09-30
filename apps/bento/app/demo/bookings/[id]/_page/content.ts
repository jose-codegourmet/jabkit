import type { Route } from "next";

export const bookingDetailSeo = {
  title: (customer: string) => `${customer} booking — DAYMARK demo`,
  description:
    "Sample booking detail in DAYMARK: time, staff, notes and confirm or reschedule actions. Fictional demo data.",
  notFoundTitle: "Booking not found — DAYMARK demo",
} as const;

export const bookingDetailHeader = {
  title: (customer: string, service: string) => `${customer} · ${service}`,
} as const;

export const summaryTiles = {
  when: "When",
  today: "Today",
  length: (minutes: number) => `${minutes} minutes`,
  with: "With",
  customer: "Customer",
  viewCustomer: "View customer",
  notes: "Notes",
} as const;

export const bookingActions = {
  heading: "Actions",
  confirm: "Confirm booking",
  reschedule: "Reschedule",
  decline: "Decline",
  confirmed: (customer: string) =>
    `Booking confirmed. ${customer} is now on the calendar.`,
  rescheduleNote: "Rescheduling isn't available in this demo.",
  declined: "Booking declined. The customer won't be notified in this demo.",
  dialog: {
    title: "Decline this booking?",
    body: "The customer won't be notified in this demo.",
    confirm: "Decline booking",
    cancel: "Keep booking",
  },
} as const;

export const bookingNotFound = {
  title: "We couldn't find that booking.",
  body: "It may have been removed from the demo.",
  link: { label: "Back to bookings", href: "/demo/bookings" as Route },
} as const;
