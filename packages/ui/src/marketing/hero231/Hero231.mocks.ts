import type {
  Hero231Logo,
  Hero231Portrait,
  Hero231Props,
} from "./Hero231.types";

export const hero231Portraits: Hero231Portrait[] = [
  {
    src: "/assets/c21dbcfeac157c9b.webp",
    alt: "Portrait of Amara Cole",
    name: "Amara Cole",
    role: "Creative director",
  },
  {
    src: "/assets/1391b53bc91d2127.webp",
    alt: "Portrait of Julian Hart",
    name: "Julian Hart",
    role: "Design lead",
  },
  {
    src: "/assets/c65cd8af6df1b122.webp",
    alt: "Portrait of Noor Elamin",
    name: "Noor Elamin",
    role: "Brand strategist",
  },
  {
    src: "/assets/040bd026249d7af9.webp",
    alt: "Portrait of Mateo Ruiz",
    name: "Mateo Ruiz",
    role: "Art director",
  },
  {
    src: "/assets/7b4e1076c576b862.webp",
    alt: "Portrait of Sable Wren",
    name: "Sable Wren",
    role: "Producer",
  },
];

export const hero231Logos: Hero231Logo[] = [
  { name: "Northline" },
  { name: "Helio" },
  { name: "Fieldwork" },
  { name: "Orbit" },
  { name: "Kite & Co" },
  { name: "Lumen" },
  { name: "Harbor" },
  { name: "Nova" },
];

export const hero231Mocks: Required<
  Pick<
    Hero231Props,
    | "kicker"
    | "title"
    | "description"
    | "primaryAction"
    | "secondaryAction"
    | "portraits"
    | "logos"
    | "autoplay"
    | "autoplayMs"
  >
> = {
  kicker: "Creative studio",
  title: "The people and partners behind the work.",
  description:
    "A split hero for teams who want a clear offer on the left and living proof on the right — portraits in coverflow, marks in motion.",
  primaryAction: { label: "Start a project", href: "#start" },
  secondaryAction: { label: "See the work", href: "#work" },
  portraits: hero231Portraits,
  logos: hero231Logos,
  autoplay: true,
  autoplayMs: 4000,
};

export const hero231EditorialMocks: typeof hero231Mocks = {
  ...hero231Mocks,
  kicker: "Now booking spring",
  title: "A quieter way to introduce the room.",
  description:
    "Keep the copy tight, the faces close, and the partner belt moving just enough to feel alive.",
  primaryAction: { label: "Book a call", href: "#book" },
  secondaryAction: { label: "Download deck", href: "#deck" },
};
