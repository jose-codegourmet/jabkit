import type { HTMLAttributes } from "react";

export type Table2InvoiceStatus = "paid" | "pending" | "overdue" | "draft";

export type Table2PaymentKind = "card" | "transfer";

export interface Table2PaymentMethod {
  kind: Table2PaymentKind;
  brand?: string;
  last4?: string;
  label?: string;
}

export interface Table2Invoice {
  id: string;
  number: string;
  customer: string;
  email: string;
  amount: number;
  currency?: string;
  paymentMethod: Table2PaymentMethod;
  dueDate: string;
  status: Table2InvoiceStatus;
}

export interface Table2Props extends Omit<HTMLAttributes<HTMLElement>, "title"> {
  title?: string;
  description?: string;
  searchPlaceholder?: string;
  emptyLabel?: string;
  markPaidLabel?: string;
  remindLabel?: string;
  downloadLabel?: string;
  previousLabel?: string;
  nextLabel?: string;
  selectedCountLabel?: string;
  invoices?: Table2Invoice[];
  defaultInvoices?: Table2Invoice[];
  defaultSearch?: string;
  defaultStatusFilter?: Table2InvoiceStatus | null;
  pageSize?: number;
  defaultPage?: number;
  onInvoicesChange?: (invoices: Table2Invoice[]) => void;
  onMarkPaid?: (invoiceIds: string[]) => void;
  onSendReminder?: (invoiceIds: string[]) => void;
  onDownload?: (invoiceIds: string[]) => void;
}
