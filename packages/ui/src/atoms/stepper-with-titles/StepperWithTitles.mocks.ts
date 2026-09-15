export const stepperWithTitlesMocks = {
  checkout: {
    defaultValue: 2,
    steps: [
      {
        title: "Cart",
        description: "Review items and quantities",
      },
      {
        title: "Shipping",
        description: "Address and delivery window",
      },
      {
        title: "Payment",
        description: "Card or invoice details",
      },
    ],
  },
  onboarding: {
    defaultValue: 1,
    steps: [
      {
        title: "Account",
        description: "Name and work email",
      },
      {
        title: "Workspace",
        description: "Team name and region",
      },
      {
        title: "Invite",
        description: "Add the first collaborators",
      },
      {
        title: "Review",
        description: "Confirm and open the workspace",
      },
    ],
  },
} as const;
