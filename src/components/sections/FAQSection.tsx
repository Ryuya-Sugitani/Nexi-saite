import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { faqs } from "@/data/faq";

type Props = {
  limit?: number;
  showLink?: boolean;
};

export function FAQSection({ limit, showLink = true }: Props) {
  const displayed = limit ? faqs.slice(0, limit) : faqs;

  return (
    <section className="px-4 py-16 lg:py-24">
      <div className="mx-auto max-w-3xl">
        <SectionHeading
          tag="FAQ"
          title="よくあるご質問"
          subtitle="お問い合わせの前に、まずはこちらをご確認ください。"
        />
        <Accordion className="w-full">
          {displayed.map((faq) => (
            <AccordionItem key={faq.id} value={faq.id}>
              <AccordionTrigger className="text-left text-sm font-medium lg:text-base">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        {showLink && (
          <div className="mt-8 text-center">
            <Link
              href="/faq"
              className="inline-flex items-center text-sm font-medium text-primary hover:underline"
            >
              すべてのFAQを見る →
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
