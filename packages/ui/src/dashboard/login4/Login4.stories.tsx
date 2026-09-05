import type { Meta, StoryObj } from "@storybook/react";
// biome-ignore lint/correctness/noUnusedImports: Storybook supports the classic JSX runtime.
import * as React from "react";
import { Login4 } from "./Login4";
import { login4Mocks } from "./Login4.mocks";

const meta = {
  title: "Dashboard/Login4",
  component: Login4,
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof Login4>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { ...login4Mocks.default },
  render: () => (
    <div className="bg-background text-foreground">
      <Login4 {...login4Mocks.default} />
    </div>
  ),
};

export const Variants: Story = {
  args: { ...login4Mocks.alternate },
  render: () => (
    <div className="bg-background text-foreground">
      <Login4 {...login4Mocks.alternate} />
    </div>
  ),
};

export const ThemeComparison: Story = {
  args: { ...login4Mocks.default },
  render: () => (
    <div className="grid gap-px overflow-hidden rounded-[--radius] border border-border bg-border lg:grid-cols-2">
      <div className="bg-background">
        <Login4 {...login4Mocks.default} />
      </div>
      <div className="dark bg-background">
        <Login4 {...login4Mocks.default} />
      </div>
    </div>
  ),
};
