"use client";

import { useMagnetic } from "@/hooks/useMagnetic";

const QUICK_LINKS = [
  { label: "About", href: "#about" },
  { label: "Selected Work", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Workflow", href: "#workflow" },
  { label: "Contact", href: "#contact" },
];

const SOCIAL_LINKS = [
  { label: "Instagram", href: "https://instagram.com" },
  { label: "Behance", href: "https://behance.net" },
  { label: "LinkedIn", href: "https://linkedin.com" },
  { label: "YouTube", href: "https://youtube.com" },
];

export function Footer() {
  const backToTopRef = useMagnetic<HTMLAnchorElement>(0.4);

  return (
    <footer className="hairline relative overflow-hidden bg-ink/90 px-6 pt-20 pb-10 md:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 pb-16 border-b border-white/10 md:grid-cols-4">
          {/* Col 1: Brand */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-copper/50 bg-copper/10 font-bold text-copper text-xs">
                RS
              </span>
              <p className="font-display text-xl text-paper">Rahul Kumar Sinha</p>
            </div>
            <p className="max-w-md text-sm text-paper/60 leading-relaxed">
              Electrical &amp; Electronics Engineering student specializing in video editing,
              graphic design, and UI/UX design. Creating visual experiences driven by logic,
              rhythm, and precise execution.
            </p>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <p className="eyebrow mb-4 text-paper/40">Navigation</p>
            <ul className="space-y-2.5">
              {QUICK_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-paper/70 transition-colors hover:text-copper"
                    data-cursor-hover
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Socials & Back to Top */}
          <div className="flex flex-col justify-between">
            <div>
              <p className="eyebrow mb-4 text-paper/40">Connect</p>
              <ul className="space-y-2.5">
                {SOCIAL_LINKS.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-paper/70 transition-colors hover:text-copper"
                      data-cursor-hover
                    >
                      {link.label} ↗
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-xs text-paper/40">
            © {new Date().getFullYear()} Rahul Kumar Sinha. All rights reserved. Crafted with Next.js &amp; Tailwind CSS.
          </p>

          <a
            ref={backToTopRef}
            href="#top"
            className="group flex items-center gap-2 text-xs eyebrow text-paper/60 hover:text-copper transition-colors"
            data-cursor-hover
          >
            <span>Back to Top</span>
            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 group-hover:border-copper group-hover:bg-copper/10 transition-colors">
              ↑
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}

