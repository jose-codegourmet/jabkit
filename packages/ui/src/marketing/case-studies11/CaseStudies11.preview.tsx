// biome-ignore lint/correctness/noUnusedImports: packages/ui uses the classic JSX runtime.
import * as React from "react";
import { CaseStudies11 } from "./CaseStudies11";
import { caseStudies11Mocks } from "./CaseStudies11.mocks";

export default {
  Default: () => (
    <div className="w-full">
      <CaseStudies11 {...caseStudies11Mocks.default} />
    </div>
  ),
  Variants: () => (
    <div className="w-full">
      <CaseStudies11 {...caseStudies11Mocks.alternate} />
    </div>
  ),
};
