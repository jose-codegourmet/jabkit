import type { Meta, StoryObj } from "@storybook/react";
// biome-ignore lint/correctness/noUnusedImports: Storybook supports the classic JSX runtime.
import * as React from "react";
import { Avatar, AvatarFallback } from "@/atoms/avatar/Avatar";
import { Button } from "@/atoms/button";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./HoverCard";
import { hoverCardMocks, hoverCardSides } from "./HoverCard.mocks";

const meta = {
  title: "Atoms/HoverCard",
  component: HoverCard,
  parameters: { layout: "centered" },
} satisfies Meta<typeof HoverCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { defaultOpen: false },
  render: () => (
    <HoverCard>
      <HoverCardTrigger
        delay={100}
        closeDelay={100}
        render={
          <Button variant="ghost" className="px-2">
            {hoverCardMocks.default.trigger}
          </Button>
        }
      />
      <HoverCardContent>
        <div className="flex justify-between gap-4">
          <Avatar>
            <AvatarFallback>{hoverCardMocks.default.initials}</AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <h4 className="text-sm font-semibold">
              {hoverCardMocks.default.name}
            </h4>
            <p className="text-sm">{hoverCardMocks.default.description}</p>
            <div className="text-xs text-muted-foreground">
              {hoverCardMocks.default.meta}
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  ),
};

export const Variants: Story = {
  args: { defaultOpen: false },
  render: () => (
    <div className="flex flex-wrap items-center justify-center gap-2">
      {hoverCardSides.map((side) => (
        <HoverCard key={side}>
          <HoverCardTrigger
            delay={100}
            closeDelay={100}
            render={
              <Button variant="secondary" className="capitalize">
                {side.replace("-", " ")}
              </Button>
            }
          />
          <HoverCardContent side={side}>
            <div className="flex flex-col gap-1.5">
              <h4 className="font-medium">{hoverCardMocks.sides.title}</h4>
              <p>{hoverCardMocks.sides.description}</p>
            </div>
          </HoverCardContent>
        </HoverCard>
      ))}
    </div>
  ),
};

export const ThemeComparison: Story = {
  args: { defaultOpen: true },
  render: () => (
    <div className="grid gap-px overflow-hidden rounded-[--radius] border border-border bg-border sm:grid-cols-2">
      <div className="bg-background p-8">
        <HoverCard defaultOpen>
          <HoverCardTrigger
            render={
              <Button size="sm" variant="ghost" className="px-2">
                {hoverCardMocks.default.trigger}
              </Button>
            }
          />
          <HoverCardContent>
            <div className="flex justify-between gap-4">
              <Avatar>
                <AvatarFallback>
                  {hoverCardMocks.default.initials}
                </AvatarFallback>
              </Avatar>
              <div className="space-y-1">
                <h4 className="text-sm font-semibold">
                  {hoverCardMocks.default.name}
                </h4>
                <p className="text-sm">{hoverCardMocks.default.description}</p>
                <div className="text-xs text-muted-foreground">
                  {hoverCardMocks.default.meta}
                </div>
              </div>
            </div>
          </HoverCardContent>
        </HoverCard>
      </div>
      <div className="dark bg-background p-8">
        <HoverCard defaultOpen>
          <HoverCardTrigger
            render={
              <Button size="sm" variant="ghost" className="px-2">
                {hoverCardMocks.default.trigger}
              </Button>
            }
          />
          <HoverCardContent>
            <div className="flex justify-between gap-4">
              <Avatar>
                <AvatarFallback>
                  {hoverCardMocks.default.initials}
                </AvatarFallback>
              </Avatar>
              <div className="space-y-1">
                <h4 className="text-sm font-semibold">
                  {hoverCardMocks.default.name}
                </h4>
                <p className="text-sm">{hoverCardMocks.default.description}</p>
                <div className="text-xs text-muted-foreground">
                  {hoverCardMocks.default.meta}
                </div>
              </div>
            </div>
          </HoverCardContent>
        </HoverCard>
      </div>
    </div>
  ),
};
