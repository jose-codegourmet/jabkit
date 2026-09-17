import { HeartIcon, ShoppingCartIcon } from "lucide-react";
// biome-ignore lint/correctness/noUnusedImports: Storybook supports the classic JSX runtime.
import * as React from "react";
import { cn } from "@/lib/cn";
import type { ShopProductCardProps } from "./ShopProductCard.types";

const defaults = {
  cartLabel: "Add to cart",
  favoriteLabel: "Save to favorites",
} as const;

export function ShopProductCard({
  className,
  name,
  price,
  compareAtPrice,
  image,
  href,
  cartLabel = defaults.cartLabel,
  favoriteLabel = defaults.favoriteLabel,
  onAddToCart,
  onFavorite,
  ...props
}: ShopProductCardProps) {
  const title = href ? (
    <a
      href={href}
      className="text-lg font-semibold text-card-foreground no-underline transition-colors duration-300 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
    >
      {name}
    </a>
  ) : (
    <span className="text-lg font-semibold text-card-foreground">{name}</span>
  );

  return (
    <article
      data-slot="shop-product-card"
      className={cn(
        "relative rounded-[16px] bg-card p-5 text-card-foreground shadow-[0_2px_8px_color-mix(in_oklab,var(--jk-foreground),transparent_92%)] transition-[transform,box-shadow] duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_8px_24px_color-mix(in_oklab,var(--jk-foreground),transparent_85%)] motion-reduce:transition-none motion-reduce:hover:translate-y-0",
        className,
      )}
      {...props}
    >
      <div className="relative mb-4 overflow-hidden rounded-[12px] bg-muted p-5">
        <img
          src={image.src}
          alt={image.alt}
          className="aspect-square w-full object-cover"
        />
        <div className="absolute top-3 right-3 flex gap-2">
          <button
            type="button"
            aria-label={cartLabel}
            onClick={onAddToCart}
            className="grid size-10 place-items-center rounded-full bg-warning text-warning-foreground transition-transform duration-300 ease-out hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring motion-reduce:transition-none motion-reduce:hover:scale-100"
          >
            <ShoppingCartIcon
              aria-hidden="true"
              className="size-4 stroke-[2]"
            />
          </button>
          <button
            type="button"
            aria-label={favoriteLabel}
            onClick={onFavorite}
            className="grid size-10 place-items-center rounded-full bg-warning text-warning-foreground transition-transform duration-300 ease-out hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring motion-reduce:transition-none motion-reduce:hover:scale-100"
          >
            <HeartIcon aria-hidden="true" className="size-4 stroke-[2]" />
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-3">
          {compareAtPrice ? (
            <span className="text-sm text-muted-foreground line-through">
              {compareAtPrice}
            </span>
          ) : null}
          <span className="text-2xl font-bold text-card-foreground">
            {price}
          </span>
        </div>
        {title}
      </div>
    </article>
  );
}
