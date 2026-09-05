import type { Meta, StoryObj } from "@storybook/react";
// biome-ignore lint/correctness/noUnusedImports: Storybook supports the classic JSX runtime.
import * as React from "react";
import { Projects13 } from "./Projects13";
import { projects13AlternateMocks, projects13Mocks } from "./Projects13.mocks";

const meta = {
  title: "Marketing/Projects13",
  component: Projects13,
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof Projects13>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { ...projects13Mocks },
  render: () => (
    <div className="bg-background text-foreground">
      <Projects13
        label={projects13Mocks.label}
        projects={projects13Mocks.projects}
      />
    </div>
  ),
};

export const Variants: Story = {
  args: { ...projects13AlternateMocks },
  render: () => (
    <div className="bg-background text-foreground">
      <Projects13
        label={projects13AlternateMocks.label}
        projects={projects13AlternateMocks.projects}
      />
    </div>
  ),
};

export const ThemeComparison: Story = {
  args: { ...projects13Mocks },
  render: () => (
    <div className="grid gap-px overflow-hidden rounded-[--radius] border border-border bg-border lg:grid-cols-2">
      <div className="bg-background">
        <Projects13 {...projects13Mocks} />
      </div>
      <div className="dark bg-background">
        <Projects13 {...projects13Mocks} />
      </div>
    </div>
  ),
};
