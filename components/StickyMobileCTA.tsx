"use client";

import { PrimaryCTA } from "@/components/PrimaryCTA";

export function StickyMobileCTA() {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-surface/95 px-4 py-3 backdrop-blur-sm lg:hidden"
      role="complementary"
      aria-label="Acción principal"
    >
      <PrimaryCTA
        className="w-full"
        ariaLabel="Solicitar mi landing — barra fija móvil"
      />
    </div>
  );
}
