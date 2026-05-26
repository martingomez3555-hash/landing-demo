'use client';

import Script from 'next/script';
import { useEffect } from 'react';

export default function TallyForm() {
  useEffect(() => {
    if (typeof window !== 'undefined' && (window as any).Tally) {
      (window as any).Tally.loadEmbeds();
    }
  }, []);

  return (
    <>
      <section
        id="tally"
        className="mt-16 scroll-mt-24"
      >
        <div className="mt-6">
          <iframe
            data-tally-src="https://tally.so/embed/Xx2qOd?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
            width="100%"
            height="420"
            title="Formulario"
            className="w-full rounded-xl"
          />
        </div>
      </section>

      <Script
        id="tally-embed"
        src="https://tally.so/widgets/embed.js"
        strategy="lazyOnload"
        onLoad={() => {
          (window as any).Tally?.loadEmbeds();
        }}
      />
    </>
  );
}