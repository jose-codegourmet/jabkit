export const alertDialogMocks = {
  default: {
    trigger: "Show Dialog",
    title: "Are you absolutely sure?",
    description:
      "This action cannot be undone. This will permanently delete your account from our servers.",
    cancel: "Cancel",
    confirm: "Continue",
  },
  small: {
    trigger: "Small",
    title: "Allow accessory to connect?",
    description:
      "Do you want to allow the USB accessory to connect to this device?",
    cancel: "Don't allow",
    confirm: "Allow",
  },
  destructive: {
    trigger: "Delete Chat",
    title: "Delete chat?",
    description:
      "This will permanently delete this chat conversation. View Settings to delete any memories saved during this chat.",
    cancel: "Cancel",
    confirm: "Delete",
  },
} as const;
