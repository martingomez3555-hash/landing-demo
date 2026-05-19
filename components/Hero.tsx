import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <header className="border-b border-slate-200/80 bg-white">
      <div className="mx-auto max-w-6xl px-4 pb-12 pt-8 sm:px-6 sm:pb-16 sm:pt-10 lg:grid lg:grid-cols-2 lg:items-center lg:gap-12 lg:pb-20 lg:pt-14">
        <div className="max-w-xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-cta">
            Coach B2B · High-ticket
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Escala ventas high-ticket con claridad
          </h1>
          <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
            Te ayudo a estructurar tu oferta, tu conversación de ventas y tu
            pipeline para cerrar contratos de alto valor sin depender del azar.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href="#cta-final"
              className="inline-flex min-h-[48px] items-center justify-center rounded-lg bg-cta px-6 py-3 text-center text-base font-semibold text-white shadow-sm transition-colors hover:bg-cta-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cta"
              aria-label="Agendar llamada estratégica gratuita desde el hero"
            >
              Agendar llamada estratégica
            </Link>
            <p className="text-sm text-slate-500 sm:max-w-[14rem]">
              Sin compromiso. 30 minutos de diagnóstico real sobre tu venta.
            </p>
          </div>
        </div>
        <figure className="relative mt-10 lg:mt-0">
          <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-lg ring-1 ring-slate-900/5">
            <Image
              src="/hero-coach.avif"
              alt="Coach en sesión de estrategia comercial — sustituye por tu foto o vídeo"
              width={640}
              height={480}
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="h-full w-full object-cover"
            />
          </div>
          <figcaption className="mt-2 text-center text-xs text-slate-500 lg:text-left">
            Sustituye este placeholder por tu imagen o embed de video.
          </figcaption>
        </figure>
      </div>
    </header>
  );
}
