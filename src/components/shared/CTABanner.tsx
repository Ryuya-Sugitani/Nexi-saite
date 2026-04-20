import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { CTA_ITEMS } from "@/lib/constants";
import { cn } from "@/lib/utils";

type Props = {
  title?: string;
  description?: string;
};

export function CTABanner({
  title = "まずは無料でご相談ください",
  description = "AI活用のお悩み、業務改善のご相談、お気軽にお問い合わせください。",
}: Props) {
  return (
    <section className="bg-primary px-4 py-16 text-center text-primary-foreground lg:py-20">
      <div className="mx-auto max-w-2xl">
        <h2 className="font-serif text-2xl font-bold lg:text-3xl">{title}</h2>
        <p className="mt-4 text-primary-foreground/80">{description}</p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href={CTA_ITEMS.contact.href}
            className={cn(
              buttonVariants({ size: "lg", variant: "secondary" }),
              "w-full sm:w-auto"
            )}
          >
            無料相談はこちら
          </Link>
          <Link
            href={CTA_ITEMS.download.href}
            className={cn(
              buttonVariants({ size: "lg", variant: "outline" }),
              "w-full border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 sm:w-auto"
            )}
          >
            サービス資料をダウンロード
          </Link>
        </div>
      </div>
    </section>
  );
}
