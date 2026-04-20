import type { Metadata } from "next";
import { Noto_Sans_JP, Noto_Serif_JP } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileFixedCTA } from "@/components/layout/MobileFixedCTA";
import { SITE_NAME } from "@/lib/constants";

const notoSansJP = Noto_Sans_JP({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const notoSerifJP = Noto_Serif_JP({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${SITE_NAME}｜法人向けAI研修・業務改善の伴走パートナー`,
    template: `%s｜${SITE_NAME}`,
  },
  description:
    "業務ヒアリングから始まるオーダーメイドのAI研修。ChatGPT・Gemini・Claude等に対応し、現場定着まで伴走します。中小企業の業務改善・DX推進をサポート。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${notoSansJP.variable} ${notoSerifJP.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col font-sans">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <MobileFixedCTA />
      </body>
    </html>
  );
}
