import type { Meta, StoryObj } from "@storybook/react";
// biome-ignore lint/correctness/noUnusedImports: Storybook supports the classic JSX runtime.
import * as React from "react";
import { TraffoHeader } from "./TraffoHeader";
import { traffoHeaderMocks } from "./TraffoHeader.mocks";

const meta = {
  title: "Marketing/TraffoHeader",
  component: TraffoHeader,
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof TraffoHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { ...traffoHeaderMocks.default },
  render: () => (
    <>
      <TraffoHeader {...traffoHeaderMocks.default} />
    </>
  ),
};

export const Variants: Story = {
  args: { ...traffoHeaderMocks.alternate },
  render: () => (
    <>
      <TraffoHeader {...traffoHeaderMocks.alternate} />
    </>
  ),
};

export const ThemeComparison: Story = {
  args: { ...traffoHeaderMocks.default },
  render: () => (
    <div className="grid gap-px overflow-hidden rounded-[--radius] border border-border bg-border lg:grid-cols-2">
      <div className="bg-background">
        <TraffoHeader {...traffoHeaderMocks.default} />
      </div>
      <div className="dark bg-background">
        <TraffoHeader {...traffoHeaderMocks.default} />
      </div>
    </div>
  ),
};
