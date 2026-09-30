export const calendarSeo = {
  title: "Calendar — DAYMARK demo",
  description:
    "A sample day and week calendar in DAYMARK with staff filters and overlap warnings. Fictional demo data.",
} as const;

export const calendarHeader = {
  title: "Calendar",
  viewLabel: "View",
  views: { day: "Day", week: "Week" },
  today: "Today",
  previous: "Previous day",
  next: "Next day",
  add: "Add visit",
} as const;

export const calendarGrid = {
  staffLabel: "Staff",
  overlap: "Overlap",
  todayTag: "Today",
  weekOf: "Week of",
  visitCount: (count: number) => (count === 1 ? "1 visit" : `${count} visits`),
  /** Screen-reader detail after the visible "Overlap" flag. */
  overlapDetail: (time: string, staff: string, count: number) =>
    `: ${time}, ${staff} has ${count === 2 ? "two" : count} bookings`,
  weekRegion: "Week calendar",
} as const;

export const visitPanel = {
  labels: {
    service: "Service",
    staff: "Staff",
    status: "Status",
    note: "Note",
  },
  open: "Open booking",
} as const;

export const addVisitDialog = {
  title: "Add a visit",
  fields: {
    customer: "Customer",
    service: "Service",
    date: "Date",
    start: "Start time",
    staff: "Staff",
  },
  submit: "Add visit",
  cancel: "Cancel",
  success: (time: string) => `Visit added for ${time}.`,
  startError: "Choose a start time.",
  /** Used when the Customer field is left blank. */
  customerFallback: "Walk-in (demo)",
} as const;

export const emptyDay = {
  message: "No visits on this day.",
  action: "Add visit",
} as const;

/** ?state=loading|error demo toggles, mirroring the bookings page pattern. */
export const calendarStates = {
  loading: "Loading calendar…",
  error: "The calendar couldn't load. Try again.",
  retry: "Try again",
} as const;
