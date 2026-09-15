import type { HTMLAttributes } from "react";

export interface PricingCalendarProps
  extends Omit<HTMLAttributes<HTMLElement>, "onSelect"> {
  locale?: string;
  goodPriceThreshold?: number;
  prices?: Record<string, number>;
  defaultMonth?: Date;
  numberOfMonths?: number;
  defaultSelected?: Date;
  selected?: Date;
  onSelect?: (date: Date | undefined) => void;
  previousMonthLabel?: string;
  nextMonthLabel?: string;
  attributionLabel?: string;
  attributionHref?: string;
  attributionName?: string;
}
