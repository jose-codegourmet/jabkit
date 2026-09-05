import type { Meta, StoryObj } from "@storybook/react";
// biome-ignore lint/correctness/noUnusedImports: Storybook supports the classic JSX runtime.
import * as React from "react";
import { Faq12 } from "./Faq12";
import { faq12Mocks } from "./Faq12.mocks";

const meta = {
  title: "Marketing/Faq12",
  component: Faq12,
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof Faq12>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { ...faq12Mocks.default },
  render: () => (
    <div className="bg-background text-foreground">
      <Faq12 {...faq12Mocks.default} />
    </div>
  ),
};

export const Variants: Story = {
  args: { ...faq12Mocks.alternate },
  render: () => (
    <div className="bg-background text-foreground">
      <Faq12 {...faq12Mocks.alternate} />
    </div>
  ),
};

export const ThemeComparison: Story = {
  args: { ...faq12Mocks.default },
  render: () => (
    <div className="grid gap-px overflow-hidden rounded-[--radius] border border-border bg-border lg:grid-cols-2">
      <div className="bg-background">
        <Faq12 {...faq12Mocks.default} />
      </div>
      <div className="dark bg-background">
        <Faq12 {...faq12Mocks.default} />
      </div>
    </div>
  ),
};
