"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

let registered = false;

/**
 * Registers GSAP plugins exactly once on the client.
 * Import and call this at the top of any component that uses ScrollTrigger.
 */
export function registerGsap() {
  if (typeof window === "undefined" || registered) return;
  gsap.registerPlugin(ScrollTrigger);
  registered = true;
}

export { gsap, ScrollTrigger };
