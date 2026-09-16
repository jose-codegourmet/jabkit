import type { Meta, StoryObj } from "@storybook/react";
// biome-ignore lint/correctness/noUnusedImports: Storybook supports the classic JSX runtime.
import * as React from "react";
import { CloudShader } from "./CloudShader";
import { cloudShaderMocks } from "./CloudShader.mocks";

const meta = {
  title: "Marketing/CloudShader",
  component: CloudShader,
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof CloudShader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { ...cloudShaderMocks.default },
  render: () => (
    <div className="bg-background text-foreground">
      <CloudShader {...cloudShaderMocks.default} />
    </div>
  ),
};

export const Variants: Story = {
  args: { ...cloudShaderMocks.alternate },
  render: () => (
    <div className="bg-background text-foreground">
      <CloudShader {...cloudShaderMocks.alternate} />
    </div>
  ),
};

export const ThemeComparison: Story = {
  args: { ...cloudShaderMocks.default },
  render: () => (
    <div className="grid gap-px overflow-hidden rounded-[--radius] border border-border bg-border lg:grid-cols-2">
      <div className="bg-background">
        <CloudShader {...cloudShaderMocks.default} />
      </div>
      <div className="dark bg-background">
        <CloudShader {...cloudShaderMocks.default} />
      </div>
    </div>
  ),
};
