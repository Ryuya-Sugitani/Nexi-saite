import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { cases } from "@/data/cases";

export function CaseSection() {
  return (
    <section className="px-4 py-16 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          tag="CASE STUDY"
          title="導入企業の成果"
          subtitle="Nexiの支援で業務が変わった企業の事例をご紹介します。"
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cases.map((c) => (
            <Card
              key={c.slug}
              className="overflow-hidden transition-shadow hover:shadow-md"
            >
              <div className="h-2 bg-gradient-to-r from-primary to-accent" />
              <CardContent className="p-6">
                <div className="mb-3 flex items-center gap-2">
                  <Badge variant="secondary">{c.industry}</Badge>
                  <span className="text-xs text-muted-foreground">
                    {c.employeeCount}
                  </span>
                </div>
                <h3 className="mb-2 text-base font-semibold">{c.companyName}</h3>
                <p className="mb-3 text-sm text-muted-foreground">
                  {c.challenge}
                </p>
                <div className="rounded-lg bg-primary/5 p-3">
                  <span className="mb-1 block text-xs font-semibold text-primary">
                    成果
                  </span>
                  <p className="text-sm font-medium">{c.result}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            href="/case"
            className="inline-flex items-center text-sm font-medium text-primary hover:underline"
          >
            事例をもっと見る →
          </Link>
        </div>
      </div>
    </section>
  );
}
