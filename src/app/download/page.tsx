import type { Metadata } from "next";
import Link from "next/link";
import { FileText, CheckCircle } from "lucide-react";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "資料請求",
  description:
    "NexiのAI研修サービス資料を無料でダウンロード。サービス内容・導入フローをまとめた資料をご用意しています。",
};

const docContents = [
  "Nexiのサービス概要",
  "研修メニューと導入フロー",
  "導入事例・お客様の声",
  "料金の考え方",
  "よくあるご質問",
];

export default function DownloadPage() {
  return (
    <>
      <div className="mx-auto max-w-6xl px-4 lg:px-6">
        <Breadcrumb items={[{ label: "資料請求" }]} />
      </div>

      <section className="px-4 py-12 lg:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-3xl font-bold lg:text-4xl">資料請求</h1>
          <p className="mt-4 text-muted-foreground">
            NexiのAI研修サービス資料を無料でお届けします。
          </p>
        </div>
      </section>

      <section className="px-4 pb-20">
        <div className="mx-auto grid max-w-4xl gap-8 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Card className="border-none bg-muted/50">
              <CardContent className="p-6">
                <div className="mb-4 flex items-center gap-3">
                  <FileText className="h-8 w-8 text-primary" />
                  <h2 className="text-lg font-semibold">サービス資料</h2>
                </div>
                <p className="mb-4 text-sm text-muted-foreground">
                  以下の内容をまとめた資料をお送りします。
                </p>
                <ul className="space-y-2">
                  {docContents.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 text-sm"
                    >
                      <CheckCircle className="h-4 w-4 text-accent" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-3">
            <Card>
              <CardContent className="p-6 lg:p-8">
                <form className="space-y-5">
                  <div>
                    <label
                      htmlFor="dl-company"
                      className="mb-1.5 block text-sm font-medium"
                    >
                      会社名 <span className="text-destructive">*</span>
                    </label>
                    <input
                      type="text"
                      id="dl-company"
                      name="company"
                      required
                      className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                      placeholder="株式会社○○"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="dl-name"
                      className="mb-1.5 block text-sm font-medium"
                    >
                      ご担当者名 <span className="text-destructive">*</span>
                    </label>
                    <input
                      type="text"
                      id="dl-name"
                      name="name"
                      required
                      className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                      placeholder="山田 太郎"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="dl-email"
                      className="mb-1.5 block text-sm font-medium"
                    >
                      メールアドレス{" "}
                      <span className="text-destructive">*</span>
                    </label>
                    <input
                      type="email"
                      id="dl-email"
                      name="email"
                      required
                      className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                      placeholder="info@example.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="dl-phone"
                      className="mb-1.5 block text-sm font-medium"
                    >
                      電話番号
                    </label>
                    <input
                      type="tel"
                      id="dl-phone"
                      name="phone"
                      className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                      placeholder="03-0000-0000"
                    />
                  </div>

                  <p className="text-xs text-muted-foreground">
                    <Link
                      href="/privacy"
                      className="underline hover:text-primary"
                    >
                      プライバシーポリシー
                    </Link>
                    に同意のうえ、送信してください。
                  </p>

                  <Button type="submit" size="lg" className="w-full">
                    無料で資料をダウンロード
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}
