import type { Metadata } from "next";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { CTABanner } from "@/components/shared/CTABanner";
import { cases } from "@/data/cases";

export const metadata: Metadata = {
  title: "導入事例",
  description:
    "NexiのAI研修サービスを導入いただいた企業の事例をご紹介。業種・課題別に成果をご覧いただけます。",
};

export default function CasePage() {
  return (
    <>
      <div className="mx-auto max-w-6xl px-4 lg:px-6">
        <Breadcrumb items={[{ label: "導入事例" }]} />
      </div>

      <section className="px-4 py-12 lg:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-3xl font-bold lg:text-4xl">導入事例</h1>
          <p className="mt-4 text-muted-foreground">
            Nexiの支援で業務が変わった企業の事例をご紹介します。
          </p>
        </div>
      </section>

      <section className="px-4 pb-16 lg:pb-24">
        <div className="mx-auto max-w-4xl space-y-6">
          {cases.map((c) => (
            <Card key={c.slug} className="overflow-hidden">
              <div className="h-1.5 bg-gradient-to-r from-primary to-accent" />
              <CardContent className="p-6 lg:p-8">
                <div className="mb-4 flex flex-wrap items-center gap-2">
                  <Badge variant="secondary">{c.industry}</Badge>
                  <Badge variant="outline">{c.employeeCount}</Badge>
                  <span className="text-lg font-semibold">{c.companyName}</span>
                </div>

                <div className="grid gap-6 lg:grid-cols-3">
                  <div>
                    <h3 className="mb-2 text-sm font-semibold text-primary">
                      課題
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {c.challenge}
                    </p>
                  </div>
                  <div>
                    <h3 className="mb-2 text-sm font-semibold text-primary">
                      支援内容
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {c.solution}
                    </p>
                  </div>
                  <div>
                    <h3 className="mb-2 text-sm font-semibold text-primary">
                      成果
                    </h3>
                    <p className="text-sm font-medium">{c.result}</p>
                  </div>
                </div>

                <div className="mt-4 rounded-lg bg-muted/50 p-4">
                  <p className="text-sm italic text-foreground/70">
                    「{c.testimonial}」
                  </p>
                </div>

                <div className="mt-3 flex flex-wrap gap-1.5">
                  {c.services.map((s) => (
                    <Badge key={s} variant="outline" className="text-xs">
                      {s}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <CTABanner
        title="自社に合った活用方法をご提案します"
        description="同じような課題をお持ちの方は、お気軽にご相談ください。"
      />
    </>
  );
}
