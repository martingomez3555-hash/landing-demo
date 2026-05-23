import Image from "next/image";
import Link from "next/link";

type LogoProps = {
  variant?: "full" | "footer";
  className?: string;
};

export function Logo({ variant = "full", className = "" }: LogoProps) {
  const height = variant === "footer" ? 56 : 120;
  const width = variant === "footer" ? 220 : 420;

  return (
    <Link
      href="/"
      className={`inline-flex shrink-0 items-center ${className}`}
      aria-label="Inicio"
    >
      <Image
        src="/logo.webp"
        alt={variant === "footer" ? "" : "Logo Martin Gomher"}
        width={width}
        height={height}
        className={
          variant === "footer"
            ? "h-auto w-auto max-h-14 object-contain object-left sm:max-h-16"
            : "h-auto w-auto max-h-24 object-contain object-left sm:max-h-28 md:max-h-32"
        }
        priority={variant === "full"}
      />
    </Link>
  );
}