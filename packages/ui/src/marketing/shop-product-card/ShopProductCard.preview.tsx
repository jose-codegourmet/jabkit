// biome-ignore lint/correctness/noUnusedImports: packages/ui uses the classic JSX runtime.
import * as React from "react";
import { ShopProductCard } from "./ShopProductCard";
import { shopProductCardMocks } from "./ShopProductCard.mocks";

const ThemeComparison = () => (
  <div className="grid gap-px overflow-hidden border-border bg-border sm:grid-cols-2">
    <div className="bg-background p-6">
      <ShopProductCard {...shopProductCardMocks.default} />
    </div>
    <div className="dark bg-background p-6">
      <ShopProductCard {...shopProductCardMocks.default} />
    </div>
  </div>
);

export default {
  Default: () => (
    <div className="mx-auto w-[22rem] p-6">
      <ShopProductCard {...shopProductCardMocks.default} />
    </div>
  ),
  Variants: () => (
    <div className="mx-auto grid w-[44rem] max-w-full gap-6 p-6 sm:grid-cols-2">
      <ShopProductCard {...shopProductCardMocks.default} />
      <ShopProductCard {...shopProductCardMocks.alternate} />
    </div>
  ),
  ThemeComparison,
};
