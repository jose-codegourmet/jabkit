export const toastMocks = {
  default: {
    title: "Event created",
    description: "Sunday, December 3 at 9:00 AM",
  },
  action: {
    title: "File uploaded",
    description: "report.pdf is ready to share.",
    actionLabel: "Undo",
  },
  types: [
    {
      type: "success" as const,
      title: "Changes saved",
      description: "Your profile is up to date.",
    },
    {
      type: "info" as const,
      title: "New comment",
      description: "Alex left a note on the brief.",
    },
    {
      type: "warning" as const,
      title: "Storage almost full",
      description: "You have 200 MB remaining.",
    },
    {
      type: "error" as const,
      title: "Could not send",
      description: "Check the network and try again.",
    },
  ],
} as const;
