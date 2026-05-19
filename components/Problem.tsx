import { FadeIn } from "@/components/FadeIn";
import { Section } from "@/components/Section";
import { SectionHeading } from "@/components/SectionHeading";

const rootCauses = [
  "mensajes confusos",
  "ofertas débiles",
  "procesos comerciales improvisados",
  "posicionamiento poco claro",
  "dependencia constante del seguimiento manual",
] as const;

const symptoms = [
  "Prospectos interesados que desaparecen.",
  "Llamadas que no avanzan.",
  "Clientes que solo preguntan precio.",
  "Meses buenos seguidos de meses inestables.",
  "Mucho esfuerzo para cerrar pocos contratos.",
] as const;

export function Problem() {
  return (
    <Section
      className="bg-white py-20 sm:py-28"
      labelledBy="problem-heading"
      narrow
    >
      <FadeIn>
        <SectionHeading
          id="problem-heading"
          title="Muchos negocios generan interés. Muy pocos logran convertirlo de forma consistente."
        />
        <p className="mt-8 text-base leading-relaxed text-slate-600">
          El problema normalmente no es la falta de talento.
        </p>
        <p className="mt-6 text-sm font-medium uppercase tracking-wider text-slate-500">
          Es:
        </p>
        <ul className="mt-4 space-y-3">
          {rootCauses.map((item) => (
            <li
              key={item}
              className="text-base leading-relaxed text-slate-700"
            >
              {item}
            </li>
          ))}
        </ul>
        <ul className="mt-14 space-y-5 border-t border-slate-200 pt-14">
          {symptoms.map((item) => (
            <li
              key={item}
              className="flex gap-4 text-base leading-relaxed text-slate-800"
            >
              <span
                className="mt-2.5 h-px w-6 shrink-0 bg-slate-300"
                aria-hidden
              />
              {item}
            </li>
          ))}
        </ul>
      </FadeIn>
    </Section>
  );
}
