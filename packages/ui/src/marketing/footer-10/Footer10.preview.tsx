// biome-ignore lint/correctness/noUnusedImports: packages/ui uses the classic JSX runtime.
import * as React from "react";
import { Footer10 } from "./Footer10";
import { footer10Mocks } from "./Footer10.mocks";

export default {
  Default: () => (
    <div className="w-full">
      <Footer10 {...footer10Mocks.default} />
    </div>
  ),
  Variants: () => (
    <div className="w-full">
      <Footer10 {...footer10Mocks.alternate} />
    </div>
  ),
};
