import Image from "next/image";
import { PrimaryCTA, SecondaryCTA } from "@/components/PrimaryCTA";

export function Hero() {
  return (
    <header className="relative overflow-hidden border-b border-white/5 bg-surface">
      <div
        className="pointer-events-none absolute -right-32 top-1/4 h-[420px] w-[420px] rounded-full bg-accent-sky/10 blur-3xl lg:right-0"
        aria-hidden
      />
      <div className="relative mx-auto max-w-6xl px-4 pb-16 pt-8 sm:px-6 sm:pb-20 sm:pt-12 lg:grid lg:grid-cols-2 lg:items-center lg:gap-12 lg:pb-24 lg:pt-16">
        <div className="max-w-xl">
          <p className="inline-flex rounded-full border border-accent-gold/25 bg-accent-gold/5 px-3 py-1 text-xs font-medium tracking-wide text-accent-gold">
            Landing pages enfocadas en conversión
          </p>
          <h1 className="mt-6 text-[1.75rem] font-semibold leading-[1.12] tracking-tight text-ink sm:text-4xl lg:text-[2.5rem] lg:leading-[1.1]">
            Convierte más visitantes en clientes con una landing pensada para
            vender.
          </h1>
          <p className="mt-6 text-base leading-relaxed text-ink-muted sm:text-lg">
            Diseño landing pages estratégicas para coaches, consultores, clínicas
            y negocios de servicios que quieren más leads, llamadas o ventas sin
            complicarse con funnels complejos.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <PrimaryCTA ariaLabel="Solicitar mi landing — hero" />
            <SecondaryCTA href="#como-funciona">Ver cómo funciona</SecondaryCTA>
          </div>
          <p className="mt-8 text-sm leading-relaxed text-ink-muted">
            Estructuras claras · Conversión estratégica · Seguimiento preparado
            para crecer
          </p>
        </div>

        <figure className="relative mt-12 flex justify-center lg:mt-0 lg:justify-end">
          <div className="relative w-full max-w-[340px] sm:max-w-[380px] lg:max-w-[420px]">
            <div
              className="absolute bottom-8 left-1/2 h-[70%] w-[85%] -translate-x-1/2 rounded-full bg-accent-sky/20 blur-3xl shadow-glow"
              aria-hidden
            />
            <div
              className="absolute bottom-0 left-1/2 h-24 w-[75%] -translate-x-1/2 rounded-full bg-black/40 blur-2xl"
              aria-hidden
            />
            <Image
              src="/martin_hero.webp"
              alt="Especialista en landing pages estratégicas y conversión"
              width={800}
              height={1000}
              priority
              sizes="(max-width: 1024px) 85vw, 420px"
              className="relative z-10 mx-auto h-auto w-full max-h-[min(72vh,520px)] object-contain object-bottom drop-shadow-[0_24px_48px_rgba(0,0,0,0.45)]"
            />
          </div>
        </figure>
      </div>
    </header>
  );
}
