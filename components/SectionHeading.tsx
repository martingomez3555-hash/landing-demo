type SectionHeadingProps = {
  id: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  id,
  title,
  subtitle,
  align = "left",
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "";

  return (
    <header className={`max-w-3xl ${alignClass}`}>
      <h2
        id={id}
        className="text-2xl font-semibold leading-snug tracking-tight text-ink sm:text-[1.75rem] lg:text-3xl"
      >
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-4 text-base leading-relaxed text-ink-muted sm:text-lg">
          {subtitle}
        </p>
      ) : null}
    </header>
  );
}
