import {
  Search,
  Zap,
  Layers,
  Handshake,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeading } from "@/components/shared/SectionHeading";

const reasons = [
  {
    icon: Search,
    title: "業務ヒアリングから始める\nオーダーメイド設計",
    description:
      "汎用カリキュラムではなく、貴社の業務フローを丁寧にヒアリングした上で、本当に必要な研修内容を設計します。",
  },
  {
    icon: Zap,
    title: "「知る」で終わらない\n現場で使える実践型研修",
    description:
      "実際の業務データや業務シーンを使ったハンズオン形式。研修翌日から現場で使えるスキルを身につけます。",
  },
  {
    icon: Layers,
    title: "ChatGPT・Gemini・Claude\n最適なツールをご提案",
    description:
      "特定ツールに偏らず、業務内容や既存環境に合わせて最適なツールを選定。「何を使えばいいか」から相談可能です。",
  },
  {
    icon: Handshake,
    title: "研修後も続く\n定着支援と運用改善",
    description:
      "研修がゴールではありません。導入後の運用フォロー、定着確認、業務改善提案まで、伴走型で支援し続けます。",
  },
];

export function ReasonsSection() {
  return (
    <section className="px-4 py-16 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          tag="WHY NEXI"
          title="Nexiが選ばれる4つの理由"
          subtitle="「研修して終わり」ではない。Nexiならではの伴走型支援。"
        />
        <div className="grid gap-6 sm:grid-cols-2">
          {reasons.map((reason, index) => (
            <Card
              key={reason.title}
              className="overflow-hidden border-none shadow-sm transition-shadow hover:shadow-md"
            >
              <CardContent className="flex gap-5 p-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <reason.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <span className="mb-1 block text-xs font-bold text-accent">
                    REASON {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mb-2 whitespace-pre-line text-base font-semibold leading-snug">
                    {reason.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {reason.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
