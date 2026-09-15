import type { HTMLAttributes } from "react";

export interface VCheckbox11Day {
  id: string;
  label: string;
}

export interface VCheckbox11Slot {
  id: string;
  label: string;
}

export interface VCheckbox11Copy {
  title: string;
  selectedLabel: string;
}

export interface VCheckbox11Props
  extends Omit<HTMLAttributes<HTMLDivElement>, "defaultValue"> {
  days?: readonly VCheckbox11Day[];
  slots?: readonly VCheckbox11Slot[];
  value?: readonly string[];
  defaultValue?: readonly string[];
  onValueChange?: (value: string[]) => void;
  copy?: Partial<VCheckbox11Copy>;
  disabled?: boolean;
}

export function vCheckbox11CellKey(slotId: string, dayId: string) {
  return `${slotId}-${dayId}`;
}
