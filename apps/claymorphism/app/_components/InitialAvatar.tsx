import { Avatar, AvatarFallback } from "@/atoms/avatar/Avatar";
import { cn } from "@/lib/cn";
import { getMember } from "../_data/members";
import type { MemberId, MemberTone } from "../_data/types";
import styles from "../style.module.css";

const toneClass: Record<MemberTone, string> = {
  primary: styles.avatarPrimary,
  secondary: styles.avatarSecondary,
  accent: styles.avatarAccent,
  warning: styles.avatarWarning,
};

export type InitialAvatarProps = {
  memberId: MemberId;
  size?: "sm" | "default" | "lg";
  className?: string;
};

export function InitialAvatar({
  memberId,
  size = "default",
  className,
}: InitialAvatarProps) {
  const member = getMember(memberId);
  if (!member) return null;

  return (
    <Avatar
      aria-label={member.firstName}
      className={cn(styles.avatar, className)}
      size={size}
    >
      <AvatarFallback className={toneClass[member.tone]}>
        {member.initial}
      </AvatarFallback>
    </Avatar>
  );
}
