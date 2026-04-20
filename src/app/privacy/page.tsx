import type { Metadata } from "next";
import { Breadcrumb } from "@/components/layout/Breadcrumb";

export const metadata: Metadata = {
  title: "プライバシーポリシー",
  description: "株式会社Nexiのプライバシーポリシー（個人情報の取り扱いについて）。",
};

export default function PrivacyPage() {
  return (
    <>
      <div className="mx-auto max-w-6xl px-4 lg:px-6">
        <Breadcrumb items={[{ label: "プライバシーポリシー" }]} />
      </div>

      <section className="px-4 py-12 lg:py-20">
        <div className="mx-auto max-w-3xl">
          <h1 className="mb-8 text-3xl font-bold lg:text-4xl">
            プライバシーポリシー
          </h1>

          <div className="space-y-8 text-sm leading-relaxed text-foreground/80">
            <div>
              <h2 className="mb-3 text-lg font-semibold text-foreground">
                1. 個人情報の収集について
              </h2>
              <p>
                当社は、お問い合わせフォームや資料請求フォームを通じて、
                お客様の個人情報（会社名、氏名、メールアドレス、電話番号等）を取得することがあります。
              </p>
            </div>

            <div>
              <h2 className="mb-3 text-lg font-semibold text-foreground">
                2. 個人情報の利用目的
              </h2>
              <p>取得した個人情報は、以下の目的で利用いたします。</p>
              <ul className="mt-2 list-inside list-disc space-y-1">
                <li>お問い合わせへの回答・対応</li>
                <li>資料の送付</li>
                <li>サービスに関するご案内</li>
                <li>サービス品質の向上</li>
              </ul>
            </div>

            <div>
              <h2 className="mb-3 text-lg font-semibold text-foreground">
                3. 個人情報の第三者提供
              </h2>
              <p>
                当社は、法令に基づく場合を除き、お客様の同意なく個人情報を第三者に提供することはありません。
              </p>
            </div>

            <div>
              <h2 className="mb-3 text-lg font-semibold text-foreground">
                4. 個人情報の管理
              </h2>
              <p>
                当社は、個人情報の漏洩、滅失、き損の防止その他の安全管理のために
                必要かつ適切な措置を講じます。
              </p>
            </div>

            <div>
              <h2 className="mb-3 text-lg font-semibold text-foreground">
                5. お問い合わせ窓口
              </h2>
              <p>
                個人情報の取り扱いに関するお問い合わせは、
                お問い合わせフォームよりご連絡ください。
              </p>
            </div>

            <p className="text-right text-xs text-muted-foreground">
              制定日：2026年4月1日
              <br />
              株式会社Nexi
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
