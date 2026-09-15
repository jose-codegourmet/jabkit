// biome-ignore lint/correctness/noUnusedImports: packages/ui uses the classic JSX runtime.
import * as React from "react";
import { Footer12 } from "./Footer12";
import { footer12Mocks } from "./Footer12.mocks";

export default {
  Default: () => (
    <div className="w-full">
      <Footer12 {...footer12Mocks.default} />
    </div>
  ),
  Variants: () => (
    <div className="w-full">
      <Footer12 {...footer12Mocks.alternate} />
    </div>
  ),
};
