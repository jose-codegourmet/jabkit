import type {
  Hero230Logo,
  Hero230Props,
  Hero230Slide,
} from "./Hero230.types";

export const hero230Slides: Hero230Slide[] = [
  {
    src: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=720&h=900&q=80",
    alt: "Sunlit studio desks with plants and open notebooks",
    caption: "Studio floor",
  },
  {
    src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=720&h=900&q=80",
    alt: "Team gathered around laptops in a bright workspace",
    caption: "War room",
  },
  {
    src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=720&h=900&q=80",
    alt: "Laptop showing charts on a wooden desk",
    caption: "Launch metrics",
  },
  {
    src: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=720&h=900&q=80",
    alt: "Two colleagues reviewing a screen together",
    caption: "Pairing",
  },
  {
    src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=720&h=900&q=80",
    alt: "Collaborative workshop around a table",
    caption: "Workshop",
  },
  {
    src: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=720&h=900&q=80",
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
