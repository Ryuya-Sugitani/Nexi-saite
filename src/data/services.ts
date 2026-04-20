export type ServiceMenu = {
  id: string;
  step: number;
  title: string;
  subtitle: string;
  description: string;
  targets: string[];
  details: string[];
};

export const serviceMenus: ServiceMenu[] = [
  {
    id: "hearing",
    step: 1,
    title: "導入前ヒアリング・業務診断",
    subtitle: "現状を把握し、最適なプランを設計",
    description:
      "業務フローの可視化、AI適用領域の特定、課題の優先度整理を行い、貴社に最適な研修プランを設計します。",
    targets: ["経営者", "管理職", "DX推進担当"],
    details: [
      "業務フローの棚卸し・可視化",
      "AI導入で効果が見込める業務の特定",
      "課題の優先度整理と改善ロードマップ作成",
      "AI活用提案書の納品",
    ],
  },
  {
    id: "basic",
    step: 2,
    title: "AI基礎研修",
    subtitle: "全社員のAIリテラシーを底上げ",
    description:
      "AIの基本概念からプロンプトの考え方、ChatGPT等の基本操作まで。AI初心者でも安心の座学＋ハンズオン形式。",
    targets: ["全社員"],
    details: [
      "AIの基本概念と業務での活用シーン",
      "プロンプトの考え方と設計の基本",
      "ChatGPT / Gemini / Claude の基本操作",
      "安全な利用ルールとリスク管理",
    ],
  },
  {
    id: "practical",
    step: 3,
    title: "実務活用研修",
    subtitle: "自分の業務でAIを使いこなす",
    description:
      "各部門の業務データや実際の業務シーンを題材にしたワークショップ形式。研修翌日から現場で使えるスキルを習得します。",
    targets: ["各部門の実務担当者"],
    details: [
      "業務データを使った実践演習",
      "部門別ユースケースの設計",
      "業務特化型プロンプトの作成",
      "ツール連携による業務自動化の基礎",
    ],
  },
  {
    id: "management",
    step: 4,
    title: "管理職向けAI活用支援",
    subtitle: "経営視点でAI活用を推進",
    description:
      "AI活用の経営インパクト、チームへの展開方法、KPI設計まで。経営と現場の橋渡しを担う管理職向けプログラム。",
    targets: ["管理職", "部門責任者"],
    details: [
      "AI活用による経営インパクトの整理",
      "チーム導入の進め方とマネジメント",
      "AI活用KPIの設計方法",
      "社内推進のためのコミュニケーション設計",
    ],
  },
  {
    id: "retention",
    step: 5,
    title: "定着支援・業務改善コンサルティング",
    subtitle: "成果が出るまで、伴走し続ける",
    description:
      "研修実施後の運用定着を支援。現場ヒアリング、活用状況モニタリング、業務フロー改善提案まで継続的にサポートします。",
    targets: ["研修実施済みの企業"],
    details: [
      "月次での運用状況モニタリング",
      "現場ヒアリングによる課題発見",
      "業務フロー改善の提案・実行支援",
      "追加研修の企画・実施",
    ],
  },
];

export const supportedTools = [
  { name: "ChatGPT", description: "文章作成、要約、アイデア出し、コード補助" },
  { name: "Google Gemini", description: "Google Workspace連携、データ分析" },
  { name: "Claude", description: "長文処理、分析、丁寧な文章生成" },
  { name: "Notion AI", description: "ドキュメント管理、ナレッジベース構築" },
] as const;
