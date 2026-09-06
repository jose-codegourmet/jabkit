import type { Meta, StoryObj } from "@storybook/react";
// biome-ignore lint/correctness/noUnusedImports: Storybook supports the classic JSX runtime.
import * as React from "react";
import { FooterSection } from "./FooterSection";
import { footerSectionMocks } from "./FooterSection.mocks";

const meta = {
  title: "Marketing/FooterSection",
  component: FooterSection,
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof FooterSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { ...footerSectionMocks.default },
  render: () => (
    <div className="bg-background text-foreground">
      <FooterSection {...footerSectionMocks.default} />
    </div>
  ),
};

export const Variants: Story = {
  args: { ...footerSectionMocks.alternate },
  render: () => (
    <div className="bg-background text-foreground">
      <FooterSection {...footerSectionMocks.alternate} />
    </div>
  ),
};

export const ThemeComparison: Story = {
  args: { ...footerSectionMocks.default },
  render: () => (
    <div className="grid gap-px overflow-hidden rounded-[--radius] border border-border bg-border lg:grid-cols-2">
      <div className="bg-background">
        <FooterSection {...footerSectionMocks.default} theme="light" />
      </div>
      <div className="dark bg-background">
        <FooterSection {...footerSectionMocks.default} theme="dark" />
      </div>
    </div>
  ),
};
