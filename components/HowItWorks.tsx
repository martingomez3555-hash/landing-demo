const steps = [
  {
    title: "Agenda",
    body: "Reservas un hueco. Te llega un cuestionario breve para no perder el tiempo en la llamada.",
  },
  {
    title: "Diagnóstico",
    body: "Revisamos oferta, ICP, conversación actual y fugas del embudo. Sales con hipótesis claras.",
  },
  {
    title: "Plan",
    body: "Si encajamos, te propongo un plan de 90 días con hitos y responsabilidades. Si no, te digo qué haría yo en tu lugar.",
  },
] as const;

export function HowItWorks() {
  return (
    <section
      className="border-y border-slate-200/80 bg-slate-50 py-14 sm:py-16"
      aria-labelledby="how-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2
          id="how-heading"
          className="text-center text-2xl font-bold text-slate-900 sm:text-3xl"
        >
          Cómo funciona
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-slate-600">
          Tres pasos. Sin humo. La primera conversación ya aporta dirección.
        </p>
        <ol className="mt-10 grid gap-6 sm:grid-cols-3">
          {steps.map((step, index) => (
            <li key={step.title}>
              <article className="relative h-full rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                <span
                  className="absolute -left-1 -top-1 flex h-9 w-9 items-center justify-center rounded-full bg-cta text-sm font-bold text-white"
                  aria-hidden
                >
                  {index + 1}
                </span>
                <h3 className="mt-4 text-lg font-semibold text-slate-900">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600 sm:text-base">
                  {step.body}
                </p>
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
