"use client";

import { useState } from "react";
import { projects } from "@/data/projects";
import { ProjectCategory } from "@/types";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { RevealText } from "@/components/ui/RevealText";
import { SignalDivider } from "@/components/ui/SignalDivider";
import clsx from "clsx";

const CATEGORIES: ("All" | ProjectCategory)[] = [
  "All",
  "Video Editing",
  "Graphic Design",
  "UI/UX Design",
];

export function Projects() {
  const [active, setActive] = useState<"All" | ProjectCategory>("All");

  const filtered =
    active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="projects" className="px-6 py-24 md:px-10 md:py-32">
      <SignalDivider label="Featured Work" />

      <div className="mt-12 flex flex-col justify-between gap-8 md:flex-row md:items-end">
        <RevealText as="h2" className="font-display text-3xl italic text-paper md:text-4xl">
          Selected projects across three disciplines.
        </RevealText>

        <RevealText delay={0.1} className="flex flex-wrap gap-2">
          {CATEGORIES.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActive(category)}
              data-cursor-hover
              className={clsx(
                "eyebrow rounded-full border px-4 py-2 transition-colors",
                active === category
                  ? "border-copper bg-copper text-ink"
                  : "border-line text-paper/60 hover:text-paper"
              )}
            >
              {category}
            </button>
          ))}
        </RevealText>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {filtered.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}
