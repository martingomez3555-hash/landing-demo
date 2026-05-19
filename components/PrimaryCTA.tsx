import Link from "next/link";
import { CTA_HREF, CTA_LABEL } from "@/lib/cta";

type PrimaryCTAProps = {
  className?: string;
  /** Contexto para lectores de pantalla cuando el texto visible es genérico */
  ariaLabel?: string;
};

const baseClass =
  "inline-flex min-h-[48px] items-center justify-center rounded-lg bg-cta px-6 py-3 text-center text-base font-semibold text-white transition-colors hover:bg-cta-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cta";

export function PrimaryCTA({ className, ariaLabel }: PrimaryCTAProps) {
  return (
    <Link
      href={CTA_HREF}
      className={className ? `${baseClass} ${className}` : baseClass}
      aria-label={ariaLabel ?? CTA_LABEL}
    >
      {CTA_LABEL}
    </Link>
  );
}
