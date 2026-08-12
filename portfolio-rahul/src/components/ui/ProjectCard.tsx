"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
  index: number;
  onSelect?: (project: Project) => void;
}

export function ProjectCard({ project, index, onSelect }: ProjectCardProps) {
  const externalLink =
    project.behanceUrl || project.figmaUrl || project.youtubeUrl;

  const isWide = index % 3 === 0;

  const handleClick = (e: React.MouseEvent) => {
    if (!externalLink && onSelect) {
      e.preventDefault();
      onSelect(project);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40, rotateX: 4, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.8, delay: (index % 2) * 0.1, ease: [0.16, 1, 0.3, 1] }}
      style={{ perspective: 1000 }}
      className={`group relative block cursor-pointer overflow-hidden rounded-xl bg-white/[0.02] border border-white/10 hover:border-copper/50 transition-all duration-500 shadow-xl ${
        isWide ? "md:col-span-2" : "md:col-span-1"
      }`}
      onClick={handleClick}
    >
      <div className="relative w-full overflow-hidden bg-ink">
        <motion.div
          initial={{ clipPath: "inset(100% 0% 0% 0%)" }}
          whileInView={{ clipPath: "inset(0% 0% 0% 0%)" }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 1.1, delay: 0.15 + (index % 2) * 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full"
        >
          <img
            src={project.coverImage}
            alt={project.title}
            className="w-full h-auto block"
          />
        </motion.div>

        <div className="absolute inset-0 flex items-end justify-between bg-gradient-to-t from-ink/90 via-ink/20 to-transparent p-6 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
          <span className="eyebrow translate-y-3 text-paper transition-all duration-500 group-hover:translate-y-0 bg-ink/80 px-3.5 py-1.5 rounded-full border border-white/10 shadow-lg">
            {externalLink ? "View External Project →" : "Expand Full Image 🔍"}
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
    </motion.div>
  );
}
