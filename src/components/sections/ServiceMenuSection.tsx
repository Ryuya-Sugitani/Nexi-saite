import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { serviceMenus } from "@/data/services";

export function ServiceMenuSection() {
  return (
    <section className="bg-muted/30 px-4 py-16 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          tag="MENU"
          title="フェーズに合わせた支援内容"
          subtitle="貴社のAI活用フェーズに応じて、最適な研修メニューをご提案します。"
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {serviceMenus.map((menu) => (
            <Card
              key={menu.id}
              className="relative overflow-hidden transition-shadow hover:shadow-md"
            >
              <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-primary to-accent" />
              <CardContent className="p-6 pl-5">
                <Badge variant="outline" className="mb-3">
                  STEP {menu.step}
                </Badge>
                <h3 className="mb-1 text-base font-semibold">{menu.title}</h3>
                <p className="mb-3 text-xs text-muted-foreground">
                  {menu.subtitle}
                </p>
                <p className="text-sm leading-relaxed text-foreground/80">
                  {menu.description}
                </p>
              </CardContent>
            </Card>
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
