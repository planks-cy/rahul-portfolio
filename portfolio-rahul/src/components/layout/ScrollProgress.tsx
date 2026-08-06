"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

/**
 * A slim vertical progress trace fixed to the right edge of the viewport.
 * Uses the page scroll fraction directly so it stays correct whether or
 * not Lenis smooth-scroll is active.
 */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 20,
    mass: 0.2,
  });
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <div
      className="pointer-events-none fixed right-4 top-1/2 z-[80] hidden h-40 w-px -translate-y-1/2 bg-paper/10 sm:block md:right-6"
      aria-hidden="true"
    >
      <motion.div
        className="w-px origin-top bg-copper"
        style={{ scaleY: smoothProgress, height: "100%" }}
      />
    </div>
  );
}
