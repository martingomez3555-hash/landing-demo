import Link from "next/link";
import { Logo } from "@/components/Logo";
import { LEGAL_LINKS } from "@/lib/site";

export function Footer() {
  const legalLinks = LEGAL_LINKS.filter(
    (link) => link.label !== "Contacto"
  );

  return (
    <footer className="border-t border-white/5 bg-surface py-12 sm:py-14">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col items-center text-center">
          <Logo variant="footer" className="justify-center" />

          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-ink-muted">
            Landing pages estratégicas enfocadas en conversión para negocios de servicios.
          </p>

          <nav aria-label="Enlaces legales" className="mt-6">
            <ul className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs text-ink-muted/75 sm:gap-x-5">
              {legalLinks.map((link, index) => (
                <li key={link.href} className="flex items-center gap-x-4 sm:gap-x-5">
                  <Link
                    href={link.href}
                    className="transition-colors hover:text-cta"
                  >
                    {link.label}
                  </Link>
                  {index < legalLinks.length - 1 && (
                    <span aria-hidden className="text-ink-muted/30">
                      •
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <p className="mt-6 max-w-3xl text-[11px] leading-relaxed text-ink-muted/55 sm:text-xs">
            Este sitio no forma parte del sitio web de Facebook ni de Facebook, Inc.
            Además, este sitio no está respaldado por Facebook de ninguna manera.
            Facebook e Instagram son marcas registradas de Meta Platforms, Inc.
          </p>

          <p className="mt-6 border-t border-white/5 pt-6 text-center text-[11px] text-ink-muted/70 sm:text-xs">
            © {new Date().getFullYear()} Martin Gomher. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}