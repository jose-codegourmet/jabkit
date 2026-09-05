import type { Meta, StoryObj } from "@storybook/react";
// biome-ignore lint/correctness/noUnusedImports: Storybook supports the classic JSX runtime.
import * as React from "react";
import { Projects16 } from "./Projects16";
import {
  projects16AlternateMocks,
  projects16Mocks,
} from "./Projects16.mocks";

const meta = {
  title: "Marketing/Projects16",
  component: Projects16,
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof Projects16>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { ...projects16Mocks },
  render: () => (
    <div className="bg-background text-foreground">
      <Projects16
        title={projects16Mocks.title}
        description={projects16Mocks.description}
        action={projects16Mocks.action}
        images={projects16Mocks.images}
      />
    </div>
  ),
};

export const Variants: Story = {
  args: { ...projects16AlternateMocks },
  render: () => (
    <div className="bg-background text-foreground">
      <Projects16
        title={projects16AlternateMocks.title}
        description={projects16AlternateMocks.description}
        action={projects16AlternateMocks.action}
        images={projects16AlternateMocks.images}
      />
    </div>
  ),
};

export const ThemeComparison: Story = {
  args: { ...projects16Mocks },
  render: () => (
    <div className="grid gap-px overflow-hidden rounded-[--radius] border border-border bg-border lg:grid-cols-2">
      <div className="bg-background">
        <Projects16 {...projects16Mocks} />
      </div>
      <div className="dark bg-background">
        <Projects16 {...projects16Mocks} />
      </div>
    </div>
  ),
};
