import Link from "next/link";
import Image from "next/image";
import { NAV_ITEMS, CTA_ITEMS, SITE_NAME, COMPANY_CONCEPT } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t bg-[#0f2318] text-stone-300">
      <div className="mx-auto max-w-6xl px-4 py-14 lg:px-6">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <Link href="/" className="inline-block">
              <Image
                src="/logo-a-cropped.png"
                alt="Nexi"
                width={140}
                height={60}
                className="h-12 w-auto object-contain brightness-0 invert"
              />
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-stone-400">{COMPANY_CONCEPT}</p>
            <p className="mt-1 text-sm text-stone-400">
              中小企業の業務改善・仕組み化を支援するパートナー
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-stone-400">
              サイトマップ
            </h3>
            <ul className="space-y-2.5">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-stone-400 transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-stone-400">
              お問い合わせ
            </h3>
            <ul className="space-y-2.5">
              <li>
                <Link
                  href={CTA_ITEMS.contact.href}
                  className="text-sm text-stone-400 transition-colors hover:text-white"
                >
                  {CTA_ITEMS.contact.label}
                </Link>
              </li>
              <li>
                <Link
                  href={CTA_ITEMS.download.href}
                  className="text-sm text-stone-400 transition-colors hover:text-white"
                >
                  {CTA_ITEMS.download.label}
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-sm text-stone-400 transition-colors hover:text-white"
                >
                  プライバシーポリシー
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-stone-700/60 pt-6 text-center text-xs text-stone-500">
          &copy; {new Date().getFullYear()} {SITE_NAME} All rights reserved.
        </div>
      </div>
    </footer>
  );
}
