import type { HTMLAttributes } from "react";

export interface TicketConfirmationDetail {
  label: string;
  value: string;
}

export interface TicketConfirmationPaymentLine {
  label: string;
  value: string;
}

export interface TicketConfirmationCardProps
  extends Omit<HTMLAttributes<HTMLElement>, "title"> {
  eyebrow?: string;
  heading?: string;
  description?: string;
  statusLabel?: string;
  statusDetail?: string;
  ticketIdLabel?: string;
  ticketId?: string;
  eventName?: string;
  details?: TicketConfirmationDetail[];
  paymentHeading?: string;
  paymentLines?: TicketConfirmationPaymentLine[];
  totalLabel?: string;
  total?: string;
  paymentMethodLabel?: string;
  paymentMethod?: string;
  barcodeLabel?: string;
  showBarcode?: boolean;
  ctaLabel?: string;
  ctaHref?: string;
}
