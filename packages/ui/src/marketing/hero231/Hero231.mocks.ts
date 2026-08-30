import type {
  Hero231Logo,
  Hero231Portrait,
  Hero231Props,
} from "./Hero231.types";

export const hero231Portraits: Hero231Portrait[] = [
  {
    src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=480&h=640&q=80",
    alt: "Portrait of Amara Cole",
    name: "Amara Cole",
    role: "Creative director",
  },
  {
    src: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=480&h=640&q=80",
    alt: "Portrait of Julian Hart",
    name: "Julian Hart",
    role: "Design lead",
  },
  {
    src: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=480&h=640&q=80",
    alt: "Portrait of Noor Elamin",
    name: "Noor Elamin",
    role: "Brand strategist",
  },
  {
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=480&h=640&q=80",
    alt: "Portrait of Mateo Ruiz",
    name: "Mateo Ruiz",
    role: "Art director",
  },
  {
    src: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=480&h=640&q=80",
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
