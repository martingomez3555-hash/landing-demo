import { FadeIn } from "@/components/FadeIn";
import { Section } from "@/components/Section";
import { SectionHeading } from "@/components/SectionHeading";

const inclusions = [
  "Diagnóstico estratégico",
  "Optimización de oferta",
  "Claridad de posicionamiento",
  "Estructura comercial",
  "Revisión de proceso de ventas",
  "Sesiones estratégicas privadas",
  "Roadmap de crecimiento",
] as const;

export function WhatsIncluded() {
  return (
    <Section
      className="bg-white py-20 sm:py-28"
      labelledBy="included-heading"
      narrow
    >
      <FadeIn>
        <SectionHeading
          id="included-heading"
          title="Qué incluye el acompañamiento"
        />
        <ul className="mt-12 grid gap-x-8 gap-y-4 sm:grid-cols-2">
          {inclusions.map((item) => (
            <li
              key={item}
              className="flex items-baseline gap-3 text-base text-slate-700"
            >
              <span
                className="h-px w-5 shrink-0 bg-slate-900"
                aria-hidden
              />
              {item}
            </li>
          ))}
        </ul>
      </FadeIn>
    </Section>
  );
}
