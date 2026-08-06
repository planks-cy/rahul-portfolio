"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Work" },
  { href: "#services", label: "Services" },
  { href: "#workflow", label: "Process" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  function handleLinkClick() {
    setOpen(false);
  }

  return (
    <header className="fixed inset-x-0 top-0 z-[70] px-6 py-5 md:px-10">
      <div className="flex items-center justify-between">
        <a
          href="#top"
          className="font-display text-lg tracking-tight text-paper"
          data-cursor-hover
        >
          Rahul Kumar Sinha
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="eyebrow text-paper/70 transition-colors hover:text-copper"
              data-cursor-hover
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="eyebrow flex items-center gap-2 text-paper md:hidden"
          aria-expanded={open}
          aria-label="Toggle navigation menu"
          data-cursor-hover
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="mt-4 flex flex-col gap-4 rounded-lg border border-line bg-ink/95 p-6 backdrop-blur md:hidden"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleLinkClick}
                className="font-display text-2xl text-paper"
              >
                {link.label}
              </a>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
