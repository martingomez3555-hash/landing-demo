export function ContactForm() {
  return (
    <section className="w-full py-20 px-6 bg-[#0B1120]">
      <div className="mx-auto max-w-5xl">
        <div className="mb-8 text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-[#38BDF8]">
            Contacto
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-[#F8FAFC] sm:text-4xl">
            Cuéntame sobre tu proyecto
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-[#CBD5E1] sm:text-lg">
            Completa este formulario y te responderé con la mejor ruta para construir una
            landing enfocada en conversión.
          </p>
        </div>

        <div className="rounded-[28px] border border-white/10 bg-[#111827] p-3 shadow-[0_0_0_1px_rgba(59,130,246,0.08),0_20px_80px_rgba(3,7,18,0.65)]">
          <div className="overflow-hidden rounded-[22px] bg-[#0F172A]">
            <iframe
              src="https://tally.so/r/Xx2qOd?transparentBackground=1&dynamicHeight=1"
              width="100%"
              height="760"
              frameBorder="0"
              marginHeight={0}
              marginWidth={0}
              title="Formulario de contacto Martin Gomher"
              className="block w-full bg-transparent"
            />
          </div>
        </div>
      </div>
    </section>
  );
}