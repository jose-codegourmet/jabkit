export const customersSeo = {
  title: "Customers — DAYMARK demo",
  description:
    "A sample DAYMARK customer list with follow-up flags and reasons. Fictional demo data.",
} as const;

export const customersHeader = {
  title: "Customers",
} as const;

export const customersTabs = {
  label: "Customer filter",
  all: "All customers",
  followUps: (count: number) => `Follow-ups (${count})`,
} as const;

export const customersTable = {
  columns: {
    name: "Name",
    lastVisit: "Last visit",
    nextVisit: "Next visit",
    followUp: "Follow-up",
    action: "Action",
  },
  noLastVisit: "New customer",
  noNextVisit: "Not booked",
  noFollowUp: "None",
  followUpFlag: "Follow up",
  contacted: "Contacted",
  markContacted: "Mark contacted",
  viewBooking: "View booking",
} as const;

export const customersMessages = {
  marked: "Marked as contacted. Removed from follow-ups.",
  emptyFollowUps:
    "No follow-ups right now. Flag a customer after a visit to see them here.",
  loading: "Loading customers…",
  error: "Customers couldn't load. Try again.",
} as const;
