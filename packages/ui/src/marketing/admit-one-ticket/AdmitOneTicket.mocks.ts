import type { AdmitOneTicketProps } from "./AdmitOneTicket.types";

export const admitOneTicketMocks = {
  default: {
    name: "Garry Tan",
    presenter: "Y Combinator presents",
    event: "Startup School 2026",
    venue: "Chase Center, SF",
    dates: "July 25-26",
    stubText: "Admit one",
    watermark: "2026",
    width: 741,
    tilt: true,
    maxTilt: 9,
  },
  alternate: {
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
      },
    ],
    width: 640,
    tilt: true,
    maxTilt: 9,
  },
} satisfies Record<"default" | "alternate", AdmitOneTicketProps>;
