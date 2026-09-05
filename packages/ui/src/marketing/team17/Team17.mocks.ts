import type { Team17Props } from "./Team17.types";

export const team17Mocks = {
  default: {
    title: "The people in the room",
    description:
      "Harbor keeps a small table on purpose. These portraits are who sits here now. The lists below are who taught the craft and who still joins when a brief needs extra hands.",
    members: [
      {
        src: "/assets/bd48582e630a15fa.webp",
        alt: "Portrait of Amara Cole",
        name: "Amara Cole",
        role: "Design director",
      },
      {
        src: "/assets/2a364f729e4f7c09.webp",
        alt: "Portrait of Julian Hart",
        name: "Julian Hart",
        role: "Product engineer",
      },
      {
        src: "/assets/d111cc60a8f2bf68.webp",
        alt: "Portrait of Priya Nair",
        name: "Priya Nair",
        role: "Brand lead",
      },
      {
        src: "/assets/040bd026249d7af9.webp",
        alt: "Portrait of Eli Voss",
        name: "Eli Voss",
        role: "Studio producer",
      },
      {
        src: "/assets/45dad0903fef5d02.webp",
        alt: "Portrait of Ines Calder",
        name: "Ines Calder",
        role: "Research lead",
      },
      {
        src: "/assets/1391b53bc91d2127.webp",
        alt: "Portrait of Rowan Hale",
        name: "Rowan Hale",
        role: "Frontend",
      },
    ],
    alumni: {
      label: "Alumni",
      names: [
        "Noor Elamin",
        "Mira Solano",
        "Theo Brant",
        "Leah Okonkwo",
        "Soren Vale",
      ],
    },
    collaborators: {
      label: "Collaborators",
      names: [
        "Fieldwork Press",
        "Northline Type",
        "Kite Photo",
        "Velvet Rail",
        "Lumen Studio",
      ],
    },
    culture: {
      title: "How we work",
      paragraphs: [
        "We start with photographs and a sentence that can survive a quiet room. Type, crop, and product live on the same desk so the page does not get translated three times before it ships.",
        "Reviews are short and in person when we can manage it. If a layout needs a tour to make sense, it is not ready. We keep the crew small so the person who heard the brief is still in the file on Thursday.",
      ],
    },
  },
  alternate: {
    title: "Who makes the work",
    description:
      "Northline is six people and a long table. Meet the current roster, then the names we still call when a season book or a product site needs another set of eyes.",
    members: [
      {
        src: "/assets/fc2d8371236ac90c.webp",
        alt: "Portrait of Lena Ortiz",
        name: "Lena Ortiz",
        role: "Creative director",
      },
      {
        src: "/assets/8c18989537b833e8.webp",
        alt: "Portrait of Malik Adeyemi",
        name: "Malik Adeyemi",
        role: "Engineering",
      },
      {
        src: "/assets/4132445424a19cc6.webp",
        alt: "Portrait of Hana Iwasaki",
        name: "Hana Iwasaki",
        role: "Art director",
      },
      {
        src: "/assets/2bd1b12951fdbdb5.webp",
        alt: "Portrait of Owen Briggs",
        name: "Owen Briggs",
        role: "Producer",
      },
    ],
    alumni: {
      label: "Alumni",
      names: ["Clara Nguyen", "Ivo Petrov", "Samira Haddad"],
    },
    collaborators: {
      label: "Collaborators",
      names: ["Harbor Bindery", "Coastal Type", "Atelier Wren"],
    },
    culture: {
      title: "Studio notes",
      paragraphs: [
        "Paper proofs still happen. A screen can lie about scale, and we would rather catch that on a table than after a launch.",
        "We hire for people who will argue for the quieter crop and still close the file when the clock says so.",
      ],
    },
  },
} satisfies Record<string, Team17Props>;
