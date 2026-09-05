// biome-ignore lint/correctness/noUnusedImports: packages/ui uses the classic JSX runtime.
import * as React from "react";
import { EcommerceNavbar2 } from "./EcommerceNavbar2";
import { ecommerceNavbar2Mocks } from "./EcommerceNavbar2.mocks";

const ThemeComparison = () => (
  <div className="grid gap-px overflow-hidden border-border bg-border lg:grid-cols-2">
    <div className="bg-background">
      <EcommerceNavbar2 {...ecommerceNavbar2Mocks.default} />
    </div>
    <div className="dark bg-background">
      <EcommerceNavbar2 {...ecommerceNavbar2Mocks.default} />
    </div>
  </div>
);

export default {
  Default: () => (
    <div className="w-full">
      <EcommerceNavbar2 {...ecommerceNavbar2Mocks.default} />
    </div>
  ),
  Variants: () => (
    <div className="w-full">
      <EcommerceNavbar2 {...ecommerceNavbar2Mocks.alternate} />
    </div>
  ),
  ThemeComparison,
};
