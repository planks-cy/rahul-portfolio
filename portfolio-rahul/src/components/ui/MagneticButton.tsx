"use client";

import { AnchorHTMLAttributes, ReactNode } from "react";
import { useMagnetic } from "@/hooks/useMagnetic";
import clsx from "clsx";

interface MagneticButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
  variant?: "solid" | "outline";
}

export function MagneticButton({
  children,
  variant = "solid",
  className,
  ...props
}: MagneticButtonProps) {
  const ref = useMagnetic<HTMLAnchorElement>(0.3);

  return (
    <a
      ref={ref}
      data-cursor-hover
      className={clsx(
        "eyebrow inline-flex items-center gap-3 rounded-full px-7 py-4 transition-all duration-300 shadow-md",
        variant === "solid" &&
          "bg-copper text-ink font-bold hover:bg-gold hover:shadow-copper/20 hover:shadow-lg",
        variant === "outline" &&
          "border border-white/20 text-paper font-semibold hover:border-copper hover:text-copper hover:bg-white/[0.04]",
        className
      )}
      {...props}
    >
      {children}
    </a>
  );
}
