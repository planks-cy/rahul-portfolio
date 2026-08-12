"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/data/projects";
import { Project, ProjectCategory } from "@/types";
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
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filtered =
    active === "All" ? projects : projects.filter((p) => p.category === active);

  const handleNext = () => {
    if (!selectedProject) return;
    const currentIndex = filtered.findIndex((p) => p.id === selectedProject.id);
    const nextIndex = (currentIndex + 1) % filtered.length;
    setSelectedProject(filtered[nextIndex]);
  };

  const handlePrev = () => {
    if (!selectedProject) return;
    const currentIndex = filtered.findIndex((p) => p.id === selectedProject.id);
    const prevIndex = (currentIndex - 1 + filtered.length) % filtered.length;
    setSelectedProject(filtered[prevIndex]);
  };

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
          <ProjectCard
            key={project.id}
            project={project}
            index={index}
            onSelect={(p) => setSelectedProject(p)}
          />
        ))}
      </div>

      {/* Fullscreen Image Lightbox Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 md:p-8 backdrop-blur-xl"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-h-[90vh] max-w-5xl w-full overflow-hidden rounded-2xl border border-white/10 bg-ink p-6 shadow-2xl flex flex-col lg:flex-row gap-6"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-paper hover:bg-copper hover:text-ink transition-colors"
                aria-label="Close modal"
              >
                ✕
              </button>

              {/* Main Image View */}
              <div className="relative aspect-[4/3] lg:aspect-auto lg:w-2/3 min-h-[300px] md:min-h-[450px] w-full overflow-hidden rounded-xl bg-ink/80 border border-white/5">
                <Image
                  src={selectedProject.coverImage}
                  alt={selectedProject.title}
                  fill
                  priority
                  className="object-contain"
                />

                {/* Nav Arrows */}
                <button
                  onClick={handlePrev}
                  className="absolute left-3 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-ink/70 border border-white/10 text-paper hover:bg-copper hover:text-ink transition-colors"
                  aria-label="Previous image"
                >
                  ←
                </button>
                <button
                  onClick={handleNext}
                  className="absolute right-3 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-ink/70 border border-white/10 text-paper hover:bg-copper hover:text-ink transition-colors"
                  aria-label="Next image"
                >
                  →
                </button>
              </div>

              {/* Sidebar Info */}
              <div className="flex flex-col justify-between lg:w-1/3 p-2">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="eyebrow text-copper">{selectedProject.category}</span>
                    <span className="eyebrow text-paper/40">{selectedProject.year}</span>
                  </div>
                  <h3 className="font-display text-2xl text-paper mb-3">
                    {selectedProject.title}
                  </h3>
                  <p className="text-sm text-paper/70 leading-relaxed mb-4">
                    {selectedProject.description}
                  </p>
                  <div className="mb-4">
                    <span className="eyebrow text-paper/40 block mb-1">Role</span>
                    <span className="text-sm text-paper/90 font-medium">{selectedProject.role}</span>
                  </div>
                  <div>
                    <span className="eyebrow text-paper/40 block mb-2">Software &amp; Tools</span>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tools.map((t) => (
                        <span
                          key={t}
                          className="eyebrow rounded-full border border-line px-2.5 py-1 text-[0.65rem] text-paper/60"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="eyebrow text-paper/30">High-Res Project Preview</span>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="eyebrow text-copper hover:underline text-xs"
                  >
                    Close Preview
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

