export const alertMocks = {
  default: {
    title: "Payment successful",
    description:
      "Your payment of $29.99 has been processed. A receipt has been sent to your email address.",
  },
  feature: {
    title: "New feature available",
    description:
      "We've added dark mode support. You can enable it in your account settings.",
  },
  basic: {
    title: "Account updated successfully",
    description:
      "Your profile information has been saved. Changes will be reflected immediately.",
  },
  destructive: {
    title: "Payment failed",
    description:
      "Your payment could not be processed. Please check your payment method and try again.",
  },
  action: {
    title: "Heads up!",
    description:
      "You can add components and dependencies to your app using the cli.",
    actionLabel: "Enable",
  },
} as const;
