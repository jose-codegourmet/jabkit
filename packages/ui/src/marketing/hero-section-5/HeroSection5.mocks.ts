import type {
  HeroSection5Brand,
  HeroSection5Logo,
  HeroSection5NavItem,
  HeroSection5Props,
  HeroSection5Video,
} from "./HeroSection5.types";

export const heroSection5Brand: HeroSection5Brand = {
  name: "Lumen",
  href: "#top",
};

export const heroSection5NavItems: HeroSection5NavItem[] = [
  { label: "Platform", href: "#platform" },
  { label: "Research", href: "#research" },
  { label: "Pricing", href: "#pricing" },
  { label: "Journal", href: "#journal" },
];

export const heroSection5Video: HeroSection5Video = {
  src: "https://videos.pexels.com/video-files/3129957/3129957-hd_1280_720_25fps.mp4",
  poster:
    "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1600&q=80",
  label: "Abstract particle field drifting through a dark research lab",
};

export const heroSection5Logos: HeroSection5Logo[] = [
  { name: "Helio" },
  { name: "Northline" },
  { name: "Fieldwork" },
  { name: "Orbit" },
  { name: "Kite" },
  { name: "Harbor" },
  { name: "Nova" },
  { name: "Ampere" },
];

export const heroSection5Mocks: Required<
  Pick<
    HeroSection5Props,
    | "brand"
    | "navItems"
    | "headerAction"
    | "kicker"
    | "title"
    | "description"
    | "primaryAction"
    | "secondaryAction"
    | "video"
    | "logos"
    | "autoplay"
  >
> = {
  brand: heroSection5Brand,
  navItems: heroSection5NavItems,
  headerAction: { label: "Request access", href: "#access" },
  kicker: "Research platform",
  title: "See the system, not just the signal.",
  description:
    "A cinematic plate for labs and platforms that lead with atmosphere — looping film, a quiet offer, and the marks that already trust the work.",
  primaryAction: { label: "Start a trial", href: "#trial" },
  secondaryAction: { label: "Watch the brief", href: "#brief" },
  video: heroSection5Video,
  logos: heroSection5Logos,
  autoplay: true,
};

export const heroSection5EditorialMocks: typeof heroSection5Mocks = {
  ...heroSection5Mocks,
  brand: { name: "Fieldwork", href: "#top" },
  navItems: [
    { label: "Atlas", href: "#atlas" },
    { label: "Methods", href: "#methods" },
    { label: "Studio", href: "#studio" },
  ],
  headerAction: { label: "Book a visit", href: "#visit" },
  kicker: "Now observing",
  title: "A quieter kind of first impression.",
  description:
    "Keep the film moving, the offer short, and the partner belt just alive enough to feel current.",
  primaryAction: { label: "Join the waitlist", href: "#waitlist" },
  secondaryAction: { label: "Read the method", href: "#method" },
  video: {
    src: "https://videos.pexels.com/video-files/3141210/3141210-hd_1280_720_25fps.mp4",
    poster:
      "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&w=1600&q=80",
    label: "Soft nebula light moving across a dark field",
  },
};
