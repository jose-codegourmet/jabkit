import type { Meta, StoryObj } from "@storybook/react";
// biome-ignore lint/correctness/noUnusedImports: Storybook supports the classic JSX runtime.
import * as React from "react";
import { ForgotPassword2 } from "./ForgotPassword2";
import { forgotPassword2Mocks } from "./ForgotPassword2.mocks";

const meta = {
  title: "Dashboard/ForgotPassword2",
  component: ForgotPassword2,
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof ForgotPassword2>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { ...forgotPassword2Mocks.default },
  render: () => (
    <div className="bg-background text-foreground">
      <ForgotPassword2 {...forgotPassword2Mocks.default} />
    </div>
  ),
};

export const Variants: Story = {
  args: { ...forgotPassword2Mocks.alternate },
  render: () => (
    <div className="bg-background text-foreground">
      <ForgotPassword2 {...forgotPassword2Mocks.alternate} />
    </div>
  ),
};

export const ThemeComparison: Story = {
  args: { ...forgotPassword2Mocks.default },
  render: () => (
    <div className="grid gap-px overflow-hidden rounded-[--radius] border border-border bg-border lg:grid-cols-2">
      <div className="bg-background">
        <ForgotPassword2 {...forgotPassword2Mocks.default} />
      </div>
      <div className="dark bg-background">
        <ForgotPassword2 {...forgotPassword2Mocks.default} />
      </div>
    </div>
  ),
};
