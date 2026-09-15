import type { AdmitOneTicketProps } from "./AdmitOneTicket.types";

export const admitOneTicketMocks = {
  default: {
    eyebrow: "Door pass",
    heading: "A ticket that tilts like paper.",
    description:
      "Perforated stub, dithered stock, and a glare that follows the pointer. Still when motion is reduced.",
    name: "Inez Calder",
    presenter: "Harbor Hall presents",
    event: "Night Shift Sessions",
    venue: "Pier 9, Oakland",
    dates: "Sept 18-19",
    stubText: "Admit one",
    watermark: "2026",
    serial: "HH-1842",
    maxTilt: 14,
    width: 741,
  },
  alternate: {
    eyebrow: "Weekend pair",
    heading: "Two cuts of the same stub.",
    description:
      "Same perforated ticket, two rooms. Festival floor and a late set on the pier.",
    tickets: [
      {
        id: "floor",
        name: "Marisol Vega",
        presenter: "Harbor Hall presents",
        event: "Northline Festival",
        venue: "Lot C, Oakland",
        dates: "Sept 18",
        stubText: "Floor",
        watermark: "NLF",
        serial: "NLF-2201",
      },
      {
        id: "late",
        name: "Theo Maren",
        presenter: "Harbor Hall after hours",
        event: "Pier Late Set",
        venue: "Pier 9, Oakland",
        dates: "Sept 19",
        stubText: "Admit one",
        watermark: "2026",
        serial: "HH-1904",
      },
    ],
    maxTilt: 10,
    width: 640,
  },
} satisfies Record<"default" | "alternate", AdmitOneTicketProps>;
