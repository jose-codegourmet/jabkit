import type { Route } from "next";

export type CardStateId =
  | "loading"
  | "empty"
  | "warning"
  | "actionable"
  | "selected"
  | "error"
  | "static";

export type CardState = {
  id: CardStateId;
  name: string;
  copy: string;
  note: string;
  href?: Route;
};

export const cardStates: CardState[] = [
  {
    id: "loading",
    name: "Loading",
    copy: "Loading bookings…",
    note: "Skeleton rows with aria-busy; the message is announced politely.",
  },
  {
    id: "empty",
    name: "Empty",
    copy: "No follow-ups right now.",
    note: "Says plainly that nothing is waiting.",
  },
  {
    id: "warning",
    name: "Warning",
    copy: "3 bookings need a reply",
    note: "Apricot edge, an icon and the words 'Needs attention'. Colour is never the only signal.",
  },
  {
    id: "actionable",
    name: "Actionable",
    copy: "Review bookings →",
    note: "The whole card is one link, with an evergreen hover border and a focus ring.",
    href: "/demo/bookings?status=needs-reply",
  },
  {
    id: "selected",
    name: "Selected",
    copy: "Tuesday",
    note: "aria-current and an evergreen border.",
  },
  {
    id: "error",
    name: "Error",
    copy: "Couldn't load the roster. Try again.",
    note: "Explains the failure and offers a retry button.",
  },
  {
    id: "static",
    name: "Static",
    copy: "Desk covered until 5:00 pm",
    note: "No hover, no pointer cursor, no chevron.",
  },
];
