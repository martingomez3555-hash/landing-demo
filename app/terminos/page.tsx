import type { Metadata } from "next";
import Link from "next/link";
import { LegalLayout } from "@/components/legal/LegalLayout";
import { LegalSection } from "@/components/legal/LegalSection";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Términos y Condiciones",
  description:
    "Condiciones de uso del sitio web de servicios de landing pages estratégicas.",
};

export default function TerminosPage() {
  return (
    <LegalLayout
      title="Términos y Condiciones"
      description="Al usar este sitio, aceptas las condiciones descritas a continuación."
    >
      <LegalSection title="1. Objeto">
        <p>
          Estos términos regulan el acceso y uso del sitio web{" "}
          <strong>{SITE.domain}</strong>, operado por{" "}
          <strong>{SITE.businessName}</strong>, dedicado a la promoción y contratación
          de servicios de diseño de landing pages enfocadas en conversión.
        </p>
      </LegalSection>

      <LegalSection title="2. Uso del sitio">
        <p>Al navegar en este sitio, te comprometes a:</p>
        <ul>
          <li>Usar el sitio de forma lícita y respetuosa.</li>
          <li>No intentar acceder a áreas restringidas o interferir con su funcionamiento.</li>
          <li>Proporcionar información veraz en formularios de contacto.</li>
          <li>No utilizar el contenido con fines comerciales no autorizados.</li>
        </ul>
      </LegalSection>

      <LegalSection title="3. Servicios">
        <p>
          Este sitio presenta servicios de diseño y desarrollo de landing pages para
          coaches, consultores, clínicas, negocios de servicios e infoproductores.
          La contratación formal del servicio se formaliza mediante acuerdo directo
          fuera de este sitio. <strong>No se procesan pagos</strong> en la web.
        </p>
      </LegalSection>

      <LegalSection title="4. Propiedad intelectual">
        <p>
          Todo el contenido del sitio (textos, diseño, imágenes, código, marca y logo)
          es propiedad de {SITE.businessName} o se usa con licencia. Queda prohibida su
          reproducción, distribución o modificación sin autorización expresa.
        </p>
      </LegalSection>

      <LegalSection title="5. Enlaces externos">
        <p>
          El sitio puede incluir enlaces a WhatsApp, Instagram, plataformas de pago o
          herramientas de terceros. No somos responsables del contenido ni de las
          políticas de privacidad de esos sitios externos.
        </p>
      </LegalSection>

      <LegalSection title="6. Disponibilidad del sitio">
        <p>
          Hacemos esfuerzos razonables para mantener el sitio disponible, pero no
          garantizamos acceso ininterrumpido. Podemos modificar, suspender o actualizar
          el sitio en cualquier momento sin previo aviso.
        </p>
      </LegalSection>

      <LegalSection title="7. Limitación de responsabilidad">
        <p>
          {SITE.businessName} no garantiza resultados específicos de conversión, ventas
          o leads derivados del uso de una landing page. Los resultados dependen de
          múltiples factores: tráfico, oferta, mercado, seguimiento comercial, etc.
        </p>
        <p>
          En la medida permitida por la ley, no seremos responsables por daños
          indirectos, pérdida de beneficios o interrupciones derivadas del uso del sitio.
        </p>
      </LegalSection>

      <LegalSection title="8. Protección de datos">
        <p>
          El tratamiento de datos personales se rige por nuestra{" "}
          <Link href="/privacidad">Política de Privacidad</Link> y nuestra{" "}
          <Link href="/cookies">Política de Cookies</Link>.
        </p>
      </LegalSection>

      <LegalSection title="9. Modificaciones">
        <p>
          Podemos actualizar estos términos. La versión vigente estará publicada en{" "}
          <strong>{SITE.domain}/terminos</strong>. El uso continuado del sitio implica
          la aceptación de los cambios.
        </p>
      </LegalSection>

      <LegalSection title="10. Contacto">
        <p>
          Para consultas sobre estos términos:{" "}
          <a href={`mailto:${SITE.email}`}>{SITE.email}</a> · {SITE.phone}
        </p>
      </LegalSection>
    </LegalLayout>
  );
}
