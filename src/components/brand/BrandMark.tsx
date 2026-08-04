import Link from "next/link";

export function BrandMark({
  domain,
  tone = "dark",
  size = "md",
}: {
  domain: string;
  tone?: "dark" | "light";
  size?: "md" | "lg";
}) {
  const [name, tld] = domain.includes(".")
    ? [domain.slice(0, domain.lastIndexOf(".")), domain.slice(domain.lastIndexOf("."))]
    : [domain, ""];

  const text = tone === "light" ? "text-white" : "text-ink";
  const sizeClass = size === "lg" ? "text-2xl sm:text-3xl" : "text-[1.05rem] sm:text-lg";

  return (
    <span
      className={`font-extrabold tracking-tight ${sizeClass} ${text}`}
      style={tone === "light" ? { color: "#ffffff" } : undefined}
    >
      {name}
      <span className="text-accent">{tld}</span>
    </span>
  );
}

export function BrandLink({
  href,
  domain,
  subtitle,
  tone = "dark",
}: {
  href: string;
  domain: string;
  subtitle?: string;
  tone?: "dark" | "light";
}) {
  return (
    <Link href={href} className="group flex items-center gap-3 no-underline hover:no-underline">
      <span
        className="flex h-9 w-9 shrink-0 overflow-hidden rounded-lg shadow-[0_6px_16px_rgba(11,18,32,0.18)]"
        aria-hidden
      >
        <span className="h-full w-1/3 bg-ink" />
        <span className="h-full w-1/3 bg-accent" />
        <span className="h-full w-1/3 bg-signal" />
      </span>
      <span className="flex flex-col leading-none">
        <BrandMark domain={domain} tone={tone} />
        {subtitle ? (
          <span
            className={`mt-1.5 text-[11px] font-medium tracking-wide ${
              tone === "light" ? "text-white/65" : "text-text-muted"
            }`}
          >
            {subtitle}
          </span>
        ) : null}
      </span>
    </Link>
  );
}
