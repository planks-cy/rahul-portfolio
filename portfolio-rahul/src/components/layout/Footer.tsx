"use client";

import { useMagnetic } from "@/hooks/useMagnetic";

const SOCIAL_LINKS = [
  { label: "Instagram", href: "#" },
  { label: "Behance", href: "#" },
  { label: "LinkedIn", href: "#" },
  { label: "YouTube", href: "#" },
];

export function Footer() {
  const backToTopRef = useMagnetic<HTMLAnchorElement>(0.4);

  return (
    <footer className="hairline px-6 py-10 md:px-10">
      <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="eyebrow mb-2">Rahul Kumar Sinha</p>
          <p className="max-w-sm text-sm text-paper/60">
            Video editing, graphic design, and UI/UX design — built with the
            same attention to detail as a circuit diagram.
          </p>
        </div>

        <div className="flex flex-wrap gap-6">
          {SOCIAL_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="eyebrow text-paper/70 transition-colors hover:text-copper"
              data-cursor-hover
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          ref={backToTopRef}
          href="#top"
          className="eyebrow flex h-16 w-16 items-center justify-center rounded-full border border-line text-paper/80 transition-colors hover:border-copper hover:text-copper"
          data-cursor-hover
        >
          Top
        </a>
      </div>

      <p className="mt-10 text-xs text-paper/40">
        © {new Date().getFullYear()} Rahul Kumar Sinha. All rights reserved.
      </p>
    </footer>
  );
}
