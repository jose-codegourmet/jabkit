import type { HTMLAttributes } from "react";

export type ReceiptPricingPeriod = "monthly" | "yearly";

export interface ReceiptPricingLine {
  label: string;
  amount: number;
}

export interface ReceiptPricingPlan {
  id: string;
  name: string;
  tag?: string;
  href: string;
  ctaLabel: string;
  monthly: ReceiptPricingLine[];
  featured?: boolean;
}

export interface ReceiptPricingProps
  extends Omit<HTMLAttributes<HTMLElement>, "title"> {
  title?: string;
  description?: string;
  merchant?: string;
  merchantNote?: string;
  orderPrefix?: string;
  issuedAt?: string;
  monthsFree?: number;
  printMs?: number;
  showStamp?: boolean;
  showBarcode?: boolean;
  monthlyLabel?: string;
  yearlyLabel?: string;
  currency?: string;
  locale?: string;
  defaultPeriod?: ReceiptPricingPeriod;
  period?: ReceiptPricingPeriod;
  onPeriodChange?: (period: ReceiptPricingPeriod) => void;
  plans?: ReceiptPricingPlan[];
}
