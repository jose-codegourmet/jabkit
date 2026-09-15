// biome-ignore lint/correctness/noUnusedImports: packages/ui uses the classic JSX runtime.
import * as React from "react";
import { Footer13 } from "./Footer13";
import { footer13Mocks } from "./Footer13.mocks";

export default {
  Default: () => (
    <div className="w-full">
      <Footer13 {...footer13Mocks.default} />
    </div>
  ),
  Variants: () => (
    <div className="w-full">
      <Footer13 {...footer13Mocks.alternate} />
    </div>
  ),
};
