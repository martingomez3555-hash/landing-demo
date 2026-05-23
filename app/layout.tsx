import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { CookieBanner } from "@/components/CookieBanner";
import { SkipLink } from "@/components/SkipLink";
import { TrackingScripts } from "@/components/TrackingScripts";
import "./globals.css";
import { MetaPixel } from "@/components/MetaPixel";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL("https://example.com"),
  title: {
    default:
      "Landing pages estratégicas · Convierte visitantes en clientes",
    template: "%s | Landing estratégica",
  },
  description:
    "Diseño landing pages para coaches, consultores, clínicas y negocios de servicios. Más leads, llamadas y ventas sin funnels complejos.",
  robots: { index: true, follow: true },
  icons: {
    icon: [{ url: "/isotipo.webp", type: "image/webp" }],
    apple: "/isotipo.webp",
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    siteName: "Landing estratégica",
    title:
      "Convierte más visitantes en clientes con una landing pensada para vender",
    description:
      "Landing pages estratégicas con WhatsApp, formularios, agenda y diseño premium enfocado en conversión.",
  },
};

export const viewport: Viewport = {
  themeColor: "#0B1120",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={inter.variable}>
      <body className="min-h-dvh font-sans antialiased">
      <MetaPixel />
        <SkipLink />
        {children}
        <CookieBanner />
        <TrackingScripts />
      </body>
    </html>
  );
}
