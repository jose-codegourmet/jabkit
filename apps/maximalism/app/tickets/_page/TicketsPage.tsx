import { TicketBuilder } from "./TicketBuilder";
import { TicketPolicies } from "./TicketPolicies";
import { TicketsHeader } from "./TicketsHeader";
import { WhatsIncluded } from "./WhatsIncluded";

/**
 * /tickets — the calmest page on the site. One decorative sticker in the header
 * margin; everything below is a quiet, high-contrast transactional surface.
 */
export function TicketsPage() {
  return (
    <>
      <TicketsHeader />
      <TicketBuilder included={<WhatsIncluded />} />
      <TicketPolicies />
    </>
  );
}
