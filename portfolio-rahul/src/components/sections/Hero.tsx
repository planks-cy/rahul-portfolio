"use client";

import { motion } from "framer-motion";
import { MagneticButton } from "@/components/ui/MagneticButton";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.3 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen flex-col justify-between overflow-hidden px-6 pt-32 pb-12 md:px-10"
    >
      {/* Ambient background trace */}
      <svg
        viewBox="0 0 1000 400"
        className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.06]"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M0 200 L200 200 L230 60 L280 340 L330 120 L380 260 L420 200 L1000 200"
          stroke="#F7F7F5"
          strokeWidth="1"
          fill="none"
        />
      </svg>

      <div className="flex-1 flex flex-col justify-center">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="relative z-10 max-w-4xl"
        >
          <motion.p variants={item} className="eyebrow text-copper font-medium mb-6">
            Electrical &amp; Electronics Engineering Student — Creative Practice
          </motion.p>

          <motion.h1
            variants={item}
            className="font-display text-5xl italic leading-[1.05] text-paper sm:text-6xl md:text-7xl lg:text-8xl"
          >
            Rahul Kumar
            <br />
            <span className="not-italic text-copper">Sinha</span>
          </motion.h1>

          <motion.div variants={item} className="mt-6 max-w-xl">
            <svg viewBox="0 0 320 20" className="mb-6 h-4 w-40" fill="none">
              <path
                d="M0 10 L120 10 L130 3 L140 17 L150 10 L320 10"
                stroke="#B98A4D"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
            <p className="text-lg text-paper/80 md:text-xl leading-relaxed">
              I create visuals that communicate ideas, solve problems, and
              leave a lasting impression — working across video editing,
              graphic design, and UI/UX design.
            </p>
          </motion.div>

          <motion.div variants={item} className="mt-10 flex flex-wrap gap-4">
            <MagneticButton href="#projects" variant="solid">
              View Work
            </MagneticButton>
            <MagneticButton href="#contact" variant="outline">
              Get in Touch
            </MagneticButton>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="relative z-10 pt-12 flex items-center gap-3 text-paper/50"
      >
        <span className="eyebrow text-paper/60">Scroll</span>
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          className="h-8 w-px bg-paper/40"
        />
      </motion.div>
    </section>
  );
}
