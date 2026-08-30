import type { Meta, StoryObj } from "@storybook/react";
import { Avatar } from "./Avatar";

const meta = { title: "Atoms/Avatar", component: Avatar } satisfies Meta<
  typeof Avatar
>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { render: () => <Avatar /> };
export const Variants: Story = { render: () => <Avatar className="w-full" /> };
export const ThemeComparison: Story = {
  render: () => (
    <div className="dark bg-background p-6">
      <Avatar />
    </div>
  ),
};
