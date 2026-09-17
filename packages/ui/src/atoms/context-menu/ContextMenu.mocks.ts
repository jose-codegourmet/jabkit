export const contextMenuMocks = {
  trigger: "Right click here",
  default: {
    items: ["Profile", "Billing", "Team", "Subscription"] as const,
  },
  variants: {
    fileLabel: "File",
    editLabel: "Edit",
    peopleLabel: "People",
    moreTools: "More Tools",
    fileItems: [
      { label: "New File", shortcut: "⌘N" },
      { label: "Open File", shortcut: "⌘O" },
      { label: "Save", shortcut: "⌘S" },
    ] as const,
    editItems: [
      { label: "Undo", shortcut: "⌘Z" },
      { label: "Redo", shortcut: "⇧⌘Z" },
    ] as const,
    checkboxes: [
      { label: "Show Bookmarks Bar", checked: true },
      { label: "Show Full URLs", checked: false },
    ] as const,
    people: [
      { label: "Pedro Duarte", value: "pedro" },
      { label: "Colm Tuite", value: "colm" },
    ] as const,
    submenu: ["Save Page...", "Create Shortcut...", "Name Window..."] as const,
    destructive: "Delete",
  },
} as const;
