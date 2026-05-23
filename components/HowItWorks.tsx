import { Section } from "@/components/Section";
import { SectionHeading } from "@/components/SectionHeading";

const steps = [
  {
    title: "Entendemos tu oferta y objetivo",
    body: "Analizamos qué vendes, cómo conviertes y qué está frenando resultados.",
  },
  {
    title: "Definimos la mejor ruta de conversión",
    body: "Estructuramos la landing enfocándonos en claridad, acción y conversión.",
  },
  {
    title: "Diseñamos, construimos y lanzamos",
    body: "Creamos una landing moderna, responsive y lista para captar mejores leads.",
  },
] as const;

export function HowItWorks() {
  return (
    <Section
      id="como-funciona"
      className="scroll-mt-24 bg-surface py-16 sm:py-24"
      labelledBy="how-heading"
    >
      <SectionHeading
        id="how-heading"
        title="Cómo funciona"
        subtitle="Un proceso simple enfocado en claridad y conversión."
      />
      <ol className="mt-12 grid gap-8 lg:grid-cols-3 lg:gap-10">
        {steps.map((step, index) => (
          <li key={step.title}>
            <article className="h-full rounded-xl border border-white/8 bg-surface-alt p-6 sm:p-8">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent-gold">
                {index + 1}
              </p>
              <h3 className="mt-4 text-lg font-semibold text-ink">
                {step.title}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-ink-muted">
                {step.body}
              </p>
            </article>
          </li>
        ))}
      </ol>
    </Section>
  );
}
