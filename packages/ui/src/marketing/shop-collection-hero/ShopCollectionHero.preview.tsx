// biome-ignore lint/correctness/noUnusedImports: packages/ui uses the classic JSX runtime.
import * as React from "react";
import { ShopCollectionHero } from "./ShopCollectionHero";
import { shopCollectionHeroMocks } from "./ShopCollectionHero.mocks";

const ThemeComparison = () => (
  <div className="grid gap-px overflow-hidden border-border bg-border lg:grid-cols-2">
    <div className="bg-background">
      <ShopCollectionHero {...shopCollectionHeroMocks.default} />
    </div>
    <div className="dark bg-background">
      <ShopCollectionHero {...shopCollectionHeroMocks.default} />
    </div>
  </div>
);

export default {
  Default: () => <ShopCollectionHero {...shopCollectionHeroMocks.default} />,
  Variants: () => <ShopCollectionHero {...shopCollectionHeroMocks.alternate} />,
  ThemeComparison,
};
