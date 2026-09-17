// biome-ignore lint/correctness/noUnusedImports: packages/ui uses the classic JSX runtime.
import * as React from "react";
import { ShoppingLayoutPage } from "./ShoppingLayoutPage";
import { shoppingLayoutPageMocks } from "./ShoppingLayoutPage.mocks";

const ThemeComparison = () => (
  <div className="grid gap-px overflow-hidden border-border bg-border lg:grid-cols-2">
    <div className="bg-background">
      <ShoppingLayoutPage {...shoppingLayoutPageMocks.default} />
    </div>
    <div className="dark bg-background">
      <ShoppingLayoutPage {...shoppingLayoutPageMocks.default} />
    </div>
  </div>
);

export default {
  Default: () => <ShoppingLayoutPage {...shoppingLayoutPageMocks.default} />,
  Variants: () => <ShoppingLayoutPage {...shoppingLayoutPageMocks.alternate} />,
  ThemeComparison,
};
