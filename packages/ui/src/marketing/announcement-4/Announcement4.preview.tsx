// biome-ignore lint/correctness/noUnusedImports: packages/ui uses the classic JSX runtime.
import * as React from "react";
import { Announcement4 } from "./Announcement4";
import { announcement4Mocks } from "./Announcement4.mocks";

export default {
  Default: () => (
    <div className="w-full">
      <Announcement4 {...announcement4Mocks.default} />
    </div>
  ),
  Variants: () => (
    <div className="w-full">
      <Announcement4 {...announcement4Mocks.alternate} />
    </div>
  ),
};
