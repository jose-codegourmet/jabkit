import type { Meta, StoryObj } from "@storybook/react";
// biome-ignore lint/correctness/noUnusedImports: Storybook supports the classic JSX runtime.
import * as React from "react";
import { FooterColumn } from "./FooterColumn";
import { footerColumnMocks } from "./FooterColumn.mocks";

const meta = {
  title: "Marketing/FooterColumn",
  component: FooterColumn,
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof FooterColumn>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { ...footerColumnMocks.default },
  render: () => (
    <div className="bg-background text-foreground">
      <FooterColumn {...footerColumnMocks.default} />
    </div>
  ),
};

export const Variants: Story = {
  args: { ...footerColumnMocks.alternate },
  render: () => (
    <div className="bg-background text-foreground">
      <FooterColumn {...footerColumnMocks.alternate} />
    </div>
  ),
};

export const ThemeComparison: Story = {
  args: { ...footerColumnMocks.default },
  render: () => (
    <div className="grid gap-px overflow-hidden rounded-[--radius] border border-border bg-border lg:grid-cols-2">
      <div className="bg-background">
        <FooterColumn {...footerColumnMocks.default} />
      </div>
      <div className="dark bg-background">
        <FooterColumn {...footerColumnMocks.default} />
      </div>
    </div>
  ),
};
