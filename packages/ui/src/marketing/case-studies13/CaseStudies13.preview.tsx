// biome-ignore lint/correctness/noUnusedImports: packages/ui uses the classic JSX runtime.
import * as React from "react";
import { CaseStudies13 } from "./CaseStudies13";
import {
  caseStudies13EditorialMocks,
  caseStudies13Mocks,
} from "./CaseStudies13.mocks";

const ThemeComparison = () => (
  <div className="grid gap-px overflow-hidden border-border bg-border lg:grid-cols-2">
    <div className="bg-background">
      <CaseStudies13 {...caseStudies13Mocks} />
    </div>
    <div className="dark bg-background">
      <CaseStudies13 {...caseStudies13Mocks} />
    </div>
  </div>
);

export default {
  Default: () => (
    <div className="w-full">
      <CaseStudies13 {...caseStudies13Mocks} />
    </div>
  ),
  Variants: () => (
    <div className="w-full">
      <CaseStudies13 {...caseStudies13EditorialMocks} />
    </div>
  ),
  ThemeComparison,
};
