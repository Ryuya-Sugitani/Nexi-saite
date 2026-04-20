export type Voice = {
  id: string;
  companyName: string;
  personName: string;
  role: string;
  comment: string;
  rating: number;
};

export const voices: Voice[] = [
  {
    id: "voice-1",
    companyName: "D社（製造業・45名）",
    personName: "田中",
    role: "総務部長",
    comment:
      "AIは難しいと思っていましたが、業務に沿った内容で研修してくれたおかげで、ITが苦手な社員も含め全員が活用できるようになりました。何より、研修後もフォローしてくれる安心感が大きいです。",
    rating: 5,
  },
  {
    id: "voice-2",
    companyName: "E社（サービス業・60名）",
    personName: "鈴木",
    role: "DX推進室 室長",
    comment:
      "複数のAIツールの中から、うちの業務に合ったものを選んで提案してくれたのが助かりました。以前は別の研修を受けましたが、一般的な内容で終わってしまい…。Nexiさんは業務を理解した上で設計してくれるので、成果に直結します。",
    rating: 5,
  },
  {
    id: "voice-3",
    companyName: "F社（建設業・25名）",
    personName: "佐藤",
    role: "代表取締役",
    comment:
      "経営者として「AIで何ができるか」がわかっていませんでした。ヒアリングで業務の棚卸しまでしてもらい、自社の課題が明確になったのが一番の収穫です。押し売り感がなく、信頼できるパートナーです。",
    rating: 5,
  },
];
