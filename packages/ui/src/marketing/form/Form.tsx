"use client";

import {
  BedDoubleIcon,
  CalendarIcon,
  MapPinIcon,
  MinusIcon,
  PlusIcon,
  SearchIcon,
  UsersIcon,
} from "lucide-react";
import { type FormEvent, type ReactNode, useId, useState } from "react";
import { Button } from "@/atoms/button";
import { Input } from "@/atoms/input";
import { Label } from "@/atoms/label";
import { cn } from "@/lib/cn";
import type { FormProps } from "./Form.types";

const defaults = {
  title: "Hold a stay for the trip",
  description:
    "Choose a town, check-in, check-out, rooms, and guests. We keep the dates until you confirm.",
  destinationLabel: "Destination",
  destinationPlaceholder: "City, inn, or neighborhood",
  defaultDestination: "",
  checkInLabel: "Check-in",
  defaultCheckIn: "",
  checkOutLabel: "Check-out",
  defaultCheckOut: "",
  roomsLabel: "Rooms",
  defaultRooms: 1,
  minRooms: 1,
  maxRooms: 8,
  guestsLabel: "Guests",
  defaultGuests: 2,
  minGuests: 1,
  maxGuests: 16,
  decreaseLabel: "Decrease",
  increaseLabel: "Increase",
  submitLabel: "Check availability",
} as const;

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

function FieldGroup({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "rounded-[--radius] border border-border bg-background p-3 sm:p-4",
        className,
      )}
    >
      {children}
    </div>
  );
}

function FieldShell({
  id,
  label,
  icon,
  children,
}: {
  id: string;
  label: string;
  icon: ReactNode;
  children: ReactNode;
}) {
  return (
    <div className="space-y-2">
      <Label htmlFor={id}>{label}</Label>
      <div className="relative">
        <span
          aria-hidden="true"
          className="pointer-events-none absolute top-1/2 left-3 -translate-y-1/2 text-muted-foreground"
        >
          {icon}
        </span>
        {children}
      </div>
    </div>
  );
}

function CountStepper({
  id,
  name,
  label,
  icon,
  value,
  min,
  max,
  decreaseLabel,
  increaseLabel,
  onChange,
}: {
  id: string;
  name: string;
  label: string;
  icon: ReactNode;
  value: number;
  min: number;
  max: number;
  decreaseLabel: string;
  increaseLabel: string;
  onChange: (next: number) => void;
}) {
  const liveId = `${id}-value`;

  return (
    <div className="flex items-center justify-between gap-3">
      <div className="min-w-0 space-y-1">
        <Label htmlFor={id}>
          <span aria-hidden="true" className="text-muted-foreground">
            {icon}
          </span>
          {label}
        </Label>
        <p
          className="text-lg font-semibold tabular-nums tracking-tight"
          id={liveId}
        >
          {value}
        </p>
      </div>
      <div className="flex items-center gap-1.5">
        <button
          aria-controls={liveId}
          aria-label={`${decreaseLabel} ${label.toLowerCase()}`}
          className="grid size-9 place-items-center rounded-full border border-border bg-card text-foreground outline-none transition-[transform,background-color] duration-200 ease-out hover:bg-accent focus-visible:ring-2 focus-visible:ring-ring active:scale-[0.98] disabled:pointer-events-none disabled:opacity-40 motion-reduce:transition-none"
          disabled={value <= min}
          onClick={() => onChange(clamp(value - 1, min, max))}
          type="button"
        >
          <MinusIcon aria-hidden="true" className="size-4" />
        </button>
        <button
          aria-controls={liveId}
          aria-label={`${increaseLabel} ${label.toLowerCase()}`}
          className="grid size-9 place-items-center rounded-full border border-border bg-card text-foreground outline-none transition-[transform,background-color] duration-200 ease-out hover:bg-accent focus-visible:ring-2 focus-visible:ring-ring active:scale-[0.98] disabled:pointer-events-none disabled:opacity-40 motion-reduce:transition-none"
          disabled={value >= max}
          onClick={() => onChange(clamp(value + 1, min, max))}
          type="button"
        >
          <PlusIcon aria-hidden="true" className="size-4" />
        </button>
      </div>
      <input id={id} name={name} type="hidden" value={value} />
    </div>
  );
}

export function Form({
  className,
  title = defaults.title,
  description = defaults.description,
  destinationLabel = defaults.destinationLabel,
  destinationPlaceholder = defaults.destinationPlaceholder,
  defaultDestination = defaults.defaultDestination,
  checkInLabel = defaults.checkInLabel,
  defaultCheckIn = defaults.defaultCheckIn,
  checkOutLabel = defaults.checkOutLabel,
  defaultCheckOut = defaults.defaultCheckOut,
  roomsLabel = defaults.roomsLabel,
  defaultRooms = defaults.defaultRooms,
  minRooms = defaults.minRooms,
  maxRooms = defaults.maxRooms,
  guestsLabel = defaults.guestsLabel,
  defaultGuests = defaults.defaultGuests,
  minGuests = defaults.minGuests,
  maxGuests = defaults.maxGuests,
  decreaseLabel = defaults.decreaseLabel,
  increaseLabel = defaults.increaseLabel,
  submitLabel = defaults.submitLabel,
  onSearch,
  onSubmit,
  ...props
}: FormProps) {
  const headingId = useId();
  const destinationId = useId();
  const checkInId = useId();
  const checkOutId = useId();
  const roomsId = useId();
  const guestsId = useId();
  const [destination, setDestination] = useState(defaultDestination);
  const [checkIn, setCheckIn] = useState(defaultCheckIn);
  const [checkOut, setCheckOut] = useState(defaultCheckOut);
  const [rooms, setRooms] = useState(clamp(defaultRooms, minRooms, maxRooms));
  const [guests, setGuests] = useState(
    clamp(defaultGuests, minGuests, maxGuests),
  );

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    onSubmit?.(event);
    if (event.defaultPrevented) return;
    event.preventDefault();
    onSearch?.({
      destination: destination.trim(),
      checkIn,
      checkOut,
      rooms,
      guests,
    });
  };

  return (
    <section
      aria-labelledby={headingId}
      className={cn("bg-background text-foreground", className)}
      data-slot="form"
      {...props}
    >
      <div className="mx-auto flex min-h-[32rem] max-w-5xl items-center justify-center px-5 py-16 sm:px-8 sm:py-20">
        <article
          className={cn(
            "w-full max-w-md overflow-hidden rounded-[calc(var(--radius)+0.4rem)] border border-border bg-card text-card-foreground shadow-sm",
            "motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-2 motion-safe:duration-500",
          )}
        >
          <form
            className="flex flex-col gap-5 p-5 sm:p-6"
            onSubmit={handleSubmit}
          >
            <header className="space-y-2">
              <h2
                className="text-xl font-semibold tracking-tight text-balance sm:text-2xl"
                id={headingId}
              >
                {title}
              </h2>
              {description ? (
                <p className="text-sm leading-6 text-muted-foreground">
                  {description}
                </p>
              ) : null}
            </header>

            <FieldGroup>
              <FieldShell
                icon={<MapPinIcon className="size-4" />}
                id={destinationId}
                label={destinationLabel}
              >
                <Input
                  autoComplete="address-level2"
                  className="h-12 rounded-[--radius] bg-card pl-9"
                  id={destinationId}
                  name="destination"
                  onChange={(event) => setDestination(event.target.value)}
                  placeholder={destinationPlaceholder}
                  required
                  type="text"
                  value={destination}
                />
              </FieldShell>
            </FieldGroup>

            <div className="grid gap-3 sm:grid-cols-2">
              <FieldGroup>
                <FieldShell
                  icon={<CalendarIcon className="size-4" />}
                  id={checkInId}
                  label={checkInLabel}
                >
                  <Input
                    className="h-12 rounded-[--radius] bg-card pl-9"
                    id={checkInId}
                    max={checkOut || undefined}
                    name="checkIn"
                    onChange={(event) => setCheckIn(event.target.value)}
                    required
                    type="date"
                    value={checkIn}
                  />
                </FieldShell>
              </FieldGroup>
              <FieldGroup>
                <FieldShell
                  icon={<CalendarIcon className="size-4" />}
                  id={checkOutId}
                  label={checkOutLabel}
                >
                  <Input
                    className="h-12 rounded-[--radius] bg-card pl-9"
                    id={checkOutId}
                    min={checkIn || undefined}
                    name="checkOut"
                    onChange={(event) => setCheckOut(event.target.value)}
                    required
                    type="date"
                    value={checkOut}
                  />
                </FieldShell>
              </FieldGroup>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              <FieldGroup>
                <CountStepper
                  decreaseLabel={decreaseLabel}
                  icon={<BedDoubleIcon className="size-4" />}
                  id={roomsId}
                  increaseLabel={increaseLabel}
                  label={roomsLabel}
                  name="rooms"
                  max={maxRooms}
                  min={minRooms}
                  onChange={setRooms}
                  value={rooms}
                />
              </FieldGroup>
              <FieldGroup>
                <CountStepper
                  decreaseLabel={decreaseLabel}
                  icon={<UsersIcon className="size-4" />}
                  id={guestsId}
                  increaseLabel={increaseLabel}
                  label={guestsLabel}
                  name="guests"
                  max={maxGuests}
                  min={minGuests}
                  onChange={setGuests}
                  value={guests}
                />
              </FieldGroup>
            </div>

            <Button className="h-12 w-full gap-2" size="lg" type="submit">
              <SearchIcon aria-hidden="true" className="size-4" />
              {submitLabel}
            </Button>
          </form>
        </article>
      </div>
    </section>
  );
}
