import Image from "next/image";
import { Section } from "@/components/Section";
import { SectionHeading } from "@/components/SectionHeading";

export function Portfolio() {
  return (
    <Section
      id="portfolio"
      className="scroll-mt-24 bg-surface-alt py-16 sm:py-24"
      labelledBy="portfolio-heading"
    >
      <SectionHeading
        id="portfolio-heading"
        title="Landing enfocada en conversión"
        subtitle="Diseñada para transformar visitas en leads, llamadas y oportunidades reales."
      />

      <div className="mt-14 grid gap-10 lg:grid-cols-2 lg:gap-12">
        <article className="group relative overflow-hidden rounded-2xl border border-white/8 bg-surface p-6 sm:p-8">
          <div
            className="pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-br from-accent-sky/10 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100"
            aria-hidden
          />
          <div className="relative overflow-hidden rounded-xl border border-white/10 bg-surface-alt shadow-glow-sm">
            <div className="relative aspect-[16/10] w-full">
              <Image
                src="/desktop.webp"
                alt="Vista de landing page en escritorio — estructura estratégica de conversión"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-contain object-center p-4 sm:p-6"
              />
            </div>
          </div>
          <p className="relative mt-6 text-sm text-ink-muted">
            Estructura clara, jerarquía visual y CTA visible desde el primer
            scroll.
          </p>
        </article>

        <article className="group relative overflow-hidden rounded-2xl border border-white/8 bg-surface p-6 sm:p-8">
          <div
            className="pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-br from-accent-sky/10 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100"
            aria-hidden
          />
          <div className="relative flex items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-surface-alt py-8 sm:py-10">
            <div className="relative aspect-[4/3] w-full max-w-md">
              <Image
                src="/imac.webp"
                alt="Mockup premium de landing en iMac"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-contain object-center drop-shadow-[0_20px_40px_rgba(0,0,0,0.35)]"
              />
            </div>
          </div>
          <p className="relative mt-6 text-sm text-ink-muted">
            Presentación premium para portfolio y credibilidad de marca.
          </p>
        </article>
      </div>
    </Section>
  );
}
