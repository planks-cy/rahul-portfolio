"use client";

import { useEffect, useRef } from "react";
import { gsap, registerGsap, ScrollTrigger } from "@/lib/gsap";

interface SignalDividerProps {
  label?: string;
}

/**
 * The site's recurring signature: an oscilloscope-style waveform that
 * redraws itself as it scrolls into view, used as a section divider in
 * place of decorative numbering. Encodes "signal" — both the electrical
 * engineering reference and the idea of a story being transmitted clearly.
 */
export function SignalDivider({ label }: SignalDividerProps) {
  const pathRef = useRef<SVGPathElement | null>(null);
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    registerGsap();
    const path = pathRef.current;
    const wrapper = wrapperRef.current;
    if (!path || !wrapper) return;

    const length = path.getTotalLength();
    gsap.set(path, { strokeDasharray: length, strokeDashoffset: length });

    const trigger = ScrollTrigger.create({
      trigger: wrapper,
      start: "top 85%",
      once: true,
      onEnter: () => {
        gsap.to(path, {
          strokeDashoffset: 0,
          duration: 1.2,
          ease: "power2.inOut",
        });
      },
    });

    return () => trigger.kill();
  }, []);

  return (
    <div
      ref={wrapperRef}
      className="flex items-center gap-4 py-2"
      aria-hidden="true"
    >
      {label && <span className="eyebrow whitespace-nowrap">{label}</span>}
      <svg
        viewBox="0 0 600 24"
        className="h-6 w-full"
        preserveAspectRatio="none"
        fill="none"
      >
        <path
          ref={pathRef}
          d="M0 12 L220 12 L235 3 L255 21 L275 12 L600 12"
          stroke="#C9633B"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}
