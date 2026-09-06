import type {
  FullscreenCalendarDay,
  FullscreenCalendarProps,
} from "./FullscreenCalendar.types";

const today = new Date(2026, 8, 6);

const defaultDays: FullscreenCalendarDay[] = [
  {
    day: new Date(2026, 8, 2),
    events: [
      { id: "q3-plan", name: "Q3 planning", time: "10:00 AM" },
      { id: "team-sync", name: "Harbor team sync", time: "2:00 PM" },
    ],
  },
  {
    day: new Date(2026, 8, 6),
    events: [
      { id: "launch-review", name: "Product launch review", time: "2:00 PM" },
      { id: "marketing", name: "Marketing sync", time: "11:00 AM" },
      { id: "vendor", name: "Vendor meeting", time: "4:30 PM" },
    ],
  },
  {
    day: new Date(2026, 8, 10),
    events: [{ id: "workshop", name: "Team workshop", time: "11:00 AM" }],
  },
  {
    day: new Date(2026, 8, 14),
    events: [
      { id: "budget", name: "Budget review", time: "3:30 PM" },
      { id: "sprint", name: "Sprint planning", time: "9:00 AM" },
      { id: "design", name: "Design review", time: "1:00 PM" },
    ],
  },
  {
    day: new Date(2026, 8, 18),
    events: [
      { id: "client", name: "Client presentation", time: "10:00 AM" },
      { id: "lunch", name: "Team lunch", time: "12:30 PM" },
      { id: "status", name: "Project status", time: "2:00 PM" },
    ],
  },
];

const quietDays: FullscreenCalendarDay[] = [
  {
    day: new Date(2026, 9, 5),
    events: [{ id: "standup", name: "Monday standup", time: "9:15 AM" }],
  },
  {
    day: new Date(2026, 9, 12),
    events: [
      { id: "invoice", name: "Invoice walkthrough", time: "1:00 PM" },
      { id: "qa", name: "QA recovery path", time: "3:00 PM" },
    ],
  },
  {
    day: new Date(2026, 9, 22),
    events: [{ id: "offsite", name: "Northline offsite", time: "10:00 AM" }],
  },
];

export const fullscreenCalendarMocks = {
  default: {
    data: defaultDays,
    today,
    defaultMonth: today,
    defaultSelectedDay: today,
    todayLabel: "Today",
    addEventLabel: "Add event",
  },
  alternate: {
    data: quietDays,
    today,
    defaultMonth: new Date(2026, 9, 1),
    defaultSelectedDay: new Date(2026, 9, 12),
    todayLabel: "Jump to today",
    addEventLabel: "New event",
  },
} satisfies Record<string, FullscreenCalendarProps>;
