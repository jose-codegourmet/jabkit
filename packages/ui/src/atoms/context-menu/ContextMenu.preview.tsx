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
  ContextMenuTrigger,
} from "./ContextMenu";
import { contextMenuMocks } from "./ContextMenu.mocks";

const triggerClassName =
  "flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed border-border text-sm text-muted-foreground";

const panelClassName = "!static w-52 shadow-none";

export default {
  Default: () => (
    <ContextMenu defaultOpen>
      <ContextMenuTrigger className={triggerClassName}>
        {contextMenuMocks.trigger}
      </ContextMenuTrigger>
      <ContextMenuContent className={panelClassName}>
        {contextMenuMocks.default.items.map((item) => (
          <ContextMenuItem key={item}>{item}</ContextMenuItem>
        ))}
      </ContextMenuContent>
    </ContextMenu>
  ),
  Variants: () => (
    <ContextMenu defaultOpen>
      <ContextMenuTrigger className={triggerClassName}>
        {contextMenuMocks.trigger}
      </ContextMenuTrigger>
      <ContextMenuContent className={panelClassName}>
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
        <ContextMenuCheckboxItem checked>
          {contextMenuMocks.variants.checkboxes[0].label}
        </ContextMenuCheckboxItem>
        <ContextMenuCheckboxItem>
          {contextMenuMocks.variants.checkboxes[1].label}
        </ContextMenuCheckboxItem>
        <ContextMenuSeparator />
        <ContextMenuRadioGroup value="pedro">
          {contextMenuMocks.variants.people.map((item) => (
            <ContextMenuRadioItem key={item.value} value={item.value}>
              {item.label}
            </ContextMenuRadioItem>
          ))}
        </ContextMenuRadioGroup>
        <ContextMenuSeparator />
        <ContextMenuItem variant="destructive">
          {contextMenuMocks.variants.destructive}
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  ),
};
