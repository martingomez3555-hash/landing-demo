import { Section } from "@/components/Section";
import { SectionHeading } from "@/components/SectionHeading";

const faqs = [
  {
    question: "¿Cuánto tarda?",
    answer: "3–5 días normalmente.",
  },
  {
    question: "¿Necesito hosting?",
    answer: "Te ayudo a configurarlo.",
  },
  {
    question: "¿Puedo vender cursos o productos?",
    answer:
      "Sí. Puede integrarse con: Hotmart, Stripe, Gumroad, Shopify.",
  },
  {
    question: "¿También sirve para captar leads?",
    answer: "Sí. WhatsApp, formularios o agenda.",
  },
] as const;

export function FAQ() {
  return (
    <Section
      className="bg-surface-alt py-16 sm:py-24"
      labelledBy="faq-heading"
      narrow
    >
      <SectionHeading id="faq-heading" title="Preguntas frecuentes" />
      <div className="mt-10 divide-y divide-white/10 rounded-xl border border-white/8 bg-surface">
        {faqs.map((faq) => (
          <details key={faq.question} className="group px-5 sm:px-6">
            <summary className="cursor-pointer list-none py-5 text-base font-medium text-ink [&::-webkit-details-marker]:hidden">
              <span className="flex items-center justify-between gap-4">
                {faq.question}
                <span
                  className="text-ink-muted transition group-open:rotate-45"
                  aria-hidden
                >
                  +
                </span>
              </span>
            </summary>
            <p className="pb-5 text-base leading-relaxed text-ink-muted">
              {faq.answer}
            </p>
          </details>
        ))}
      </div>
    </Section>
  );
}
