"use client";

import { FormEvent, useState } from "react";
import { RevealText } from "@/components/ui/RevealText";
import { SignalDivider } from "@/components/ui/SignalDivider";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { useMagnetic } from "@/hooks/useMagnetic";

function SubmitButton() {
  const ref = useMagnetic<HTMLButtonElement>(0.3);
  return (
    <button
      ref={ref}
      type="submit"
      data-cursor-hover
      className="eyebrow mt-2 inline-flex w-fit items-center gap-3 rounded-full bg-copper px-7 py-4 text-ink transition-colors duration-300 hover:bg-gold"
    >
      Send Message
    </button>
  );
}

export function Contact() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Wire this up to your form endpoint of choice (Formspree, Resend,
    // an API route, etc). Left as a stub so the UI is ready to connect.
    setStatus("sent");
  }

  return (
    <section id="contact" className="px-6 py-24 md:px-10 md:py-32">
      <SignalDivider label="Contact" />

      <div className="mt-12 grid gap-16 md:grid-cols-[1fr_1fr]">
        <RevealText as="div">
          <h2 className="font-display text-4xl italic text-paper md:text-5xl">
            Let&rsquo;s build something worth watching.
          </h2>
          <p className="mt-6 max-w-md text-paper/70">
            Open to freelance edits, design projects, and collaborations —
            reach out directly or send a note through the form.
          </p>
          <MagneticButton
            href="mailto:hello@rahulsinha.com"
            variant="outline"
            className="mt-8"
          >
            hello@rahulsinha.com
          </MagneticButton>
        </RevealText>

        <RevealText delay={0.1}>
          {status === "sent" ? (
            <div className="flex h-full min-h-[280px] flex-col items-center justify-center rounded-lg border border-line bg-white/[0.02] text-center">
              <p className="font-display text-2xl italic text-paper">
                Message sent.
              </p>
              <p className="mt-2 text-sm text-paper/60">
                I&rsquo;ll get back to you shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="eyebrow">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="border-b border-line bg-transparent pb-3 text-paper outline-none transition-colors focus:border-copper"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="eyebrow">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="border-b border-line bg-transparent pb-3 text-paper outline-none transition-colors focus:border-copper"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="eyebrow">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="border-b border-line bg-transparent pb-3 text-paper outline-none transition-colors focus:border-copper"
                />
              </div>
              <SubmitButton />
            </form>
          )}
        </RevealText>
      </div>
    </section>
  );
}
