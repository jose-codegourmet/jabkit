import type { SwissImageId } from "./assets";

export interface Venue {
  slug: "cinema-one" | "hall-b";
  name: string;
  imageId: SwissImageId;
  address: string;
  seats: string;
  gettingThere: string;
  access: string;
}

export const venues: Venue[] = [
  {
    slug: "cinema-one",
    name: "Cinema One",
    imageId: "swi-venue-cinema-one",
    address: "[Address — client to confirm]",
    seats: "[Capacity — client to confirm]",
    gettingThere: "[Transit directions — client to confirm]",
    access:
      "[Step-free access, hearing loop, wheelchair spaces — client to confirm]",
  },
  {
    slug: "hall-b",
    name: "Hall B",
    imageId: "swi-venue-hall-b",
    address: "[Address — client to confirm]",
    seats: "[Capacity — client to confirm]",
    gettingThere: "[Transit directions — client to confirm]",
    access:
      "[Step-free access, hearing loop, wheelchair spaces — client to confirm]",
  },
];

export function getVenue(slug: string) {
  return venues.find((venue) => venue.slug === slug);
}
