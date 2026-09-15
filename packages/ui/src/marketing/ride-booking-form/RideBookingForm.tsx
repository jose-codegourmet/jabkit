"use client";

import {
  ArrowRightIcon,
  CalendarIcon,
  ClockIcon,
  MapPinIcon,
  PlusIcon,
  SendIcon,
} from "lucide-react";
import { type CSSProperties, type FormEvent, useId, useState } from "react";
import { Button } from "@/atoms/button";
import { cn } from "@/lib/cn";
import type { RideBookingFormProps } from "./RideBookingForm.types";

const defaults = {
  city: "Chandigarh, IN",
  imageSrc: "/assets/e9d88fab9e45c86f.webp",
  imageAlt: "Illustration of a person getting into a car in a city",
  title: "Go anywhere with Uber",
  changeCityLabel: "Change city",
  changeCityHref: "#",
  pickupPlaceholder: "Pickup location",
  pickupAriaLabel: "Pickup location",
  defaultPickup: "",
  sharePickupLabel: "Share pickup location",
  dropoffPlaceholder: "Dropoff location",
  dropoffAriaLabel: "Dropoff location",
  defaultDropoff: "",
  defaultDate: "Today",
  defaultTime: "Now",
  timeOptions: ["Now", "In 15 min", "In 30 min", "In 1 hour"] as const,
  timeAriaLabel: "Select time",
  submitLabel: "See prices",
  loginLabel: "Log in to see your recent activity",
  loginHref: "#",
} as const;

const riseStyle = (order: number): CSSProperties => ({
  animationDelay: `${200 + order * 100}ms`,
});

export function RideBookingForm({
  className,
  city = defaults.city,
  imageUrl,
  imageSrc = defaults.imageSrc,
  imageAlt = defaults.imageAlt,
  title = defaults.title,
  changeCityLabel = defaults.changeCityLabel,
  changeCityHref = defaults.changeCityHref,
  pickupPlaceholder = defaults.pickupPlaceholder,
  pickupAriaLabel = defaults.pickupAriaLabel,
  defaultPickup = defaults.defaultPickup,
  sharePickupLabel = defaults.sharePickupLabel,
  dropoffPlaceholder = defaults.dropoffPlaceholder,
  dropoffAriaLabel = defaults.dropoffAriaLabel,
  defaultDropoff = defaults.defaultDropoff,
  defaultDate = defaults.defaultDate,
  defaultTime = defaults.defaultTime,
  timeOptions = defaults.timeOptions,
  timeAriaLabel = defaults.timeAriaLabel,
  submitLabel = defaults.submitLabel,
  loginLabel = defaults.loginLabel,
  loginHref = defaults.loginHref,
  onSearch,
  onSubmit,
  onChangeCity,
  onLogin,
  onSharePickup,
  ...props
}: RideBookingFormProps) {
  const headingId = useId();
  const pickupId = useId();
  const dropoffId = useId();
  const timeId = useId();
  const media = imageUrl ?? imageSrc;
  const [pickup, setPickup] = useState(defaultPickup);
  const [dropoff, setDropoff] = useState(defaultDropoff);
  const [time, setTime] = useState(defaultTime);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    onSubmit?.(event);
    if (event.defaultPrevented) return;
    event.preventDefault();
    onSearch?.({
      pickup: pickup.trim(),
      dropoff: dropoff.trim(),
      date: defaultDate,
      time,
    });
  };

  return (
    <section
      aria-labelledby={headingId}
      className={cn(
        "mx-auto w-full max-w-6xl bg-background p-4 text-foreground lg:p-8",
        className,
      )}
      data-slot="ride-booking-form"
      {...props}
    >
      <style href="jk-ride-booking-form" precedence="default">{`
        @keyframes jk-ride-booking-form-rise {
          from { opacity: 0; transform: translateY(1.25rem); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes jk-ride-booking-form-media {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        .jk-ride-booking-form-rise {
          animation: jk-ride-booking-form-rise 520ms cubic-bezier(0.22, 1, 0.36, 1) both;
        }
        .jk-ride-booking-form-media {
          animation: jk-ride-booking-form-media 500ms ease-out both;
        }
        @media (prefers-reduced-motion: reduce) {
          .jk-ride-booking-form-rise,
          .jk-ride-booking-form-media {
            animation: none;
          }
        }
      `}</style>

      <div className="grid grid-cols-1 items-center gap-8 overflow-hidden rounded-lg bg-background lg:grid-cols-2">
        <div className="p-4 sm:p-8">
          <p
            className="jk-ride-booking-form-rise mb-6 text-sm text-muted-foreground"
            style={riseStyle(0)}
          >
            <MapPinIcon
              aria-hidden="true"
              className="mr-2 inline-block size-4"
            />
            {city}
            <a
              className="ml-2 text-sm font-medium text-primary hover:underline"
              href={changeCityHref}
              onClick={(event) => {
                if (!onChangeCity) return;
                event.preventDefault();
                onChangeCity();
              }}
            >
              {changeCityLabel}
            </a>
          </p>

          <h1
            className="jk-ride-booking-form-rise mb-8 text-4xl font-bold text-balance text-foreground sm:text-5xl"
            id={headingId}
            style={riseStyle(1)}
          >
            {title}
          </h1>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div
              className="jk-ride-booking-form-rise relative rounded-lg bg-muted/40 p-4"
              style={riseStyle(2)}
            >
              <div
                aria-hidden="true"
                className="pointer-events-none absolute top-9 bottom-9 left-6 w-px border-l border-dashed border-border"
              />

              <div className="relative mb-2 flex items-center">
                <div className="z-10 rounded-full border border-border bg-background p-1">
                  <MapPinIcon
                    aria-hidden="true"
                    className="size-4 text-foreground"
                  />
                </div>
                <label className="sr-only" htmlFor={pickupId}>
                  {pickupAriaLabel}
                </label>
                <input
                  aria-label={pickupAriaLabel}
                  autoComplete="street-address"
                  className="w-full bg-transparent py-2 pr-10 pl-4 text-foreground outline-none placeholder:text-muted-foreground focus-visible:ring-0"
                  id={pickupId}
                  name="pickup"
                  onChange={(event) => setPickup(event.target.value)}
                  placeholder={pickupPlaceholder}
                  type="text"
                  value={pickup}
                />
                <button
                  aria-label={sharePickupLabel}
                  className="absolute right-2 p-1 text-muted-foreground transition-colors hover:text-foreground"
                  onClick={onSharePickup}
                  type="button"
                >
                  <SendIcon aria-hidden="true" className="size-5" />
                </button>
              </div>

              <hr className="mx-12 border-border" />

              <div className="relative mt-2 flex items-center">
                <div className="z-10 rounded-full border border-border bg-background p-1">
                  <PlusIcon
                    aria-hidden="true"
                    className="size-4 text-foreground"
                  />
                </div>
                <label className="sr-only" htmlFor={dropoffId}>
                  {dropoffAriaLabel}
                </label>
                <input
                  aria-label={dropoffAriaLabel}
                  autoComplete="off"
                  className="w-full bg-transparent py-2 pl-4 text-foreground outline-none placeholder:text-muted-foreground focus-visible:ring-0"
                  id={dropoffId}
                  name="dropoff"
                  onChange={(event) => setDropoff(event.target.value)}
                  placeholder={dropoffPlaceholder}
                  type="text"
                  value={dropoff}
                />
              </div>
            </div>

            <div
              className="jk-ride-booking-form-rise grid grid-cols-2 gap-4"
              style={riseStyle(3)}
            >
              <div className="flex items-center rounded-lg bg-muted/40 px-4 py-3">
                <CalendarIcon
                  aria-hidden="true"
                  className="size-5 text-muted-foreground"
                />
                <span className="ml-3 text-foreground">{defaultDate}</span>
              </div>
              <div className="relative flex items-center rounded-lg bg-muted/40 px-4 py-3">
                <ClockIcon
                  aria-hidden="true"
                  className="size-5 text-muted-foreground"
                />
                <span className="ml-3 text-foreground">{time}</span>
                <label className="sr-only" htmlFor={timeId}>
                  {timeAriaLabel}
                </label>
                <select
                  aria-label={timeAriaLabel}
                  className="absolute inset-0 h-full w-full cursor-pointer opacity-0"
                  id={timeId}
                  name="time"
                  onChange={(event) => setTime(event.target.value)}
                  value={time}
                >
                  {timeOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div
              className="jk-ride-booking-form-rise flex items-center space-x-4 pt-4"
              style={riseStyle(4)}
            >
              <Button
                className="h-12 px-8 text-sm hover:bg-primary/90"
                size="lg"
                type="submit"
              >
                {submitLabel}
              </Button>
              <a
                className="group text-sm text-muted-foreground transition-colors hover:text-foreground"
                href={loginHref}
                onClick={(event) => {
                  if (!onLogin) return;
                  event.preventDefault();
                  onLogin();
                }}
              >
                {loginLabel}
                <ArrowRightIcon
                  aria-hidden="true"
                  className="ml-1 inline-block size-4 transition-transform group-hover:translate-x-1 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0"
                />
              </a>
            </div>
          </form>
        </div>

        <div
          className="jk-ride-booking-form-media hidden h-full w-full p-8 lg:block"
          style={{ animationDelay: "120ms" }}
        >
          <img
            alt={imageAlt}
            className="h-full w-full rounded-lg object-cover"
            src={media}
          />
        </div>
      </div>
    </section>
  );
}
