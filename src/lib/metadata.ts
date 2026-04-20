import type { Metadata } from "next";
import { SITE_NAME, SITE_URL } from "./constants";

type PageMeta = {
  title: string;
  description: string;
  path?: string;
};

export function generatePageMetadata({
  title,
  description,
  path = "",
}: PageMeta): Metadata {
  const fullTitle = path === "" ? `${SITE_NAME}｜法人向けAI研修・業務改善の伴走パートナー` : `${title}｜${SITE_NAME}`;
  return {
    title: fullTitle,
    description,
    openGraph: {
      title: fullTitle,
      description,
      url: `${SITE_URL}${path}`,
      siteName: SITE_NAME,
      locale: "ja_JP",
      type: path === "" ? "website" : "article",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
    },
    alternates: {
      canonical: `${SITE_URL}${path}`,
    },
  };
}
