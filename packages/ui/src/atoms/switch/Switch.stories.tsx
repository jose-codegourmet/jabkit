import type { Meta, StoryObj } from "@storybook/react";
import { Switch } from "./Switch";

const meta = { title: "Atoms/Switch", component: Switch } satisfies Meta<
  typeof Switch
>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { render: () => <Switch /> };
export const Variants: Story = { render: () => <Switch className="w-full" /> };
export const ThemeComparison: Story = {
  render: () => (
    <div className="dark bg-background p-6">
      <Switch />
    </div>
  ),
};
