import type { Metadata } from "next";
import Link from "next/link";
import { LegalLayout } from "@/components/legal/LegalLayout";
import { LegalSection } from "@/components/legal/LegalSection";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Aviso Legal",
  description:
    "Información legal del titular del sitio y condiciones generales de uso.",
};

export default function LegalPage() {
  return (
    <LegalLayout
      title="Aviso Legal"
      description="Información del titular y condiciones generales de acceso al sitio."
    >
      <LegalSection title="1. Titular del sitio">
        <p>
          En cumplimiento de la normativa aplicable en materia de servicios de la
          sociedad de la información, se informa que el titular de este sitio web es:
        </p>
        <ul>
          <li>
            <strong>Titular:</strong> {SITE.businessName}
          </li>
          <li>
            <strong>Ubicación:</strong> {SITE.location}
          </li>
          <li>
            <strong>Email:</strong>{" "}
            <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
          </li>
          <li>
            <strong>Teléfono:</strong>{" "}
            <a href={`tel:${SITE.phone.replace(/\s/g, "")}`}>{SITE.phone}</a>
          </li>
          <li>
            <strong>Sitio web:</strong> {SITE.domain}
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="2. Actividad comercial">
        <p>
          {SITE.businessName} ofrece servicios de diseño y desarrollo de landing pages
          estratégicas enfocadas en conversión para coaches, consultores, clínicas,
          negocios de servicios, infoproductores y marcas personales.
        </p>
        <p>
          Este sitio tiene carácter informativo y comercial. No constituye una tienda
          online ni procesa pagos directamente.
        </p>
      </LegalSection>

      <LegalSection title="3. Condiciones de acceso">
        <p>
          El acceso al sitio es libre y gratuito. El usuario se compromete a hacer un
          uso adecuado de los contenidos y servicios ofrecidos. Consulta los{" "}
          <Link href="/terminos">Términos y Condiciones</Link> para más detalle.
        </p>
      </LegalSection>

      <LegalSection title="4. Propiedad intelectual e industrial">
        <p>
          Los derechos de propiedad intelectual e industrial sobre el diseño, código,
          textos, imágenes, logotipos y demás elementos del sitio pertenecen a{" "}
          {SITE.businessName} o a terceros autorizados. Queda prohibida su reproducción
          sin consentimiento previo.
        </p>
      </LegalSection>

      <LegalSection title="5. Limitaciones legales">
        <p>
          {SITE.businessName} no se responsabiliza de los daños derivados del mal uso
          del sitio, de virus informáticos, caídas del servicio o de la información
          publicada en enlaces externos. La información del sitio puede actualizarse
          sin previo aviso.
        </p>
      </LegalSection>

      <LegalSection title="6. Jurisdicción">
        <p>
          Para la resolución de controversias, las partes se someterán a los tribunales
          competentes del domicilio del titular ({SITE.location}), salvo normativa
          imperativa en contrario aplicable al usuario.
        </p>
      </LegalSection>

      <LegalSection title="7. Contacto">
        <p>
          Para cualquier consulta legal o relacionada con el sitio:{" "}
          <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
        </p>
        <p>
          Consulta también nuestra{" "}
          <Link href="/privacidad">Política de Privacidad</Link> y nuestra{" "}
          <Link href="/cookies">Política de Cookies</Link>.
        </p>
      </LegalSection>
    </LegalLayout>
  );
}
