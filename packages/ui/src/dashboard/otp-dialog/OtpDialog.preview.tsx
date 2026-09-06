// biome-ignore lint/correctness/noUnusedImports: packages/ui uses the classic JSX runtime.
import * as React from "react";
import { OtpDialog } from "./OtpDialog";
import { otpDialogMocks } from "./OtpDialog.mocks";

const ThemeComparison = () => (
  <div className="grid gap-px overflow-hidden border-border bg-border lg:grid-cols-2">
    <div className="bg-background">
      <OtpDialog {...otpDialogMocks.default} presentation="inline" />
    </div>
    <div className="dark bg-background">
      <OtpDialog {...otpDialogMocks.default} presentation="inline" />
    </div>
  </div>
);

export default {
  Default: () => (
    <div className="w-full">
      <OtpDialog {...otpDialogMocks.default} />
    </div>
  ),
  Variants: () => (
    <div className="w-full">
      <OtpDialog {...otpDialogMocks.alternate} />
    </div>
  ),
  ThemeComparison,
};
