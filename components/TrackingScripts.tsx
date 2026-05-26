"use client";

import Script from "next/script";
import { useEffect, useState } from "react";
import { getCookieConsent, type CookieConsent } from "@/components/CookieBanner";

const GA_ID = "G-XXXXXXXXXX";

export function TrackingScripts() {
  const [consent, setConsent] = useState<CookieConsent>(null);

  useEffect(() => {
    setConsent(getCookieConsent());
    function onConsent(e: Event) {
      const detail = (e as CustomEvent<CookieConsent>).detail;
      setConsent(detail);
    }
    window.addEventListener("cookie-consent", onConsent);
    return () => window.removeEventListener("cookie-consent", onConsent);
  }, []);

  if (consent !== "accepted") return null;

  return (
    <>
      <Script
        id="ga4-loader"
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
      />
      <Script id="ga4-config" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}', { anonymize_ip: true });
        `}
      </Script>
    </>
  );
}