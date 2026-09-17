import type {
  ShopProductGridItem,
  ShopProductGridProps,
} from "./ShopProductGrid.types";

export const shopProductGridItems: ShopProductGridItem[] = [
  {
    name: "The Classic",
    price: "$120",
    compareAtPrice: "$200",
    href: "#the-classic",
    image: {
      src: "/assets/d7aec5a4066ae4f7.webp",
      alt: "White ceramic mug on a studio surface",
    },
  },
  {
    name: "The Camper",
    price: "$80",
    compareAtPrice: "$200",
    href: "#the-camper",
    image: {
      src: "/assets/42c22367c0be8e21.webp",
      alt: "Espresso cup and saucer on a dark table",
    },
  },
  {
    name: "The Couple",
    price: "$150",
    compareAtPrice: "$200",
    href: "#the-couple",
    image: {
      src: "/assets/47795ebdce09455e.webp",
      alt: "Two coffee cups on a wooden table",
    },
  },
  {
    name: "The Ridge",
    price: "$70",
    compareAtPrice: "$200",
    href: "#the-ridge",
    image: {
      src: "/assets/63aeec58a6ab5c74.webp",
      alt: "Dark coffee cup beside roasted beans",
    },
  },
  {
    name: "Dreams",
    price: "$60",
    compareAtPrice: "$200",
    href: "#dreams",
    image: {
      src: "/assets/02a7269595e4f4e6.webp",
      alt: "Latte in a handled mug with foam",
    },
  },
  {
    name: "Van Life",
    price: "$110",
    compareAtPrice: "$200",
    href: "#van-life",
    image: {
      src: "/assets/5267138413360745.webp",
      alt: "Travel mug on an outdoor table",
    },
  },
  {
    name: "The Bold",
    price: "$140",
    compareAtPrice: "$200",
    href: "#the-bold",
    image: {
      src: "/assets/ec2b22380882848a.webp",
      alt: "Iced coffee in a tall glass",
    },
  },
  {
    name: "The Traveler",
    price: "$180",
    compareAtPrice: "$200",
    href: "#the-traveler",
    image: {
      src: "/assets/ece1ed59bb6c27ee.webp",
      alt: "Takeaway coffee cup on a cafe counter",
    },
  },
  {
    name: "The Savor",
    price: "$50",
    compareAtPrice: "$200",
    href: "#the-savor",
    image: {
      src: "/assets/61d7ee48453facc3.webp",
      alt: "Small coffee cup on a saucer",
    },
  },
];

export const shopProductGridMocks = {
  default: {
    products: shopProductGridItems,
  },
  alternate: {
    products: shopProductGridItems.slice(0, 4),
  },
} satisfies Record<string, ShopProductGridProps>;
