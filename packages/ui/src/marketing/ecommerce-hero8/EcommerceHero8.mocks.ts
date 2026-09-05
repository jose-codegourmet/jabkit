import type {
  EcommerceHero8Props,
  EcommerceHero8Slide,
} from "./EcommerceHero8.types";

export const ecommerceHero8Slides: EcommerceHero8Slide[] = [
  {
    title: "The autumn atelier",
    description:
      "Tailored wools, long coats, and quiet hardware — a collection cut for evenings that start after the studio lights go out.",
    ctaLabel: "Shop the look",
    ctaHref: "#atelier",
    backgroundSrc: "/assets/3299cbc50d9c8d23.webp",
    backgroundAlt: "Model in a structured coat walking through a city street",
    productSrc: "/assets/4ce360395e8f9d6e.webp",
    productAlt: "Camel wool overcoat on a hanger",
    productName: "Camel overcoat",
  },
  {
    title: "Linen in motion",
    description:
      "Washeddowns and open weaves for warmer rooms. Light on the body, sharp at the shoulder, made to be worn hard.",
    ctaLabel: "Shop linen",
    ctaHref: "#linen",
    backgroundSrc: "/assets/e26e76ad7cc78c9d.webp",
    backgroundAlt: "Model in a pale knit set against a pink backdrop",
    productSrc: "/assets/43f6837d7f2ce7a2.webp",
    productAlt: "Folded white linen shirt",
    productName: "Open linen shirt",
  },
  {
    title: "Night tailoring",
    description:
      "Black, ink, and a single gold note. Pieces that hold a silhouette under gallery light and late tables.",
    ctaLabel: "Shop evening",
    ctaHref: "#evening",
    backgroundSrc: "/assets/604558241eb10ca2.webp",
    backgroundAlt: "Shopper in a black coat carrying bags on a city sidewalk",
    productSrc: "/assets/6baa48de9bbbdb4b.webp",
    productAlt: "Black bomber jacket on a studio background",
    productName: "Ink bomber",
  },
  {
    title: "Studio knits",
    description:
      "Heavy gauges and fine merino for the in-between season. Layer them, live in them, forget they are new.",
    ctaLabel: "Shop knits",
    ctaHref: "#knits",
    backgroundSrc: "/assets/16b543dae15dee36.webp",
    backgroundAlt: "Model reclining in a striped knit and wide trousers",
    productSrc: "/assets/5fa1d074c0baca15.webp",
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
    backgroundSrc: "/assets/50e937a23e3882b6.webp",
    backgroundAlt: "Portrait of a woman in a white tank against a warm wall",
    productSrc: "/assets/78a34cf9c749e6eb.webp",
    productAlt: "Stacked folded shirts in pale tones",
    productName: "Poplin camp",
  },
  {
    title: "Garden silk",
    description:
      "Printed fields and bias cuts. A quieter kind of occasion dressing for long tables outdoors.",
    ctaLabel: "Shop silk",
    ctaHref: "#silk",
    backgroundSrc: "/assets/70a7a7079f1861fe.webp",
    backgroundAlt: "Woman in a floral dress walking through greenery",
    productSrc: "/assets/a30efca866970509.webp",
    productAlt: "Floral dress detail in motion",
    productName: "Field slip",
  },
  {
    title: "Barefoot leather",
    description:
      "Soft sandals and belt hardware with a worn edge. The finishing kit for every pale look.",
    ctaLabel: "Shop leather",
    ctaHref: "#leather",
    backgroundSrc: "/assets/e26e76ad7cc78c9d.webp",
    backgroundAlt: "Full-length fashion portrait in a knit two-piece",
    productSrc: "/assets/c262e5fa3d9c1cb4.webp",
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
