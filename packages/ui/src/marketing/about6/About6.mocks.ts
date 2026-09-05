import type { About6Props } from "./About6.types";

export const about6Mocks = {
  default: {
    story: {
      title: "About Us",
      description:
        "We started as a four-person studio shipping interfaces for operators who live in the product all day. The brief is still the same: quiet rooms, honest photography, and software that does not need a tour guide.",
      images: [
        {
          src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=900&h=1200&q=80",
          alt: "Team gathered around a table reviewing work together",
          aspectClassName: "aspect-[3/4]",
        },
        {
          src: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=900&h=900&q=80",
          alt: "Sunlit studio desks with plants and open notebooks",
          aspectClassName: "aspect-square",
        },
        {
          src: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=900&h=1200&q=80",
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
          src: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=900&h=675&q=80",
          alt: "Empty office corridor with glass rooms and daylight",
          aspectClassName: "aspect-[4/3]",
        },
        {
          src: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=900&h=1200&q=80",
          alt: "Workshop around a long table with laptops open",
          aspectClassName: "aspect-[3/4]",
        },
        {
          src: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=900&h=900&q=80",
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
          src: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&h=1200&q=80",
          alt: "Bright office interior with long communal tables",
          aspectClassName: "aspect-[3/4]",
        },
        {
          src: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=900&h=900&q=80",
          alt: "Reading nook with a lounge chair and a floor lamp",
          aspectClassName: "aspect-square",
        },
        {
          src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&h=1200&q=80",
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
          src: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=900&h=675&q=80",
          alt: "Architectural drawings spread across a worktable",
          aspectClassName: "aspect-[4/3]",
        },
        {
          src: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=900&h=1200&q=80",
          alt: "Construction site viewed through scaffolding",
          aspectClassName: "aspect-[3/4]",
        },
        {
          src: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=900&h=900&q=80",
          alt: "Open-plan studio with rows of desks and large windows",
          aspectClassName: "aspect-square",
        },
      ],
    },
  },
} satisfies Record<string, About6Props>;
