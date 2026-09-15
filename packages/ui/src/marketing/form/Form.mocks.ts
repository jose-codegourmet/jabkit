import type { FormProps } from "./Form.types";

export const formMocks = {
  default: {
    destinationsLabel: "Destinations",
    detailsLabel: "Details",
    defaultDestination: "Bali, Indonesia",
    destinationPlaceholder: "Bali, Indonesia",
    defaultDateRange: "8 May - 9 May",
    defaultRooms: 2,
    defaultGuests: 4,
    submitLabel: "Check Availability",
  },
  alternate: {
    destinationsLabel: "Destinations",
    detailsLabel: "Details",
    defaultDestination: "Kyoto, Japan",
    destinationPlaceholder: "City or stay",
    defaultDateRange: "12 Nov - 16 Nov",
    defaultRooms: 1,
    defaultGuests: 2,
    submitLabel: "Check Availability",
  },
} satisfies Record<"default" | "alternate", FormProps>;
