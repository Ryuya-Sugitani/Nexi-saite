import Link from "next/link";
import {
  ClipboardList,
  Lightbulb,
  GraduationCap,
  Wrench,
  TrendingUp,
} from "lucide-react";
import { SectionHeading } from "@/components/shared/SectionHeading";

const steps = [
  {
    icon: ClipboardList,
    step: "01",
    title: "業務ヒアリング",
    description: "現状の業務フローと課題を把握",
  },
  {
    icon: Lightbulb,
    step: "02",
    title: "課題整理・設計",
    description: "最適な研修プランを設計",
  },
  {
    icon: GraduationCap,
    step: "03",
    title: "研修実施",
    description: "座学＋ハンズオンで実践的に",
  },
  {
    icon: Wrench,
    step: "04",
    title: "現場実践支援",
    description: "実務での活用をサポート",
  },
  {
    icon: TrendingUp,
    step: "05",
    title: "定着・改善支援",
    description: "成果が出るまで継続フォロー",
  },
];

export function ServiceOverview() {
  return (
    <section className="bg-muted/30 px-4 py-16 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          tag="SERVICE"
          title="Nexiが提供する伴走型AI研修"
          subtitle="業務ヒアリングから定着支援まで、5つのステップで確実に成果につなげます。"
        />
        <div className="grid gap-6 sm:grid-cols-3 lg:grid-cols-5">
          {steps.map((item, index) => (
            <div key={item.step} className="relative text-center">
              {index < steps.length - 1 && (
                <div className="absolute right-0 top-8 hidden h-0.5 w-6 -translate-x-[-100%] bg-primary/20 lg:block" />
              )}
              <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <item.icon className="h-6 w-6" />
              </div>
              <span className="mb-1 block text-xs font-bold text-accent">
                STEP {item.step}
              </span>
              <h3 className="mb-1 text-sm font-semibold">{item.title}</h3>
              <p className="text-xs text-muted-foreground">
                {item.description}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            href="/service"
            className="inline-flex items-center text-sm font-medium text-primary hover:underline"
          >
            サービス詳細を見る →
          </Link>
        </div>
      </div>
    </section>
  );
}
