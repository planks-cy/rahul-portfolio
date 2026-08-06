"use client";

import { useState } from "react";
import { workflowSteps } from "@/data/workflow";
import { RevealText } from "@/components/ui/RevealText";
import { SignalDivider } from "@/components/ui/SignalDivider";
import { motion } from "framer-motion";
import clsx from "clsx";

export function Workflow() {
  const [active, setActive] = useState(0);

  return (
    <section id="workflow" className="px-6 py-24 md:px-10 md:py-32">
      <SignalDivider label="Process" />

      <RevealText as="h2" className="mt-12 max-w-2xl font-display text-3xl italic text-paper md:text-4xl">
        Six steps, in order, every time.
      </RevealText>

      <div className="mt-14 grid gap-10 md:grid-cols-[1fr_1.4fr]">
        <div className="flex flex-col gap-1">
          {workflowSteps.map((step, index) => (
            <button
              key={step.id}
              type="button"
              onClick={() => setActive(index)}
              data-cursor-hover
              className={clsx(
                "flex items-center gap-4 rounded-md px-4 py-3 text-left transition-colors",
                active === index ? "bg-white/[0.04]" : "hover:bg-white/[0.02]"
              )}
            >
              <span
                className={clsx(
                  "eyebrow",
                  active === index ? "text-copper" : "text-paper/40"
                )}
              >
                {step.index}
              </span>
              <span
                className={clsx(
                  "font-display text-xl transition-colors",
                  active === index ? "text-paper" : "text-paper/50"
                )}
              >
                {step.title}
              </span>
            </button>
          ))}
        </div>

        <motion.div
          key={active}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col justify-center rounded-lg border border-line bg-white/[0.02] p-8 md:p-10"
        >
          <span className="eyebrow text-copper">{workflowSteps[active].index}</span>
          <h3 className="mt-3 font-display text-3xl italic text-paper">
            {workflowSteps[active].title}
          </h3>
          <p className="mt-4 max-w-md text-paper/70">
            {workflowSteps[active].description}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
