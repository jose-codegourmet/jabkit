export interface EcommerceHero8Slide {
  title: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
  backgroundSrc: string;
  backgroundAlt: string;
  productSrc: string;
  productAlt: string;
  productName: string;
}

export interface EcommerceHero8Props {
  className?: string;
  slides?: EcommerceHero8Slide[];
  autoplay?: boolean;
  autoplayMs?: number;
}
