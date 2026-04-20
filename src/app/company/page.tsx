import type { Metadata } from "next";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { CTABanner } from "@/components/shared/CTABanner";
import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
  title: "会社概要",
  description:
    "株式会社Nexiの会社概要、代表メッセージ、理念をご紹介。「想いをカタチに、未来を共に」をコンセプトに、中小企業のAI活用を支援します。",
};

const companyInfo = [
  { label: "会社名", value: "株式会社Nexi" },
  { label: "代表者", value: "杉谷龍也" },
  { label: "事業内容", value: "法人向けAI研修・業務改善コンサルティング" },
  { label: "対応エリア", value: "全国（オンライン・出張対応）" },
];

export default function CompanyPage() {
  return (
    <>
      <div className="mx-auto max-w-6xl px-4 lg:px-6">
        <Breadcrumb items={[{ label: "会社概要" }]} />
      </div>

      <section className="px-4 py-12 lg:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-3xl font-bold lg:text-4xl">会社概要</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            想いをカタチに、未来を共に
          </p>
        </div>
      </section>

      <section className="px-4 pb-16 lg:pb-24">
        <div className="mx-auto max-w-3xl">
          <SectionHeading
            title="代表メッセージ"
            subtitle=""
            align="left"
          />
          <div className="space-y-4 text-sm leading-relaxed text-foreground/80">
            <p>
              株式会社Nexiの名前は、Nexus（つながり）とNext（未来）を掛け合わせたものです。
              クライアントとの深い関係性を大切にし、その先の未来を共に創る——
              それが私たちの根底にある想いです。
            </p>
            <p>
              AIは、正しく使えば中小企業の大きな力になります。
              しかし、ツールを導入するだけでは業務は変わりません。
              現場の業務を深く理解し、本当に必要なところにAIを届け、
              使いこなせるようになるまで寄り添うこと。
              それがNexiの考える「伴走」です。
            </p>
            <p>
              相手の成功を自分ごとのように考えるGIVERの精神で、
              中小企業の成長に寄り添い、日本経済の発展に貢献したい。
              そんな想いで、日々お客様と向き合っています。
            </p>
            <p className="text-right font-medium text-foreground">
              株式会社Nexi 代表　杉谷龍也
            </p>
          </div>
        </div>
      </section>

      <Separator className="mx-auto max-w-3xl" />

      <section className="px-4 py-16 lg:py-24">
        <div className="mx-auto max-w-3xl">
          <SectionHeading
            title="私たちが大切にしていること"
            align="left"
          />
          <ul className="space-y-4">
            <li className="flex gap-3 text-sm leading-relaxed text-foreground/80">
              <span className="mt-0.5 block h-2 w-2 shrink-0 rounded-full bg-primary" />
              相手の成功を自分ごとのように考えるGIVERの精神
            </li>
            <li className="flex gap-3 text-sm leading-relaxed text-foreground/80">
              <span className="mt-0.5 block h-2 w-2 shrink-0 rounded-full bg-primary" />
              単なるツール導入支援ではなく、成果につながる運用まで伴走すること
            </li>
            <li className="flex gap-3 text-sm leading-relaxed text-foreground/80">
              <span className="mt-0.5 block h-2 w-2 shrink-0 rounded-full bg-primary" />
              中小企業の成長に寄り添い、日本経済の発展に貢献すること
            </li>
          </ul>
        </div>
      </section>

      <Separator className="mx-auto max-w-3xl" />

      <section className="px-4 py-16 lg:py-24">
        <div className="mx-auto max-w-3xl">
          <SectionHeading title="会社情報" align="left" />
          <dl className="divide-y">
            {companyInfo.map((item) => (
              <div
                key={item.label}
                className="flex flex-col gap-1 py-4 sm:flex-row sm:gap-8"
              >
                <dt className="w-32 shrink-0 text-sm font-semibold text-foreground">
                  {item.label}
                </dt>
                <dd className="text-sm text-muted-foreground">{item.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
