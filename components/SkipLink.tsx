import Link from "next/link";

export function SkipLink() {
  return (
    <Link
      href="#contenido-principal"
      className="fixed left-4 top-4 z-[100] -translate-y-24 rounded-md bg-cta px-4 py-2 text-sm font-semibold text-white shadow-lg transition focus:translate-y-0 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-cta"
    >
      Ir al contenido principal
    </Link>
  );
}
