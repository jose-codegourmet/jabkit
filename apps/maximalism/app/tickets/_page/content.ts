import { demoNotice } from "../../_data/site";
import {
  bookingFeePlaceholder,
  exclusionsPlaceholder,
  inclusions,
  maxPerOrderPlaceholder,
  ticketingProviderPlaceholder,
  totalPlaceholder,
} from "../../_data/tickets";

/** Copy for /tickets, verbatim from the FULL VOLUME brief (epic #547). */

export const seo = {
  title: "Tickets — weekend and day passes | FULL VOLUME (demo)",
  description:
    "Choose a FULL VOLUME weekend pass or day pass. Inclusions, fees, and availability in plain text. Demo site — no tickets are sold.",
} as const;

export const header = {
  title: "Choose your ticket.",
  body: "Weekend or a single day. Everything included, every fee, and current availability are written out below.",
  demoNotice: demoNotice.tickets,
} as const;

export const options = {
  heading: "Ticket options",
  priceLabel: "Price",
  availabilityLabel: "Availability",
  select: "Select",
  selected: "Selected",
  soldOut: "Sold out",
  demoState: "Demo state",
} as const;

export const included = {
  heading: "What's included",
  includedLabel: "Included",
  items: inclusions,
  notIncludedLabel: "Not included",
  notIncluded: exclusionsPlaceholder,
} as const;

/**
 * The real per-order limit is still a client placeholder. The stepper needs a
 * working number, so this demo build caps orders at DEMO_MAX_PER_ORDER. Swap
 * it for the confirmed limit when the client supplies it.
 */
export const DEMO_MAX_PER_ORDER = 8;

export const quantity = {
  label: "How many tickets?",
  help: `Up to ${maxPerOrderPlaceholder} per order.`,
  error: "Choose between 1 and [max] tickets.",
  fewer: "Fewer tickets",
  more: "More tickets",
} as const;

export const summary = {
  heading: "Your selection",
  rows: {
    ticket: "Ticket",
    quantity: "Quantity",
    priceEach: "Price each",
    bookingFee: "Booking fee",
    total: "Total",
  },
  bookingFee: bookingFeePlaceholder,
  total: totalPlaceholder,
  empty: "Pick a ticket to see your total.",
  continue: "Continue to checkout",
  showDetails: "Show details",
  hideDetails: "Hide details",
} as const;

export const checkout = {
  loading: "Checking availability…",
  error: "We couldn't check availability. Your selection is kept — try again.",
  tryAgain: "Try again",
  soldOut: "That pass just sold out. Your other choices are still here.",
  endTitle: "This is where checkout would start.",
  endBody: `In the real site this hands off to ${ticketingProviderPlaceholder}. Nothing has been charged.`,
  back: "Back to tickets",
} as const;

export type CheckoutOutcome = "opens" | "error" | "sold-out";

/** Labelled demo control that makes every checkout state reachable. */
export const checkoutDemo = {
  legend: "What happens when you continue",
  badge: "Demo state",
  outcomes: [
    { value: "opens", label: "Checkout opens" },
    { value: "error", label: "Availability check fails" },
    { value: "sold-out", label: "Pass sells out during checkout" },
  ] satisfies { value: CheckoutOutcome; label: string }[],
  reset: "Reset demo availability",
} as const;

/** Simulated availability check, in milliseconds. Local only; nothing is sent. */
export const DEMO_CHECK_DELAY = 1200;

export const policiesSection = {
  heading: "Access, refunds, and transfers",
  link: { label: "Full practical info", href: "/info" },
} as const;
