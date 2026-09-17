export const drawerMocks = {
  default: {
    trigger: "Open drawer",
    title: "Move goal",
    description:
      "Set a new target for this workspace. This can be changed later.",
    body: "Goals stay visible to everyone with editor access.",
    confirm: "Submit",
    cancel: "Cancel",
  },
  side: {
    trigger: "Open filters",
    title: "Filter results",
    description: "Narrow the list by status, owner, or last updated date.",
    body: "Filters apply immediately. Clear them to restore the full list.",
    confirm: "Apply filters",
    cancel: "Reset",
  },
} as const;
