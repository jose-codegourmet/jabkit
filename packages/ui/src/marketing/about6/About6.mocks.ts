import type { About6Props } from "./About6.types";

export const about6Mocks = {
  default: {
    story: {
      title: "About Us",
      description:
        "We started as a four-person studio shipping interfaces for operators who live in the product all day. The brief is still the same: quiet rooms, honest photography, and software that does not need a tour guide.",
      images: [
        {
          src: "/assets/0641888d44065d35.webp",
          alt: "Team gathered around a table reviewing work together",
          aspectClassName: "aspect-[3/4]",
        },
        {
          src: "/assets/02e3cd676d6ef884.webp",
          alt: "Sunlit studio desks with plants and open notebooks",
          aspectClassName: "aspect-square",
        },
        {
          src: "/assets/db313298612159bc.webp",
          alt: "Two colleagues talking through a plan in a meeting room",
          aspectClassName: "aspect-[3/4]",
        },
      ],
    },
    workplace: {
      title: "Workplace",
      paragraphs: [
        "The floor is open because the work is shared. Desks face each other, the kitchen is the second meeting room, and the walls hold the last six launches instead of slogans.",
        "We keep a small office so the team can still hear a prototype across the table. Remote days exist; the photographs are from the days we choose to be in the same light.",
      ],
      images: [
        {
          src: "/assets/d3f9bde61c9a29e7.webp",
          alt: "Empty office corridor with glass rooms and daylight",
          aspectClassName: "aspect-[4/3]",
        },
        {
          src: "/assets/b7aa48391ad153f6.webp",
          alt: "Workshop around a long table with laptops open",
          aspectClassName: "aspect-[3/4]",
        },
        {
          src: "/assets/00679b56fa2127c9.webp",
          alt: "Cafe-style workplace seating with a laptop and coffee",
          aspectClassName: "aspect-square",
        },
      ],
    },
  },
  alternate: {
    story: {
      title: "The practice",
      description:
        "Northline is a civic design studio. We take on libraries, clinics, and transit halls — rooms people already know — and rebuild the way they ask for help without turning the visit into a product tour.",
      images: [
        {
          src: "/assets/1fd89b6a1d45ac75.webp",
          alt: "Bright office interior with long communal tables",
          aspectClassName: "aspect-[3/4]",
        },
        {
          src: "/assets/34919d09d11a5a00.webp",
          alt: "Reading nook with a lounge chair and a floor lamp",
          aspectClassName: "aspect-square",
        },
        {
          src: "/assets/7292f284c2f30594.webp",
          alt: "Glass office towers against a clear sky",
          aspectClassName: "aspect-[3/4]",
        },
      ],
    },
    workplace: {
      title: "On the floor",
      paragraphs: [
        "Models sit on the center table until a material is chosen. Pin-ups stay up through construction so the site visit still matches the drawing the room argued over.",
        "Fridays are for walking the job, not slides. The photographs here are from those walks — dust, daylight, and the first time a public counter actually fits the queue.",
      ],
      images: [
        {
          src: "/assets/97c532d558fa4fbc.webp",
          alt: "Architectural drawings spread across a worktable",
          aspectClassName: "aspect-[4/3]",
        },
        {
          src: "/assets/9ddf82d0e360536c.webp",
          alt: "Construction site viewed through scaffolding",
          aspectClassName: "aspect-[3/4]",
        },
        {
          src: "/assets/eb031d20a5dd662f.webp",
          alt: "Open-plan studio with rows of desks and large windows",
          aspectClassName: "aspect-square",
        },
      ],
    },
  },
} satisfies Record<string, About6Props>;
