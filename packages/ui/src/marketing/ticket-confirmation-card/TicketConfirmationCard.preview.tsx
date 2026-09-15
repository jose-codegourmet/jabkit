// biome-ignore lint/correctness/noUnusedImports: packages/ui uses the classic JSX runtime.
import * as React from "react";
import { TicketConfirmationCard } from "./TicketConfirmationCard";
import { ticketConfirmationCardMocks } from "./TicketConfirmationCard.mocks";

const ThemeComparison = () => (
  <div className="grid gap-px overflow-hidden border-border bg-border lg:grid-cols-2">
    <div className="bg-background">
      <TicketConfirmationCard {...ticketConfirmationCardMocks.default} />
    </div>
    <div className="dark bg-background">
      <TicketConfirmationCard {...ticketConfirmationCardMocks.default} />
    </div>
  </div>
);

export default {
  Default: () => (
    <div className="w-full">
      <TicketConfirmationCard {...ticketConfirmationCardMocks.default} />
    </div>
  ),
  Variants: () => (
    <div className="w-full">
      <TicketConfirmationCard {...ticketConfirmationCardMocks.alternate} />
    </div>
  ),
  ThemeComparison,
};
