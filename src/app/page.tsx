import { HeroSection } from "@/components/sections/HeroSection";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { ServiceOverview } from "@/components/sections/ServiceOverview";
import { ReasonsSection } from "@/components/sections/ReasonsSection";
import { ServiceMenuSection } from "@/components/sections/ServiceMenuSection";
import { CaseSection } from "@/components/sections/CaseSection";
import { VoiceSection } from "@/components/sections/VoiceSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTABanner } from "@/components/shared/CTABanner";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ProblemSection />
      <ServiceOverview />
      <ReasonsSection />
      <ServiceMenuSection />
      <CTABanner />
      <CaseSection />
      <VoiceSection />
      <FAQSection limit={4} />
      <CTABanner
        title="AI活用のお悩み、お気軽にご相談ください"
        description="オンライン・対面どちらでも対応可能です。まずは貴社の課題をお聞かせください。"
      />
    </>
  );
}
