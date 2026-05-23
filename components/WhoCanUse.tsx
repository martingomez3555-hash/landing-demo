import { Section } from "@/components/Section";
import { SectionHeading } from "@/components/SectionHeading";

const audiences = [
  "Coaches",
  "Consultores",
  "Clínicas",
  "Negocios de servicios",
  "Marcas personales",
  "Infoproductores",
  "Negocios locales que quieren convertir mejor",
] as const;

export function WhoCanUse() {
  return (
    <Section
      className="bg-surface-alt py-16 sm:py-24"
      labelledBy="audience-heading"
    >
      <SectionHeading id="audience-heading" title="Ideal para" />
      <ul className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
        {audiences.map((item) => (
          <li
            key={item}
            className="flex items-center rounded-xl border border-white/8 bg-surface px-5 py-5 text-sm font-medium text-ink sm:text-base"
          >
            <span
              className="mr-3 h-1 w-1 shrink-0 rounded-full bg-accent-sky"
              aria-hidden
            />
            {item}
          </li>
        ))}
      </ul>
    </Section>
  );
}
