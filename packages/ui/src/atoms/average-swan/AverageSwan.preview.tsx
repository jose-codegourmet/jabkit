// biome-ignore lint/correctness/noUnusedImports: packages/ui uses the classic JSX runtime.
import * as React from "react";
import { AverageSwan } from "./AverageSwan";
import { averageSwanMocks } from "./AverageSwan.mocks";

export default {
  Default: () => <AverageSwan {...averageSwanMocks.default} />,
  Sizes: () => <AverageSwan {...averageSwanMocks.alternate} />,
};
