import Link from "next/link";
import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { voices } from "@/data/voices";

export function VoiceSection() {
  return (
    <section className="bg-muted/30 px-4 py-16 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          tag="VOICE"
          title="ご利用企業の声"
          subtitle="Nexiの研修を受講された企業様からいただいた声をご紹介します。"
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {voices.map((voice) => (
            <Card key={voice.id} className="border-none shadow-sm">
              <CardContent className="p-6">
                <Quote className="mb-3 h-6 w-6 text-primary/30" />
                <p className="mb-4 text-sm leading-relaxed text-foreground/80">
                  {voice.comment}
                </p>
                <div className="flex items-center gap-2 border-t pt-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                    {voice.personName.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-medium">{voice.companyName}</p>
                    <p className="text-xs text-muted-foreground">
                      {voice.personName}氏（{voice.role}）
                    </p>
                  </div>
                  <div className="ml-auto flex gap-0.5">
                    {Array.from({ length: voice.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            href="/voice"
            className="inline-flex items-center text-sm font-medium text-primary hover:underline"
          >
            お客様の声をもっと見る →
          </Link>
        </div>
      </div>
    </section>
  );
}
