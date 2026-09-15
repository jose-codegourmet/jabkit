// biome-ignore lint/correctness/noUnusedImports: packages/ui uses the classic JSX runtime.
import * as React from "react";
import { Footer11 } from "./Footer11";
import { footer11Mocks } from "./Footer11.mocks";

export default {
  Default: () => (
    <div className="w-full">
      <Footer11 {...footer11Mocks.default} />
    </div>
  ),
  Variants: () => (
    <div className="w-full">
      <Footer11 {...footer11Mocks.alternate} />
    </div>
  ),
};
