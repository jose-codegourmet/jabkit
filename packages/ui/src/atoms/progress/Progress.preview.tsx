// biome-ignore lint/correctness/noUnusedImports: packages/ui uses the classic JSX runtime.
import * as React from "react";
import { Progress, ProgressLabel, ProgressValue } from "./Progress";
import { progressMocks } from "./Progress.mocks";

export default {
  Default: () => (
    <Progress className="w-full max-w-sm" value={progressMocks.default.value} />
  ),
  WithLabel: () => (
    <Progress className="w-full max-w-sm" value={progressMocks.labeled.value}>
      <ProgressLabel>{progressMocks.labeled.label}</ProgressLabel>
      <ProgressValue />
    </Progress>
  ),
};
