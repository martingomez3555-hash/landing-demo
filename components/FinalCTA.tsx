import { FadeIn } from "@/components/FadeIn";
import { PrimaryCTA } from "@/components/PrimaryCTA";

export function FinalCTA() {
  return (
    <section
      id="cta-final"
      className="scroll-mt-20 bg-slate-900 py-20 sm:py-28"
      aria-labelledby="cta-final-heading"
    >
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <FadeIn>
          <h2
            id="cta-final-heading"
            className="text-2xl font-semibold leading-snug tracking-tight text-white sm:text-3xl"
          >
            El crecimiento sostenible no viene de trabajar más.
            <span className="mt-3 block font-normal text-slate-300">
              Viene de construir un negocio más claro, sólido y mejor posicionado.
            </span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-slate-400 sm:text-lg">
            Agenda una llamada estratégica y revisemos qué está frenando el
            siguiente nivel de crecimiento de tu negocio.
          </p>
          <div className="mt-10 flex justify-center">
            <PrimaryCTA
              className="min-w-[min(100%,300px)] px-8"
              ariaLabel="Agendar llamada estratégica — sección final"
            />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
