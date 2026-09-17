export const accordionMocks = {
  default: [
    {
      value: "item-1",
      trigger: "Is it accessible?",
      content: "Yes. It adheres to the WAI-ARIA design pattern.",
    },
    {
      value: "item-2",
      trigger: "Is it styled?",
      content:
        "Yes. It comes with default styles that matches the other components' aesthetic.",
    },
    {
      value: "item-3",
      trigger: "Is it animated?",
      content:
        "Yes. It's animated by default, but you can disable it if you prefer.",
    },
  ],
  shipping: [
    {
      value: "shipping",
      trigger: "What are your shipping options?",
      content:
        "We offer standard (5-7 days), express (2-3 days), and overnight shipping. Free shipping on international orders.",
    },
    {
      value: "support",
      trigger: "How can I contact customer support?",
      content:
        "Email support@example.com or use the in-app chat. Response time is usually under two hours on weekdays.",
    },
    {
      value: "password",
      trigger: "How do I reset my password?",
      content:
        "Click on 'Forgot Password' on the login page, enter your email address, and we'll send you a link to reset your password. The link will expire in 24 hours.",
    },
  ],
  multiple: [
    {
      value: "notifications",
      trigger: "Notification Settings",
      content:
        "Manage how you receive notifications. You can enable email alerts for updates or push notifications for mobile devices.",
    },
    {
      value: "billing",
      trigger: "Billing & Subscription",
      content:
        "We offer monthly and annual subscription plans. Billing is charged at the beginning of each cycle, and you can cancel anytime.",
    },
  ],
  disabled: [
    {
      value: "history",
      trigger: "Can I access my account history?",
      content:
        "Yes, you can view your complete account history including all transactions, plan changes, and support tickets in the Account History section of your dashboard.",
      disabled: false,
    },
    {
      value: "premium",
      trigger: "Premium feature information",
      content:
        "This section contains information about premium features. Upgrade your plan to access this content.",
      disabled: true,
    },
    {
      value: "email",
      trigger: "How do I update my email address?",
      content:
        "You can update your email address in your account settings. You'll receive a verification email at your new address to confirm the change.",
      disabled: false,
    },
  ],
} as const;
