const testimonials = [
  {
    quote:
      "Pasamos de propuestas eternas a cerrar 3 deals de 18k€ en 6 semanas con el mismo equipo.",
    name: "Laura Méndez",
    role: "CEO, consultora de ops",
    metric: "+54% en tasa de cierre",
  },
  {
    quote:
      "Por fin tenemos un script de descubrimiento que no suena robótico y califica a los malos encajes.",
    name: "Diego R.",
    role: "Fundador, agencia performance",
    metric: "–40% tiempo en reuniones inútiles",
  },
  {
    quote:
      "Renovamos el paquete enterprise con dos logos que llevábamos persiguiendo un año.",
    name: "Ana V.",
    role: "Head of Sales, SaaS B2B",
    metric: "2 contratos de más de 100k€ en Q1",
  },
] as const;

export function SocialProof() {
  return (
    <section
      className="border-b border-slate-200/80 bg-slate-50 py-14 sm:py-16"
      aria-labelledby="social-proof-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2
          id="social-proof-heading"
          className="text-center text-2xl font-bold text-slate-900 sm:text-3xl"
        >
          Resultados medibles, no teoría
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-slate-600">
          Fundadores y equipos comerciales que venden servicios caros y no
          pueden permitirse perder tiempo.
        </p>
        <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <li key={t.name}>
              <article className="flex h-full flex-col rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                <blockquote className="flex-1 text-slate-700">
                  <p className="text-sm leading-relaxed sm:text-base">
                    “{t.quote}”
                  </p>
                </blockquote>
                <footer className="mt-6 border-t border-slate-100 pt-4">
                  <p className="font-semibold text-slate-900">{t.name}</p>
                  <p className="text-sm text-slate-500">{t.role}</p>
                  <p className="mt-2 inline-flex rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-800">
                    {t.metric}
                  </p>
                </footer>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
