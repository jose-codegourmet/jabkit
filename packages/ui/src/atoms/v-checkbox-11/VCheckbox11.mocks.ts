import type { VCheckbox11Props } from "./VCheckbox11.types";
import { vCheckbox11CellKey } from "./VCheckbox11.types";

const weekdays = [
  { id: "mon", label: "Mon" },
  { id: "tue", label: "Tue" },
  { id: "wed", label: "Wed" },
  { id: "thu", label: "Thu" },
  { id: "fri", label: "Fri" },
] as const;

export const vCheckbox11Mocks = {
  default: {
    defaultValue: [
      vCheckbox11CellKey("mon", "09:00"),
      vCheckbox11CellKey("mon", "13:00"),
      vCheckbox11CellKey("tue", "09:00"),
      vCheckbox11CellKey("wed", "11:00"),
      vCheckbox11CellKey("thu", "15:00"),
      vCheckbox11CellKey("fri", "09:00"),
      vCheckbox11CellKey("fri", "17:00"),
    ],
  },
  alternate: {
    days: weekdays,
    slots: [
      { id: "16:00", label: "4:00 PM" },
      { id: "17:30", label: "5:30 PM" },
      { id: "19:00", label: "7:00 PM" },
    ],
    defaultValue: [
      vCheckbox11CellKey("tue", "17:30"),
      vCheckbox11CellKey("wed", "17:30"),
      vCheckbox11CellKey("thu", "19:00"),
    ],
    copy: {
      title: "Coaching windows",
      description: "Weeknights only. Mark the hours you can host a call.",
      selectedLabel: "open windows",
      clearLabel: "Reset week",
    },
  },
} satisfies Record<string, VCheckbox11Props>;
