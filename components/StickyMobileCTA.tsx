"use client";

import { PrimaryCTA } from "@/components/PrimaryCTA";

export function StickyMobileCTA() {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-50 border-t border-slate-200/90 bg-white/95 px-4 py-3 backdrop-blur-sm lg:hidden"
      role="complementary"
      aria-label="Acción principal"
    >
      <PrimaryCTA
        className="w-full"
        ariaLabel="Agendar llamada estratégica — barra fija móvil"
      />
    </div>
  );
}
