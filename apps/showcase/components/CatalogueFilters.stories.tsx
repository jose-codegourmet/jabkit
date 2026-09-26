import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { expect, userEvent, within } from "storybook/test";
import { catalogueGroupsFixture } from "../.storybook/fixtures";
import { CatalogueFilters } from "./CatalogueFilters";

const meta = {
  title: "Chrome/CatalogueFilters",
  component: CatalogueFilters,
  args: {
    current: { q: "hero", kind: "block", group: "heroes", sort: "newest" },
    groups: [...catalogueGroupsFixture],
    resultCount: 16,
    activeCount: 3,
  },
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof CatalogueFilters>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Desktop: Story = {
  globals: { viewport: { value: "desktop" } },
};

export const MobileSheet: Story = {
  globals: { viewport: { value: "mobile1" } },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole("button", { name: /Filters/ }));
    await expect(
      canvas.getByRole("button", { name: "Show 16 results" }),
    ).toBeVisible();
  },
};

export const Unfiltered: Story = {
  args: { current: {}, resultCount: 214, activeCount: 0 },
};
