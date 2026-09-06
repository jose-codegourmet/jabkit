export const dialogMocks = {
  default: {
    trigger: "Share workspace",
    title: "Share this workspace",
    description:
      "Invite a teammate by email. They receive editor access to this workspace.",
    confirm: "Send invite",
    cancel: "Cancel",
  },
  confirm: {
    trigger: "Delete project",
    title: "Delete this project?",
    description:
      "This removes the project for everyone on the team. It cannot be recovered.",
    confirm: "Delete project",
    cancel: "Keep project",
  },
} as const;
