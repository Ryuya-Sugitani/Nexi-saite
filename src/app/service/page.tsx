import type { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { CTABanner } from "@/components/shared/CTABanner";
import { serviceMenus, supportedTools } from "@/data/services";

export const metadata: Metadata = {
  title: "サービスについて",
  description:
    "Nexiが提供する法人向けAI研修サービスの詳細。導入前ヒアリング、基礎研修、実務活用研修、管理職向け支援、定着支援まで一貫してサポートします。",
};

export default function ServicePage() {
  return (
    <>
      <div className="mx-auto max-w-6xl px-4 lg:px-6">
        <Breadcrumb items={[{ label: "サービスについて" }]} />
      </div>

      <section className="px-4 py-12 lg:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-3xl font-bold lg:text-4xl">
            サービスについて
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            研修で終わらない。業務が変わるまで、伴走する。
          </p>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            NexiのAI研修は、ツールの操作方法を教えるだけの研修ではありません。
            貴社の業務を理解し、最適なAI活用を設計し、現場に定着するまで支援する「伴走型」のサービスです。
          </p>
        </div>
      </section>

      <section className="bg-muted/30 px-4 py-16 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            tag="FLOW"
            title="ご導入までの流れ"
            subtitle="ヒアリングからスタートし、定着まで5つのステップで伴走します。"
          />
          <div className="space-y-8">
            {serviceMenus.map((menu) => (
              <Card key={menu.id} className="overflow-hidden">
                <CardHeader className="border-b bg-muted/20">
                  <div className="flex items-center gap-3">
                    <Badge className="bg-primary text-primary-foreground">
                      STEP {menu.step}
                    </Badge>
                    <CardTitle className="text-lg">{menu.title}</CardTitle>
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {menu.subtitle}
                  </p>
                </CardHeader>
                <CardContent className="p-6">
                  <p className="mb-4 text-sm leading-relaxed text-foreground/80">
                    {menu.description}
                  </p>
                  <div className="mb-3">
                    <span className="text-xs font-semibold text-muted-foreground">
                      対象：
                    </span>
                    <span className="ml-1 text-xs text-muted-foreground">
                      {menu.targets.join("、")}
                    </span>
                  </div>
                  <ul className="grid gap-2 sm:grid-cols-2">
                    {menu.details.map((detail) => (
                      <li
                        key={detail}
                        className="flex items-start gap-2 text-sm"
                      >
                        <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 lg:py-24">
        <div className="mx-auto max-w-4xl">
          <SectionHeading
            tag="TOOLS"
            title="幅広いAIツールに対応"
            subtitle="特定ツールに依存せず、貴社の業務に最適なツールをご提案します。"
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {supportedTools.map((tool) => (
              <Card key={tool.name} className="border-none bg-muted/50">
                <CardContent className="flex items-start gap-4 p-5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-sm font-bold text-primary">
                    {tool.name.charAt(0)}
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold">{tool.name}</h3>
                    <p className="text-xs text-muted-foreground">
                      {tool.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <p className="mt-6 text-center text-sm text-muted-foreground">
            その他、業務に応じて最適なツールを柔軟にご提案いたします。
          </p>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
