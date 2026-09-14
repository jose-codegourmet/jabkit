import type {
  AssetSlot,
  ExperienceId,
  ExperienceRecord,
  FaqCategory,
  RoomId,
  RoomRecord,
} from "./types";
import { experienceIds, roomIds, sampleRoot } from "./types";

export const brand = {
  name: "Stillwater House",
  tagline: "A small guest house on a fictional lake.",
  statement: "Three rooms, one lake, a quiet table.",
  intro:
    "Three considered rooms beside still water. A seasonal table, woodland paths, and time to settle in.",
} as const;

export const setting = {
  name: "Stillwater Reach",
  description:
    "Stillwater Reach is an invented north-shore lake. There is no street address, map pin, award, review score, or live calendar. Rates are illustrative demo figures.",
} as const;

export const demoNote =
  "Stillwater House is a fictional JabKit sample. Rates are illustrative. Nothing is sent, reserved, or charged.";

export const host = {
  name: "Helen Mora",
  role: "House keeper",
  fallback: "HM",
  intro:
    "Helen Mora is the fictional keeper of Stillwater House. She looks after the three rooms, the path to the water, and the table that changes with the season.",
  philosophy:
    "The house should read as a place you can stand in: timber you can name, a door that meets a path, and a lake that stays in the same frame from the kitchen window.",
} as const;

export const navItems = [
  { href: `${sampleRoot}rooms`, label: "Rooms" },
  { href: `${sampleRoot}experiences`, label: "Experiences" },
  { href: `${sampleRoot}house`, label: "The house" },
  { href: `${sampleRoot}inquire`, label: "Inquire" },
] as const;

export const rooms: RoomRecord[] = [
  {
    id: "lake-room",
    slug: "lake-room",
    kind: "room",
    title: "Lake Room",
    summary:
      "A first-floor room facing the water, with a writing table and a quiet terrace of two chairs.",
    facet: "water",
    location: "Stillwater Reach, fictional lake",
    area: "32 m2",
    occupancy: 2,
    beds: "One queen bed",
    access:
      "Reached by an interior stair of eight treads. The terrace has a 40 mm timber threshold. Not step-free.",
    amenities: [
      "Lake-facing window with a deep sill",
      "Writing table for two",
      "Shower room with a fixed seat",
      "Blackout linen and a reading lamp",
    ],
    nightlyRate: 280,
    currency: "EUR",
    rateNote:
      "EUR 280 / night is an illustrative demo figure. No availability is checked.",
    comparison:
      "Choose Lake Room when the water should be the first thing you see. Occupancy is two. Access is by stair.",
    imageIds: { establishing: "lux-room01-a", detail: "lux-room01-b" },
    alt: {
      establishing:
        "Placeholder interior looking toward water through a wide window",
      detail: "Placeholder close view of linen and a timber window sill",
    },
    captions: {
      establishing: "Lake Room. The window that holds the lake in one pane.",
      detail: "Lake Room. Linen and the sill used as a desk.",
    },
    inclusions: [
      "Linen and towels for two",
      "A thermos and glasses for the terrace",
      "House breakfast at the common table",
    ],
    narrative: [
      "The Lake Room sits on the first floor, aligned with the kitchen window so the same tree line appears in both rooms.",
      "The bed faces the water. A writing table sits under the sill. The shower room is reached from the inner wall, not from the terrace.",
    ],
  },
  {
    id: "garden-room",
    slug: "garden-room",
    kind: "room",
    title: "Garden Room",
    summary:
      "A ground-floor room opening to a planted court, with the widest door in the house and a step-free path from the drive.",
    facet: "garden",
    location: "Stillwater Reach, fictional lake",
    area: "28 m2",
    occupancy: 2,
    beds: "One queen bed",
    access:
      "Step-free from the gravel path to the room door (860 mm clear). Level shower with a folding seat. The garden door has a 15 mm threshold strip.",
    amenities: [
      "Garden door to a planted court",
      "Level shower with a folding seat",
      "Wide writing ledge along the north wall",
      "Blackout linen and a reading lamp",
    ],
    nightlyRate: 240,
    currency: "EUR",
    rateNote:
      "EUR 240 / night is an illustrative demo figure. No availability is checked.",
    comparison:
      "Choose Garden Room for ground-floor access and the planted court. Occupancy is two. This is the only step-free room.",
    imageIds: { establishing: "lux-room02-a", detail: "lux-room02-b" },
    alt: {
      establishing:
        "Placeholder ground-floor room opening toward a planted court",
      detail: "Placeholder close view of a linen daybed against plaster",
    },
    captions: {
      establishing: "Garden Room. The court that stays in daily use.",
      detail: "Garden Room. The ledge used for a book and a glass.",
    },
    inclusions: [
      "Linen and towels for two",
      "A tray for the court table",
      "House breakfast at the common table",
    ],
    narrative: [
      "The Garden Room is the only ground-floor bedroom. It was planned so a guest who prefers not to use the stair still has a complete stay.",
      "The planted court is shared, not private. Morning light comes from the east. The lake is a short walk, not a view from the bed.",
    ],
  },
  {
    id: "upper-suite",
    slug: "upper-suite",
    kind: "room",
    title: "Upper Suite",
    summary:
      "An upstairs suite with a king bed, a daybed for a third guest, and a long window over the roof of the kitchen.",
    facet: "suite",
    location: "Stillwater Reach, fictional lake",
    area: "44 m2",
    occupancy: 3,
    beds: "One king bed and one daybed",
    access:
      "Reached by the main stair of fourteen treads. No lift. The shower is a tray with a 70 mm step. Not suitable as a step-free stay.",
    amenities: [
      "Long window over the kitchen roof",
      "Daybed that sleeps a third guest",
      "Separate sitting alcove",
      "Shower room with a deep tray",
    ],
    nightlyRate: 360,
    currency: "EUR",
    rateNote:
      "EUR 360 / night is an illustrative demo figure. No availability is checked.",
    comparison:
      "Choose Upper Suite when three people travel together. The extra guest uses the daybed. Access is by stair only.",
    imageIds: { establishing: "lux-room03-a", detail: "lux-room03-b" },
    alt: {
      establishing:
        "Placeholder upper room with a long window and timber ceiling",
      detail: "Placeholder close view of a lamp in a quiet corner",
    },
    captions: {
      establishing: "Upper Suite. The long window over the kitchen roof.",
      detail: "Upper Suite. The alcove lamp used after dusk.",
    },
    inclusions: [
      "Linen and towels for three",
      "An extra quilt on the daybed",
      "House breakfast at the common table",
    ],
    narrative: [
      "The Upper Suite occupies the roof volume. The king bed sits under the ridge. The daybed is a real third bed, not a sofa that pretends.",
      "The stair is the only route. If a guest needs step-free access, Garden Room is the matching record.",
    ],
  },
];

export const experiences: ExperienceRecord[] = [
  {
    id: "morning-on-the-water",
    slug: "morning-on-the-water",
    title: "Morning on the water",
    summary:
      "A slow hour on the house landing with a rowing skiff that stays in sight of the kitchen window.",
    atmosphere:
      "The landing is a timber deck, not a marina. The skiff is for two. You stay close to the reeds and come back for breakfast.",
    duration: "About 90 minutes, including the walk from the rooms.",
    audience: "Guests who are comfortable stepping into a small boat.",
    access:
      "The path from Garden Room is the most level. Lake Room and Upper Suite use the stair, then the same path. No life-jacket size is held for children under six in this sample.",
    inquiryPrompt:
      "Ask whether the landing is usable in the week you have in mind. This is a sample question, not a booking.",
    imageId: "lux-exp01",
    alt: "Placeholder water scene at a quiet shore",
    caption: "The landing used for Morning on the water.",
  },
  {
    id: "seasonal-table",
    slug: "seasonal-table",
    title: "Seasonal table",
    summary:
      "A shared supper at the kitchen table, cooked from what the house garden and the fictional lake town can supply that week.",
    atmosphere:
      "The table seats the house, not a restaurant service. One sitting. Plates stay on the wood. There is no tasting-menu copy.",
    duration: "About two and a half hours, usually from 19:00.",
    audience: "Any guest of the house, including children at the table.",
    access:
      "The kitchen is step-free from Garden Room. Other rooms use the stair. Dietary notes can be written in the inquiry.",
    inquiryPrompt:
      "Mention a dietary need or a preference to eat earlier. This does not reserve a seat.",
    imageId: "lux-exp02",
    alt: "Placeholder table set in a quiet interior",
    caption: "The kitchen table used for Seasonal table.",
  },
  {
    id: "woodland-walk",
    slug: "woodland-walk",
    title: "Woodland walk",
    summary:
      "A marked loop through the trees behind the house, returning by the same gravel path.",
    atmosphere:
      "The walk is a loop of ordinary woodland, not a guided tour. Helen leaves a sketch of the path on the hall table.",
    duration: "About 70 minutes at an easy pace.",
    audience: "Walkers who can manage an uneven gravel and root surface.",
    access:
      "The path is not step-free. After rain it holds water in two low points. There is no lighting after dusk in this sample.",
    inquiryPrompt:
      "Ask for the current path note if you prefer to avoid mud. This is not a timed slot.",
    imageId: "lux-exp03",
    alt: "Placeholder woodland path in even light",
    caption: "The woodland loop behind the house.",
  },
];

export const houseFaqs: FaqCategory[] = [
  {
    id: "setting",
    label: "The setting",
    items: [
      {
        question: "Where is Stillwater House?",
        answer:
          "It sits on Stillwater Reach, a fictional lake invented for this sample. There is no real address, map pin, or phone number.",
      },
      {
        question: "Can I book a room here?",
        answer:
          "No. The inquire page previews a stay locally. Nothing is reserved, paid, or emailed.",
      },
    ],
  },
  {
    id: "access",
    label: "Guests and access",
    items: [
      {
        question: "Which room is step-free?",
        answer:
          "Garden Room. Lake Room and Upper Suite use stairs. Read the access note on each room before you inquire.",
      },
      {
        question: "How many guests can stay?",
        answer:
          "Lake Room and Garden Room hold two. Upper Suite holds three, with the third guest on the daybed. The inquiry rejects a count above the selected room.",
      },
      {
        question: "Are children welcome?",
        answer:
          "Yes, within the room occupancy. The skiff in Morning on the water is not described as suitable for children under six in this sample.",
      },
    ],
  },
  {
    id: "inquiry",
    label: "The inquiry",
    items: [
      {
        question: "What do the nightly rates mean?",
        answer:
          "They are illustrative demo figures in euro. They do not change with dates and they are not a quote.",
      },
      {
        question: "Will you hold dates for me?",
        answer:
          "No. Dates are a preference you review on the page. There is no availability check.",
      },
    ],
  },
];

export const unknownSlugCopy = {
  room: {
    title: "This room is not in the house",
    body: "Stillwater House has three rooms: Lake Room, Garden Room, and Upper Suite. Unknown names cannot be used in an inquiry.",
    actionLabel: "Compare rooms",
    actionHref: `${sampleRoot}rooms`,
  },
} as const;

export const assetMatrix: AssetSlot[] = [
  {
    route: sampleRoot,
    section: "hero",
    recordId: "house",
    imageId: "lux-hero",
  },
  ...rooms.flatMap((room) => [
    {
      route: `${sampleRoot}rooms/${room.slug}`,
      section: "establishing",
      recordId: room.slug,
      imageId: room.imageIds.establishing,
    },
    {
      route: `${sampleRoot}rooms/${room.slug}`,
      section: "detail",
      recordId: room.slug,
      imageId: room.imageIds.detail,
    },
  ]),
  ...experiences.map((experience) => ({
    route: `${sampleRoot}experiences#${experience.slug}`,
    section: "chapter",
    recordId: experience.slug,
    imageId: experience.imageId,
  })),
  {
    route: `${sampleRoot}house`,
    section: "house",
    recordId: "house",
    imageId: "lux-house",
  },
  {
    route: `${sampleRoot}house`,
    section: "host",
    recordId: "host",
    imageId: "lux-host",
  },
];

export function isRoomId(value: string | undefined): value is RoomId {
  return value !== undefined && (roomIds as readonly string[]).includes(value);
}

export function isExperienceId(
  value: string | undefined,
): value is ExperienceId {
  return (
    value !== undefined && (experienceIds as readonly string[]).includes(value)
  );
}

export function getRoom(slug: string | undefined): RoomRecord | undefined {
  if (!isRoomId(slug)) return undefined;
  return rooms.find((room) => room.slug === slug);
}

export function getExperience(
  slug: string | undefined,
): ExperienceRecord | undefined {
  if (!isExperienceId(slug)) return undefined;
  return experiences.find((item) => item.slug === slug);
}

export function relatedRooms(slug: RoomId): RoomRecord[] {
  return rooms.filter((room) => room.slug !== slug);
}

export function formatRate(room: RoomRecord): string {
  const formatted = new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: room.currency,
    maximumFractionDigits: 0,
  }).format(room.nightlyRate);
  return `${formatted} / night`;
}

export function roomHref(slug: RoomId): string {
  return `${sampleRoot}rooms/${slug}`;
}

export function experienceHref(slug: ExperienceId): string {
  return `${sampleRoot}experiences#${slug}`;
}

export function inquireHref(query?: {
  room?: string;
  experience?: string;
}): string {
  const params = new URLSearchParams();
  if (query?.room && isRoomId(query.room)) params.set("room", query.room);
  if (query?.experience && isExperienceId(query.experience)) {
    params.set("experience", query.experience);
  }
  const search = params.toString();
  const path = `${sampleRoot}inquire`;
  return search ? `${path}?${search}` : path;
}
