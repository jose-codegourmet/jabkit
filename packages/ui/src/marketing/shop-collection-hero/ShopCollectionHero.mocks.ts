import type { ShopCollectionHeroProps } from "./ShopCollectionHero.types";

export const shopCollectionHeroMocks = {
  default: {
    brand: "MUGSY'S",
    kicker: "PREMIUM",
    title: "Explore the Collection",
    description:
      "Limited edition mugs designed for everyday carry and modern travel. Only 2,000 units worldwide.",
    body: "Engineered for everyday adventures. Durable, lightweight, and built to move with you wherever the journey leads.",
    cta: { label: "Explore Collection", href: "#collection" },
    shopCta: { label: "Shop Now", href: "#shop" },
    rating: "98%",
    ratingLabel: "Customer satisfaction rating across all orders",
    avatars: [
      {
        src: "/assets/ea07d2da071b9238.webp",
        alt: "Customer portrait",
      },
      {
        src: "/assets/167acbe9e3afc083.webp",
        alt: "Customer portrait",
      },
      {
        src: "/assets/60599cf2ed9c77bc.webp",
        alt: "Customer portrait",
      },
    ],
    productImage: {
      src: "/assets/55338b0d02a343f3.webp",
      alt: "Featured ceramic mug from the collection",
    },
  },
  alternate: {
    brand: "MUGSY'S",
    kicker: "LIMITED",
    title: "Camp Series",
    description:
      "Trail-ready vessels for early starts and long drives. Four hundred numbered units this season.",
    body: "Double-wall steel, a lock-tight lid, and a silhouette that clips to a pack.",
    cta: { label: "See camp series", href: "#camp" },
    shopCta: { label: "Shop camp", href: "#shop-camp" },
    rating: "96%",
    ratingLabel: "Verified ratings from the last drop",
    avatars: [
      {
        src: "/assets/ea07d2da071b9238.webp",
        alt: "Customer portrait",
      },
      {
        src: "/assets/60599cf2ed9c77bc.webp",
        alt: "Customer portrait",
      },
    ],
    productImage: {
      src: "/assets/722519d9149dd264.webp",
      alt: "Travel mug on an outdoor table",
    },
  },
} satisfies Record<string, ShopCollectionHeroProps>;
