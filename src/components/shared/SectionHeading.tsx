import { cn } from "@/lib/utils";

type Props = {
  tag?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  tag,
  title,
  subtitle,
  align = "center",
  className,
}: Props) {
  return (
    <div
      className={cn(
        "mb-10 lg:mb-14",
        align === "center" && "text-center",
        className
      )}
    >
      {tag && (
        <span className="mb-2 block text-sm font-semibold uppercase tracking-wider text-accent">
          {tag}
        </span>
      )}
      <h2 className="font-serif text-2xl font-bold tracking-tight text-foreground lg:text-3xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mx-auto mt-3 max-w-2xl text-base text-muted-foreground lg:text-lg">
          {subtitle}
        </p>
      )}
    </div>
  );
}
