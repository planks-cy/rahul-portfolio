"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "@/lib/gsap";

/**
 * A minimal custom cursor: a small copper dot with a trailing hollow ring
 * that eases behind it, echoing the "signal" motif (a point followed by
 * its own trace). Disabled automatically for touch devices and for users
 * who prefer reduced motion.
 */
export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement | null>(null);
  const ringRef = useRef<HTMLDivElement | null>(null);
  const [enabled, setEnabled] = useState(false);
  const [isPointerTarget, setIsPointerTarget] = useState(false);

  useEffect(() => {
    const isFinePointer = window.matchMedia("(pointer: fine)").matches;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (!isFinePointer || prefersReducedMotion) return;

    setEnabled(true);
    document.body.classList.add("has-custom-cursor");

    function handleMove(e: MouseEvent) {
      gsap.set(dotRef.current, { x: e.clientX, y: e.clientY });
      gsap.to(ringRef.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.45,
        ease: "power3.out",
      });

      const target = e.target as HTMLElement;
      setIsPointerTarget(!!target.closest("a, button, [data-cursor-hover]"));
    }

    window.addEventListener("mousemove", handleMove);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      document.body.classList.remove("has-custom-cursor");
    };
  }, []);

  if (!enabled) return null;

  return (
    <>
      <div
        ref={dotRef}
        className="pointer-events-none fixed left-0 top-0 z-[100] h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-copper"
        aria-hidden="true"
      />
      <div
        ref={ringRef}
        className={`pointer-events-none fixed left-0 top-0 z-[100] -translate-x-1/2 -translate-y-1/2 rounded-full border transition-[width,height,border-color] duration-300 ${
          isPointerTarget
            ? "h-12 w-12 border-copper"
            : "h-8 w-8 border-paper/40"
        }`}
        aria-hidden="true"
      />
    </>
  );
}
