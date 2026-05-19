import type { ReactNode } from "react";

type SectionProps = {
  id?: string;
  children: ReactNode;
  className?: string;
  labelledBy: string;
  narrow?: boolean;
};

export function Section({
  id,
  children,
  className = "",
  labelledBy,
  narrow = false,
}: SectionProps) {
  return (
    <section id={id} className={className} aria-labelledby={labelledBy}>
      <div
        className={`mx-auto px-4 sm:px-6 ${narrow ? "max-w-3xl" : "max-w-6xl"}`}
      >
        {children}
      </div>
    </section>
  );
}
