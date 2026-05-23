import type { Metadata } from "next";
import Link from "next/link";
import { LegalLayout } from "@/components/legal/LegalLayout";
import { LegalSection } from "@/components/legal/LegalSection";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Política de Privacidad",
  description:
    "Cómo recopilamos, usamos y protegemos tus datos personales en nuestro sitio de landing pages.",
};

export default function PrivacidadPage() {
  return (
    <LegalLayout
      title="Política de Privacidad"
      description={`Última actualización: ${new Date().getFullYear()}. Esta política explica de forma clara cómo tratamos tus datos.`}
    >
      <LegalSection title="1. Responsable del tratamiento">
        <p>
          El responsable del tratamiento de tus datos es{" "}
          <strong>{SITE.businessName}</strong>, con domicilio en{" "}
          <strong>{SITE.location}</strong>.
        </p>
        <p>
          Contacto:{" "}
          <a href={`mailto:${SITE.email}`}>{SITE.email}</a> ·{" "}
          <a href={`tel:${SITE.phone.replace(/\s/g, "")}`}>{SITE.phone}</a>
        </p>
      </LegalSection>

      <LegalSection title="2. Qué datos recopilamos">
        <p>Podemos recopilar los siguientes datos cuando interactúas con el sitio:</p>
        <ul>
          <li>Nombre, email y mensaje enviados a través de formularios de contacto.</li>
          <li>Datos de navegación: dirección IP, tipo de dispositivo, páginas visitadas y duración.</li>
          <li>Datos recopilados mediante cookies analíticas y publicitarias (ver nuestra{" "}
            <Link href="/cookies">Política de Cookies</Link>).
          </li>
          <li>Información compartida al contactarnos por WhatsApp u otros canales externos.</li>
        </ul>
      </LegalSection>

      <LegalSection title="3. Para qué usamos tus datos">
        <ul>
          <li>Responder a solicitudes de información o presupuesto.</li>
          <li>Gestionar la relación comercial y prestación del servicio de landing pages.</li>
          <li>Mejorar la experiencia del sitio y medir su rendimiento.</li>
          <li>Realizar acciones de marketing digital con tu consentimiento (Meta Pixel, analytics).</li>
          <li>Cumplir obligaciones legales aplicables.</li>
        </ul>
      </LegalSection>

      <LegalSection title="4. Formularios y WhatsApp">
        <p>
          Los datos enviados por formulario se utilizan exclusivamente para atender tu
          solicitud. Si nos contactas por WhatsApp, aplican también las políticas de
          privacidad de Meta/WhatsApp.
        </p>
        <p>
          <strong>No procesamos pagos</strong> directamente en este sitio. Cualquier
          transacción comercial se gestiona fuera de la web mediante acuerdos directos
          o plataformas de terceros.
        </p>
      </LegalSection>

      <LegalSection title="5. Cookies, analytics y Meta Pixel">
        <p>
          Utilizamos cookies propias y de terceros, incluyendo Google Analytics y Meta
          Pixel, para analizar tráfico y medir campañas publicitarias. Puedes gestionar
          tu consentimiento desde el banner de cookies o consultar detalles en nuestra{" "}
          <Link href="/cookies">Política de Cookies</Link>.
        </p>
      </LegalSection>

      <LegalSection title="6. Base legal y conservación">
        <p>
          Tratamos tus datos con base en tu consentimiento, la ejecución de medidas
          precontractuales, el interés legítimo del negocio o el cumplimiento legal.
          Conservamos los datos el tiempo necesario para la finalidad indicada y, en
          todo caso, durante los plazos exigidos por la normativa aplicable en México,
          LATAM, EEUU y principios generales de protección de datos (incl. GDPR cuando
          aplique).
        </p>
      </LegalSection>

      <LegalSection title="7. Protección de datos">
        <p>
          Aplicamos medidas técnicas y organizativas razonables para proteger tu
          información contra acceso no autorizado, pérdida o uso indebido. No
          almacenamos datos médicos sensibles ni información de categorías especiales.
        </p>
      </LegalSection>

      <LegalSection title="8. Tus derechos">
        <p>Puedes ejercer los siguientes derechos contactándonos en {SITE.email}:</p>
        <ul>
          <li>Acceder, rectificar o eliminar tus datos.</li>
          <li>Limitar u oponerte a ciertos tratamientos.</li>
          <li>Retirar tu consentimiento en cualquier momento.</li>
          <li>Solicitar la portabilidad de tus datos cuando corresponda.</li>
        </ul>
        <p>
          Si consideras que tus derechos no han sido atendidos, puedes presentar una
          reclamación ante la autoridad de protección de datos de tu país.
        </p>
      </LegalSection>

      <LegalSection title="9. Transferencias internacionales">
        <p>
          Al usar servicios como Google Analytics, Meta o proveedores de hosting, tus
          datos pueden procesarse fuera de tu país. Estos proveedores aplican sus
          propias garantías y políticas de privacidad.
        </p>
      </LegalSection>

      <LegalSection title="10. Limitación de responsabilidad">
        <p>
          {SITE.businessName} no se hace responsable del uso indebido de los datos por
          parte de terceros cuando el usuario comparte información voluntariamente en
          plataformas externas (WhatsApp, redes sociales, etc.).
        </p>
      </LegalSection>

      <LegalSection title="11. Cambios en esta política">
        <p>
          Podemos actualizar esta política para reflejar cambios legales o en nuestros
          servicios. La versión vigente estará siempre disponible en{" "}
          <strong>{SITE.domain}/privacidad</strong>.
        </p>
      </LegalSection>
    </LegalLayout>
  );
}
