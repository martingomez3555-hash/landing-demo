import { FadeIn } from "@/components/FadeIn";
import { Section } from "@/components/Section";
import { SectionHeading } from "@/components/SectionHeading";

const outcomes = [
  "Tu oferta se vuelve más fácil de entender y vender.",
  "Empiezas a atraer clientes con mayor intención.",
  "Las conversaciones comerciales se sienten naturales y seguras.",
  "El negocio deja de depender únicamente de referencias o suerte.",
  "El proceso comercial gana estabilidad y dirección.",
  "Tu posicionamiento empieza a percibirse más premium.",
] as const;

export function Transformation() {
  return (
    <Section
      className="border-t border-slate-200/80 bg-slate-50 py-20 sm:py-28"
      labelledBy="transformation-heading"
      narrow
    >
      <FadeIn>
        <SectionHeading
          id="transformation-heading"
          title="Lo que cambia cuando tu negocio empieza a operar con claridad"
        />
        <ul className="mt-12 space-y-6">
          {outcomes.map((item) => (
            <li
              key={item}
              className="border-b border-slate-200/70 pb-6 text-base leading-relaxed text-slate-700 last:border-0 last:pb-0"
            >
              {item}
            </li>
          ))}
        </ul>
      </FadeIn>
    </Section>
  );
}
