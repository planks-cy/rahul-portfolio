"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "@/lib/gsap";

/**
 * Entrance loader: draws a single oscilloscope-style waveform (the site's
 * signature motif) across the screen, then fades the overlay out. Skips
 * itself entirely for reduced-motion users so no one is forced to wait.
 */
export function PageLoader() {
  const overlayRef = useRef<HTMLDivElement | null>(null);
  const pathRef = useRef<SVGPathElement | null>(null);
  const [skip, setSkip] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      setSkip(true);
      return;
    }

    document.body.style.overflow = "hidden";

    const dismiss = () => {
      document.body.style.overflow = "";
      if (overlayRef.current) {
        overlayRef.current.style.display = "none";
      }
    };

    // Safety fallback: Ensure loader auto-dismisses after 600ms max
    const safetyTimer = setTimeout(dismiss, 600);

    const path = pathRef.current;
    if (!path) {
      dismiss();
      return;
    }

    try {
      const length = path.getTotalLength();
      gsap.set(path, { strokeDasharray: length, strokeDashoffset: length });

      gsap.timeline({
        onComplete: dismiss,
      })
        .to(path, {
          strokeDashoffset: 0,
          duration: 0.5,
          ease: "power2.inOut",
        })
        .to(overlayRef.current, {
          opacity: 0,
          duration: 0.3,
          ease: "power1.out",
          onComplete: dismiss,
        });
    } catch {
      dismiss();
    }

    return () => {
      clearTimeout(safetyTimer);
      dismiss();
    };
  }, []);

  if (skip) return null;

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[90] flex items-center justify-center bg-ink"
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 400 80"
        className="w-64 sm:w-80"
        fill="none"
      >
        <path
          ref={pathRef}
          d="M0 40 L60 40 L80 10 L110 70 L140 20 L170 60 L200 40 L400 40"
          stroke="#C9633B"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}
