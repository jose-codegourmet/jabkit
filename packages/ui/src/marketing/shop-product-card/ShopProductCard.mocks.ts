import type { ShopProductCardProps } from "./ShopProductCard.types";

export const shopProductCardMocks = {
  default: {
    name: "The Classic",
    price: "$120",
    compareAtPrice: "$200",
    href: "#the-classic",
    image: {
      src: "/assets/d7aec5a4066ae4f7.webp",
      alt: "White ceramic mug on a studio surface",
    },
  },
  alternate: {
    name: "The Camper",
    price: "$80",
    compareAtPrice: "$200",
    href: "#the-camper",
    image: {
      src: "/assets/42c22367c0be8e21.webp",
      alt: "Espresso cup and saucer on a dark table",
    },
  },
} satisfies Record<string, ShopProductCardProps>;
