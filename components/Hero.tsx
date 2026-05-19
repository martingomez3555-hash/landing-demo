import Image from "next/image";
import { FadeIn } from "@/components/FadeIn";
import { PrimaryCTA } from "@/components/PrimaryCTA";

export function Hero() {
  return (
    <header className="border-b border-slate-200/80 bg-white">
      <div className="mx-auto max-w-6xl px-4 pb-16 pt-10 sm:px-6 sm:pb-20 sm:pt-14 lg:grid lg:grid-cols-2 lg:items-center lg:gap-16 lg:pb-24 lg:pt-16">
        <FadeIn>
          <div className="max-w-xl">
            <p className="inline-flex rounded-full border border-slate-200/80 bg-white px-3 py-1 text-xs font-medium tracking-wide text-slate-600">
              Coach B2B · Escalamiento High-Ticket
            </p>
            <h1 className="mt-6 text-[1.75rem] font-semibold leading-[1.12] tracking-tight text-slate-900 sm:text-4xl lg:text-[2.5rem] lg:leading-[1.1]">
              Escala tu negocio high-ticket sin depender de perseguir clientes
              ni improvisar cierres.
            </h1>
            <p className="mt-6 text-base leading-relaxed text-slate-600 sm:text-lg">
              Ayudo a coaches, agencias y expertos B2B a construir una oferta
              premium, un proceso comercial sólido y una estrategia de
              crecimiento diseñada para atraer mejores clientes y cerrar ventas
              con más claridad.
            </p>
            <div className="mt-10">
              <PrimaryCTA ariaLabel="Agendar llamada estratégica desde el hero" />
              <p className="mt-4 text-sm leading-relaxed text-slate-500">
                Sesión privada de diagnóstico y claridad estratégica.
              </p>
            </div>
          </div>
        </FadeIn>
        <FadeIn className="relative mt-12 lg:mt-0">
          <figure>
            <div className="aspect-[4/3] w-full overflow-hidden rounded-xl border border-slate-200/90 bg-slate-100 shadow-sm">
              <Image
                src="/hero-coach.avif"
                alt="Mentoría estratégica y sesión de crecimiento comercial high-ticket"
                width={640}
                height={480}
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="h-full w-full object-cover"
              />
            </div>
          </figure>
        </FadeIn>
      </div>
    </header>
  );
}
