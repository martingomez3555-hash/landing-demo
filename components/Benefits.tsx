import { Section } from "@/components/Section";
import { SectionHeading } from "@/components/SectionHeading";

const benefits = [
  {
    title: "Claridad de oferta",
    body: "Tu visitante entiende rápidamente qué haces, para quién es y qué resultado puede obtener.",
  },
  {
    title: "Ruta de conversión estratégica",
    body: "Cada sección guía al usuario hacia el siguiente paso sin distracciones innecesarias.",
  },
  {
    title: "Más confianza y profesionalismo",
    body: "Diseño limpio y moderno alineado con tu marca y enfocado en credibilidad.",
  },
  {
    title: "Preparada para crecer",
    body: "Tu landing puede conectarse fácilmente con WhatsApp, formularios, agenda o automatizaciones simples.",
  },
] as const;

export function Benefits() {
  return (
    <Section
      className="bg-surface-alt py-16 sm:py-24"
      labelledBy="benefits-heading"
    >
      <SectionHeading id="benefits-heading" title="Beneficios" />
      <ul className="mt-12 grid gap-6 sm:grid-cols-2">
        {benefits.map((item) => (
          <li key={item.title}>
            <article className="h-full rounded-xl border border-white/8 bg-surface p-6 sm:p-8">
              <div
                className="mb-4 h-px w-8 bg-accent-gold/60"
                aria-hidden
              />
              <h3 className="text-lg font-semibold text-ink">{item.title}</h3>
              <p className="mt-2 text-base leading-relaxed text-ink-muted">
                {item.body}
              </p>
            </article>
          </li>
        ))}
      </ul>
    </Section>
  );
}
