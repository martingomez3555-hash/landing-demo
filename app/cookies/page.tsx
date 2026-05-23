import type { Metadata } from "next";
import Link from "next/link";
import { LegalLayout } from "@/components/legal/LegalLayout";
import { LegalSection } from "@/components/legal/LegalSection";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Política de Cookies",
  description:
    "Información sobre cookies analíticas, publicitarias y cómo gestionar tu consentimiento.",
};

export default function CookiesPage() {
  return (
    <LegalLayout
      title="Política de Cookies"
      description="Usamos cookies para mejorar tu experiencia y medir el rendimiento del sitio."
    >
      <LegalSection title="1. ¿Qué son las cookies?">
        <p>
          Las cookies son pequeños archivos que se almacenan en tu dispositivo cuando
          visitas un sitio web. Nos ayudan a recordar preferencias, analizar tráfico y
          medir campañas publicitarias.
        </p>
      </LegalSection>

      <LegalSection title="2. ¿Qué cookies usamos?">
        <p><strong>Cookies técnicas (necesarias)</strong></p>
        <p>
          Permiten el funcionamiento básico del sitio, como recordar tu preferencia de
          cookies. No requieren consentimiento previo.
        </p>
        <p><strong>Cookies analíticas</strong></p>
        <p>
          Utilizamos Google Analytics para entender cómo los visitantes usan el sitio
          (páginas visitadas, tiempo de permanencia, origen del tráfico). Los datos se
          recopilan de forma agregada cuando es posible.
        </p>
        <p><strong>Cookies publicitarias</strong></p>
        <p>
          Utilizamos Meta Pixel (Facebook/Instagram) para medir conversiones y optimizar
          campañas publicitarias. Estas cookies pueden rastrear tu actividad en este y
          otros sitios.
        </p>
      </LegalSection>

      <LegalSection title="3. Cookies de terceros">
        <ul>
          <li>
            <strong>Google Analytics</strong> — análisis de tráfico web.
          </li>
          <li>
            <strong>Meta Pixel</strong> — medición y remarketing publicitario.
          </li>
        </ul>
        <p>
          Cada proveedor tiene su propia política de privacidad. Te recomendamos
          revisarlas directamente en sus sitios oficiales.
        </p>
      </LegalSection>

      <LegalSection title="4. Cómo gestionar tu consentimiento">
        <p>
          Al visitar el sitio por primera vez, verás un banner donde puedes{" "}
          <strong>aceptar</strong> o <strong>rechazar</strong> cookies no esenciales.
        </p>
        <ul>
          <li>
            <strong>Aceptar:</strong> se activan Google Analytics y Meta Pixel.
          </li>
          <li>
            <strong>Rechazar:</strong> no se cargan scripts analíticos ni publicitarios.
          </li>
        </ul>
        <p>
          También puedes configurar cookies desde la configuración de tu navegador.
          Ten en cuenta que bloquear todas las cookies puede afectar algunas funciones.
        </p>
      </LegalSection>

      <LegalSection title="5. Cómo desactivar cookies en tu navegador">
        <p>
          Puedes configurar tu navegador para bloquear o eliminar cookies. Consulta la
          ayuda de tu navegador (Chrome, Safari, Firefox, Edge) para instrucciones
          específicas.
        </p>
      </LegalSection>

      <LegalSection title="6. Más información">
        <p>
          Para detalles sobre el tratamiento de datos personales, consulta nuestra{" "}
          <Link href="/privacidad">Política de Privacidad</Link>.
        </p>
        <p>
          Contacto: <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
        </p>
      </LegalSection>
    </LegalLayout>
  );
}
