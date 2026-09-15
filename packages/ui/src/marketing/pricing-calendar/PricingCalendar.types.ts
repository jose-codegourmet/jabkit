import type { HTMLAttributes } from "react";

export interface PricingCalendarProps
  extends Omit<HTMLAttributes<HTMLElement>, "title"> {
  title?: string;
  description?: string;
  currency?: string;
  locale?: string;
  goodPriceThreshold?: number;
  prices?: Record<string, number>;
  unavailableDates?: string[];
  minDate?: Date;
  defaultMonth?: Date;
  numberOfMonths?: number;
  defaultSelected?: Date;
  selected?: Date;
  onSelect?: (date: Date | undefined) => void;
  previousMonthLabel?: string;
  nextMonthLabel?: string;
  selectedLabel?: string;
  emptySelectionLabel?: string;
  unavailableLabel?: string;
  goodPriceLabel?: string;
  standardPriceLabel?: string;
  submitLabel?: string;
  onReserve?: (date: Date) => void;
}
