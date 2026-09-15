import type { Meta, StoryObj } from "@storybook/react";
// biome-ignore lint/correctness/noUnusedImports: Storybook supports the classic JSX runtime.
import * as React from "react";
import { StrongSquid } from "./StrongSquid";
import { strongSquidMocks } from "./StrongSquid.mocks";

const meta = {
  title: "Atoms/StrongSquid",
  component: StrongSquid,
  parameters: { layout: "centered" },
} satisfies Meta<typeof StrongSquid>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { ...strongSquidMocks.default },
  render: () => (
    <StrongSquid {...strongSquidMocks.default} />
  ),
};

export const Night: Story = {
  args: { ...strongSquidMocks.night },
  render: () => (
    <StrongSquid {...strongSquidMocks.night} />
  ),
};

export const Sizes: Story = {
  args: { ...strongSquidMocks.compact },
  render: () => (
    <div className="flex flex-wrap items-center gap-6 bg-background p-8 text-foreground">
      <StrongSquid {...strongSquidMocks.compact} />
      <StrongSquid {...strongSquidMocks.default} />
    </div>
  ),
};

export const ThemeComparison: Story = {
  args: { ...strongSquidMocks.default },
  render: () => (
    <div className="grid gap-px overflow-hidden rounded-[--radius] border border-border bg-border sm:grid-cols-2">
      <div className="bg-background p-8">
        <StrongSquid {...strongSquidMocks.default} />
      </div>
      <div className="dark bg-background p-8">
        <StrongSquid {...strongSquidMocks.default} />
      </div>
    </div>
  ),
};
