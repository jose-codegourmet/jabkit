// biome-ignore lint/correctness/noUnusedImports: packages/ui uses the classic JSX runtime.
import * as React from "react";
import { Newsletter5 } from "./Newsletter5";
import { newsletter5Mocks } from "./Newsletter5.mocks";

export default {
  Default: () => (
    <div className="w-full">
      <Newsletter5 {...newsletter5Mocks.default} />
    </div>
  ),
  Variants: () => (
    <div className="w-full">
      <Newsletter5 {...newsletter5Mocks.alternate} />
    </div>
  ),
};
