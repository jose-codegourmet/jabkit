import type { Meta, StoryObj } from "@storybook/react";
import {
  ContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuGroup,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from "./ContextMenu";
import { contextMenuMocks } from "./ContextMenu.mocks";

const triggerClassName =
  "flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed border-border text-sm text-muted-foreground";

const meta = {
  title: "Atoms/ContextMenu",
  component: ContextMenu,
  parameters: { layout: "centered" },
} satisfies Meta<typeof ContextMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <ContextMenu>
      <ContextMenuTrigger className={triggerClassName}>
        {contextMenuMocks.trigger}
      </ContextMenuTrigger>
      <ContextMenuContent>
        {contextMenuMocks.default.items.map((item) => (
          <ContextMenuItem key={item}>{item}</ContextMenuItem>
        ))}
      </ContextMenuContent>
    </ContextMenu>
  ),
};

export const Variants: Story = {
  render: () => (
    <ContextMenu>
      <ContextMenuTrigger className={triggerClassName}>
        {contextMenuMocks.trigger}
      </ContextMenuTrigger>
      <ContextMenuContent className="w-52">
        <ContextMenuGroup>
          <ContextMenuLabel>
            {contextMenuMocks.variants.fileLabel}
          </ContextMenuLabel>
          {contextMenuMocks.variants.fileItems.map((item) => (
            <ContextMenuItem key={item.label}>
              {item.label}
              <ContextMenuShortcut>{item.shortcut}</ContextMenuShortcut>
            </ContextMenuItem>
          ))}
        </ContextMenuGroup>
        <ContextMenuSeparator />
        <ContextMenuGroup>
          <ContextMenuLabel>
            {contextMenuMocks.variants.editLabel}
          </ContextMenuLabel>
          {contextMenuMocks.variants.editItems.map((item) => (
            <ContextMenuItem key={item.label}>
              {item.label}
              <ContextMenuShortcut>{item.shortcut}</ContextMenuShortcut>
            </ContextMenuItem>
          ))}
        </ContextMenuGroup>
        <ContextMenuSeparator />
        <ContextMenuCheckboxItem checked>
          {contextMenuMocks.variants.checkboxes[0].label}
        </ContextMenuCheckboxItem>
        <ContextMenuCheckboxItem>
          {contextMenuMocks.variants.checkboxes[1].label}
        </ContextMenuCheckboxItem>
        <ContextMenuSeparator />
        <ContextMenuGroup>
          <ContextMenuLabel>
            {contextMenuMocks.variants.peopleLabel}
          </ContextMenuLabel>
          <ContextMenuRadioGroup value="pedro">
            {contextMenuMocks.variants.people.map((item) => (
              <ContextMenuRadioItem key={item.value} value={item.value}>
                {item.label}
              </ContextMenuRadioItem>
            ))}
          </ContextMenuRadioGroup>
        </ContextMenuGroup>
        <ContextMenuSeparator />
        <ContextMenuSub>
          <ContextMenuSubTrigger>
            {contextMenuMocks.variants.moreTools}
          </ContextMenuSubTrigger>
          <ContextMenuSubContent>
            {contextMenuMocks.variants.submenu.map((item) => (
              <ContextMenuItem key={item}>{item}</ContextMenuItem>
            ))}
          </ContextMenuSubContent>
        </ContextMenuSub>
        <ContextMenuSeparator />
        <ContextMenuItem variant="destructive">
          {contextMenuMocks.variants.destructive}
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  ),
};

export const ThemeComparison: Story = {
  render: () => (
    <div className="grid gap-px overflow-hidden rounded-[--radius] border border-border bg-border sm:grid-cols-2">
      <div className="bg-background p-8">
        <ContextMenu defaultOpen>
          <ContextMenuTrigger className={triggerClassName}>
            {contextMenuMocks.trigger}
          </ContextMenuTrigger>
          <ContextMenuContent className="!static w-52 shadow-none">
            {contextMenuMocks.default.items.map((item) => (
              <ContextMenuItem key={item}>{item}</ContextMenuItem>
            ))}
          </ContextMenuContent>
        </ContextMenu>
      </div>
      <div className="dark bg-background p-8">
        <ContextMenu defaultOpen>
          <ContextMenuTrigger className={triggerClassName}>
            {contextMenuMocks.trigger}
          </ContextMenuTrigger>
          <ContextMenuContent className="!static w-52 shadow-none">
            {contextMenuMocks.default.items.map((item) => (
              <ContextMenuItem key={item}>{item}</ContextMenuItem>
            ))}
          </ContextMenuContent>
        </ContextMenu>
      </div>
    </div>
  ),
};
