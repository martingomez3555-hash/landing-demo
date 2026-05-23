import { Section } from "@/components/Section";
import { SectionHeading } from "@/components/SectionHeading";

const painPoints = [
  "Visitas que no se convierten en mensajes.",
  "Landing pages bonitas pero confusas.",
  "CTA débiles o mal ubicados.",
  "Leads que se enfrían antes de avanzar.",
  "Tráfico desperdiciado.",
  "Falta de estructura para convertir mejor.",
] as const;

export function Problem() {
  return (
    <Section
      className="bg-surface-alt py-16 sm:py-24"
      labelledBy="problem-heading"
      narrow
    >
      <SectionHeading
        id="problem-heading"
        title="No necesitas más tráfico si tu página no guía a la acción correcta."
      />
      <p className="mt-6 text-base leading-relaxed text-ink-muted sm:text-lg">
        Muchos negocios ya reciben visitas, mensajes o leads… pero pierden
        oportunidades porque su página no genera claridad, confianza ni
        seguimiento.
      </p>
      <ul className="mt-10 space-y-4">
        {painPoints.map((item) => (
          <li
            key={item}
            className="flex gap-3 text-base leading-relaxed text-ink-muted"
          >
            <span
              className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-sky/80"
              aria-hidden
            />
            {item}
          </li>
        ))}
      </ul>
    </Section>
  );
}
