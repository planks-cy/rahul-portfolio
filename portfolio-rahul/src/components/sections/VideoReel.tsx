"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
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

      <div className="relative mt-10 aspect-video w-full overflow-hidden rounded-lg bg-white/[0.03] border border-white/10 group">
        {playing ? (
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
            className="group relative flex h-full w-full items-center justify-center overflow-hidden"
            aria-label="Play showreel"
          >
            <motion.div
              initial={{ clipPath: "inset(100% 0% 0% 0%)" }}
              whileInView={{ clipPath: "inset(0% 0% 0% 0%)" }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
              className="w-full h-full"
            >
              <Image
                src="/images/projects/dazi 07.jpg"
                alt="Rahul Kumar Sinha Showreel Thumbnail"
                width={1280}
                height={720}
                quality={80}
                className="w-full h-auto block opacity-95"
              />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
            <span className="relative z-10 flex h-20 w-20 items-center justify-center rounded-full border border-paper/40 bg-ink/50 backdrop-blur-md text-paper transition-all duration-300 group-hover:scale-110 group-hover:border-copper group-hover:text-copper shadow-xl">
              <svg width="22" height="22" viewBox="0 0 22 22" fill="currentColor">
                <path d="M4 2 L20 11 L4 20 Z" />
              </svg>
            </span>
            <span className="eyebrow absolute bottom-6 left-6 z-10 text-paper/90 bg-ink/70 px-3 py-1 rounded backdrop-blur-sm border border-white/10">
              Play Reel — 01:04
            </span>
          </button>
        )}
      </div>
    </section>
  );
}
