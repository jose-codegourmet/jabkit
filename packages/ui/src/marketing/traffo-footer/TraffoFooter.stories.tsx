import type { Meta, StoryObj } from "@storybook/react";
// biome-ignore lint/correctness/noUnusedImports: Storybook supports the classic JSX runtime.
import * as React from "react";
import { TraffoFooter } from "./TraffoFooter";
import { traffoFooterMocks } from "./TraffoFooter.mocks";

const meta = {
  title: "Marketing/TraffoFooter",
  component: TraffoFooter,
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof TraffoFooter>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { ...traffoFooterMocks.default },
  render: () => (
    <>
      <TraffoFooter {...traffoFooterMocks.default} />
    </>
  ),
};

export const Variants: Story = {
  args: { ...traffoFooterMocks.alternate },
  render: () => (
    <>
      <TraffoFooter {...traffoFooterMocks.alternate} />
    </>
  ),
};

export const ThemeComparison: Story = {
  args: { ...traffoFooterMocks.default },
  render: () => (
    <div className="grid gap-px overflow-hidden rounded-[--radius] border border-border bg-border lg:grid-cols-2">
      <div className="bg-background">
        <TraffoFooter {...traffoFooterMocks.default} />
      </div>
      <div className="dark bg-background">
        <TraffoFooter {...traffoFooterMocks.default} />
      </div>
    </div>
  ),
};
