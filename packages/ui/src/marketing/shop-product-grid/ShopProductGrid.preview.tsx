// biome-ignore lint/correctness/noUnusedImports: packages/ui uses the classic JSX runtime.
import * as React from "react";
import { ShopProductGrid } from "./ShopProductGrid";
import { shopProductGridMocks } from "./ShopProductGrid.mocks";

const ThemeComparison = () => (
  <div className="grid gap-px overflow-hidden border-border bg-border lg:grid-cols-2">
    <div className="bg-background px-5 py-8">
      <ShopProductGrid {...shopProductGridMocks.alternate} />
    </div>
    <div className="dark bg-background px-5 py-8">
      <ShopProductGrid {...shopProductGridMocks.alternate} />
    </div>
  </div>
);

export default {
  Default: () => (
    <div className="w-full px-5 py-10">
      <ShopProductGrid {...shopProductGridMocks.default} />
    </div>
  ),
  Variants: () => (
    <div className="w-full px-5 py-10">
      <ShopProductGrid {...shopProductGridMocks.alternate} />
    </div>
  ),
  ThemeComparison,
};
