import type { RideBookingFormProps } from "./RideBookingForm.types";

export const rideBookingFormMocks = {
  default: {
    city: "Portland, OR",
    imageSrc: "/assets/e9d88fab9e45c86f.webp",
    imageAlt: "Glass towers along a downtown street at dusk",
    title: "Book a ride across town",
    description:
      "Set pickup, dropoff, and a time. Harbor finds a car that can meet you there.",
    pickupLabel: "Pickup",
    pickupPlaceholder: "Pearl District, 12th and Lovejoy",
    defaultPickup: "Union Station, 800 NW 6th Ave",
    dropoffLabel: "Dropoff",
    dropoffPlaceholder: "Airport, hotel, or street",
    defaultDropoff: "PDX arrivals, Island 3",
    dateLabel: "Date",
    defaultDate: "2026-09-18",
    timeLabel: "Time",
    defaultTime: "09:15",
    submitLabel: "Find a ride",
    swapLabel: "Swap pickup and dropoff",
  },
  alternate: {
    city: "Oakland, CA",
    imageSrc: "/assets/1b9ee8cc56aea60c.webp",
    imageAlt: "Open-air jobsite with scaffolding against a bright sky",
    title: "Schedule a yard transfer",
    description:
      "Move a crew lead from the yard to the site gate. One car, one window, no extra stops.",
    pickupLabel: "From",
    pickupPlaceholder: "Yard gate or shop",
    defaultPickup: "Harbor Yard, 1900 Mandela Pkwy",
    dropoffLabel: "To",
    dropoffPlaceholder: "Site gate or trailer",
    defaultDropoff: "Site 14, 7th and Castro",
    dateLabel: "Date",
    defaultDate: "2026-09-22",
    timeLabel: "Time",
    defaultTime: "06:40",
    submitLabel: "Hold this window",
    swapLabel: "Swap start and end",
  },
} satisfies Record<"default" | "alternate", RideBookingFormProps>;
