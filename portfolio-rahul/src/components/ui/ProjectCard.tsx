"use client";

import { motion } from "framer-motion";
import { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const externalLink =
    project.behanceUrl || project.figmaUrl || project.youtubeUrl || "#";

  // Alternate span sizes so the grid reads as an editorial layout rather
  // than a uniform tile grid.
  const isWide = index % 3 === 0;

  return (
    <motion.a
      href={externalLink}
      target={externalLink !== "#" ? "_blank" : undefined}
      rel={externalLink !== "#" ? "noopener noreferrer" : undefined}
      data-cursor-hover
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`group relative block overflow-hidden rounded-lg bg-white/[0.02] ${
        isWide ? "md:col-span-2" : "md:col-span-1"
      }`}
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        {/* Replace this placeholder block with an <Image> pointing at
            project.coverImage once you add your own project stills. */}
        <div
          className="h-full w-full scale-105 bg-gradient-to-br from-beige/20 via-ink to-copper/10 transition-transform duration-700 ease-signal group-hover:scale-100"
          role="img"
          aria-label={`${project.title} cover placeholder`}
        />
        <div className="absolute inset-0 flex items-end bg-ink/0 p-6 transition-colors duration-500 group-hover:bg-ink/40">
          <span className="eyebrow translate-y-3 text-paper opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
            View Project →
          </span>
        </div>
      </div>

      <div className="flex flex-col gap-2 p-5">
        <div className="flex items-center justify-between">
          <span className="eyebrow text-copper">{project.category}</span>
          <span className="eyebrow text-paper/40">{project.year}</span>
        </div>
        <h3 className="font-display text-xl text-paper">{project.title}</h3>
        <p className="text-sm text-paper/60">{project.description}</p>
        <div className="mt-2 flex flex-wrap gap-2">
          {project.tools.map((tool) => (
            <span
              key={tool}
              className="eyebrow rounded-full border border-line px-2.5 py-1 text-[0.6rem] text-paper/50"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
    </motion.a>
  );
}
