"use client";

import {
  ArrowRightLeftIcon,
  CalendarIcon,
  ClockIcon,
  MapPinIcon,
  SearchIcon,
} from "lucide-react";
import { type FormEvent, type ReactNode, useId, useState } from "react";
import { Button } from "@/atoms/button";
import { Input } from "@/atoms/input";
import { Label } from "@/atoms/label";
import { cn } from "@/lib/cn";
import type { RideBookingFormProps } from "./RideBookingForm.types";

const defaults = {
  city: "Portland, OR",
  imageSrc: "/assets/e9d88fab9e45c86f.webp",
  imageAlt: "Glass towers along a downtown street at dusk",
  title: "Book a ride across town",
  description:
    "Set pickup, dropoff, and a time. Harbor finds a car that can meet you there.",
  pickupLabel: "Pickup",
  pickupPlaceholder: "Pearl District, 12th and Lovejoy",
  defaultPickup: "",
  dropoffLabel: "Dropoff",
  dropoffPlaceholder: "Airport, hotel, or street",
  defaultDropoff: "",
  dateLabel: "Date",
  defaultDate: "",
  timeLabel: "Time",
  defaultTime: "",
  submitLabel: "Find a ride",
  swapLabel: "Swap pickup and dropoff",
} as const;

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

export function RideBookingForm({
  className,
  city = defaults.city,
  imageSrc = defaults.imageSrc,
  imageAlt = defaults.imageAlt,
  title = defaults.title,
  description = defaults.description,
  pickupLabel = defaults.pickupLabel,
  pickupPlaceholder = defaults.pickupPlaceholder,
  defaultPickup = defaults.defaultPickup,
  dropoffLabel = defaults.dropoffLabel,
  dropoffPlaceholder = defaults.dropoffPlaceholder,
  defaultDropoff = defaults.defaultDropoff,
  dateLabel = defaults.dateLabel,
  defaultDate = defaults.defaultDate,
  timeLabel = defaults.timeLabel,
  defaultTime = defaults.defaultTime,
  submitLabel = defaults.submitLabel,
  swapLabel = defaults.swapLabel,
  onSearch,
  onSubmit,
  ...props
}: RideBookingFormProps) {
  const headingId = useId();
  const pickupId = useId();
  const dropoffId = useId();
  const dateId = useId();
  const timeId = useId();
  const [pickup, setPickup] = useState(defaultPickup);
  const [dropoff, setDropoff] = useState(defaultDropoff);
  const [date, setDate] = useState(defaultDate);
  const [time, setTime] = useState(defaultTime);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    onSubmit?.(event);
    if (event.defaultPrevented) return;
    event.preventDefault();
    onSearch?.({
      pickup: pickup.trim(),
      dropoff: dropoff.trim(),
      date,
      time,
    });
  };

  const swapStops = () => {
    setPickup(dropoff);
    setDropoff(pickup);
  };

  return (
    <section
      aria-labelledby={headingId}
      className={cn("bg-background text-foreground", className)}
      data-slot="ride-booking-form"
      {...props}
    >
      <div className="mx-auto flex min-h-[32rem] max-w-5xl items-center justify-center px-5 py-16 sm:px-8 sm:py-20">
        <article
          className={cn(
            "w-full max-w-md overflow-hidden rounded-[calc(var(--radius)+0.4rem)] border border-border bg-card text-card-foreground shadow-sm",
            "motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-2 motion-safe:duration-500",
          )}
        >
          <figure className="relative h-44 overflow-hidden bg-muted sm:h-52">
            <img
              alt={imageAlt}
              className="absolute inset-0 size-full object-cover"
              src={imageSrc}
            />
            <figcaption className="dark absolute inset-x-0 bottom-0 flex items-end bg-gradient-to-t from-background via-background/70 to-transparent px-5 pb-4 pt-16">
              <span className="inline-flex items-center gap-2 text-sm font-medium text-foreground">
                <MapPinIcon aria-hidden="true" className="size-4 shrink-0" />
                {city}
              </span>
            </figcaption>
          </figure>

          <form className="flex flex-col gap-5 p-5 sm:p-6" onSubmit={handleSubmit}>
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

            <div className="space-y-3">
              <FieldShell
                icon={<MapPinIcon className="size-4" />}
                id={pickupId}
                label={pickupLabel}
              >
                <Input
                  autoComplete="street-address"
                  className="h-12 rounded-[--radius] bg-background pl-9"
                  id={pickupId}
                  name="pickup"
                  onChange={(event) => setPickup(event.target.value)}
                  placeholder={pickupPlaceholder}
                  required
                  type="text"
                  value={pickup}
                />
              </FieldShell>

              <div className="-my-1 flex justify-end">
                <button
                  aria-label={swapLabel}
                  className="grid size-9 place-items-center rounded-full border border-border bg-background text-foreground shadow-sm outline-none transition-[transform,background-color] duration-200 ease-out hover:bg-accent focus-visible:ring-2 focus-visible:ring-ring active:scale-[0.98] motion-reduce:transition-none"
                  onClick={swapStops}
                  type="button"
                >
                  <ArrowRightLeftIcon aria-hidden="true" className="size-4" />
                </button>
              </div>

              <FieldShell
                icon={<MapPinIcon className="size-4" />}
                id={dropoffId}
                label={dropoffLabel}
              >
                <Input
                  autoComplete="off"
                  className="h-12 rounded-[--radius] bg-background pl-9"
                  id={dropoffId}
                  name="dropoff"
                  onChange={(event) => setDropoff(event.target.value)}
                  placeholder={dropoffPlaceholder}
                  required
                  type="text"
                  value={dropoff}
                />
              </FieldShell>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              <FieldShell
                icon={<CalendarIcon className="size-4" />}
                id={dateId}
                label={dateLabel}
              >
                <Input
                  className="h-12 rounded-[--radius] bg-background pl-9"
                  id={dateId}
                  name="date"
                  onChange={(event) => setDate(event.target.value)}
                  required
                  type="date"
                  value={date}
                />
              </FieldShell>
              <FieldShell
                icon={<ClockIcon className="size-4" />}
                id={timeId}
                label={timeLabel}
              >
                <Input
                  className="h-12 rounded-[--radius] bg-background pl-9"
                  id={timeId}
                  name="time"
                  onChange={(event) => setTime(event.target.value)}
                  required
                  type="time"
                  value={time}
                />
              </FieldShell>
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
