"use client";

import {
  ChevronLeftIcon,
  ChevronRightIcon,
  ShoppingBagIcon,
} from "lucide-react";
import { useId, useState } from "react";
import { Button } from "@/atoms/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/atoms/dialog/Dialog";
import { cn } from "@/lib/cn";
import type {
  ProductQuickView4Color,
  ProductQuickView4Image,
  ProductQuickView4Props,
  ProductQuickView4Size,
  ProductQuickView4Swatch,
} from "./ProductQuickView4.types";

const SWATCH_CLASS: Record<ProductQuickView4Swatch, string> = {
  primary: "bg-primary",
  secondary: "bg-secondary",
  foreground: "bg-foreground",
  muted: "bg-muted",
  accent: "bg-accent",
  "chart-1": "bg-chart-1",
  "chart-2": "bg-chart-2",
  "chart-3": "bg-chart-3",
  "chart-4": "bg-chart-4",
  "chart-5": "bg-chart-5",
};

const DEFAULT_IMAGES: ProductQuickView4Image[] = [
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
];

const DEFAULT_COLORS: ProductQuickView4Color[] = [
  { id: "ink", label: "Ink", swatch: "foreground" },
  { id: "camel", label: "Camel", swatch: "chart-4" },
  { id: "bone", label: "Bone", swatch: "muted" },
  { id: "clay", label: "Clay", swatch: "chart-2", available: false },
];

const DEFAULT_SIZES: ProductQuickView4Size[] = [
  { id: "xs", label: "XS", available: false },
  { id: "s", label: "S" },
  { id: "m", label: "M" },
  { id: "l", label: "L" },
  { id: "xl", label: "XL" },
];

function firstAvailableId<T extends { id: string; available?: boolean }>(
  items: T[],
  preferred?: string,
) {
  if (
    preferred &&
    items.some((item) => item.id === preferred && item.available !== false)
  ) {
    return preferred;
  }
  return (
    items.find((item) => item.available !== false)?.id ?? items[0]?.id ?? ""
  );
}

function ProductPanel({
  title,
  description,
  price,
  compareAtPrice,
  images,
  colors,
  sizes,
  colorLegend,
  sizeLegend,
  addToCartLabel,
  detailsLabel,
  detailsHref,
  colorId,
  sizeId,
  onColorChange,
  onSizeChange,
  onAddToCart,
  onViewDetails,
  inDialog,
}: {
  title: string;
  description: string;
  price: string;
  compareAtPrice?: string;
  images: ProductQuickView4Image[];
  colors: ProductQuickView4Color[];
  sizes: ProductQuickView4Size[];
  colorLegend: string;
  sizeLegend: string;
  addToCartLabel: string;
  detailsLabel: string;
  detailsHref: string;
  colorId: string;
  sizeId: string;
  onColorChange: (id: string) => void;
  onSizeChange: (id: string) => void;
  onAddToCart?: ProductQuickView4Props["onAddToCart"];
  onViewDetails?: ProductQuickView4Props["onViewDetails"];
  inDialog: boolean;
}) {
  const colorGroupId = useId();
  const sizeGroupId = useId();
  const [imageIndex, setImageIndex] = useState(0);
  const activeImage = images[imageIndex] ?? images[0];
  const selectedColor = colors.find((color) => color.id === colorId);
  const selectedSize = sizes.find((size) => size.id === sizeId);
  const canAdd =
    Boolean(colorId) &&
    Boolean(sizeId) &&
    selectedColor?.available !== false &&
    selectedSize?.available !== false;
  const Title = inDialog ? DialogTitle : "h2";
  const Description = inDialog ? DialogDescription : "p";

  function go(delta: number) {
    if (images.length < 2) return;
    setImageIndex(
      (current) => (current + delta + images.length) % images.length,
    );
  }

  return (
    <div className="grid min-h-0 md:grid-cols-2">
      <div className="relative min-h-[18rem] bg-muted md:min-h-[32rem]">
        {activeImage ? (
          <img
            alt={activeImage.alt}
            className="absolute inset-0 size-full object-cover"
            src={activeImage.src}
          />
        ) : null}
        {images.length > 1 ? (
          <>
            <button
              aria-label="Previous image"
              className="absolute top-1/2 left-3 z-10 inline-flex size-9 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-background/90 text-foreground shadow-sm outline-none hover:bg-accent focus-visible:ring-2 focus-visible:ring-ring"
              onClick={() => go(-1)}
              type="button"
            >
              <ChevronLeftIcon className="size-4" />
            </button>
            <button
              aria-label="Next image"
              className="absolute top-1/2 right-3 z-10 inline-flex size-9 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-background/90 text-foreground shadow-sm outline-none hover:bg-accent focus-visible:ring-2 focus-visible:ring-ring"
              onClick={() => go(1)}
              type="button"
            >
              <ChevronRightIcon className="size-4" />
            </button>
            <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 gap-1.5">
              {images.map((image, index) => (
                <button
                  aria-current={index === imageIndex}
                  aria-label={`Show image ${index + 1}`}
                  className={cn(
                    "size-2 rounded-full outline-none focus-visible:ring-2 focus-visible:ring-ring",
                    index === imageIndex ? "bg-primary" : "bg-background/70",
                  )}
                  key={image.src}
                  onClick={() => setImageIndex(index)}
                  type="button"
                />
              ))}
            </div>
          </>
        ) : null}
      </div>

      <div className="flex flex-col gap-6 p-6 sm:p-8">
        <div className="flex flex-col gap-3">
          <Title className="text-2xl font-semibold tracking-[-0.04em] text-pretty sm:text-3xl">
            {title}
          </Title>
          <Description className="text-sm leading-6 text-muted-foreground sm:text-base sm:leading-7">
            {description}
          </Description>
        </div>

        <p className="flex flex-wrap items-baseline gap-2">
          <span className="text-xl font-semibold tracking-[-0.03em]">
            {price}
          </span>
          {compareAtPrice ? (
            <span className="text-sm text-muted-foreground line-through">
              {compareAtPrice}
            </span>
          ) : null}
        </p>

        {colors.length > 0 ? (
          <fieldset className="flex flex-col gap-3">
            <legend
              className="text-sm font-medium text-foreground"
              id={colorGroupId}
            >
              {colorLegend}
              {selectedColor ? (
                <span className="font-normal text-muted-foreground">
                  {" "}
                  {selectedColor.label}
                  {selectedColor.available === false ? " (sold out)" : ""}
                </span>
              ) : null}
            </legend>
            <div className="flex flex-wrap gap-2">
              {colors.map((color) => {
                const selected = color.id === colorId;
                const available = color.available !== false;
                return (
                  <label
                    className={cn(
                      "relative size-8 rounded-full border border-border has-focus-visible:ring-2 has-focus-visible:ring-ring has-focus-visible:ring-offset-2 has-focus-visible:ring-offset-background",
                      SWATCH_CLASS[color.swatch],
                      selected &&
                        "ring-2 ring-ring ring-offset-2 ring-offset-background",
                      available
                        ? "cursor-pointer"
                        : "cursor-not-allowed opacity-40",
                    )}
                    key={color.id}
                    title={color.label}
                  >
                    <input
                      checked={selected}
                      className="sr-only"
                      disabled={!available}
                      name={colorGroupId}
                      onChange={() => onColorChange(color.id)}
                      type="radio"
                      value={color.id}
                    />
                    <span className="sr-only">{color.label}</span>
                    {!available ? (
                      <span
                        aria-hidden="true"
                        className="absolute inset-0 flex items-center justify-center"
                      >
                        <span className="block h-px w-5 rotate-45 bg-foreground" />
                      </span>
                    ) : null}
                  </label>
                );
              })}
            </div>
          </fieldset>
        ) : null}

        {sizes.length > 0 ? (
          <fieldset className="flex flex-col gap-3">
            <legend
              className="text-sm font-medium text-foreground"
              id={sizeGroupId}
            >
              {sizeLegend}
            </legend>
            <div className="flex flex-wrap gap-2">
              {sizes.map((size) => {
                const selected = size.id === sizeId;
                const available = size.available !== false;
                return (
                  <label
                    className={cn(
                      "inline-flex min-w-11 cursor-pointer items-center justify-center rounded-[--radius] border px-3 py-2 text-sm has-focus-visible:ring-2 has-focus-visible:ring-ring",
                      selected
                        ? "border-primary bg-primary text-primary-foreground"
                        : "border-border bg-background text-foreground hover:bg-accent",
                      !available &&
                        "cursor-not-allowed opacity-40 line-through hover:bg-background",
                    )}
                    key={size.id}
                  >
                    <input
                      checked={selected}
                      className="sr-only"
                      disabled={!available}
                      name={sizeGroupId}
                      onChange={() => onSizeChange(size.id)}
                      type="radio"
                      value={size.id}
                    />
                    {size.label}
                  </label>
                );
              })}
            </div>
          </fieldset>
        ) : null}

        <div className="mt-auto flex flex-col gap-2 pt-2">
          <Button
            className="w-full gap-2"
            disabled={!canAdd}
            onClick={() => {
              if (!canAdd) return;
              onAddToCart?.({ colorId, sizeId });
            }}
          >
            <ShoppingBagIcon className="size-4" />
            {addToCartLabel}
          </Button>
          <Button asChild className="w-full" variant="secondary">
            <a href={detailsHref} onClick={onViewDetails}>
              {detailsLabel}
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}

export function ProductQuickView4({
  className,
  triggerLabel = "Quick view",
  title = "Studio wool overcoat",
  description = "A clean shoulder, a mid-calf hem, and a hidden placket. Cut in dense wool for evenings that start after the studio lights go out.",
  price = "$428",
  compareAtPrice = "$520",
  images = DEFAULT_IMAGES,
  colors = DEFAULT_COLORS,
  sizes = DEFAULT_SIZES,
  colorLegend = "Color",
  sizeLegend = "Size",
  addToCartLabel = "Add to cart",
  detailsLabel = "View product details",
  detailsHref = "#overcoat",
  defaultColorId,
  defaultSizeId,
  defaultOpen = false,
  presentation = "dialog",
  onAddToCart,
  onViewDetails,
  ...props
}: ProductQuickView4Props) {
  const [colorId, setColorId] = useState(() =>
    firstAvailableId(colors, defaultColorId),
  );
  const [sizeId, setSizeId] = useState(() =>
    firstAvailableId(sizes, defaultSizeId),
  );

  const panel = (
    <ProductPanel
      addToCartLabel={addToCartLabel}
      colorId={colorId}
      colorLegend={colorLegend}
      colors={colors}
      compareAtPrice={compareAtPrice}
      description={description}
      detailsHref={detailsHref}
      detailsLabel={detailsLabel}
      images={images}
      inDialog={presentation === "dialog"}
      onAddToCart={onAddToCart}
      onColorChange={setColorId}
      onSizeChange={setSizeId}
      onViewDetails={onViewDetails}
      price={price}
      sizeId={sizeId}
      sizeLegend={sizeLegend}
      sizes={sizes}
      title={title}
    />
  );

  return (
    <section
      className={cn("bg-background text-foreground", className)}
      data-slot="product-quick-view4"
      {...props}
    >
      <div className="mx-auto flex min-h-[28rem] max-w-6xl items-center justify-center px-5 py-16 sm:px-8 sm:py-20">
        {presentation === "inline" ? (
          <div className="w-full overflow-hidden rounded-xl border border-border bg-popover text-popover-foreground shadow-sm">
            {panel}
          </div>
        ) : (
          <Dialog defaultOpen={defaultOpen}>
            <DialogTrigger render={<Button>{triggerLabel}</Button>} />
            <DialogContent
              className="max-h-[min(90dvh,52rem)] overflow-y-auto p-0 sm:max-w-4xl lg:max-w-5xl"
              showCloseButton
            >
              {panel}
            </DialogContent>
          </Dialog>
        )}
      </div>
    </section>
  );
}
