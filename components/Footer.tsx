import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white py-12 sm:py-14">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 sm:flex-row sm:px-6">
        <p className="text-sm text-slate-500">
          © {new Date().getFullYear()} Coach B2B High-Ticket. Todos los derechos
          reservados.
        </p>
        <nav aria-label="Enlaces legales">
          <ul className="flex flex-wrap items-center justify-center gap-6 text-sm">
            <li>
              <Link
                href="/privacidad"
                className="text-slate-600 underline-offset-4 hover:text-cta hover:underline"
              >
                Política de privacidad
              </Link>
            </li>
            <li>
              <Link
                href="/legal"
                className="text-slate-600 underline-offset-4 hover:text-cta hover:underline"
              >
                Aviso legal
              </Link>
            </li>
            <li>
              <Link
                href="/cookies"
                className="text-slate-600 underline-offset-4 hover:text-cta hover:underline"
              >
                Cookies
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}
