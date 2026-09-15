// biome-ignore lint/correctness/noUnusedImports: packages/ui uses the classic JSX runtime.
import * as React from "react";
import { CurvyEarwig } from "./CurvyEarwig";
import { curvyEarwigMocks } from "./CurvyEarwig.mocks";

export default {
  Default: () => <CurvyEarwig {...curvyEarwigMocks.default} />,
  Expanded: () => <CurvyEarwig {...curvyEarwigMocks.expanded} />,
};
