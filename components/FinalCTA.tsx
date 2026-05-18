import Link from "next/link";

export function FinalCTA() {
  return (
    <section
      id="cta-final"
      className="bg-slate-900 py-16 sm:py-20"
      aria-labelledby="cta-final-heading"
    >
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <h2
          id="cta-final-heading"
          className="text-2xl font-bold tracking-tight text-white sm:text-3xl"
        >
          ¿Listo para dejar de competir solo en precio?
        </h2>
        <p className="mt-4 text-base text-slate-300 sm:text-lg">
          Reserva una llamada estratégica. Veremos si tiene sentido trabajar
          juntos y, en cualquier caso, te llevas claridad sobre el siguiente
          movimiento.
        </p>
        <div className="mt-8">
          <Link
            href="#"
            className="inline-flex min-h-[52px] min-w-[min(100%,280px)] items-center justify-center rounded-xl bg-white px-8 py-4 text-lg font-bold text-slate-900 shadow-lg transition hover:bg-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            aria-label="Agendar llamada estratégica — abre el calendario o formulario de contacto"
          >
            Agendar Llamada Estratégica
          </Link>
          <p className="mt-4 text-sm text-slate-400">
            Sustituye el enlace <code className="text-slate-300">#</code> por tu
            Calendly, HubSpot o página de reserva.
          </p>
        </div>
      </div>
    </section>
  );
}
