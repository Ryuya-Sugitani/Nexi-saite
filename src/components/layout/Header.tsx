"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { NAV_ITEMS, CTA_ITEMS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 lg:px-6">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo-b-cropped.png"
            alt="Nexi"
            width={120}
            height={50}
            className="h-10 w-auto object-contain"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-foreground/65 transition-colors hover:text-primary"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href={CTA_ITEMS.download.href}
            className={cn(buttonVariants({ variant: "outline", size: "sm" }), "border-primary/40 text-primary hover:bg-primary/5")}
          >
            {CTA_ITEMS.download.label}
          </Link>
          <Link
            href={CTA_ITEMS.contact.href}
            className={cn(buttonVariants({ size: "sm" }))}
          >
            {CTA_ITEMS.contact.label}
          </Link>
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger
            className={cn(
              buttonVariants({ variant: "ghost", size: "icon" }),
              "lg:hidden"
            )}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            <span className="sr-only">メニュー</span>
          </SheetTrigger>
          <SheetContent side="right" className="w-72">
            <div className="mb-6 mt-2">
              <Image
                src="/logo-b-cropped.png"
                alt="Nexi"
                width={100}
                height={42}
                className="h-9 w-auto object-contain"
              />
            </div>
            <nav className="flex flex-col gap-4">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="text-base font-medium text-foreground/80 transition-colors hover:text-primary"
                >
                  {item.label}
                </Link>
              ))}
              <div className="mt-4 flex flex-col gap-3 border-t pt-4">
                <Link
                  href={CTA_ITEMS.download.href}
                  onClick={() => setOpen(false)}
                  className={cn(buttonVariants({ variant: "outline" }), "border-primary/40 text-primary")}
                >
                  {CTA_ITEMS.download.label}
                </Link>
                <Link
                  href={CTA_ITEMS.contact.href}
                  onClick={() => setOpen(false)}
                  className={cn(buttonVariants())}
                >
                  {CTA_ITEMS.contact.label}
                </Link>
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
