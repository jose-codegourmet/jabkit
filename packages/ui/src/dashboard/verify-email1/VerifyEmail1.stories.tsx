import type { Meta, StoryObj } from "@storybook/react";
// biome-ignore lint/correctness/noUnusedImports: Storybook supports the classic JSX runtime.
import * as React from "react";
import { VerifyEmail1 } from "./VerifyEmail1";
import { verifyEmail1Mocks } from "./VerifyEmail1.mocks";

const meta = {
  title: "Dashboard/VerifyEmail1",
  component: VerifyEmail1,
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof VerifyEmail1>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { ...verifyEmail1Mocks.default },
  render: () => (
    <div className="bg-background text-foreground">
      <VerifyEmail1 {...verifyEmail1Mocks.default} />
    </div>
  ),
};

export const Variants: Story = {
  args: { ...verifyEmail1Mocks.alternate },
  render: () => (
    <div className="bg-background text-foreground">
      <VerifyEmail1 {...verifyEmail1Mocks.alternate} />
    </div>
  ),
};

export const ThemeComparison: Story = {
  args: { ...verifyEmail1Mocks.default },
  render: () => (
    <div className="grid gap-px overflow-hidden rounded-[--radius] border border-border bg-border lg:grid-cols-2">
      <div className="bg-background">
        <VerifyEmail1 {...verifyEmail1Mocks.default} />
      </div>
      <div className="dark bg-background">
        <VerifyEmail1 {...verifyEmail1Mocks.default} />
      </div>
    </div>
  ),
};
