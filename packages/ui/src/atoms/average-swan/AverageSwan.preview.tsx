// biome-ignore lint/correctness/noUnusedImports: packages/ui uses the classic JSX runtime.
import * as React from "react";
import { AverageSwan } from "./AverageSwan";
import { averageSwanMocks } from "./AverageSwan.mocks";

export default {
  Default: () => <AverageSwan {...averageSwanMocks.default} />,
  Sizes: () => (
    <div className="flex flex-wrap items-end justify-center gap-8 bg-background p-8 text-foreground">
      <AverageSwan {...averageSwanMocks.compact} />
      <AverageSwan {...averageSwanMocks.default} />
      <AverageSwan {...averageSwanMocks.alternate} size="lg" />
    </div>
  ),
};
