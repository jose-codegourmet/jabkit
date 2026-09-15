"use client";
import { motion } from "motion/react";
import type { ReactNode } from "react";
import { useMotionPreference } from "./useMotionPreference";
export function TactileLink({
  href,
  className,
  children,
}: {
  href: string;
  className?: string;
  children: ReactNode;
}) {
  const reduce = useMotionPreference();
  return (
    <motion.a
      href={href}
      className={className}
      whileHover={reduce ? {} : { y: -10, rotate: -1.5 }}
      whileFocus={reduce ? {} : { y: -6 }}
      whileTap={reduce ? {} : { scale: 0.98, y: 0 }}
      transition={{ type: "spring", stiffness: 320, damping: 22 }}
    >
      {children}
    </motion.a>
  );
}
