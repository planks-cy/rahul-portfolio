import { testimonials } from "@/data/testimonials";
import { RevealText } from "@/components/ui/RevealText";
import { SignalDivider } from "@/components/ui/SignalDivider";

export function Testimonials() {
  return (
    <section className="px-6 py-24 md:px-10 md:py-32">
      <SignalDivider label="Testimonials" />

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <RevealText
            key={testimonial.id}
            as="div"
            delay={index * 0.08}
            className="flex flex-col justify-between rounded-lg border border-line bg-white/[0.02] p-7"
          >
            <p className="font-display text-lg italic text-paper/90">
              &ldquo;{testimonial.quote}&rdquo;
            </p>
            <div className="mt-6">
              <p className="text-sm text-paper">{testimonial.name}</p>
              <p className="eyebrow mt-1 text-paper/40">{testimonial.role}</p>
            </div>
          </RevealText>
        ))}
      </div>
    </section>
  );
}
