import Link from "next/link";
import type { ReactNode } from "react";
import { CTA_HREF, CTA_LABEL } from "@/lib/cta";

type PrimaryCTAProps = {
  className?: string;
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

export function SecondaryCTA({
  href,
  children,
  className,
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  const base =
    "inline-flex min-h-[48px] items-center justify-center rounded-lg border border-white/15 bg-transparent px-6 py-3 text-center text-base font-medium text-ink transition-colors hover:border-white/25 hover:bg-white/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cta";

  return (
    <Link href={href} className={className ? `${base} ${className}` : base}>
      {children}
    </Link>
  );
}
