import type { Meta, StoryObj } from "@storybook/react";
// biome-ignore lint/correctness/noUnusedImports: Storybook supports the classic JSX runtime.
import * as React from "react";
import { Button } from "@/atoms/button";
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "./Popover";
import { popoverMocks } from "./Popover.mocks";

const meta = {
  title: "Atoms/Popover",
  component: Popover,
  parameters: { layout: "centered" },
} satisfies Meta<typeof Popover>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { defaultOpen: false },
  render: () => (
    <Popover>
      <PopoverTrigger
        render={
          <Button variant="secondary">{popoverMocks.default.trigger}</Button>
        }
      />
      <PopoverContent>
        <PopoverHeader>
          <PopoverTitle>{popoverMocks.default.title}</PopoverTitle>
          <PopoverDescription>
            {popoverMocks.default.description}
          </PopoverDescription>
        </PopoverHeader>
      </PopoverContent>
    </Popover>
  ),
};

export const Align: Story = {
  args: { defaultOpen: false },
  render: () => (
    <div className="flex flex-wrap items-center justify-center gap-2">
      <Popover>
        <PopoverTrigger
          render={
            <Button variant="secondary">{popoverMocks.align.start}</Button>
          }
        />
        <PopoverContent align="start">
          <PopoverHeader>
            <PopoverTitle>{popoverMocks.align.startLabel}</PopoverTitle>
          </PopoverHeader>
        </PopoverContent>
      </Popover>
      <Popover>
        <PopoverTrigger
          render={
            <Button variant="secondary">{popoverMocks.align.center}</Button>
          }
        />
        <PopoverContent align="center">
          <PopoverHeader>
            <PopoverTitle>{popoverMocks.align.centerLabel}</PopoverTitle>
          </PopoverHeader>
        </PopoverContent>
      </Popover>
      <Popover>
        <PopoverTrigger
          render={<Button variant="secondary">{popoverMocks.align.end}</Button>}
        />
        <PopoverContent align="end">
          <PopoverHeader>
            <PopoverTitle>{popoverMocks.align.endLabel}</PopoverTitle>
          </PopoverHeader>
        </PopoverContent>
      </Popover>
    </div>
  ),
};

export const ThemeComparison: Story = {
  args: { defaultOpen: true },
  render: () => (
    <div className="grid gap-px overflow-hidden rounded-[--radius] border border-border bg-border sm:grid-cols-2">
      <div className="bg-background p-8">
        <Popover defaultOpen>
          <PopoverTrigger
            render={
              <Button variant="secondary" size="sm">
                {popoverMocks.default.trigger}
              </Button>
            }
          />
          <PopoverContent>
            <PopoverHeader>
              <PopoverTitle>{popoverMocks.default.title}</PopoverTitle>
              <PopoverDescription>
                {popoverMocks.default.description}
              </PopoverDescription>
            </PopoverHeader>
          </PopoverContent>
        </Popover>
      </div>
      <div className="dark bg-background p-8">
        <Popover defaultOpen>
          <PopoverTrigger
            render={
              <Button variant="secondary" size="sm">
                {popoverMocks.default.trigger}
              </Button>
            }
          />
          <PopoverContent>
            <PopoverHeader>
              <PopoverTitle>{popoverMocks.default.title}</PopoverTitle>
              <PopoverDescription>
                {popoverMocks.default.description}
              </PopoverDescription>
            </PopoverHeader>
          </PopoverContent>
        </Popover>
      </div>
    </div>
  ),
};
