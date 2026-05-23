/**
 * Configuración editable del sitio — sustituye los placeholders antes de producción.
 */
export const SITE = {
  businessName: "Martin Gomher",
  email: "[email@ejemplo.com]",
  phone: "[+52 XXX XXX XXXX]",
  location: "[Ciudad, País]",
  domain: "[tudominio.com]",
  whatsapp: "https://wa.me/XXXXXXXXXXX",
  instagram: "https://instagram.com/[usuario]",
  /** Endpoint del formulario (Formspree, Netlify, etc.). Vacío = mailto */
  formEndpoint: "",
} as const;

export const LEGAL_LINKS = [
  { href: "/privacidad", label: "Política de Privacidad" },
  { href: "/cookies", label: "Cookies" },
  { href: "/terminos", label: "Términos y Condiciones" },
  { href: "/legal", label: "Aviso Legal" },
  { href: "/#contacto", label: "Contacto" },
] as const;
