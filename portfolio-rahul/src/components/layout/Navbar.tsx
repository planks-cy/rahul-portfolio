"use client";

import { useState, useEffect } from "react";
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
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-[70] transition-all duration-500 ${
        scrolled
          ? "bg-ink/85 backdrop-blur-xl border-b border-white/10 py-4 px-6 md:px-10 shadow-2xl"
          : "bg-transparent py-6 px-6 md:px-10"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        {/* Brand / Logo */}
        <a
          href="#top"
          className="group flex items-center gap-3 font-display text-lg tracking-tight text-paper"
          data-cursor-hover
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-copper/40 bg-copper/10 font-bold text-copper text-xs transition-colors group-hover:bg-copper group-hover:text-ink">
            RS
          </span>
          <span className="font-semibold">Rahul Kumar Sinha</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="eyebrow relative text-paper/70 transition-colors hover:text-copper py-1 after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-copper after:transition-all after:duration-300 hover:after:w-full"
              data-cursor-hover
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="eyebrow rounded-full border border-copper/60 bg-copper/10 px-4 py-2 text-copper transition-all hover:bg-copper hover:text-ink shadow-sm"
          >
            Let&rsquo;s Talk →
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="eyebrow flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.05] px-3 py-2 text-paper md:hidden"
          aria-expanded={open}
          aria-label="Toggle navigation menu"
          data-cursor-hover
        >
          {open ? "Close ✕" : "Menu ☰"}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, y: -12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.98 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="mt-4 flex flex-col gap-5 rounded-xl border border-white/10 bg-ink/95 p-6 backdrop-blur-2xl shadow-2xl md:hidden"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="font-display text-xl text-paper hover:text-copper transition-colors"
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

