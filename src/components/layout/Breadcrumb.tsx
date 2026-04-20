import Link from "next/link";
import { ChevronRight } from "lucide-react";

type BreadcrumbItem = {
  label: string;
  href?: string;
};

type Props = {
  items: BreadcrumbItem[];
};

export function Breadcrumb({ items }: Props) {
  const allItems = [{ label: "TOP", href: "/" }, ...items];

  return (
    <nav
      aria-label="パンくずリスト"
      className="overflow-x-auto py-3 text-sm text-muted-foreground"
    >
      <ol className="flex items-center gap-1.5 whitespace-nowrap">
        {allItems.map((item, index) => (
          <li key={index} className="flex items-center gap-1.5">
            {index > 0 && <ChevronRight className="h-3.5 w-3.5 shrink-0" />}
            {item.href && index < allItems.length - 1 ? (
              <Link
                href={item.href}
                className="transition-colors hover:text-primary"
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-foreground/60">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
