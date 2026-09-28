import Link from "next/link";
import type { ReactNode } from "react";
import type { Locale } from "@/lib/i18n/config";
import { getLocalizedPath, type PageKey, pageKeys } from "@/lib/routes";

const LINK_PATTERN = /\[\[([a-zA-Z]+)\|([^\]]+)\]\]/g;

function isPageKey(value: string): value is PageKey {
  return (pageKeys as readonly string[]).includes(value);
}

export function LinkedProse({
  text,
  locale,
}: {
  text: string;
  locale: Locale;
}) {
  const nodes: ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  const pattern = new RegExp(LINK_PATTERN.source, "g");

  while ((match = pattern.exec(text)) !== null) {
    if (match.index > lastIndex) {
      nodes.push(text.slice(lastIndex, match.index));
    }

    const pageKey = match[1];
    const label = match[2];
    if (isPageKey(pageKey)) {
      nodes.push(
        <Link
          key={`${match.index}-${pageKey}`}
          href={getLocalizedPath(locale, pageKey)}
          className="text-link font-semibold"
        >
          {label}
        </Link>,
      );
    } else {
      nodes.push(label);
    }

    lastIndex = match.index + match[0].length;
  }

  if (lastIndex < text.length) {
    nodes.push(text.slice(lastIndex));
  }

  return <>{nodes}</>;
}
