import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "お問い合わせ",
  description:
    "AI研修・業務改善に関するご相談はこちら。無料でお見積り・ご提案いたします。",
};

export default function ContactPage() {
  return (
    <>
      <div className="mx-auto max-w-6xl px-4 lg:px-6">
        <Breadcrumb items={[{ label: "お問い合わせ" }]} />
      </div>

      <section className="px-4 py-12 lg:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-3xl font-bold lg:text-4xl">お問い合わせ</h1>
          <p className="mt-4 text-muted-foreground">
            まずはお気軽にご相談ください。無料でご対応いたします。
          </p>
        </div>
      </section>

      <section className="px-4 pb-20">
        <Card className="mx-auto max-w-2xl">
          <CardContent className="p-6 lg:p-8">
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="company"
                  className="mb-1.5 block text-sm font-medium"
                >
                  会社名 <span className="text-destructive">*</span>
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  required
                  className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  placeholder="株式会社○○"
                />
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-1.5 block text-sm font-medium"
                  >
                    ご担当者名 <span className="text-destructive">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    placeholder="山田 太郎"
                  />
                </div>
                <div>
                  <label
                    htmlFor="department"
                    className="mb-1.5 block text-sm font-medium"
                  >
                    部署名
                  </label>
                  <input
                    type="text"
                    id="department"
                    name="department"
                    className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    placeholder="総務部"
                  />
                </div>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="email"
                    className="mb-1.5 block text-sm font-medium"
                  >
                    メールアドレス <span className="text-destructive">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    placeholder="info@example.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="mb-1.5 block text-sm font-medium"
                  >
                    電話番号
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    placeholder="03-0000-0000"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="type"
                  className="mb-1.5 block text-sm font-medium"
                >
                  ご相談内容 <span className="text-destructive">*</span>
                </label>
                <select
                  id="type"
                  name="type"
                  required
                  className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  <option value="">選択してください</option>
                  <option value="training">AI研修について</option>
                  <option value="consulting">業務改善コンサルティングについて</option>
                  <option value="hearing">まずは話を聞いてみたい</option>
                  <option value="other">その他</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-1.5 block text-sm font-medium"
                >
                  詳細・ご要望
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  placeholder="現在の課題やご要望をお聞かせください"
                />
              </div>

              <p className="text-xs text-muted-foreground">
                <Link href="/privacy" className="underline hover:text-primary">
                  プライバシーポリシー
                </Link>
                に同意のうえ、送信してください。
              </p>

              <Button type="submit" size="lg" className="w-full">
                送信する
              </Button>
            </form>
          </CardContent>
        </Card>
      </section>
    </>
  );
}
