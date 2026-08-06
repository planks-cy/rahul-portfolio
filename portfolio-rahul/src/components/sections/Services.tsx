import { services } from "@/data/services";
import { RevealText } from "@/components/ui/RevealText";
import { SignalDivider } from "@/components/ui/SignalDivider";

export function Services() {
  return (
    <section id="services" className="px-6 py-24 md:px-10 md:py-32">
      <SignalDivider label="Services" />

      <RevealText as="h2" className="mt-12 max-w-2xl font-display text-3xl italic text-paper md:text-4xl">
        Six disciplines, one point of view.
      </RevealText>

      <div className="mt-12 hairline">
        {services.map((service, index) => (
          <RevealText
            key={service.id}
            as="div"
            delay={index * 0.05}
            className="group grid grid-cols-1 gap-4 border-b border-line py-8 transition-colors md:grid-cols-[auto_1fr_auto] md:items-center md:gap-10"
          >
            <span className="eyebrow text-paper/40">
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3 className="font-display text-2xl text-paper transition-colors group-hover:text-copper md:text-3xl">
              {service.title}
            </h3>
            <p className="max-w-md text-sm text-paper/60">
              {service.description}
            </p>
          </RevealText>
        ))}
      </div>
    </section>
  );
}
