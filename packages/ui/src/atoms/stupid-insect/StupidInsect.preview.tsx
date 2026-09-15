// biome-ignore lint/correctness/noUnusedImports: packages/ui uses the classic JSX runtime.
import * as React from "react";
import { StupidInsect } from "./StupidInsect";
import { stupidInsectMocks } from "./StupidInsect.mocks";

export default {
  Default: () => (
    <StupidInsect className="h-64 w-80" {...stupidInsectMocks.default} />
  ),
  ChartTone: () => (
    <StupidInsect className="h-64 w-80" {...stupidInsectMocks.chart} />
  ),
};
