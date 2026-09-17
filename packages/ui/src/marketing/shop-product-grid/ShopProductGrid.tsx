// biome-ignore lint/correctness/noUnusedImports: Storybook supports the classic JSX runtime.
import * as React from "react";
import { cn } from "@/lib/cn";
import { ShopProductCard } from "@/marketing/shop-product-card";
import { shopProductGridItems } from "./ShopProductGrid.mocks";
import type { ShopProductGridProps } from "./ShopProductGrid.types";

export function ShopProductGrid({
  className,
  products = shopProductGridItems,
  ...props
}: ShopProductGridProps) {
  return (
    <section
      data-slot="shop-product-grid"
      className={cn("bg-background text-foreground", className)}
      {...props}
    >
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <ShopProductCard key={product.name} {...product} />
        ))}
      </div>
    </section>
  );
}
