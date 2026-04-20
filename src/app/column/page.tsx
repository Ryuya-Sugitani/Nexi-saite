import type { Metadata } from "next";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { CTABanner } from "@/components/shared/CTABanner";

export const metadata: Metadata = {
  title: "AI活用コラム",
  description:
    "AI活用・業務改善に関するお役立ちコラム。ChatGPTやGeminiの活用法、中小企業のDX推進のヒントをお届けします。",
};

const sampleColumns = [
  {
    slug: "what-is-generative-ai",
    title: "生成AIとは？中小企業が知っておくべき基礎知識",
    category: "AI基礎",
    date: "2026.04.10",
  },
  {
    slug: "chatgpt-vs-gemini-vs-claude",
    title: "ChatGPT・Gemini・Claude 3つのAIツール比較と選び方",
    category: "ツール比較",
    date: "2026.03.25",
  },
  {
    slug: "ai-training-failure-patterns",
    title: "AI研修が「やっただけ」で終わる3つの失敗パターン",
    category: "業務改善",
    date: "2026.03.10",
  },
  {
    slug: "prompt-engineering-basics",
    title: "すぐに使えるプロンプト設計の基本テクニック",
    category: "AI基礎",
    date: "2026.02.28",
  },
  {
    slug: "reduce-busywork-with-ai",
    title: "AIで事務作業を半分にする方法｜中小企業の実践例",
    category: "事例紹介",
    date: "2026.02.15",
  },
  {
    slug: "notion-ai-knowledge-base",
    title: "Notion AIで社内ナレッジベースを構築するステップガイド",
    category: "ツール比較",
    date: "2026.02.01",
  },
];

export default function ColumnPage() {
  return (
    <>
      <div className="mx-auto max-w-6xl px-4 lg:px-6">
        <Breadcrumb items={[{ label: "コラム" }]} />
      </div>

      <section className="px-4 py-12 lg:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-3xl font-bold lg:text-4xl">AI活用コラム</h1>
          <p className="mt-4 text-muted-foreground">
            AI活用・業務改善に関するお役立ち情報をお届けします。
          </p>
        </div>
      </section>

      <section className="px-4 pb-16 lg:pb-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {sampleColumns.map((col) => (
              <Card
                key={col.slug}
                className="overflow-hidden transition-shadow hover:shadow-md"
              >
                <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/10" />
                <CardContent className="p-5">
                  <div className="mb-2 flex items-center gap-2">
                    <Badge variant="secondary" className="text-xs">
                      {col.category}
                    </Badge>
                    <span className="text-xs text-muted-foreground">
                      {col.date}
                    </span>
                  </div>
                  <h3 className="text-sm font-semibold leading-snug">
                    {col.title}
                  </h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="AI研修に興味のある方はこちら"
        description="コラムの内容をさらに深く学べる研修をご用意しています。"
      />
    </>
  );
}
