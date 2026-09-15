import type { TicketConfirmationCardProps } from "./TicketConfirmationCard.types";

export const ticketConfirmationCardMocks = {
  default: {
    eyebrow: "Booking complete",
    heading: "You're in.",
    description:
      "A digital pass for Harbor Light, with the payment slip and scan code in one place.",
    statusLabel: "Ticket confirmed",
    statusDetail: "We sent this pass to Mira Solano.",
    ticketIdLabel: "Ticket ID",
    ticketId: "HLF-48219-K7",
    eventName: "Harbor Light Festival",
    details: [
      { label: "Date", value: "Sat 12 Sep 2026" },
      { label: "Doors", value: "7:30 PM" },
      { label: "Venue", value: "Pier 4 Shed" },
      { label: "Seat", value: "Gallery B / 14" },
    ],
    paymentHeading: "Payment",
    paymentLines: [
      { label: "Festival pass", value: "$68.00" },
      { label: "Service", value: "$4.00" },
    ],
    totalLabel: "Paid",
    total: "$72.00",
    paymentMethodLabel: "Method",
    paymentMethod: "Visa 4418",
    barcodeLabel: "Scan at the gate",
    showBarcode: true,
    ctaLabel: "Add to wallet",
    ctaHref: "#wallet",
  },
  alternate: {
    eyebrow: "Ferry booked",
    heading: "Board when ready.",
    description:
      "Night crossing to Halden Quay. Keep this slip for the dock scan.",
    statusLabel: "Passage confirmed",
    statusDetail: "Sent to Jonas Rhee at the booking email.",
    ticketIdLabel: "Booking",
    ticketId: "NQ-17-8841",
    eventName: "Night Quay Ferry",
    details: [
      { label: "Departs", value: "Fri 3 Oct 2026" },
      { label: "Time", value: "9:40 PM" },
      { label: "From", value: "South Slip" },
      { label: "Cabin", value: "Deck 2 / 08" },
    ],
    paymentHeading: "Fare",
    paymentLines: [
      { label: "Adult cabin", value: "$54.00" },
      { label: "Harbor fee", value: "$6.50" },
    ],
    totalLabel: "Paid",
    total: "$60.50",
    paymentMethodLabel: "Method",
    paymentMethod: "Mastercard 9021",
    barcodeLabel: "Scan at the slip",
    showBarcode: true,
    ctaLabel: "Download pass",
    ctaHref: "#download",
  },
} satisfies Record<"default" | "alternate", TicketConfirmationCardProps>;
