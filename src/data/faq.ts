export type FAQ = {
  id: string;
  category: "service" | "cost" | "format" | "support" | "other";
  question: string;
  answer: string;
  order: number;
};

export const faqs: FAQ[] = [
  {
    id: "faq-1",
    category: "service",
    question: "研修の期間はどのくらいですか？",
    answer:
      "基礎研修は2〜3時間、実務活用研修は半日〜1日が目安です。定着支援まで含めたプランでは3〜6ヶ月のサポート期間を設けています。貴社の状況に合わせて柔軟に調整可能です。",
    order: 1,
  },
  {
    id: "faq-2",
    category: "format",
    question: "オンラインでの実施は可能ですか？",
    answer:
      "はい、対面・オンライン・ハイブリッドのいずれにも対応しています。Zoom等のツールを使い、対面と同等のハンズオン体験を提供します。",
    order: 2,
  },
  {
    id: "faq-3",
    category: "cost",
    question: "費用の目安を教えてください。",
    answer:
      "研修内容・規模・期間によって異なります。まずはヒアリングで貴社の課題を伺い、最適なプランとお見積りをご提案します。お気軽にご相談ください。",
    order: 3,
  },
  {
    id: "faq-4",
    category: "service",
    question: "少人数でも対応していただけますか？",
    answer:
      "はい、5名程度の少人数から対応可能です。少人数の場合は、一人ひとりの業務に寄り添ったより実践的な研修が可能になります。",
    order: 4,
  },
  {
    id: "faq-5",
    category: "service",
    question: "AIの知識がまったくない社員でも大丈夫ですか？",
    answer:
      "もちろんです。AI初心者の方でも理解できるよう、基礎から段階的にカリキュラムを設計します。専門用語はなるべく使わず、業務に即した具体例で進めます。",
    order: 5,
  },
  {
    id: "faq-6",
    category: "support",
    question: "研修後のサポートはありますか？",
    answer:
      "はい、Nexiの最大の特長は研修後の定着支援です。月次での運用フォロー、現場での質問対応、業務フロー改善の提案など、成果が出るまで伴走します。",
    order: 6,
  },
  {
    id: "faq-7",
    category: "service",
    question: "どのAIツールを使った研修ですか？",
    answer:
      "ChatGPT、Google Gemini、Claude、Notion AIなど、複数のツールに対応しています。貴社の業務内容や既存環境に合わせて最適なツールをご提案します。",
    order: 7,
  },
  {
    id: "faq-8",
    category: "other",
    question: "対応エリアはどこまでですか？",
    answer:
      "全国対応しています。オンラインでの実施はもちろん、対面をご希望の場合も出張対応いたします。",
    order: 8,
  },
];
