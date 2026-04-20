import type { Metadata } from "next";
import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { CTABanner } from "@/components/shared/CTABanner";
import { voices } from "@/data/voices";

export const metadata: Metadata = {
  title: "お客様の声",
  description:
    "NexiのAI研修を受講された企業様の声をご紹介。導入の決め手や研修後の変化をお伝えします。",
};

export default function VoicePage() {
  return (
    <>
      <div className="mx-auto max-w-6xl px-4 lg:px-6">
        <Breadcrumb items={[{ label: "お客様の声" }]} />
      </div>

      <section className="px-4 py-12 lg:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-3xl font-bold lg:text-4xl">お客様の声</h1>
          <p className="mt-4 text-muted-foreground">
            Nexiの研修を受講された企業様からいただいた声をご紹介します。
          </p>
        </div>
      </section>

      <section className="px-4 pb-16 lg:pb-24">
        <div className="mx-auto max-w-4xl space-y-6">
          {voices.map((voice) => (
            <Card key={voice.id}>
              <CardContent className="p-6 lg:p-8">
                <Quote className="mb-4 h-8 w-8 text-primary/20" />
                <p className="mb-6 text-base leading-relaxed text-foreground/80">
                  {voice.comment}
                </p>
                <div className="flex items-center gap-3 border-t pt-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-base font-bold text-primary">
                    {voice.personName.charAt(0)}
                  </div>
                  <div>
                    <p className="font-medium">{voice.companyName}</p>
                    <p className="text-sm text-muted-foreground">
                      {voice.personName}氏（{voice.role}）
                    </p>
                  </div>
                  <div className="ml-auto flex gap-0.5">
                    {Array.from({ length: voice.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <CTABanner
        title="あなたの会社でもAI活用を始めませんか？"
        description="まずはお気軽にご相談ください。貴社に最適なプランをご提案します。"
      />
    </>
  );
}
