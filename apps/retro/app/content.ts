import type { ImageCropperAspect } from "@/atoms/image-cropper";
import type {
  AssetId,
  AssetSlot,
  BillingInterval,
  CapabilityRow,
  CollectionId,
  CollectionRecord,
  CollectionTag,
  CropAspect,
  FaqCategory,
  KeepAsset,
  PlanId,
  PlanRecord,
  TagFilter,
} from "./types";
import {
  assetIds,
  billingIntervals,
  collectionIds,
  cropAspects,
  planIds,
  sampleRoot,
  tagFilters,
} from "./types";

export const brand = {
  name: "Pocket Keeps",
  tagline: "Small pictures, honest crops.",
  statement: "A pocket for the pictures you already have.",
  intro:
    "A little home for your favorite pictures. Choose a photograph, find your frame, and download a keep.",
} as const;

export const maker = {
  name: "Nora Pell",
  role: "Keeper of the sleeves",
  intro:
    "Nora Pell is the fictional keeper of Pocket Keeps. She writes the collection notes, names the crop formats, and keeps the studio honest about what it can do.",
} as const;

export const demoNote =
  "Pocket Keeps is a fictional JabKit sample. Crop, zoom, and download run in this browser. Cloud sync, collaboration, and paid accounts are concept-only. Nothing is uploaded, billed, or stored on a server.";

export const navItems = [
  { href: `${sampleRoot}collections`, label: "Collections" },
  { href: `${sampleRoot}how-it-works`, label: "How it works" },
  { href: `${sampleRoot}studio`, label: "Studio" },
  { href: `${sampleRoot}pricing`, label: "Plans" },
] as const;

export const imageryStubNote =
  "A collection of AI-created photographs and paper studies for this fictional product.";

export const provenanceNote =
  "These AI-created images belong to the fictional demo collections. No separate commercial pack license is offered here.";

export const cropFormatLabels: Record<CropAspect, string> = {
  "1:1": "Square 1:1",
  "4:3": "Postcard 4:3",
  "16:9": "Wide 16:9",
  free: "Free frame",
};

export const tagLabels: Record<CollectionTag, string> = {
  paper: "Paper",
  objects: "Objects",
  studio: "Studio table",
  travel: "Travel",
  outdoor: "Outdoor",
  night: "Night",
  transit: "Transit",
  city: "City",
};

export const keepAssets: KeepAsset[] = [
  {
    id: "drawer-matchbox",
    collectionId: "desk-drawer",
    title: "Matchbox still",
    summary:
      "A closed matchbox on blotter paper, photographed as a square-friendly still.",
    cropNote:
      "Holds a 1:1 crop without losing the label edge. 4:3 keeps the blotter margin.",
    imageId: "ret-c01-a",
    alt: "Placeholder still of a small object on a paper desk surface",
    caption: "Desk Drawer. Matchbox still.",
  },
  {
    id: "drawer-ticket",
    collectionId: "desk-drawer",
    title: "Torn ticket",
    summary:
      "A half ticket with a punched edge, meant for a tight vertical crop.",
    cropNote:
      "The punched edge sits left. Free frame can keep the whole scrap; 16:9 will clip it.",
    imageId: "ret-c01-b",
    alt: "Placeholder close view of a paper scrap on a desk",
    caption: "Desk Drawer. Torn ticket.",
  },
  {
    id: "postcard-pier",
    collectionId: "weekend-postcards",
    title: "Pier at low tide",
    summary:
      "A short pier and a pale sky, the default seed for the working studio.",
    cropNote:
      "4:3 is the intended postcard. Square crops into the pier deck. 16:9 keeps more sky.",
    imageId: "ret-c02-a",
    alt: "Placeholder landscape used as a weekend postcard crop",
    caption: "Weekend Postcards. Pier at low tide.",
  },
  {
    id: "postcard-kiosk",
    collectionId: "weekend-postcards",
    title: "Closed kiosk",
    summary:
      "A shuttered kiosk beside a walk, useful when you want a vertical subject in a 4:3 frame.",
    cropNote:
      "Keep the shutter in frame for 4:3. Square crops to the door. Free frame can include the path.",
    imageId: "ret-c02-b",
    alt: "Placeholder photograph of a small kiosk beside a walk",
    caption: "Weekend Postcards. Closed kiosk.",
  },
  {
    id: "bus-window",
    collectionId: "night-bus",
    title: "Window condensation",
    summary:
      "A night window with street lights, shot for a wide crop that still reads as a still.",
    cropNote:
      "16:9 is the intended night frame. 4:3 keeps the reflection. Square needs a tight pan.",
    imageId: "ret-c03-a",
    alt: "Placeholder night view through glass with street lights",
    caption: "Night Bus. Window condensation.",
  },
  {
    id: "bus-ticket",
    collectionId: "night-bus",
    title: "Night transfer",
    summary:
      "A transfer slip on a vinyl seat, meant as a small object against a dark field.",
    cropNote:
      "Square holds the slip. 4:3 includes the seat grain. 16:9 will need a careful pan.",
    imageId: "ret-c03-b",
    alt: "Placeholder photograph of a paper slip on a dark seat",
    caption: "Night Bus. Night transfer.",
  },
];

export const collections: CollectionRecord[] = [
  {
    id: "desk-drawer",
    slug: "desk-drawer",
    kind: "collection",
    title: "Desk Drawer",
    theme: "Paper objects from a working desk.",
    summary:
      "Matchboxes, tickets, and the small things that collect in a drawer overnight.",
    description:
      "Desk Drawer is a closed pack of two stills. It is for people who want a square or free crop of an object already on a table, not a generated collage.",
    tags: ["paper", "objects", "studio"],
    assetIds: ["drawer-matchbox", "drawer-ticket"],
    coverId: "ret-c01-a",
    coverAlt: "Placeholder still used as the Desk Drawer cover",
    coverCaption: "Desk Drawer. Two stills.",
  },
  {
    id: "weekend-postcards",
    slug: "weekend-postcards",
    kind: "collection",
    title: "Weekend Postcards",
    theme: "Short trips remembered as 4:3 cards.",
    summary:
      "A pier and a closed kiosk. The default path into the working studio.",
    description:
      "Weekend Postcards is the pack the homepage sends you to. Choose an artwork, set 4:3, and open the studio. The crop downloads locally. It does not become a printed card or a cloud project.",
    tags: ["travel", "paper", "outdoor"],
    assetIds: ["postcard-pier", "postcard-kiosk"],
    coverId: "ret-c02-a",
    coverAlt: "Placeholder landscape used as the Weekend Postcards cover",
    coverCaption: "Weekend Postcards. Pier still.",
  },
  {
    id: "night-bus",
    slug: "night-bus",
    kind: "collection",
    title: "Night Bus",
    theme: "Indoor night, glass, and a transfer slip.",
    summary:
      "Two stills from a last ride: condensation on a window, and a ticket on vinyl.",
    description:
      "Night Bus is a dark pack. Use 16:9 when you want the window. Use square when the ticket should fill the frame. The studio will not remove reflections or add light.",
    tags: ["night", "transit", "city"],
    assetIds: ["bus-window", "bus-ticket"],
    coverId: "ret-c03-a",
    coverAlt: "Placeholder night view used as the Night Bus cover",
    coverCaption: "Night Bus. Window still.",
  },
];

export const plans: PlanRecord[] = [
  {
    id: "sleeve",
    name: "Sleeve",
    tagline: "The working local demo. Crop, zoom, and download in this tab.",
    monthlyPrice: "$0",
    yearlyPrice: "$0",
    monthlyPeriod: "/ month, illustrative",
    yearlyPeriod: "/ year, illustrative",
    features: [
      "Crop, zoom, and pan in the browser studio",
      "1:1, 4:3, 16:9, and free frames",
      "JPEG, PNG, WebP, or GIF up to 8 MB",
      "Download a PNG of the current crop",
      "Reset to a built-in sample",
    ],
    conceptOnly: [
      "No cloud library",
      "No saved projects after reload",
      "No account",
    ],
  },
  {
    id: "cabinet",
    name: "Cabinet",
    tagline: "A concept for sleeves that live beyond this tab.",
    monthlyPrice: "$8",
    yearlyPrice: "$80",
    monthlyPeriod: "/ month, illustrative",
    yearlyPeriod: "/ year, illustrative",
    features: [
      "Everything described in Sleeve",
      "Named as a future home for synced sleeves",
    ],
    conceptOnly: [
      "Cloud sync is not implemented",
      "Collaboration is not implemented",
      "No payment is collected",
    ],
    popular: true,
  },
];

export const capabilities: CapabilityRow[] = [
  {
    id: "crop",
    label: "Crop, zoom, pan, download",
    status: "works-now",
    note: "The ImageCropper on /studio performs these in the browser.",
  },
  {
    id: "upload",
    label: "Replace with a local file",
    status: "works-now",
    note: "Uploads stay in this tab. Object URLs are released on reset or leave.",
  },
  {
    id: "sync",
    label: "Cloud sync of sleeves",
    status: "concept",
    note: "Described on Plans only. There is no sync control in the studio.",
  },
  {
    id: "collab",
    label: "Collaboration",
    status: "concept",
    note: "There is no share, invite, or comment control.",
  },
  {
    id: "account",
    label: "Paid accounts",
    status: "concept",
    note: "Prices are illustrative. No checkout or sign-in exists.",
  },
];

export const studioSteps = [
  {
    id: "choose",
    title: "Choose a picture",
    body: "Open a collection and pick an artwork, or stay in the studio and upload a JPEG, PNG, WebP, or GIF from this device.",
  },
  {
    id: "crop",
    title: "Set the frame",
    body: "Use Square, 4:3, 16:9, or Free. Drag to pan. Use the zoom slider, or focus the canvas and use arrow keys, plus, and minus.",
  },
  {
    id: "download",
    title: "Inspect and download",
    body: "The preview shows the crop. Download writes a PNG in this browser. Reloading the page returns to the seeded sample.",
  },
] as const;

export const guideFaqs: FaqCategory[] = [
  {
    id: "files",
    label: "Files",
    items: [
      {
        question: "Which files can I upload?",
        answer:
          "JPEG, PNG, WebP, or GIF, up to 8 MB. Other types and larger files show an error and keep the current picture. Corrupt files restore the last usable source when one exists.",
      },
      {
        question: "Does my upload leave this browser?",
        answer:
          "No. The studio never sends the file to Higgsfield or any other host. Reload or Reset to sample drops the object URL.",
      },
    ],
  },
  {
    id: "controls",
    label: "Controls",
    items: [
      {
        question: "How do I pan and zoom without a pointer?",
        answer:
          "Focus the crop canvas. Arrow keys pan. Plus and minus change zoom. The zoom slider remains labelled and usable.",
      },
      {
        question: "What happens if an upload fails?",
        answer:
          "The error explains the limit. The previous picture stays. Use Reset to sample to return to the seeded keep.",
      },
    ],
  },
  {
    id: "plans",
    label: "Plans",
    items: [
      {
        question: "Is Cabinet a real subscription?",
        answer:
          "No. Cabinet is an illustrative concept. No payment is collected, and there is no account to create.",
      },
    ],
  },
];

export const pricingFaqs: FaqCategory[] = [
  {
    id: "billing",
    label: "Billing in this sample",
    items: [
      {
        question: "Will choosing a plan start a subscription?",
        answer:
          "No. The cards update a local summary of name, interval, and illustrative price. Change plan returns you to the cards. Open free demo goes to the studio. No payment field exists.",
      },
      {
        question: "Why are some rows marked concept-only?",
        answer:
          "Cloud sync, collaboration, and paid accounts are not built. They must not appear as switches or uploads in the studio.",
      },
    ],
  },
];

export const unknownSlugCopy = {
  collection: {
    title: "This collection is not in the drawer",
    body: "Pocket Keeps has three packs: Desk Drawer, Weekend Postcards, and Night Bus. Unknown slugs do not invent a fourth pack.",
    actionHref: `${sampleRoot}collections`,
    actionLabel: "Browse collections",
  },
  page: {
    title: "This page is not in the sample",
    body: "Pocket Keeps is a closed set of routes. Return home or open the studio.",
  },
} as const;

export const assetMatrix: AssetSlot[] = [
  {
    route: sampleRoot,
    section: "hero",
    recordId: "home",
    imageId: "ret-hero",
  },
  {
    route: `${sampleRoot}collections/desk-drawer`,
    section: "cover",
    recordId: "desk-drawer",
    imageId: "ret-c01-a",
  },
  {
    route: `${sampleRoot}collections/weekend-postcards`,
    section: "cover",
    recordId: "weekend-postcards",
    imageId: "ret-c02-a",
  },
  {
    route: `${sampleRoot}collections/night-bus`,
    section: "cover",
    recordId: "night-bus",
    imageId: "ret-c03-a",
  },
  ...keepAssets.map((asset) => ({
    route: `${sampleRoot}collections/${asset.collectionId}`,
    section: "asset",
    recordId: asset.id,
    imageId: asset.imageId,
  })),
];

export const defaultStudioAssetId: AssetId = "postcard-pier";
export const defaultStudioAspect: CropAspect = "4:3";

export function isCollectionId(
  value: string | undefined,
): value is CollectionId {
  return (
    value !== undefined && (collectionIds as readonly string[]).includes(value)
  );
}

export function isAssetId(value: string | undefined): value is AssetId {
  return value !== undefined && (assetIds as readonly string[]).includes(value);
}

export function isCropAspect(value: string | undefined): value is CropAspect {
  return (
    value !== undefined && (cropAspects as readonly string[]).includes(value)
  );
}

export function isPlanId(value: string | undefined): value is PlanId {
  return value !== undefined && (planIds as readonly string[]).includes(value);
}

export function isBillingInterval(
  value: string | undefined,
): value is BillingInterval {
  return (
    value !== undefined &&
    (billingIntervals as readonly string[]).includes(value)
  );
}

export function isTagFilter(value: string | undefined): value is TagFilter {
  return (
    value !== undefined && (tagFilters as readonly string[]).includes(value)
  );
}

export function parseTagFilter(raw: string | undefined): TagFilter {
  if (!raw || raw === "all") return "all";
  return isTagFilter(raw) ? raw : "all";
}

export function getCollection(
  slug: string | undefined,
): CollectionRecord | undefined {
  return collections.find((collection) => collection.slug === slug);
}

export function getAsset(id: string | undefined): KeepAsset | undefined {
  return keepAssets.find((asset) => asset.id === id);
}

export function assetsForCollection(collection: CollectionRecord): KeepAsset[] {
  return collection.assetIds.map((id) => {
    const asset = getAsset(id);
    if (!asset) {
      throw new Error(`Missing asset ${id} for ${collection.id}`);
    }
    return asset;
  });
}

export function getPlan(id: string | undefined): PlanRecord | undefined {
  return plans.find((plan) => plan.id === id);
}

export function collectionHref(slug: CollectionId): string {
  return `${sampleRoot}collections/${slug}`;
}

export function collectionsHref(filter: TagFilter = "all", q = ""): string {
  const params = new URLSearchParams();
  if (filter !== "all") params.set("filter", filter);
  const query = q.trim();
  if (query) params.set("q", query);
  const search = params.toString();
  return search
    ? `${sampleRoot}collections?${search}`
    : `${sampleRoot}collections`;
}

export function studioHref(query?: {
  asset?: string;
  aspect?: string;
}): string {
  const params = new URLSearchParams();
  if (query?.asset && isAssetId(query.asset)) params.set("asset", query.asset);
  if (query?.aspect && isCropAspect(query.aspect)) {
    params.set("aspect", query.aspect);
  }
  const search = params.toString();
  return search ? `${sampleRoot}studio?${search}` : `${sampleRoot}studio`;
}

export function pricingHref(query?: {
  plan?: string;
  interval?: BillingInterval;
}): string {
  const params = new URLSearchParams();
  if (query?.plan && isPlanId(query.plan)) params.set("plan", query.plan);
  if (query?.interval) params.set("interval", query.interval);
  const search = params.toString();
  const path = `${sampleRoot}pricing`;
  return search ? `${path}?${search}#summary` : path;
}

export function toCropperAspect(aspect: CropAspect): ImageCropperAspect {
  return aspect;
}

export function displayedAmount(
  plan: PlanRecord,
  interval: BillingInterval,
): { price: string; period: string } {
  if (interval === "yearly") {
    return { price: plan.yearlyPrice, period: plan.yearlyPeriod };
  }
  return { price: plan.monthlyPrice, period: plan.monthlyPeriod };
}

export function filterCollections(
  filter: TagFilter,
  q = "",
): CollectionRecord[] {
  const needle = q.trim().toLowerCase();
  return collections.filter((collection) => {
    const tagOk = filter === "all" || collection.tags.includes(filter);
    if (!tagOk) return false;
    if (!needle) return true;
    const haystack = [
      collection.title,
      collection.theme,
      collection.summary,
      collection.description,
      ...collection.tags.map((tag) => tagLabels[tag]),
    ]
      .join(" ")
      .toLowerCase();
    return haystack.includes(needle);
  });
}

export function resolveStudioSeed(query: { asset?: string; aspect?: string }): {
  asset: KeepAsset;
  aspect: CropAspect;
  ignoredUnknownAsset: boolean;
  ignoredUnknownAspect: boolean;
} {
  const ignoredUnknownAsset = Boolean(query.asset) && !isAssetId(query.asset);
  const ignoredUnknownAspect =
    Boolean(query.aspect) && !isCropAspect(query.aspect);
  const asset = getAsset(query.asset) ?? getAsset(defaultStudioAssetId);
  if (!asset) {
    throw new Error("Default studio asset missing");
  }
  const aspect = isCropAspect(query.aspect)
    ? query.aspect
    : defaultStudioAspect;
  return {
    asset,
    aspect,
    ignoredUnknownAsset,
    ignoredUnknownAspect,
  };
}
