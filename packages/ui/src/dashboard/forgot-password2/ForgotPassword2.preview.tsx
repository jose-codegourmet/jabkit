// biome-ignore lint/correctness/noUnusedImports: packages/ui uses the classic JSX runtime.
import * as React from "react";
import { ForgotPassword2 } from "./ForgotPassword2";
import { forgotPassword2Mocks } from "./ForgotPassword2.mocks";

const ThemeComparison = () => (
  <div className="grid gap-px overflow-hidden border-border bg-border lg:grid-cols-2">
    <div className="bg-background">
      <ForgotPassword2 {...forgotPassword2Mocks.default} />
    </div>
    <div className="dark bg-background">
      <ForgotPassword2 {...forgotPassword2Mocks.default} />
    </div>
  </div>
);

export default {
  Default: () => (
    <div className="w-full">
      <ForgotPassword2 {...forgotPassword2Mocks.default} />
    </div>
  ),
  Variants: () => (
    <div className="w-full">
      <ForgotPassword2 {...forgotPassword2Mocks.alternate} />
    </div>
  ),
  ThemeComparison,
};
