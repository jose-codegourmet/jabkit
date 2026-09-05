// biome-ignore lint/correctness/noUnusedImports: packages/ui uses the classic JSX runtime.
import * as React from "react";
import { VerifyEmail1 } from "./VerifyEmail1";
import { verifyEmail1Mocks } from "./VerifyEmail1.mocks";

const ThemeComparison = () => (
  <div className="grid gap-px overflow-hidden border-border bg-border lg:grid-cols-2">
    <div className="bg-background">
      <VerifyEmail1 {...verifyEmail1Mocks.default} />
    </div>
    <div className="dark bg-background">
      <VerifyEmail1 {...verifyEmail1Mocks.default} />
    </div>
  </div>
);

export default {
  Default: () => (
    <div className="w-full">
      <VerifyEmail1 {...verifyEmail1Mocks.default} />
    </div>
  ),
  Variants: () => (
    <div className="w-full">
      <VerifyEmail1 {...verifyEmail1Mocks.alternate} />
    </div>
  ),
  ThemeComparison,
};
