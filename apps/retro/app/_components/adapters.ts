import type { Content1Section } from "@/marketing/content1";
import type { Pricing28Plan } from "@/marketing/pricing28";
import { sampleImage } from "../assets";
import {
  cropFormatLabels,
  displayedAmount,
  pricingHref,
  studioSteps,
} from "../content";
import type {
  BillingInterval,
  CollectionRecord,
  KeepAsset,
  PlanRecord,
} from "../types";

export function toPricing28Plans(
  records: PlanRecord[],
  interval: BillingInterval,
): Pricing28Plan[] {
  return records.map((plan) => {
    const amount = displayedAmount(plan, interval);
    return {
      id: plan.id,
      name: plan.name,
      popular: plan.popular,
      popularLabel: plan.popular ? "Concept" : undefined,
      monthlyPrice: plan.monthlyPrice,
      yearlyPrice: plan.yearlyPrice,
      monthlyPeriod: plan.monthlyPeriod,
      yearlyPeriod: plan.yearlyPeriod,
      tagline: `${plan.tagline} Currently ${amount.price} ${amount.period}.`,
      ctaLabel: `Review ${plan.name}`,
      href: pricingHref({ plan: plan.id, interval }),
      ctaVariant: plan.popular ? "primary" : "secondary",
      groups: [
        {
          title: "Works in this demo",
          items: plan.features.map((text) => ({
            icon: "check" as const,
            text,
          })),
        },
        {
          title: "Concept only",
          items: plan.conceptOnly.map((text) => ({
            icon: "layers" as const,
            text,
          })),
        },
      ],
    };
  });
}

export function toGuideSections(): Content1Section[] {
  return [
    {
      id: "choose",
      title: studioSteps[0].title,
      blocks: [
        {
          type: "paragraph",
          text: "Open Collections and pick Weekend Postcards when you want the default journey. On the detail page, Choose a crop lists the two artworks and the four formats the cropper actually supports. You can also skip the pack and upload a file in the studio.",
        },
        {
          type: "list",
          items: [
            {
              title: "Built-in keep",
              text: "Allowlisted asset IDs land on /studio with the matching picture.",
            },
            {
              title: "Your file",
              text: "Upload stays in this tab. JPEG, PNG, WebP, or GIF, up to 8 MB.",
            },
          ],
        },
      ],
    },
    {
      id: "crop",
      title: studioSteps[1].title,
      blocks: [
        {
          type: "paragraph",
          text: "The studio is the live ImageCropper. Aspect buttons are Square, 4:3, 16:9, and Free. The canvas is a work surface: no paper texture over the pixels, no fake window chrome, no sound.",
        },
        {
          type: "list",
          items: [
            {
              title: "Pan",
              text: "Drag the picture, or focus the canvas and use arrow keys.",
            },
            {
              title: "Zoom",
              text: "Use the labelled zoom slider, or plus and minus on the focused canvas.",
            },
            {
              title: "Preview",
              text: "The small preview is the same crop that Download will write.",
            },
          ],
        },
        {
          type: "callout",
          callout: {
            badge: "Live tool",
            title: "These are the real controls",
            body: "This guide does not use a generated screenshot. Open the studio on this site to see Upload, aspect, zoom, preview, Download, and Reset to sample.",
          },
        },
      ],
    },
    {
      id: "download",
      title: studioSteps[2].title,
      blocks: [
        {
          type: "paragraph",
          text: "Download writes a PNG of the current crop in this browser. Decorative page texture is not drawn onto the file. Reload returns to the seeded keep. Reset to sample does the same without leaving the page.",
        },
        {
          type: "table",
          table: {
            caption: "Upload limits discovered on the cropper",
            columns: ["Rule", "What happens"],
            rows: [
              ["JPEG, PNG, WebP, GIF", "Loaded locally"],
              ["Other types", "Error; current picture kept"],
              ["Larger than 8 MB", "Error; current picture kept"],
              ["Unreadable file", "Error; last usable source restored"],
            ],
          },
        },
      ],
    },
  ];
}

export function collectionPickerImages(assets: KeepAsset[]) {
  return assets.map((asset) => {
    const image = sampleImage(asset.imageId, asset.alt);
    return { src: image.src, alt: asset.alt };
  });
}

export function formatOptions() {
  return (["1:1", "4:3", "16:9", "free"] as const).map((id) => ({
    id,
    label: cropFormatLabels[id],
  }));
}

export function collectionCountLabel(collection: CollectionRecord): string {
  return `${collection.assetIds.length} keeps`;
}
