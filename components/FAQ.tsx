import { FadeIn } from "@/components/FadeIn";
import { Section } from "@/components/Section";
import { SectionHeading } from "@/components/SectionHeading";

const faqs = [
  {
    question: "¿Esto funciona si ya tengo clientes?",
    answer:
      "Sí. De hecho, normalmente funciona mejor cuando ya existe experiencia, resultados y una oferta validada.",
  },
  {
    question: "¿Necesito cambiar completamente mi negocio?",
    answer:
      "No. El objetivo es ordenar, fortalecer y escalar lo que ya funciona.",
  },
  {
    question: "¿Esto es solo para coaches?",
    answer:
      "No. También funciona para agencias, consultores y servicios high-ticket B2B.",
  },
  {
    question: "¿Cuánto dura el proceso?",
    answer:
      "Depende del punto actual del negocio y los objetivos de crecimiento.",
  },
] as const;

export function FAQ() {
  return (
    <Section
      className="border-t border-slate-200/80 bg-slate-50 py-20 sm:py-28"
      labelledBy="faq-heading"
      narrow
    >
      <FadeIn>
        <SectionHeading id="faq-heading" title="Preguntas frecuentes" />
        <div className="mt-12 divide-y divide-slate-200 border-y border-slate-200">
          {faqs.map((faq) => (
            <details key={faq.question} className="group">
              <summary className="cursor-pointer list-none py-5 text-base font-medium text-slate-900 [&::-webkit-details-marker]:hidden">
                <span className="flex items-center justify-between gap-4">
                  {faq.question}
                  <span
                    className="text-slate-400 transition group-open:rotate-45"
                    aria-hidden
                  >
                    +
                  </span>
                </span>
              </summary>
              <p className="pb-5 text-base leading-relaxed text-slate-600">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </FadeIn>
    </Section>
  );
}
