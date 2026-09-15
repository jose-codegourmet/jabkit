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
  imageUrl?: string;
  imageSrc?: string;
  imageAlt?: string;
  title?: string;
  changeCityLabel?: string;
  changeCityHref?: string;
  pickupPlaceholder?: string;
  pickupAriaLabel?: string;
  defaultPickup?: string;
  sharePickupLabel?: string;
  dropoffPlaceholder?: string;
  dropoffAriaLabel?: string;
  defaultDropoff?: string;
  defaultDate?: string;
  defaultTime?: string;
  timeOptions?: readonly string[];
  timeAriaLabel?: string;
  submitLabel?: string;
  loginLabel?: string;
  loginHref?: string;
  onSearch?: (details: RideBookingFormSearchDetails) => void;
  onSubmit?: FormEventHandler<HTMLFormElement>;
  onChangeCity?: () => void;
  onLogin?: () => void;
  onSharePickup?: () => void;
}
