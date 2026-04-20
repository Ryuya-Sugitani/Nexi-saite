export type Case = {
  slug: string;
  companyName: string;
  industry: string;
  employeeCount: string;
  challenge: string;
  solution: string;
  result: string;
  testimonial: string;
  thumbnail: string;
  services: string[];
  publishedAt: string;
};

export const cases: Case[] = [
  {
    slug: "manufacturing-co",
    companyName: "A社",
    industry: "製造業",
    employeeCount: "50名",
    challenge: "日報や報告書の作成に毎日1時間以上かかり、現場の負担になっていた",
    solution:
      "業務ヒアリングを実施し、報告書作成業務にChatGPTを導入。テンプレート＋プロンプト設計で標準化",
    result: "報告書作成時間を70%削減。月間で約30時間の業務効率化を実現",
    testimonial:
      "最初は半信半疑でしたが、自分たちの業務に合わせた研修だったので、すぐに活用できました。",
    thumbnail: "/images/cases/manufacturing.jpg",
    services: ["業務ヒアリング", "基礎研修", "実務活用研修", "定着支援"],
    publishedAt: "2026-03-15",
  },
  {
    slug: "realestate-co",
    companyName: "B社",
    industry: "不動産業",
    employeeCount: "30名",
    challenge:
      "ベテラン社員に業務が集中し、属人化が深刻。ノウハウの共有ができていなかった",
    solution:
      "Notion AIを活用したナレッジベース構築を支援。業務マニュアルのAI生成フローを確立",
    result:
      "属人化していた業務の80%をマニュアル化。新人の独り立ちまでの期間が半分に短縮",
    testimonial:
      "研修だけでなく、その後の運用まで一緒に考えてくれたのが心強かったです。",
    thumbnail: "/images/cases/realestate.jpg",
    services: ["業務ヒアリング", "実務活用研修", "管理職向け支援", "定着支援"],
    publishedAt: "2026-02-20",
  },
  {
    slug: "it-co",
    companyName: "C社",
    industry: "IT企業",
    employeeCount: "80名",
    challenge:
      "AIツールを導入したものの、使う社員と使わない社員に差が出ていた",
    solution:
      "部門別にカスタマイズした実務活用研修を実施。管理職向けにAI活用のKPI設計も支援",
    result:
      "全社でのAIツール利用率が30%から85%に向上。部門間の生産性格差も改善",
    testimonial:
      "ツールの使い方だけでなく、経営としてどう活かすかまで提案いただけました。",
    thumbnail: "/images/cases/it.jpg",
    services: ["基礎研修", "実務活用研修", "管理職向け支援"],
    publishedAt: "2026-01-10",
  },
];
