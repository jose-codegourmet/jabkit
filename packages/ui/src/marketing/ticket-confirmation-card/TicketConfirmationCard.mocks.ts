import type { TicketConfirmationCardProps } from "./TicketConfirmationCard.types";

export const ticketConfirmationCardMocks = {
  default: {
    heading: "Thank you!",
    description: "Your ticket has been issued successfully",
    ticketIdLabel: "Ticket ID",
    ticketId: "TCK-8821",
    amountLabel: "Amount",
    amount: "$150.00",
    dateTimeLabel: "Date & Time",
    dateTime: "15 Sep 2026 • 14:30",
    cardHolder: "Mira Solano",
    last4Digits: "4418",
    barcodeValue: "TCK8821928374",
    showBarcode: true,
    showConfetti: true,
  },
  alternate: {
    heading: "Thank you!",
    description: "Your ticket has been issued successfully",
    ticketIdLabel: "Ticket ID",
    ticketId: "NQ-17-8841",
    amountLabel: "Amount",
    amount: "$60.50",
    dateTimeLabel: "Date & Time",
    dateTime: "3 Oct 2026 • 21:40",
    cardHolder: "Jonas Rhee",
    last4Digits: "9021",
    barcodeValue: "NQ1788412046",
    showBarcode: true,
    showConfetti: true,
  },
} satisfies Record<"default" | "alternate", TicketConfirmationCardProps>;
