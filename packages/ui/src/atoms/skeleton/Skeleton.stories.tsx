import type { Meta, StoryObj } from "@storybook/react";
import { Skeleton } from "./Skeleton";

const meta = { title: "Atoms/Skeleton", component: Skeleton } satisfies Meta<
  typeof Skeleton
>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { render: () => <Skeleton /> };
export const Variants: Story = {
  render: () => <Skeleton className="w-full" />,
};
export const ThemeComparison: Story = {
  render: () => (
    <div className="dark bg-background p-6">
      <Skeleton />
    </div>
  ),
};
