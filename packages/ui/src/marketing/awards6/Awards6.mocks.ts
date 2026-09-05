import type { Awards6Props } from "./Awards6.types";

export const awards6Mocks = {
  default: {},
  alternate: {
    title: "Record",
    subtitle: "& Public work.",
    columnLabels: {
      milestone: "Entry",
      type: "Kind",
      year: "Year",
    },
    items: [
      {
        title: "Library desk system for Northline civic branch",
        type: "Fit-out",
        year: "2019",
      },
      {
        title: "Clinic intake rewrite that cut the queue in half",
        type: "Service",
        year: "2021",
      },
      {
        title: "Transit hall signage adopted on two platforms",
        type: "Wayfinding",
        year: "2022",
      },
      {
        title: "Season catalog printed for the lighting house",
        type: "Print",
        year: "2023",
      },
      {
        title: "Counter that finally fits a Saturday morning line",
        type: "Interior",
        year: "2025",
      },
    ],
  },
} satisfies Record<string, Awards6Props>;
