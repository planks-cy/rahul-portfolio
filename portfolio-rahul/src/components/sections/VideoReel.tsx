"use client";

import { useState } from "react";
import { RevealText } from "@/components/ui/RevealText";
import { SignalDivider } from "@/components/ui/SignalDivider";

export function VideoReel() {
  const [playing, setPlaying] = useState(false);

  return (
    <section className="px-6 py-24 md:px-10 md:py-32">
      <SignalDivider label="Showreel" />

      <RevealText as="h2" className="mt-12 font-display text-3xl italic text-paper md:text-4xl">
        A minute of edited work, back to back.
      </RevealText>

      <RevealText delay={0.1} className="relative mt-10 aspect-video w-full overflow-hidden rounded-lg bg-white/[0.03]">
        {playing ? (
          // Swap this src for your own showreel — YouTube, Vimeo, or a
          // self-hosted /public/videos/reel.mp4 file with a <video> tag.
          <iframe
            className="h-full w-full"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
            title="Rahul Kumar Sinha — Showreel"
            allow="accelerate-encrypted; autoplay; encrypted-media; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <button
            type="button"
            onClick={() => setPlaying(true)}
            data-cursor-hover
            className="group flex h-full w-full items-center justify-center bg-gradient-to-br from-beige/10 via-ink to-copper/10"
            aria-label="Play showreel"
          >
            <span className="flex h-20 w-20 items-center justify-center rounded-full border border-paper/30 text-paper transition-colors duration-300 group-hover:border-copper group-hover:text-copper">
              <svg width="22" height="22" viewBox="0 0 22 22" fill="currentColor">
                <path d="M4 2 L20 11 L4 20 Z" />
              </svg>
            </span>
            <span className="eyebrow absolute bottom-6 left-6">Play Reel — 01:04</span>
          </button>
        )}
      </RevealText>
    </section>
  );
}
