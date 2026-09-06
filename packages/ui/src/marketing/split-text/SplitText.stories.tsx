import type { Meta, StoryObj } from "@storybook/react";
// biome-ignore lint/correctness/noUnusedImports: Storybook supports the classic JSX runtime.
import * as React from "react";
import { SplitText } from "./SplitText";
import { splitTextMocks } from "./SplitText.mocks";

const meta = {
  title: "Marketing/SplitText",
  component: SplitText,
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof SplitText>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { ...splitTextMocks.default },
  render: () => (
    <div className="bg-background text-foreground">
      <SplitText {...splitTextMocks.default} />
    </div>
  ),
};

export const Variants: Story = {
  args: { ...splitTextMocks.alternate },
  render: () => (
    <div className="bg-background text-foreground">
      <SplitText {...splitTextMocks.alternate} />
    </div>
  ),
};

export const ThemeComparison: Story = {
  args: { ...splitTextMocks.default },
  render: () => (
    <div className="grid gap-px overflow-hidden rounded-[--radius] border border-border bg-border lg:grid-cols-2">
      <div className="bg-background">
        <SplitText {...splitTextMocks.default} />
      </div>
      <div className="dark bg-background">
        <SplitText {...splitTextMocks.default} />
      </div>
    </div>
  ),
};
