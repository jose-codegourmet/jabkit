import type { FormEventHandler, HTMLAttributes } from "react";

export interface RideBookingFormSearchDetails {
  pickup: string;
  dropoff: string;
  date: string;
  time: string;
}

export interface RideBookingFormProps
  extends Omit<HTMLAttributes<HTMLElement>, "title" | "onSubmit"> {
  city?: string;
  imageSrc?: string;
  imageAlt?: string;
  title?: string;
  description?: string;
  pickupLabel?: string;
  pickupPlaceholder?: string;
  defaultPickup?: string;
  dropoffLabel?: string;
  dropoffPlaceholder?: string;
  defaultDropoff?: string;
  dateLabel?: string;
  defaultDate?: string;
  timeLabel?: string;
  defaultTime?: string;
  submitLabel?: string;
  swapLabel?: string;
  onSearch?: (details: RideBookingFormSearchDetails) => void;
  onSubmit?: FormEventHandler<HTMLFormElement>;
}
