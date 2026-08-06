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
        "eyebrow inline-flex items-center gap-3 rounded-full px-7 py-4 transition-colors duration-300",
        variant === "solid" && "bg-copper text-ink hover:bg-gold",
        variant === "outline" &&
          "border border-line text-paper hover:border-copper hover:text-copper",
        className
      )}
      {...props}
    >
      {children}
    </a>
  );
}
