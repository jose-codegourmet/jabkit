// biome-ignore lint/correctness/noUnusedImports: packages/ui uses the classic JSX runtime.
import * as React from "react";
import { GoodDonkey } from "./GoodDonkey";
import { goodDonkeyMocks } from "./GoodDonkey.mocks";

export default {
  Default: () => <GoodDonkey {...goodDonkeyMocks.default} />,
  Filled: () => <GoodDonkey {...goodDonkeyMocks.filled} />,
  Compact: () => <GoodDonkey {...goodDonkeyMocks.compact} />,
};
