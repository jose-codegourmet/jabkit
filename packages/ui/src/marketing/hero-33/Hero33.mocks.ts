import type { Hero33Feature, Hero33NavItem, Hero33Props } from "./Hero33.types";

export const hero33NavItems: Hero33NavItem[] = [
  { label: "Flights", href: "#flights" },
  { label: "Destinations", href: "#destinations" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

export const hero33Features: Hero33Feature[] = [
  {
    icon: "armchair",
    title: "Premium Comfort",
    description: "Relax in spacious, luxurious\nseating",
  },
  {
    icon: "monitor",
    title: "Stunning Views",
    description: "Marvel at the world from\nnew heights",
  },
];

export const hero33Mocks = {
  default: {
    brand: "Watermelon",
    brandHref: "#home",
    navItems: hero33NavItems,
    headerAction: { label: "Book Now", href: "#book" },
    titleLines: ["Peak Moments,", "Unforgettable", "Journeys."],
    primaryAction: { label: "Explore Flights", href: "#flights" },
    secondaryAction: { label: "Learn More", href: "#about" },
    features: hero33Features,
    backgroundImage: "/assets/88b829c7028a2016.webp",
    backgroundAlt: "Airplane window sunset view",
  },
  alternate: {
    brand: "Northline",
    brandHref: "#home",
    navItems: [
      { label: "Routes", href: "#routes" },
      { label: "Cabins", href: "#cabins" },
      { label: "Fares", href: "#fares" },
      { label: "Contact", href: "#contact" },
    ],
    headerAction: { label: "Reserve", href: "#reserve" },
    titleLines: ["Quiet Cabins,", "Clear Horizons", "Long Hauls."],
    primaryAction: { label: "Browse Routes", href: "#routes" },
    secondaryAction: { label: "Cabin Guide", href: "#cabins" },
    features: [
      {
        icon: "armchair",
        title: "Lie-flat Rest",
        description: "Full-flat seats that hold\na night of sleep",
      },
      {
        icon: "plane-takeoff",
        title: "Dawn Departures",
        description: "Wheels up before the\ncity wakes",
      },
    ],
    backgroundImage: "/assets/88b829c7028a2016.webp",
    backgroundAlt: "Airplane window sunset view",
  },
} satisfies Record<string, Hero33Props>;
