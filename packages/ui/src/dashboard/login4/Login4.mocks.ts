import type { Login4Props } from "./Login4.types";

const defaultProviders = [
  {
    id: "google",
    label: "Log in with Google",
    href: "#google",
    iconSrc: "https://cdn.simpleicons.org/google",
  },
  {
    id: "facebook",
    label: "Log in with Facebook",
    href: "#facebook",
    iconSrc: "https://cdn.simpleicons.org/facebook",
  },
  {
    id: "github",
    label: "Log in with GitHub",
    href: "#github",
    iconSrc: "https://cdn.simpleicons.org/github",
    invertOnDark: true,
  },
] as const;

export const login4Mocks = {
  default: {
    logo: { name: "Northline", href: "#home" },
    title: "Log in to your account",
    emailLabel: "Email",
    emailPlaceholder: "you@northline.app",
    passwordLabel: "Password",
    passwordPlaceholder: "Enter your password",
    submitLabel: "Log in",
    providers: [...defaultProviders],
    signupPrompt: "Don't have an account?",
    signupLabel: "Sign up",
    signupHref: "#signup",
  },
  alternate: {
    logo: { name: "Harbor", href: "#home" },
    title: "Welcome back",
    emailLabel: "Work email",
    emailPlaceholder: "ops@harbor.studio",
    emailDefaultValue: "ops@harbor.studio",
    passwordLabel: "Password",
    passwordPlaceholder: "Your Harbor password",
    submitLabel: "Continue",
    providers: [
      {
        id: "google",
        label: "Continue with Google",
        href: "#google",
        iconSrc: "https://cdn.simpleicons.org/google",
      },
      {
        id: "github",
        label: "Continue with GitHub",
        href: "#github",
        iconSrc: "https://cdn.simpleicons.org/github",
        invertOnDark: true,
      },
      {
        id: "apple",
        label: "Continue with Apple",
        href: "#apple",
        iconSrc: "https://cdn.simpleicons.org/apple",
        invertOnDark: true,
      },
    ],
    signupPrompt: "New to Harbor?",
    signupLabel: "Create a workspace",
    signupHref: "#signup",
  },
} satisfies Record<string, Login4Props>;
