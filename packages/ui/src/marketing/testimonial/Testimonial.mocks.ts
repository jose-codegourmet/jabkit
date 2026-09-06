import type { TestimonialProps, TestimonialQuote } from "./Testimonial.types";

const quotes: TestimonialQuote[] = [
  {
    id: "amara",
    quote:
      "We stopped rewriting the launch brief for every channel. The page we ship is the page operators actually open on Monday.",
    name: "Amara Cole",
    role: "Design director",
    company: "Harbor Field",
    avatarSrc: "/assets/bd48582e630a15fa.webp",
    avatarAlt: "Portrait of Amara Cole",
    fallback: "AC",
    rating: 5,
    storyHref: "#story-amara",
    storyLabel: "Read the field notes",
  },
  {
    id: "julian",
    quote:
      "The tokens held through a dark-mode pass and a last-minute crop change. Nothing in the section had to be restyled by hand.",
    name: "Julian Hart",
    role: "Product engineer",
    company: "Northline",
    avatarSrc: "/assets/2a364f729e4f7c09.webp",
    avatarAlt: "Portrait of Julian Hart",
    fallback: "JH",
    rating: 5,
    storyHref: "#story-julian",
    storyLabel: "See the install path",
  },
  {
    id: "priya",
    quote:
      "Photography, wordmark, and quotes finally sit on the same desk. Clients stop asking which template we started from.",
    name: "Priya Nair",
    role: "Brand lead",
    company: "Studio Calder",
    avatarSrc: "/assets/d111cc60a8f2bf68.webp",
    avatarAlt: "Portrait of Priya Nair",
    fallback: "PN",
    rating: 4,
    storyHref: "#story-priya",
    storyLabel: "Open the brand brief",
  },
  {
    id: "eli",
    quote:
      "Reviews used to live in a slide no one forwarded. Putting them on the landing page cut the 'is this real?' email in half.",
    name: "Eli Voss",
    role: "Studio producer",
    company: "Northline",
    avatarSrc: "/assets/040bd026249d7af9.webp",
    avatarAlt: "Portrait of Eli Voss",
    fallback: "EV",
    rating: 5,
    storyHref: "#story-eli",
    storyLabel: "Read the launch recap",
  },
];

export const testimonialMocks = {
  default: {
    eyebrow: "Customer stories",
    heading: "The page that operators actually quote.",
    description:
      "Stacked reviews from studios that shipped with Harbor. Cycle the deck, or skip to a named story.",
    layout: "stack",
    quotes,
    verifiedLabel: "Verified review",
    previousLabel: "Previous review",
    nextLabel: "Next review",
    ratingLabel: "out of five",
  },
  alternate: {
    eyebrow: "Field proof",
    heading: "Three desks, three quotes, no carousel.",
    description:
      "A quieter grid when you want every voice in view at once — still the same cards, without the stack.",
    layout: "grid",
    quotes: quotes.slice(0, 3),
    verifiedLabel: "Verified review",
    previousLabel: "Previous review",
    nextLabel: "Next review",
    ratingLabel: "out of five",
  },
} satisfies Record<"default" | "alternate", TestimonialProps>;
