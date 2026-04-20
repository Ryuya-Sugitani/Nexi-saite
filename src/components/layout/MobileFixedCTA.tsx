"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { MessageCircle, FileDown } from "lucide-react";
import { CTA_ITEMS } from "@/lib/constants";

export function MobileFixedCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;

      const pastHero = scrollY > windowHeight * 0.6;
      const nearFooter = scrollY + windowHeight > docHeight - 200;

      setVisible(pastHero && !nearFooter);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-50 border-t bg-white/95 backdrop-blur-sm transition-transform duration-300 lg:hidden ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="flex">
        <Link
          href={CTA_ITEMS.contact.href}
          className="flex flex-1 items-center justify-center gap-2 bg-[#0f2318] py-3.5 text-sm font-semibold text-white"
        >
          <MessageCircle className="h-4 w-4" />
          {CTA_ITEMS.contact.label}
        </Link>
        <Link
          href={CTA_ITEMS.download.href}
          className="flex flex-1 items-center justify-center gap-2 bg-accent py-3.5 text-sm font-semibold text-accent-foreground"
        >
          <FileDown className="h-4 w-4" />
          {CTA_ITEMS.download.label}
        </Link>
      </div>
    </div>
  );
}
