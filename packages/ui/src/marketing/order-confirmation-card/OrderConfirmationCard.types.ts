import type { HTMLAttributes } from "react";

export interface OrderConfirmationItem {
  id: string;
  name: string;
  detail?: string;
  quantity: number;
  price: string;
  image?: {
    src: string;
    alt: string;
  };
}

export interface OrderConfirmationMeta {
  label: string;
  value: string;
}

export interface OrderConfirmationAction {
  label: string;
  href: string;
}

export interface OrderConfirmationCardProps
  extends Omit<HTMLAttributes<HTMLElement>, "title"> {
  eyebrow?: string;
  heading?: string;
  description?: string;
  statusLabel?: string;
  statusDetail?: string;
  orderIdLabel?: string;
  orderId?: string;
  itemsHeading?: string;
  items?: OrderConfirmationItem[];
  quantityLabel?: string;
  shippingHeading?: string;
  shippingLines?: string[];
  summary?: OrderConfirmationMeta[];
  totalLabel?: string;
  total?: string;
  paymentMethodLabel?: string;
  paymentMethod?: string;
  primaryAction?: OrderConfirmationAction;
  secondaryAction?: OrderConfirmationAction;
}
