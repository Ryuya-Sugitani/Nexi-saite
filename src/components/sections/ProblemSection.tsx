import { AlertTriangle, Users, HelpCircle, Lock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeading } from "@/components/shared/SectionHeading";

const problems = [
  {
    icon: AlertTriangle,
    title: "AIを導入したが\n活用されていない",
    description: "ツールは入れたものの、日常業務で使う社員がほとんどいない",
  },
  {
    icon: Users,
    title: "研修を実施したが\n現場が変わらない",
    description: "一般的な内容の研修で、自社の業務に落とし込めていない",
  },
  {
    icon: HelpCircle,
    title: "ツールが多すぎて\n何を選べばいいかわからない",
    description: "ChatGPT、Gemini、Claude…結局どれが自社に合うのか判断できない",
  },
  {
    icon: Lock,
    title: "業務が属人化して\n標準化できない",
    description: "ベテランに頼り切りで、ノウハウが共有されず組織が回らない",
  },
];

export function ProblemSection() {
  return (
    <section className="px-4 py-16 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          title="こんな課題、ありませんか？"
          subtitle="多くの中小企業が抱えるAI導入の課題。Nexiなら、根本から解決できます。"
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {problems.map((problem) => (
            <Card
              key={problem.title}
              className="border-none bg-muted/50 transition-shadow hover:shadow-md"
            >
              <CardContent className="pt-6">
                <problem.icon className="mb-4 h-8 w-8 text-primary/70" />
                <h3 className="mb-2 whitespace-pre-line text-base font-semibold leading-snug">
                  {problem.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {problem.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
