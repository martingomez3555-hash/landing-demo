import { Section } from "@/components/Section";
import { SectionHeading } from "@/components/SectionHeading";

export function Solution() {
  return (
    <Section
      className="bg-surface py-16 sm:py-24"
      labelledBy="solution-heading"
      narrow
    >
      <SectionHeading
        id="solution-heading"
        title="Una landing diseñada para convertir mejor."
      />
      <p className="mt-8 text-base leading-relaxed text-ink-muted sm:text-lg">
        Construyo landing pages claras, rápidas y estratégicas para llevar al
        usuario hacia la acción correcta: mensaje, lead, llamada, agenda o
        venta.
      </p>
      <p className="mt-4 text-base leading-relaxed text-ink-muted sm:text-lg">
        Cada sección está pensada para reducir fricción, generar confianza y
        aumentar conversiones.
      </p>
    </Section>
  );
}
