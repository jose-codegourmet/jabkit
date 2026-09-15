import type { VCheckbox11Props } from "./VCheckbox11.types";
import { vCheckbox11CellKey } from "./VCheckbox11.types";

export const vCheckbox11Mocks = {
  default: {
    defaultValue: [
      vCheckbox11CellKey("Morning", "Mon"),
      vCheckbox11CellKey("Morning", "Wed"),
      vCheckbox11CellKey("Afternoon", "Tue"),
      vCheckbox11CellKey("Afternoon", "Thu"),
      vCheckbox11CellKey("Evening", "Fri"),
    ],
  },
  alternate: {
    days: [
      { id: "Mon", label: "Mon" },
      { id: "Tue", label: "Tue" },
      { id: "Wed", label: "Wed" },
      { id: "Thu", label: "Thu" },
      { id: "Fri", label: "Fri" },
    ],
    slots: [
      { id: "Morning", label: "Morning" },
      { id: "Evening", label: "Evening" },
    ],
    defaultValue: [
      vCheckbox11CellKey("Morning", "Tue"),
      vCheckbox11CellKey("Morning", "Wed"),
      vCheckbox11CellKey("Evening", "Thu"),
    ],
    copy: {
      title: "Office hours",
      selectedLabel: "windows open",
    },
  },
} satisfies Record<string, VCheckbox11Props>;
