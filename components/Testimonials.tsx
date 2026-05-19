import { FadeIn } from "@/components/FadeIn";
import { Section } from "@/components/Section";
import { SectionHeading } from "@/components/SectionHeading";

const testimonials = [
  {
    quote:
      "Pasamos de perseguir prospectos a tener conversaciones mucho más serias y claras con clientes realmente interesados.",
    name: "Laura Méndez",
    role: "CEO · Consultora B2B",
    metric: "+54% tasa de cierre",
  },
  {
    quote:
      "Por primera vez sentimos que el negocio tenía dirección comercial real y no solo improvisación.",
    name: "Diego R.",
    role: "Founder · Agencia Growth",
    metric: "–40% tiempo perdido en reuniones improductivas",
  },
  {
    quote:
      "Reestructuramos la oferta y empezamos a cerrar clientes mucho más alineados con el valor que queríamos cobrar.",
    name: "Ana V.",
    role: "Coach Ejecutiva",
    metric: "2 contratos enterprise cerrados en Q1",
  },
] as const;

export function Testimonials() {
  return (
    <Section
      className="bg-white py-20 sm:py-28"
      labelledBy="results-heading"
    >
      <FadeIn>
        <SectionHeading id="results-heading" title="Resultados reales" />
        <ul className="mt-14 grid gap-8 lg:grid-cols-3">
          {testimonials.map((t) => (
            <li key={t.name}>
              <article className="flex h-full flex-col rounded-sm border border-slate-200/90 bg-white p-8 lg:p-9">
                <blockquote className="flex-1">
                  <p className="text-[1.05rem] leading-relaxed text-slate-700">
                    “{t.quote}”
                  </p>
                </blockquote>
                <footer className="mt-8 border-t border-slate-100 pt-6">
                  <p className="font-medium text-slate-900">{t.name}</p>
                  <p className="mt-1 text-sm text-slate-500">{t.role}</p>
                  <p className="mt-4 text-sm font-medium tracking-wide text-slate-800">
                    {t.metric}
                  </p>
                </footer>
              </article>
            </li>
          ))}
        </ul>
      </FadeIn>
    </Section>
  );
}
