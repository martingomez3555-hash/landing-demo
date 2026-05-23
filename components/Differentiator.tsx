import { Section } from "@/components/Section";

const pillars = [
  "estructura estratégica",
  "claridad",
  "psicología de conversión",
  "seguimiento preparado para transformar tráfico en oportunidades reales",
] as const;

export function Differentiator() {
  return (
    <Section
      className="bg-surface py-16 sm:py-24"
      labelledBy="diff-heading"
      narrow
    >
      <h2
        id="diff-heading"
        className="text-2xl font-semibold leading-snug tracking-tight text-ink sm:text-[1.75rem] lg:text-3xl"
      >
        No diseño páginas “bonitas”.
        <span className="mt-2 block text-accent-sky">
          Diseño páginas enfocadas en conversión.
        </span>
      </h2>
      <p className="mt-8 text-base leading-relaxed text-ink-muted sm:text-lg">
        La mayoría de las páginas solo se ven bien. Mi enfoque combina:
      </p>
      <ul className="mt-8 space-y-4">
        {pillars.map((item) => (
          <li
            key={item}
            className="flex gap-3 text-base leading-relaxed text-ink-muted"
          >
            <span className="shrink-0 font-medium text-accent-gold">—</span>
            {item}
          </li>
        ))}
      </ul>
    </Section>
  );
}
