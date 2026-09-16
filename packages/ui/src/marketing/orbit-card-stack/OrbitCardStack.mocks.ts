import type {
  OrbitCardStackItem,
  OrbitCardStackProps,
} from "./OrbitCardStack.types";

const studio: OrbitCardStackItem[] = [
  {
    name: "Amara Cole",
    role: "Creative Lead",
    description:
      "Shapes visual systems with enough restraint to feel expensive and enough edge to be remembered.",
    initials: "AC",
    stat: "Identity",
    accent: "warning",
    image: "/assets/bd48582e630a15fa.webp",
    imageAlt: "Portrait of Amara Cole",
  },
  {
    name: "Julian Hart",
    role: "Product Strategy",
    description:
      "Turns loose ideas into sharp product moves, crisp priorities, and launchable experiences.",
    initials: "JH",
    stat: "Roadmap",
    accent: "success",
    image: "/assets/2a364f729e4f7c09.webp",
    imageAlt: "Portrait of Julian Hart",
  },
  {
    name: "Priya Nair",
    role: "Founder",
    description:
      "Sets the taste bar, protects the details, and keeps the whole team pointed at the same high signal.",
    initials: "PN",
    stat: "Vision",
    accent: "muted",
    image: "/assets/d111cc60a8f2bf68.webp",
    imageAlt: "Portrait of Priya Nair",
  },
  {
    name: "Eli Voss",
    role: "Frontend Engineer",
    description:
      "Builds the motion, polish, and interface texture that make the product feel calm under pressure.",
    initials: "EV",
    stat: "Motion",
    accent: "primary",
    image: "/assets/040bd026249d7af9.webp",
    imageAlt: "Portrait of Eli Voss",
  },
  {
    name: "Ines Calder",
    role: "Operations",
    description:
      "Keeps the machine quiet, the handoffs clean, and the team moving without pointless friction.",
    initials: "IC",
    stat: "Systems",
    accent: "destructive",
    image: "/assets/45dad0903fef5d02.webp",
    imageAlt: "Portrait of Ines Calder",
  },
];

const trio: OrbitCardStackItem[] = [
  {
    name: "Rowan Hale",
    role: "Art Direction",
    description:
      "Holds the crop, the type, and the still until the page reads as one decision instead of a pile of parts.",
    initials: "RH",
    stat: "Look",
    accent: "accent",
    image: "/assets/1391b53bc91d2127.webp",
    imageAlt: "Portrait of Rowan Hale",
  },
  {
    name: "Noor Elamin",
    role: "Brand Strategy",
    description:
      "Cuts a brief down to the sentence a buyer can repeat, then guards that sentence through launch.",
    initials: "NE",
    stat: "Signal",
    accent: "secondary",
    image: "/assets/c65cd8af6df1b122.webp",
    imageAlt: "Portrait of Noor Elamin",
  },
  {
    name: "Sable Wren",
    role: "Producer",
    description:
      "Keeps the calendar honest and the handoff quiet so the work can stay sharp under a real deadline.",
    initials: "SW",
    stat: "Pace",
    accent: "warning",
    image: "/assets/7b4e1076c576b862.webp",
    imageAlt: "Portrait of Sable Wren",
  },
];

export const orbitCardStackItems = studio;

export const orbitCardStackMocks = {
  default: {
    items: studio,
    defaultActiveIndex: 2,
    spread: 168,
    lift: 34,
    showCaption: true,
  },
  alternate: {
    items: trio,
    defaultActiveIndex: 1,
    spread: 150,
    lift: 40,
    showCaption: true,
  },
} satisfies Record<"default" | "alternate", OrbitCardStackProps>;
