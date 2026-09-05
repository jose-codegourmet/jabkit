// biome-ignore lint/correctness/noUnusedImports: packages/ui uses the classic JSX runtime.
import * as React from "react";
import { ProductQuickView4 } from "./ProductQuickView4";
import { productQuickView4Mocks } from "./ProductQuickView4.mocks";

const ThemeComparison = () => (
  <div className="grid gap-px overflow-hidden border-border bg-border lg:grid-cols-2">
    <div className="bg-background">
      <ProductQuickView4
        {...productQuickView4Mocks.default}
        presentation="inline"
      />
    </div>
    <div className="dark bg-background">
      <ProductQuickView4
        {...productQuickView4Mocks.default}
        presentation="inline"
      />
    </div>
  </div>
);

export default {
  Default: () => (
    <div className="w-full">
      <ProductQuickView4 {...productQuickView4Mocks.default} />
    </div>
  ),
  Variants: () => (
    <div className="w-full">
      <ProductQuickView4 {...productQuickView4Mocks.alternate} />
    </div>
  ),
  ThemeComparison,
};
