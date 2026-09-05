import type { ProductQuickView4Props } from "./ProductQuickView4.types";

export const productQuickView4Mocks = {
  default: {
    triggerLabel: "Quick view",
    title: "Studio wool overcoat",
    description:
      "A clean shoulder, a mid-calf hem, and a hidden placket. Cut in dense wool for evenings that start after the studio lights go out.",
    price: "$428",
    compareAtPrice: "$520",
    images: [
      {
        src: "/assets/4ce360395e8f9d6e.webp",
        alt: "Camel wool overcoat on a hanger",
      },
      {
        src: "/assets/6baa48de9bbbdb4b.webp",
        alt: "Black bomber jacket on a studio background",
      },
      {
        src: "/assets/5fa1d074c0baca15.webp",
        alt: "Cream knit sweater laid flat",
      },
    ],
    colors: [
      { id: "ink", label: "Ink", swatch: "foreground" },
      { id: "camel", label: "Camel", swatch: "chart-4" },
      { id: "bone", label: "Bone", swatch: "muted" },
      { id: "clay", label: "Clay", swatch: "chart-2", available: false },
    ],
    sizes: [
      { id: "xs", label: "XS", available: false },
      { id: "s", label: "S" },
      { id: "m", label: "M" },
      { id: "l", label: "L" },
      { id: "xl", label: "XL" },
    ],
    colorLegend: "Color",
    sizeLegend: "Size",
    addToCartLabel: "Add to cart",
    detailsLabel: "View product details",
    detailsHref: "#overcoat",
    defaultColorId: "camel",
    defaultSizeId: "m",
    defaultOpen: true,
    presentation: "dialog",
  },
  alternate: {
    triggerLabel: "Look closer",
    title: "Field silk slip",
    description:
      "Bias-cut silk with a printed field and a quiet strap. Made for long tables outdoors, then folded into a weekend bag.",
    price: "$286",
    images: [
      {
        src: "/assets/a30efca866970509.webp",
        alt: "Floral dress detail in motion",
      },
      {
        src: "/assets/70a7a7079f1861fe.webp",
        alt: "Woman in a floral dress walking through greenery",
      },
      {
        src: "/assets/78a34cf9c749e6eb.webp",
        alt: "Stacked folded shirts in pale tones",
      },
    ],
    colors: [
      { id: "field", label: "Field", swatch: "chart-1" },
      { id: "ink", label: "Ink", swatch: "foreground" },
      { id: "blush", label: "Blush", swatch: "chart-5" },
    ],
    sizes: [
      { id: "0", label: "0" },
      { id: "2", label: "2" },
      { id: "4", label: "4" },
      { id: "6", label: "6", available: false },
      { id: "8", label: "8" },
    ],
    colorLegend: "Color",
    sizeLegend: "Size",
    addToCartLabel: "Add to bag",
    detailsLabel: "See full details",
    detailsHref: "#slip",
    defaultColorId: "field",
    defaultSizeId: "4",
    defaultOpen: true,
    presentation: "dialog",
  },
} as const satisfies Record<string, ProductQuickView4Props>;
