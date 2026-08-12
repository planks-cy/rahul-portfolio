"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { RevealText } from "@/components/ui/RevealText";
import { SignalDivider } from "@/components/ui/SignalDivider";

const SKILLS = [
  "Premiere Pro",
  "DaVinci Resolve",
  "After Effects",
  "Figma",
  "Illustrator",
  "Photoshop",
  "Motion Graphics",
  "Brand Systems",
];

export function About() {
  return (
    <section id="about" className="px-6 py-24 md:px-10 md:py-32">
      <SignalDivider label="About" />

      <div className="mt-12 grid gap-16 md:grid-cols-[1fr_1.2fr] md:gap-12">
        <div className="relative group">
          <div className="relative w-full max-w-sm overflow-hidden rounded-xl border border-white/10 bg-ink shadow-2xl transition-colors duration-500 group-hover:border-copper/40">
            <motion.div
              initial={{ clipPath: "inset(100% 0% 0% 0%)" }}
              whileInView={{ clipPath: "inset(0% 0% 0% 0%)" }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <Image
                src="/images/projects/dazi 02.jpg"
                alt="Rahul Kumar Sinha — Creative Portrait"
                width={800}
                height={1000}
                quality={80}
                className="w-full h-auto block"
              />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent opacity-80" />
            <div className="absolute bottom-4 left-4 right-4 p-4 rounded-lg bg-ink/80 backdrop-blur-md border border-white/10">
              <p className="font-display text-sm font-semibold text-paper">Rahul Kumar Sinha</p>
              <p className="eyebrow text-copper text-[0.7rem]">Visuals &amp; Motion Specialist</p>
            </div>
          </div>
        </div>

        <div>
          <RevealText as="h2" className="font-display text-3xl italic text-paper md:text-4xl">
            An engineer&rsquo;s attention, applied to visual storytelling.
          </RevealText>

          <RevealText delay={0.1} className="mt-6 max-w-xl space-y-4 text-paper/70">
            <p>
              I&rsquo;m an Electrical &amp; Electronics Engineering student
              who spends as much time in Premiere Pro and Figma as in
              circuit labs. That combination shapes how I work — I treat a
              video edit or an interface the way I&rsquo;d treat a system:
              every part has to justify its place.
            </p>
            <p>
              Over the past few years I&rsquo;ve worked across video
              editing, graphic design, and UI/UX design, usually for
              student-led brands, independent artists, and small teams who
              need work that looks considered, not templated.
            </p>
          </RevealText>

          <RevealText delay={0.2} className="mt-10">
            <p className="eyebrow mb-4">Tools &amp; Focus</p>
            <div className="flex flex-wrap gap-2">
              {SKILLS.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-line px-3.5 py-1.5 text-xs text-paper/60"
                >
                  {skill}
                </span>
              ))}
            </div>
          </RevealText>

          <RevealText delay={0.3} className="mt-10 border-l border-copper/50 pl-5">
            <p className="font-display text-lg italic text-paper/90">
              &ldquo;Good design and good engineering start with the same
              question — what is this actually for?&rdquo;
            </p>
          </RevealText>
        </div>
      </div>
    </section>
  );
}
