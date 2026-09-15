// biome-ignore lint/correctness/noUnusedImports: packages/ui uses the classic JSX runtime.
import * as React from "react";
import { QuickPanther } from "./QuickPanther";
import { quickPantherMocks } from "./QuickPanther.mocks";

export default {
  Default: () => <QuickPanther {...quickPantherMocks.default} />,
  Variants: () => <QuickPanther {...quickPantherMocks.alternate} />,
};
