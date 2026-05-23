import Link from "next/link";
import { Logo } from "@/components/Logo";
import { PrimaryCTA } from "@/components/PrimaryCTA";

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/5 bg-surface/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <Logo />
        <nav
          className="hidden items-center gap-8 text-sm text-ink-muted md:flex"
          aria-label="Principal"
        >
          <Link
            href="#como-funciona"
            className="transition-colors hover:text-ink"
          >
            Cómo funciona
          </Link>
          <Link href="#portfolio" className="transition-colors hover:text-ink">
            Proyectos
          </Link>
          <Link href="#contacto" className="transition-colors hover:text-ink">
            Contacto
          </Link>
        </nav>
        <PrimaryCTA
          className="hidden min-h-[40px] px-5 py-2 text-sm sm:inline-flex"
          ariaLabel="Solicitar mi landing — navbar"
        />
        <Link
          href="#cta-final"
          className="inline-flex min-h-[40px] items-center justify-center rounded-lg bg-cta px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-cta-hover sm:hidden"
        >
          Solicitar
        </Link>
      </div>
    </header>
  );
}
