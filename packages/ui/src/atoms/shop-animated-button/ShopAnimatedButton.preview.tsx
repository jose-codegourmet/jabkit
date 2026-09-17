// biome-ignore lint/correctness/noUnusedImports: packages/ui uses the classic JSX runtime.
import * as React from "react";
import { ShopAnimatedButton } from "./ShopAnimatedButton";
import { shopAnimatedButtonMocks } from "./ShopAnimatedButton.mocks";

export default {
  Default: () => <ShopAnimatedButton {...shopAnimatedButtonMocks.default} />,
  Variants: () => <ShopAnimatedButton {...shopAnimatedButtonMocks.alternate} />,
};
