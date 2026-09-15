import type { RideBookingFormProps } from "./RideBookingForm.types";

export const rideBookingFormMocks = {
  default: {
    city: "Chandigarh, IN",
    imageSrc: "/assets/e9d88fab9e45c86f.webp",
    imageAlt: "Illustration of a person getting into a car in a city",
    title: "Go anywhere with Uber",
    changeCityLabel: "Change city",
    pickupPlaceholder: "Pickup location",
    defaultPickup: "",
    dropoffPlaceholder: "Dropoff location",
    defaultDropoff: "",
    defaultDate: "Today",
    defaultTime: "Now",
    submitLabel: "See prices",
    loginLabel: "Log in to see your recent activity",
  },
  alternate: {
    city: "Oakland, CA",
    imageSrc: "/assets/1b9ee8cc56aea60c.webp",
    imageAlt: "Open-air jobsite with scaffolding against a bright sky",
    title: "Go anywhere with Harbor",
    changeCityLabel: "Change city",
    pickupPlaceholder: "Pickup location",
    defaultPickup: "Harbor Yard, 1900 Mandela Pkwy",
    dropoffPlaceholder: "Dropoff location",
    defaultDropoff: "Site 14, 7th and Castro",
    defaultDate: "Today",
    defaultTime: "In 30 min",
    submitLabel: "See prices",
    loginLabel: "Log in to see your recent activity",
  },
} satisfies Record<"default" | "alternate", RideBookingFormProps>;
