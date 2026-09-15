// biome-ignore lint/correctness/noUnusedImports: packages/ui uses the classic JSX runtime.
import * as React from "react";
import { CoverflowCarousel } from "./CoverflowCarousel";
import { coverflowCarouselMocks } from "./CoverflowCarousel.mocks";

const ThemeComparison = () => (
  <div className="grid gap-px overflow-hidden border-border bg-border lg:grid-cols-2">
    <div className="bg-background">
      <CoverflowCarousel {...coverflowCarouselMocks.default} />
    </div>
    <div className="dark bg-background">
      <CoverflowCarousel {...coverflowCarouselMocks.default} />
    </div>
  </div>
);

export default {
  Default: () => (
    <div className="w-full">
      <CoverflowCarousel {...coverflowCarouselMocks.default} />
    </div>
  ),
  Variants: () => (
    <div className="w-full">
      <CoverflowCarousel {...coverflowCarouselMocks.alternate} />
    </div>
  ),
  ThemeComparison,
};
