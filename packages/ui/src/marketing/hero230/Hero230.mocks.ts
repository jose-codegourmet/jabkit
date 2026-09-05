import type { Hero230Logo, Hero230Props, Hero230Slide } from "./Hero230.types";

export const hero230Slides: Hero230Slide[] = [
  {
    src: "/assets/c7ce9d3164d2988a.webp",
    alt: "Sunlit studio desks with plants and open notebooks",
    caption: "Studio floor",
  },
  {
    src: "/assets/cf7f70e0771836d4.webp",
    alt: "Team gathered around laptops in a bright workspace",
    caption: "War room",
  },
  {
    src: "/assets/430c95dc5977cc0b.webp",
    alt: "Laptop showing charts on a wooden desk",
    caption: "Launch metrics",
  },
  {
    src: "/assets/e27055a163504ace.webp",
    alt: "Two colleagues reviewing a screen together",
    caption: "Pairing",
  },
  {
    src: "/assets/8fda79aa5e9ee18e.webp",
    alt: "Collaborative workshop around a table",
    caption: "Workshop",
  },
  {
    src: "/assets/6d950fd6a0c5ff7a.webp",
    alt: "Quiet desk with a laptop and coffee",
    caption: "Focus hour",
  },
];

export const hero230Logos: Hero230Logo[] = [
  { name: "Brightline" },
  { name: "Copper" },
  { name: "Midway" },
  { name: "Solstice" },
  { name: "Parcel" },
  { name: "Kindred" },
  { name: "Aperture" },
  { name: "Willow" },
];

export const hero230Mocks: Required<
  Pick<
    Hero230Props,
    | "kicker"
    | "title"
    | "description"
    | "primaryAction"
    | "secondaryAction"
    | "logos"
    | "slides"
    | "autoplay"
    | "autoplayMs"
  >
> = {
  kicker: "Now in public beta",
  title: "Proof up front. Product in motion.",
  description:
    "A stacked launch hero: a clear offer, partner marks that keep moving, and a filmstrip of the work that sold the room.",
  primaryAction: { label: "Start a project", href: "#start" },
  secondaryAction: { label: "See the work", href: "#work" },
  logos: hero230Logos,
  slides: hero230Slides,
  autoplay: true,
  autoplayMs: 3800,
};

export const hero230EditorialMocks: typeof hero230Mocks = {
  ...hero230Mocks,
  kicker: "Studio notes",
  title: "Show the work before you ask for the meeting.",
  description:
    "Keep the copy centered, the logos honest, and the stills close enough to feel like a walkthrough.",
  primaryAction: { label: "Book a call", href: "#book" },
  secondaryAction: { label: "Browse stills", href: "#stills" },
  autoplay: false,
};
