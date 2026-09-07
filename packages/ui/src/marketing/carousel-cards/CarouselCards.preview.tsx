// biome-ignore lint/correctness/noUnusedImports: packages/ui uses the classic JSX runtime.
import * as React from "react";
import { CarouselCards } from "./CarouselCards";
import { carouselCardsMocks } from "./CarouselCards.mocks";

const ThemeComparison = () => (
  <div className="grid gap-px overflow-hidden border-border bg-border lg:grid-cols-2">
    <div className="bg-background">
      <CarouselCards {...carouselCardsMocks.default} />
    </div>
    <div className="dark bg-background">
      <CarouselCards {...carouselCardsMocks.default} />
    </div>
  </div>
);

export default {
  Default: () => (
    <div className="w-full">
      <CarouselCards {...carouselCardsMocks.default} />
    </div>
  ),
  Variants: () => (
    <div className="w-full">
      <CarouselCards {...carouselCardsMocks.alternate} />
    </div>
  ),
  ThemeComparison,
};
