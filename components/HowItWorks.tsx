import { FadeIn } from "@/components/FadeIn";
import { Section } from "@/components/Section";
import { SectionHeading } from "@/components/SectionHeading";

const steps = [
  {
    title: "Diagnóstico estratégico",
    body: "Analizamos tu oferta, posicionamiento y proceso comercial actual para detectar qué está frenando el crecimiento.",
  },
  {
    title: "Reestructuración",
    body: "Definimos una propuesta más clara, un mejor recorrido comercial y una estrategia de comunicación alineada al tipo de cliente que quieres atraer.",
  },
  {
    title: "Escalamiento",
    body: "Implementas un sistema comercial más sólido, estable y preparado para crecer con mayor claridad.",
  },
] as const;

export function HowItWorks() {
  return (
    <Section
      className="border-t border-slate-200/80 bg-slate-50 py-20 sm:py-28"
      labelledBy="how-heading"
    >
      <FadeIn>
        <SectionHeading
          id="how-heading"
          title="Cómo funciona"
          subtitle="Un proceso simple enfocado en claridad, posicionamiento y crecimiento."
        />
        <ol className="mt-14 grid gap-12 lg:grid-cols-3 lg:gap-10">
          {steps.map((step, index) => (
            <li key={step.title}>
              <article>
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-slate-400">
                  Paso {index + 1}
                </p>
                <h3 className="mt-4 text-lg font-semibold text-slate-900">
                  {step.title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-slate-600">
                  {step.body}
                </p>
              </article>
            </li>
          ))}
        </ol>
      </FadeIn>
    </Section>
  );
}
