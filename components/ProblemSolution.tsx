export function ProblemSolution() {
  return (
    <section
      className="bg-white py-14 sm:py-16"
      aria-labelledby="problem-solution-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2
          id="problem-solution-heading"
          className="text-center text-2xl font-bold text-slate-900 sm:text-3xl"
        >
          De improvisación a proceso repetible
        </h2>
        <div className="mt-10 grid gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="rounded-2xl border border-rose-100 bg-rose-50/60 p-6 sm:p-8">
            <h3 className="text-lg font-semibold text-rose-900">
              Dolor actual
            </h3>
            <ul className="mt-4 space-y-3 text-slate-700">
              <li className="flex gap-2">
                <span className="mt-1 text-rose-500" aria-hidden>
                  •
                </span>
                <span>
                  Llamadas que “van bien” pero no cierran, o cierran por
                  precio bajo.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1 text-rose-500" aria-hidden>
                  •
                </span>
                <span>
                  Propuestas a medida que alargan el ciclo y agotan al equipo.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1 text-rose-500" aria-hidden>
                  •
                </span>
                <span>
                  Pipeline inconsistente: meses fuertes seguidos de sequía.
                </span>
              </li>
            </ul>
          </div>
          <div className="rounded-2xl border border-emerald-100 bg-emerald-50/60 p-6 sm:p-8">
            <h3 className="text-lg font-semibold text-emerald-900">
              Transformación
            </h3>
            <ul className="mt-4 space-y-3 text-slate-700">
              <li className="flex gap-2">
                <span className="mt-1 text-emerald-600" aria-hidden>
                  ✓
                </span>
                <span>
                  Oferta y packaging claros: el cliente entiende el valor y el
                  siguiente paso.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1 text-emerald-600" aria-hidden>
                  ✓
                </span>
                <span>
                  Conversación de ventas con criterios de calificación y
                  cierres sin presión tóxica.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1 text-emerald-600" aria-hidden>
                  ✓
                </span>
                <span>
                  Previsibilidad: métricas semanales y ritual comercial que
                  escala contigo.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
