"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const STORAGE_KEY = "cookie-consent";

export type CookieConsent = "accepted" | "rejected" | null;

export function getCookieConsent(): CookieConsent {
  if (typeof window === "undefined") return null;
  const v = localStorage.getItem(STORAGE_KEY);
  if (v === "accepted" || v === "rejected") return v;
  return null;
}

export function CookieBanner() {
  const [consent, setConsent] = useState<CookieConsent>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setConsent(getCookieConsent());
    setMounted(true);
  }, []);

  if (!mounted || consent !== null) return null;

  function save(value: "accepted" | "rejected") {
    localStorage.setItem(STORAGE_KEY, value);
    setConsent(value);
    window.dispatchEvent(new CustomEvent("cookie-consent", { detail: value }));
  }

  return (
    <div
      role="dialog"
      aria-label="Preferencias de cookies"
      className="fixed inset-x-0 bottom-[4.75rem] z-[60] border-t border-white/10 bg-surface-alt/95 p-4 backdrop-blur-md sm:bottom-4 sm:inset-x-4 sm:max-w-lg sm:rounded-xl sm:border sm:shadow-2xl sm:shadow-black/40 lg:bottom-6 lg:left-6 lg:right-auto lg:max-w-md"
    >
      <p className="text-sm leading-relaxed text-ink-muted">
        Usamos cookies analíticas y de publicidad (Google Analytics y Meta Pixel)
        para mejorar la experiencia.{" "}
        <Link
          href="/cookies"
          className="text-accent-sky underline-offset-2 hover:underline"
        >
          Política de cookies
        </Link>
      </p>
      <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:gap-3">
        <button
          type="button"
          onClick={() => save("accepted")}
          className="inline-flex min-h-[44px] flex-1 items-center justify-center rounded-lg bg-cta px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-cta-hover"
        >
          Aceptar
        </button>
        <button
          type="button"
          onClick={() => save("rejected")}
          className="inline-flex min-h-[44px] flex-1 items-center justify-center rounded-lg border border-white/15 px-4 py-2.5 text-sm font-medium text-ink transition-colors hover:bg-white/5"
        >
          Rechazar
        </button>
      </div>
    </div>
  );
}
