import type { Metadata } from "next";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTABanner } from "@/components/shared/CTABanner";

export const metadata: Metadata = {
  title: "よくあるご質問",
  description:
    "Nexiの法人向けAI研修に関するよくあるご質問。費用、期間、対応ツール、研修形式などについてお答えします。",
};

export default function FAQPage() {
  return (
    <>
      <div className="mx-auto max-w-6xl px-4 lg:px-6">
        <Breadcrumb items={[{ label: "よくあるご質問" }]} />
      </div>

      <section className="px-4 py-12 lg:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-3xl font-bold lg:text-4xl">
            よくあるご質問
          </h1>
          <p className="mt-4 text-muted-foreground">
            お問い合わせの前に、まずはこちらをご確認ください。
          </p>
        </div>
      </section>

      <FAQSection showLink={false} />

      <CTABanner
        title="解決しない場合はお気軽にご相談ください"
        description="ご不明な点がございましたら、お問い合わせフォームよりお気軽にご連絡ください。"
      />
    </>
  );
}
