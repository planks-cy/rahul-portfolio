"use client";

import { useEffect, useRef } from "react";
import Lenis from "lenis";
import { gsap } from "@/lib/gsap";

/**
 * Initialises Lenis smooth scrolling and keeps GSAP's ScrollTrigger in sync
 * with it on every frame. Respects prefers-reduced-motion by skipping smooth
 * scroll entirely (native scroll is left untouched in that case).
 */
export function useLenis() {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) return;

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    lenisRef.current = lenis;

    lenis.on("scroll", () => {
      gsap.ticker.tick();
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    const rafId = requestAnimationFrame(raf);

    gsap.ticker.add(() => {
      // no-op: kept ticking in sync via lenis "scroll" above
    });

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  return lenisRef;
}
