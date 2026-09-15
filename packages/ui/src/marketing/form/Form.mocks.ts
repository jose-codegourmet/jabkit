import type { FormProps } from "./Form.types";

export const formMocks = {
  default: {
    title: "Hold a stay for the trip",
    description:
      "Choose a town, check-in, check-out, rooms, and guests. We keep the dates until you confirm.",
    destinationLabel: "Destination",
    destinationPlaceholder: "City, inn, or neighborhood",
    defaultDestination: "Bend, OR",
    checkInLabel: "Check-in",
    defaultCheckIn: "2026-10-03",
    checkOutLabel: "Check-out",
    defaultCheckOut: "2026-10-07",
    roomsLabel: "Rooms",
    defaultRooms: 1,
    guestsLabel: "Guests",
    defaultGuests: 2,
    decreaseLabel: "Decrease",
    increaseLabel: "Increase",
    submitLabel: "Check availability",
  },
  alternate: {
    title: "Book the lake house",
    description:
      "Set arrival, departure, cabins, and party size. The dock stays reserved for your window.",
    destinationLabel: "Property",
    destinationPlaceholder: "Lake, cabin, or lodge",
    defaultDestination: "Lake Quinault, WA",
    checkInLabel: "Arrival",
    defaultCheckIn: "2026-11-12",
    checkOutLabel: "Departure",
    defaultCheckOut: "2026-11-16",
    roomsLabel: "Cabins",
    defaultRooms: 2,
    guestsLabel: "Guests",
    defaultGuests: 6,
    decreaseLabel: "Decrease",
    increaseLabel: "Increase",
    submitLabel: "Hold these dates",
  },
} satisfies Record<"default" | "alternate", FormProps>;
