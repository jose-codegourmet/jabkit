import type { Meta, StoryObj } from "@storybook/react";
// biome-ignore lint/correctness/noUnusedImports: Storybook supports the classic JSX runtime.
import * as React from "react";
import { CodeExample14 } from "./CodeExample14";
import { codeExample14Mocks } from "./CodeExample14.mocks";

const meta = {
  title: "Marketing/CodeExample14",
  component: CodeExample14,
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof CodeExample14>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { ...codeExample14Mocks.default },
  render: () => (
    <div className="bg-background text-foreground">
      <CodeExample14 {...codeExample14Mocks.default} />
    </div>
  ),
};

export const Variants: Story = {
  args: { ...codeExample14Mocks.alternate },
  render: () => (
    <div className="bg-background text-foreground">
      <CodeExample14 {...codeExample14Mocks.alternate} />
    </div>
  ),
};

export const ThemeComparison: Story = {
  args: { ...codeExample14Mocks.default },
  render: () => (
    <div className="grid gap-px overflow-hidden rounded-[--radius] border border-border bg-border lg:grid-cols-2">
      <div className="bg-background">
        <CodeExample14 {...codeExample14Mocks.default} />
      </div>
      <div className="dark bg-background">
        <CodeExample14 {...codeExample14Mocks.default} />
      </div>
    </div>
  ),
};
