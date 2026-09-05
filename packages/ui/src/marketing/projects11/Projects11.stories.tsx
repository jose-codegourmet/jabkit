import type { Meta, StoryObj } from "@storybook/react";
// biome-ignore lint/correctness/noUnusedImports: Storybook supports the classic JSX runtime.
import * as React from "react";
import { Projects11 } from "./Projects11";
import { projects11AlternateMocks, projects11Mocks } from "./Projects11.mocks";

const meta = {
  title: "Marketing/Projects11",
  component: Projects11,
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof Projects11>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { ...projects11Mocks },
  render: () => (
    <div className="bg-background text-foreground">
      <Projects11
        label={projects11Mocks.label}
        images={projects11Mocks.images}
      />
    </div>
  ),
};

export const Variants: Story = {
  args: { ...projects11AlternateMocks },
  render: () => (
    <div className="bg-background text-foreground">
      <Projects11
        label={projects11AlternateMocks.label}
        images={projects11AlternateMocks.images}
      />
    </div>
  ),
};

export const ThemeComparison: Story = {
  args: { ...projects11Mocks },
  render: () => (
    <div className="grid gap-px overflow-hidden rounded-[--radius] border border-border bg-border lg:grid-cols-2">
      <div className="bg-background">
        <Projects11 {...projects11Mocks} />
      </div>
      <div className="dark bg-background">
        <Projects11 {...projects11Mocks} />
      </div>
    </div>
  ),
};
