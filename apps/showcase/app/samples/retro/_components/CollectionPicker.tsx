"use client";

import type { Route } from "next";
import { useRouter } from "next/navigation";
import { ProductQuickView4 } from "@/marketing/product-quick-view4";
import { isCropAspect, studioHref } from "../content";
import type { KeepAsset } from "../types";
import { collectionPickerImages, formatOptions } from "./adapters";

export function CollectionPicker({
  title,
  description,
  assets,
}: {
  title: string;
  description: string;
  assets: KeepAsset[];
}) {
  const router = useRouter();
  const images = collectionPickerImages(assets);

  return (
    <ProductQuickView4
      addToCartLabel="Open in studio"
      colors={[]}
      defaultSizeId="4:3"
      description={description}
      detailsHref="#provenance"
      detailsLabel="Provenance note"
      images={images}
      price=""
      presentation="dialog"
      showCartIcon={false}
      sizeLegend="Crop format"
      sizes={formatOptions()}
      title={title}
      triggerLabel="Choose a crop"
      onAddToCart={({ sizeId, imageIndex }) => {
        const asset = assets[imageIndex] ?? assets[0];
        if (!asset || !isCropAspect(sizeId)) return;
        router.push(studioHref({ asset: asset.id, aspect: sizeId }) as Route);
      }}
    />
  );
}
