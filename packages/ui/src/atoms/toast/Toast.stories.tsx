import type { Meta, StoryObj } from "@storybook/react";
// biome-ignore lint/correctness/noUnusedImports: Storybook supports the classic JSX runtime.
import * as React from "react";
import { Button } from "../button/Button";
import { ToastCard, Toaster, toast } from "./Toast";
import { toastMocks } from "./Toast.mocks";

const meta = {
  title: "Atoms/Toast",
  component: Toaster,
  parameters: { layout: "centered" },
} satisfies Meta<typeof Toaster>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Toaster>
      <Button
        onClick={() =>
          toast.add({
            title: toastMocks.default.title,
            description: toastMocks.default.description,
          })
        }
      >
        Show toast
      </Button>
    </Toaster>
  ),
};

export const Variants: Story = {
  render: () => (
    <div className="flex flex-col gap-3 bg-background p-8 text-foreground">
      <Toaster>
        <div className="flex flex-wrap gap-2">
          <Button
            onClick={() =>
              toast.add({
                title: toastMocks.types[0].title,
                description: toastMocks.types[0].description,
                type: toastMocks.types[0].type,
              })
            }
          >
            Success
          </Button>
          <Button
            variant="secondary"
            onClick={() =>
              toast.add({
                title: toastMocks.action.title,
                description: toastMocks.action.description,
                actionProps: { children: toastMocks.action.actionLabel },
              })
            }
          >
            With action
          </Button>
          <Button
            variant="destructive"
            onClick={() =>
              toast.add({
                title: toastMocks.types[3].title,
                description: toastMocks.types[3].description,
                type: toastMocks.types[3].type,
              })
            }
          >
            Error
          </Button>
        </div>
      </Toaster>
    </div>
  ),
};

export const ThemeComparison: Story = {
  render: () => (
    <div className="grid gap-px overflow-hidden rounded-[--radius] border border-border bg-border sm:grid-cols-2">
      <div className="bg-background p-8">
        <ToastCard
          title={toastMocks.default.title}
          description={toastMocks.default.description}
        />
      </div>
      <div className="dark bg-background p-8">
        <ToastCard
          title={toastMocks.default.title}
          description={toastMocks.default.description}
        />
      </div>
    </div>
  ),
};
