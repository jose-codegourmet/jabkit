import type { EcommerceHero8Props, EcommerceHero8Slide } from "./EcommerceHero8.types";

export const ecommerceHero8Slides: EcommerceHero8Slide[] = [
  {
    title: "The autumn atelier",
    description:
      "Tailored wools, long coats, and quiet hardware — a collection cut for evenings that start after the studio lights go out.",
    ctaLabel: "Shop the look",
    ctaHref: "#atelier",
    backgroundSrc:
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1920&h=1280&q=80",
    backgroundAlt: "Model in a structured coat walking through a city street",
    productSrc:
      "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?auto=format&fit=crop&w=640&h=640&q=80",
    productAlt: "Camel wool overcoat on a hanger",
    productName: "Camel overcoat",
  },
  {
    title: "Linen in motion",
    description:
      "Washeddowns and open weaves for warmer rooms. Light on the body, sharp at the shoulder, made to be worn hard.",
    ctaLabel: "Shop linen",
    ctaHref: "#linen",
    backgroundSrc:
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1920&h=1280&q=80",
    backgroundAlt: "Model in a pale knit set against a pink backdrop",
    productSrc:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=640&h=640&q=80",
    productAlt: "Folded white linen shirt",
    productName: "Open linen shirt",
  },
  {
    title: "Night tailoring",
    description:
      "Black, ink, and a single gold note. Pieces that hold a silhouette under gallery light and late tables.",
    ctaLabel: "Shop evening",
    ctaHref: "#evening",
    backgroundSrc:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1920&h=1280&q=80",
    backgroundAlt: "Shopper in a black coat carrying bags on a city sidewalk",
    productSrc:
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=640&h=640&q=80",
    productAlt: "Black bomber jacket on a studio background",
    productName: "Ink bomber",
  },
  {
    title: "Studio knits",
    description:
      "Heavy gauges and fine merino for the in-between season. Layer them, live in them, forget they are new.",
    ctaLabel: "Shop knits",
    ctaHref: "#knits",
    backgroundSrc:
      "https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&w=1920&h=1280&q=80",
    backgroundAlt: "Model reclining in a striped knit and wide trousers",
    productSrc:
      "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&w=640&h=640&q=80",
    productAlt: "Cream knit sweater laid flat",
    productName: "Studio crew",
  },
];

export const ecommerceHero8ResortSlides: EcommerceHero8Slide[] = [
  {
    title: "Coastal whites",
    description:
      "Salt, cotton, and a cleaner line. Resort pieces that still look considered after a day in the wind.",
    ctaLabel: "Shop resort",
    ctaHref: "#resort",
    backgroundSrc:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1920&h=1280&q=80",
    backgroundAlt: "Portrait of a woman in a white tank against a warm wall",
    productSrc:
      "https://images.unsplash.com/photo-1562157873-818bc0726f68?auto=format&fit=crop&w=640&h=640&q=80",
    productAlt: "Stacked folded shirts in pale tones",
    productName: "Poplin camp",
  },
  {
    title: "Garden silk",
    description:
      "Printed fields and bias cuts. A quieter kind of occasion dressing for long tables outdoors.",
    ctaLabel: "Shop silk",
    ctaHref: "#silk",
    backgroundSrc:
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=1920&h=1280&q=80",
    backgroundAlt: "Woman in a floral dress walking through greenery",
    productSrc:
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=640&h=800&q=80",
    productAlt: "Floral dress detail in motion",
    productName: "Field slip",
  },
  {
    title: "Barefoot leather",
    description:
      "Soft sandals and belt hardware with a worn edge. The finishing kit for every pale look.",
    ctaLabel: "Shop leather",
    ctaHref: "#leather",
    backgroundSrc:
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1920&h=1280&q=80",
    backgroundAlt: "Full-length fashion portrait in a knit two-piece",
    productSrc:
      "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=640&h=640&q=80",
    productAlt: "Tan leather sandals",
    productName: "Tan sandal",
  },
];

export const ecommerceHero8Mocks = {
  default: {
    slides: ecommerceHero8Slides,
    autoplay: true,
    autoplayMs: 5200,
  },
  alternate: {
    slides: ecommerceHero8ResortSlides,
    autoplay: false,
    autoplayMs: 5200,
  },
} satisfies Record<string, Required<Omit<EcommerceHero8Props, "className">>>;
