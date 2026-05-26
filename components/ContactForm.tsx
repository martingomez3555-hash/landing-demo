"use client";

import Script from "next/script";
import { useEffect } from "react";

export function ContactForm() {
  useEffect(() => {
    if (typeof window !== "undefined" && (window as any).Tally) {
      (window as any).Tally.loadEmbeds();
    }
  }, []);

  return (
    <div className="mt-10 rounded-[28px] border border-white/10 bg-[#111827] p-3 shadow-[0_0_0_1px_rgba(59,130,246,0.08),0_20px_80px_rgba(3,7,18,0.65)]">
      <div className="overflow-hidden rounded-[22px] bg-[#0F172A]">
        <iframe
          data-tally-src="https://tally.so/embed/Xx2qOd?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
          width="100%"
          height="760"
          title="Formulario de contacto Martin Gomher"
          className="block w-full bg-transparent"
        />
      </div>
      <Script
        id="tally-script"
        src="https://tally.so/widgets/embed.js"
        strategy="lazyOnload"
        onLoad={() => (window as any).Tally?.loadEmbeds()}
      />
    </div>
  );
}