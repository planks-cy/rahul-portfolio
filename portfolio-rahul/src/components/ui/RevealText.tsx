"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface RevealTextProps {
  children: ReactNode;
  as?: "h1" | "h2" | "h3" | "p" | "div";
  delay?: number;
  className?: string;
}

/**
 * Fades and lifts content into place as it enters the viewport. Kept to a
 * single, restrained motion (12px lift + fade) so it reads as considered
 * rather than as scattered scroll effects.
 */
export function RevealText({
  children,
  as = "div",
  delay = 0,
  className = "",
}: RevealTextProps) {
  const Component = motion[as];

  return (
    <Component
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </Component>
  );
}
