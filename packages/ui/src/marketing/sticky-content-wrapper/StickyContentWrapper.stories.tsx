import type { Meta, StoryObj } from "@storybook/react";
// biome-ignore lint/correctness/noUnusedImports: Storybook supports the classic JSX runtime.
import * as React from "react";
import { StickyContentWrapper } from "./StickyContentWrapper";
import { stickyContentWrapperMocks } from "./StickyContentWrapper.mocks";

const meta = {
  title: "Marketing/StickyContentWrapper",
  component: StickyContentWrapper,
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof StickyContentWrapper>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { ...stickyContentWrapperMocks.default },
  render: () => (
    <div className="bg-background text-foreground">
      <StickyContentWrapper {...stickyContentWrapperMocks.default} />
    </div>
  ),
};

export const Variants: Story = {
  args: { ...stickyContentWrapperMocks.alternate },
  render: () => (
    <div className="bg-background text-foreground">
      <StickyContentWrapper {...stickyContentWrapperMocks.alternate} />
    </div>
  ),
};

export const ThemeComparison: Story = {
  args: { ...stickyContentWrapperMocks.default },
  render: () => (
    <div className="grid gap-px overflow-hidden rounded-[--radius] border border-border bg-border lg:grid-cols-2">
      <div className="bg-background">
        <StickyContentWrapper {...stickyContentWrapperMocks.default} />
      </div>
      <div className="dark bg-background">
        <StickyContentWrapper {...stickyContentWrapperMocks.default} />
      </div>
    </div>
  ),
};
