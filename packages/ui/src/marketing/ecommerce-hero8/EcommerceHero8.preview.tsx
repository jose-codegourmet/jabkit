// biome-ignore lint/correctness/noUnusedImports: packages/ui uses the classic JSX runtime.
import * as React from "react";
import { EcommerceHero8 } from "./EcommerceHero8";
import { ecommerceHero8Mocks } from "./EcommerceHero8.mocks";

const ThemeComparison = () => (
  <div className="grid gap-px overflow-hidden border-border bg-border lg:grid-cols-2">
    <div className="bg-background">
      <EcommerceHero8 {...ecommerceHero8Mocks.default} autoplay={false} />
    </div>
    <div className="dark bg-background">
      <EcommerceHero8 {...ecommerceHero8Mocks.default} autoplay={false} />
    </div>
  </div>
);

export default {
  Default: () => (
    <div className="w-full">
      <EcommerceHero8 {...ecommerceHero8Mocks.default} />
    </div>
  ),
  Variants: () => (
    <div className="w-full">
      <EcommerceHero8 {...ecommerceHero8Mocks.alternate} />
    </div>
  ),
  ThemeComparison,
};
