import type { Calendar03Props, Calendar03Slot } from "./Calendar03.types";

const morningSlots: Calendar03Slot[] = [
  { value: "09:00", label: "09:00 AM" },
  { value: "09:30", label: "09:30 AM" },
  { value: "10:00", label: "10:00 AM" },
  { value: "10:30", label: "10:30 AM" },
  { value: "11:00", label: "11:00 AM" },
  { value: "11:30", label: "11:30 AM" },
  { value: "13:00", label: "01:00 PM" },
  { value: "13:30", label: "01:30 PM" },
  { value: "14:00", label: "02:00 PM" },
  { value: "14:30", label: "02:30 PM" },
  { value: "15:00", label: "03:00 PM" },
  { value: "15:30", label: "03:30 PM" },
  { value: "16:00", label: "04:00 PM" },
  { value: "16:30", label: "04:30 PM" },
];

const consultSlots: Calendar03Slot[] = [
  { value: "08:15", label: "08:15 AM" },
  { value: "09:45", label: "09:45 AM" },
  { value: "11:00", label: "11:00 AM" },
  { value: "12:30", label: "12:30 PM", available: false },
  { value: "14:15", label: "02:15 PM" },
  { value: "16:00", label: "04:00 PM" },
  { value: "17:30", label: "05:30 PM" },
];

export const calendar03Mocks = {
  default: {
    defaultMonth: new Date(2026, 8, 1),
    defaultSelected: new Date(2026, 8, 15),
    defaultTime: "09:30",
    slots: morningSlots,
  },
  alternate: {
    defaultMonth: new Date(2026, 9, 1),
    defaultSelected: new Date(2026, 9, 8),
    defaultTime: "14:15",
    slots: consultSlots,
    copy: {
      timesLabel: "Open windows",
    },
  },
} satisfies Record<string, Calendar03Props>;
