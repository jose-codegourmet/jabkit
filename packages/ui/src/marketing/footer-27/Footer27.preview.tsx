// biome-ignore lint/correctness/noUnusedImports: packages/ui uses the classic JSX runtime.
import * as React from "react";
import { Footer27 } from "./Footer27";
import { footer27Mocks } from "./Footer27.mocks";

export default {
  Default: () => (
    <div className="w-full">
      <Footer27 {...footer27Mocks.default} />
    </div>
  ),
  Variants: () => (
    <div className="w-full">
      <Footer27 {...footer27Mocks.alternate} />
    </div>
  ),
};
