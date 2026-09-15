import type { FormEventHandler, HTMLAttributes } from "react";

export interface FormSearchDetails {
  destination: string;
  checkIn: string;
  checkOut: string;
  rooms: number;
  guests: number;
}

export interface FormProps
  extends Omit<HTMLAttributes<HTMLElement>, "title" | "onSubmit"> {
  title?: string;
  description?: string;
  destinationLabel?: string;
  destinationPlaceholder?: string;
  defaultDestination?: string;
  checkInLabel?: string;
  defaultCheckIn?: string;
  checkOutLabel?: string;
  defaultCheckOut?: string;
  roomsLabel?: string;
  defaultRooms?: number;
  minRooms?: number;
  maxRooms?: number;
  guestsLabel?: string;
  defaultGuests?: number;
  minGuests?: number;
  maxGuests?: number;
  decreaseLabel?: string;
  increaseLabel?: string;
  submitLabel?: string;
  onSearch?: (details: FormSearchDetails) => void;
  onSubmit?: FormEventHandler<HTMLFormElement>;
}
