import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { recoveryItemsFixture } from "../.storybook/fixtures";
import { NotFoundRecovery } from "./NotFoundRecovery";

const meta = {
  title: "Chrome/NotFoundRecovery",
  component: NotFoundRecovery,
  args: { items: recoveryItemsFixture, pathname: "/marketing/hero37" },
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof NotFoundRecovery>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ComponentTypo: Story = {};

export const UnknownPage: Story = { args: { pathname: "/pricing-page" } };
