import type { CarouselCardsItem } from "@/marketing/carousel-cards";
import type { Content1Section } from "@/marketing/content1";
import { sampleImage } from "../assets";
import { roomHref } from "../content";
import type { RoomRecord } from "../types";

export function toCarouselItems(rooms: RoomRecord[]): CarouselCardsItem[] {
  return rooms.map((room) => {
    const image = sampleImage(
      room.imageIds.establishing,
      room.alt.establishing,
    );
    return {
      id: room.id,
      title: room.title,
      image: image.src,
      imageAlt: room.alt.establishing,
      location: room.location,
      price: room.nightlyRate,
      currency: room.currency,
      priceUnit: "night",
      href: roomHref(room.slug),
    };
  });
}

export function toRoomSections(room: RoomRecord): Content1Section[] {
  const detail = sampleImage(room.imageIds.detail, room.alt.detail);
  return [
    {
      id: `${room.slug}-stay`,
      title: "How the room is used",
      blocks: [
        ...room.narrative.map((text) => ({
          type: "paragraph" as const,
          text,
        })),
        {
          type: "list",
          items: room.amenities.map((text) => ({
            title: "In the room",
            text,
          })),
        },
      ],
    },
    {
      id: `${room.slug}-access`,
      title: "Access and inclusions",
      blocks: [
        {
          type: "paragraph",
          text: room.access,
        },
        {
          type: "list",
          items: room.inclusions.map((text) => ({
            title: "Included",
            text,
          })),
        },
        {
          type: "image",
          image: {
            src: detail.src,
            alt: room.alt.detail,
            caption: room.captions.detail,
          },
        },
        {
          type: "callout",
          callout: {
            badge: "Demo",
            title: "Illustrative rate",
            body: room.rateNote,
          },
        },
      ],
    },
  ];
}

export function toHouseSections(): Content1Section[] {
  return [
    {
      id: "materials",
      title: "Materials in daily use",
      blocks: [
        {
          type: "paragraph",
          text: "The house is timber and mineral plaster. Floors are pale oak. Window frames repeat the same section so rooms feel related without matching furniture.",
        },
        {
          type: "list",
          items: [
            {
              title: "Wood",
              text: "Oak floors and a fir stair. The landing deck is untreated larch.",
            },
            {
              title: "Light",
              text: "East court for Garden Room. The lake window faces west-north.",
            },
            {
              title: "Cloth",
              text: "Linen in two weights. No metallic trim as a luxury signal.",
            },
          ],
        },
      ],
    },
    {
      id: "rhythm",
      title: "A day in the house",
      blocks: [
        {
          type: "paragraph",
          text: "Breakfast is at the kitchen table. The landing is used in the morning. The woodland loop is marked on a card in the hall. Supper, when asked for, is the seasonal table, not a restaurant sitting.",
        },
      ],
    },
    {
      id: "arrival",
      title: "Arrival in this sample",
      blocks: [
        {
          type: "paragraph",
          text: "There is no real road, postcode, or transfer. In the story, guests leave a car on a gravel spur and walk a short path to the court. Garden Room is the level route. Other rooms use the stair from the hall.",
        },
        {
          type: "callout",
          callout: {
            badge: "Fictional",
            title: "Stillwater Reach is invented",
            body: "Do not treat this page as a place you can navigate to. There is no map pin, award, or live availability.",
          },
        },
      ],
    },
  ];
}
