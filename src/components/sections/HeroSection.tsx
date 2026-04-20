import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { CTA_ITEMS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#0f2318] px-4 py-24 lg:py-36">
      {/* subtle texture overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_50%,_rgba(45,110,60,0.18)_0%,_transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_20%,_rgba(30,70,40,0.12)_0%,_transparent_50%)]" />

      <div className="relative mx-auto max-w-4xl">
        <span className="mb-6 inline-block border border-white/20 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-white/60">
          法人向けAI研修・業務改善支援
        </span>

        <h1 className="font-serif text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
          AIを、現場の力に変える。
        </h1>

        <p className="mt-8 max-w-xl text-base leading-relaxed text-white/60 lg:text-lg">
          業務を理解し、最適なツールを選び、現場に届く研修を。
          <br className="hidden sm:block" />
          定着するまで、伴走します。
        </p>

        <div className="mt-12 flex flex-col items-start gap-4 sm:flex-row">
          <Link
            href={CTA_ITEMS.contact.href}
            className={cn(
              buttonVariants({ size: "lg" }),
              "w-full bg-white text-[#0f2318] hover:bg-white/90 sm:w-auto"
            )}
          >
            無料相談はこちら
          </Link>
          <Link
            href={CTA_ITEMS.download.href}
            className="inline-flex h-11 w-full items-center justify-center rounded-md border border-white/30 px-8 text-sm font-medium text-white transition-colors hover:bg-white/10 sm:w-auto"
          >
            サービス資料をダウンロード
          </Link>
        </div>

        <div className="mt-16 flex flex-wrap gap-8 border-t border-white/10 pt-10">
          {[
            { num: "300+", label: "支援実績" },
            { num: "98%", label: "継続率" },
            { num: "3週間", label: "平均導入期間" },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="font-serif text-3xl font-bold text-white">{stat.num}</p>
              <p className="mt-1 text-xs text-white/50">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
