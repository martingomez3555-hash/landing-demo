import { ContactForm } from "@/components/ContactForm";
import { PrimaryCTA } from "@/components/PrimaryCTA";

export function FinalCTA() {
  return (
    <section
      id="contacto"
      className="scroll-mt-24 border-t border-white/5 bg-surface-alt py-16 sm:py-24"
      aria-labelledby="cta-final-heading"
    >
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <h2
          id="cta-final-heading"
          className="text-2xl font-semibold leading-snug tracking-tight text-ink sm:text-3xl"
        >
          Haz que tu tráfico deje de perderse y empiece a convertir.
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-ink-muted sm:text-lg">
          Te ayudo a construir una landing estratégica enfocada en resultados
          reales y crecimiento sostenible.
        </p>
        <div className="mt-8 flex justify-center">
          <PrimaryCTA
            className="min-w-[min(100%,300px)] px-8"
            ariaLabel="Solicitar mi landing — sección final"
          />
        </div>
        <p className="mt-6 text-sm text-ink-muted/90">
          Sin procesos complicados. Sin funnels gigantes. Solo una estructura
          clara enfocada en convertir mejor.
        </p>
        <ContactForm />
      </div>
    </section>
  );
}
