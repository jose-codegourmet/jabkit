// biome-ignore lint/correctness/noUnusedImports: packages/ui uses the classic JSX runtime.
import * as React from "react";
import { Footer18 } from "./Footer18";
import { footer18Mocks } from "./Footer18.mocks";

export default {
  Default: () => (
    <div className="w-full">
      <Footer18 {...footer18Mocks.default} />
    </div>
  ),
  Variants: () => (
    <div className="w-full">
      <Footer18 {...footer18Mocks.alternate} />
    </div>
  ),
};
