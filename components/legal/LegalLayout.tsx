import type { ReactNode } from "react";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

type LegalLayoutProps = {
  title: string;
  description?: string;
  children: ReactNode;
};

export function LegalLayout({ title, description, children }: LegalLayoutProps) {
  return (
    <>
      <Navbar />
      <main className="min-h-[60vh] bg-surface py-12 sm:py-16">
        <article className="mx-auto max-w-3xl px-4 sm:px-6">
          <header className="border-b border-white/8 pb-8">
            <h1 className="text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
              {title}
            </h1>
            {description ? (
              <p className="mt-3 text-base text-ink-muted">{description}</p>
            ) : null}
          </header>
          <div className="legal-prose mt-10 space-y-6 text-base leading-relaxed text-ink-muted">
            {children}
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
