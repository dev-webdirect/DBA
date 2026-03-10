import { Navbar } from "@/app/components/Navbar";
import { HeroSection } from "@/app/components/HeroSection";
import { ProblemSection } from "@/app/components/ProblemSection";
import { ProcessSection } from "@/app/components/ProcessSection";
import { SolutionsSection } from "@/app/components/SolutionsSections";
import { MidCTASection } from "@/app/components/MidCTASection";
import { EligibilityComparison } from "@/app/components/EligibilityComparison";
import { BookCallSection } from "@/app/components/BookCallSection";
import nl from "@/messages/nl.json";
import { TestimonialCarousel } from "../components/TestimonialCarousel";
import { GuaranteeSection } from "@/app/components/GuaranteeSection";
import { FAQSection } from "@/app/components/FAQSection";
import { FinalCTASection } from "@/app/components/FinalCTASection";
import { Footer } from "@/app/components/Footer";
import { StickyChatButton } from "@/app/components/StickyChatButton";

type LocaleParams = {
  locale: string;
};

const messagesByLocale: Record<string, typeof nl> = {
  nl,
  default: nl,
};

export default async function HomeLocalePage({
  params,
}: {
  params: Promise<LocaleParams>;
}) {
  const { locale } = await params;
  const messages = messagesByLocale[locale] ?? messagesByLocale.default;

  return <> 
  <Navbar messages={messages.navbar} />
  <HeroSection messages={messages.hero} />
  <ProblemSection messages={messages.problem} />
  <ProcessSection messages={messages.process} />
  <SolutionsSection messages={messages.solutions} />
  <MidCTASection messages={messages.midCta} />
  <TestimonialCarousel messages={messages.testimonials} />
  <EligibilityComparison messages={messages.eligibility} />
  <BookCallSection messages={messages.bookCall} />
  <GuaranteeSection messages={messages.guarantee} />
  <FAQSection messages={messages.faq} />
  <FinalCTASection messages={messages.finalCta} />
  <Footer />
  <StickyChatButton messages={messages.stickyChat} /> 
  </>;
}
