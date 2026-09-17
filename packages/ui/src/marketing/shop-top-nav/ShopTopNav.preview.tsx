// biome-ignore lint/correctness/noUnusedImports: packages/ui uses the classic JSX runtime.
import * as React from "react";
import { ShopTopNav } from "./ShopTopNav";
import { shopTopNavMocks } from "./ShopTopNav.mocks";

const ThemeComparison = () => (
  <div className="grid gap-px overflow-hidden border-border bg-border lg:grid-cols-2">
    <div className="bg-background">
      <ShopTopNav {...shopTopNavMocks.default} />
    </div>
    <div className="dark bg-background">
      <ShopTopNav {...shopTopNavMocks.default} />
    </div>
  </div>
);

export default {
  Default: () => <ShopTopNav {...shopTopNavMocks.default} />,
  Variants: () => <ShopTopNav {...shopTopNavMocks.alternate} />,
  ThemeComparison,
};
