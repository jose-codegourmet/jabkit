export const stepperWithTitlesMocks = {
  default: {
    defaultValue: 2,
    steps: [
      {
        title: "Step One",
        description: "Desc for step one",
      },
      {
        title: "Step Two",
        description: "Desc for step two",
      },
      {
        title: "Step Three",
        description: "Desc for step three",
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
