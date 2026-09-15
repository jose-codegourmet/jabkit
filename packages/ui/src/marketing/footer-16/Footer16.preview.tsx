// biome-ignore lint/correctness/noUnusedImports: packages/ui uses the classic JSX runtime.
import * as React from "react";
import { Footer16 } from "./Footer16";
import { footer16Mocks } from "./Footer16.mocks";

export default {
  Default: () => (
    <div className="w-full">
      <Footer16 {...footer16Mocks.default} />
    </div>
  ),
  Variants: () => (
    <div className="w-full">
      <Footer16 {...footer16Mocks.alternate} />
    </div>
  ),
};
