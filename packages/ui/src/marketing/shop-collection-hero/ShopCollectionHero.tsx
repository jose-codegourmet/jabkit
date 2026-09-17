"use client";

import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { useId } from "react";
import { ShopAnimatedButton } from "@/atoms/shop-animated-button";
import { cn } from "@/lib/cn";
import { shopCollectionHeroMocks } from "./ShopCollectionHero.mocks";
import type {
  ShopCollectionHeroCta,
  ShopCollectionHeroProps,
} from "./ShopCollectionHero.types";

const defaults = {
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
  previousLabel: "Previous featured mug",
  nextLabel: "Next featured mug",
} as const;

function HeroCta({
  action,
  className,
}: {
  action: ShopCollectionHeroCta;
  className?: string;
}) {
  if (action.href) {
    return (
      <ShopAnimatedButton asChild className={className}>
        <a href={action.href}>{action.label}</a>
      </ShopAnimatedButton>
    );
  }

  return (
    <ShopAnimatedButton className={className} onClick={action.onClick}>
      {action.label}
    </ShopAnimatedButton>
  );
}

export function ShopCollectionHero({
  className,
  brand = defaults.brand,
  kicker = defaults.kicker,
  title = defaults.title,
  description = defaults.description,
  body = defaults.body,
  cta = defaults.cta,
  shopCta = defaults.shopCta,
  rating = defaults.rating,
  ratingLabel = defaults.ratingLabel,
  avatars = shopCollectionHeroMocks.default.avatars,
  productImage = shopCollectionHeroMocks.default.productImage,
  previousLabel = defaults.previousLabel,
  nextLabel = defaults.nextLabel,
  onPrevious,
  onNext,
  ...props
}: ShopCollectionHeroProps) {
  const headingId = useId();
  const collectionId = useId();

  return (
    <div
      data-slot="shop-collection-hero"
      className={cn("bg-background text-foreground", className)}
      {...props}
    >
      <section
        aria-labelledby={headingId}
        className="bg-primary px-5 py-16 text-primary-foreground sm:px-8 sm:py-20"
      >
        <div className="mx-auto max-w-[1400px]">
          <h1
            id={headingId}
            className="text-center font-[family-name:var(--jk-font-display)] text-[clamp(5rem,12vw,11.25rem)] leading-[0.9] font-black tracking-[-0.04em] uppercase"
          >
            {brand}
          </h1>
          <div className="mt-10 grid items-start gap-10 lg:mt-16 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1fr)_minmax(0,0.85fr)] lg:gap-8">
            <div className="max-w-md rounded-[20px] bg-[color-mix(in_oklab,var(--jk-foreground)_20%,transparent)] p-10 backdrop-blur-md">
              <p className="font-[family-name:var(--jk-font-display)] text-5xl font-black tracking-tight text-warning uppercase">
                {kicker}
              </p>
              <p className="mt-5 text-base leading-relaxed text-primary-foreground">
                {body}
              </p>
              <div className="mt-6">
                <HeroCta action={shopCta} />
              </div>
            </div>
            {productImage ? (
              <figure className="mx-auto w-full max-w-sm">
                <img
                  src={productImage.src}
                  alt={productImage.alt}
                  className="aspect-[2/3] w-full object-contain"
                />
              </figure>
            ) : (
              <div />
            )}
            <aside className="ml-auto w-full max-w-xs rounded-[16px] bg-card p-8 text-center text-card-foreground">
              <p className="text-6xl font-black tracking-tight">{rating}</p>
              {avatars.length > 0 ? (
                <ul className="mt-4 flex justify-center">
                  {avatars.map((avatar, index) => (
                    <li
                      key={`${avatar.src}-${avatar.alt}`}
                      className={cn(index > 0 && "-ml-2")}
                    >
                      <img
                        src={avatar.src}
                        alt={avatar.alt}
                        className="size-10 rounded-full border-2 border-card object-cover"
                      />
                    </li>
                  ))}
                </ul>
              ) : null}
              <p className="mt-4 text-sm leading-5 text-card-foreground">
                {ratingLabel}
              </p>
            </aside>
          </div>
          <div className="mt-10 flex justify-center gap-4">
            <button
              type="button"
              aria-label={previousLabel}
              onClick={onPrevious}
              className="grid size-12 place-items-center rounded-full bg-card text-card-foreground transition-transform duration-300 ease-out hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring motion-reduce:transition-none motion-reduce:hover:scale-100"
            >
              <ChevronLeftIcon aria-hidden="true" className="size-6" />
            </button>
            <button
              type="button"
              aria-label={nextLabel}
              onClick={onNext}
              className="grid size-12 place-items-center rounded-full bg-card text-card-foreground transition-transform duration-300 ease-out hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring motion-reduce:transition-none motion-reduce:hover:scale-100"
            >
              <ChevronRightIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
        </div>
      </section>
      <section
        aria-labelledby={collectionId}
        className="bg-background px-5 py-20 text-foreground sm:px-8"
      >
        <div className="mx-auto max-w-[1400px]">
          <h2
            id={collectionId}
            className="font-[family-name:var(--jk-font-display)] text-[clamp(2.25rem,5vw,4rem)] leading-[1.05] font-black tracking-tight uppercase"
          >
            {title}
          </h2>
          <div className="mt-6 flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <p className="max-w-xl text-base leading-relaxed text-foreground">
              {description}
            </p>
            <HeroCta action={cta} />
          </div>
        </div>
      </section>
    </div>
  );
}
