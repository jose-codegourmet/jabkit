import type { Meta, StoryObj } from "@storybook/react";
// biome-ignore lint/correctness/noUnusedImports: Storybook supports the classic JSX runtime.
import * as React from "react";
import { OtpDialog } from "./OtpDialog";
import { otpDialogMocks } from "./OtpDialog.mocks";

const meta = {
  title: "Dashboard/OtpDialog",
  component: OtpDialog,
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof OtpDialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { ...otpDialogMocks.default },
  render: () => (
    <div className="bg-background text-foreground">
      <OtpDialog {...otpDialogMocks.default} />
    </div>
  ),
};

export const Variants: Story = {
  args: { ...otpDialogMocks.alternate },
  render: () => (
    <div className="bg-background text-foreground">
      <OtpDialog {...otpDialogMocks.alternate} />
    </div>
  ),
};

export const ThemeComparison: Story = {
  args: { ...otpDialogMocks.default },
  render: () => (
    <div className="grid gap-px overflow-hidden rounded-[--radius] border border-border bg-border lg:grid-cols-2">
      <div className="bg-background">
        <OtpDialog {...otpDialogMocks.default} presentation="inline" />
      </div>
      <div className="dark bg-background">
        <OtpDialog {...otpDialogMocks.default} presentation="inline" />
      </div>
    </div>
  ),
};
