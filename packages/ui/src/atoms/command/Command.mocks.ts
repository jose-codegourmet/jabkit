export const commandMocks = {
  placeholder: "Type a command or search...",
  empty: "No results found.",
  suggestionsHeading: "Suggestions",
  settingsHeading: "Settings",
  suggestions: [
    { label: "Calendar", value: "calendar" },
    { label: "Search Emoji", value: "search-emoji" },
    { label: "Calculator", value: "calculator", disabled: true },
  ],
  settings: [
    { label: "Profile", value: "profile", shortcut: "⌘P" },
    { label: "Billing", value: "billing", shortcut: "⌘B" },
    { label: "Settings", value: "settings", shortcut: "⌘S" },
  ],
  dialogTrigger: "Open Menu",
  navigationHeading: "Navigation",
  navigation: [
    { label: "Home", value: "home", shortcut: "⌘H" },
    { label: "Inbox", value: "inbox", shortcut: "⌘I" },
    { label: "Documents", value: "documents", shortcut: "⌘D" },
    { label: "Folders", value: "folders", shortcut: "⌘F" },
  ],
  actionsHeading: "Actions",
  actions: [
    { label: "New File", value: "new-file", shortcut: "⌘N" },
    { label: "New Folder", value: "new-folder", shortcut: "⇧⌘N" },
    { label: "Copy", value: "copy", shortcut: "⌘C" },
    { label: "Cut", value: "cut", shortcut: "⌘X" },
    { label: "Paste", value: "paste", shortcut: "⌘V" },
    { label: "Delete", value: "delete", shortcut: "⌫" },
  ],
} as const;
