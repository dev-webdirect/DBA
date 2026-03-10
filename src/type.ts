export type HeroMessages = {
  badge: string;
  titleLine1: string;
  titleAantoonbaar: string;
  titleZelfstandig: string;
  titleOndernemer: string;
  titleDays: string;
  subtitle: string;
  ctaPrimary: string;
  ctaSecondary: string;
};

export type HeroSectionProps = {
  messages: HeroMessages;
};

export type ProblemMessages = {
  sectionLabel: string;
  headingMain: string;
  headingHighlight: string;
  description: string;
  cardTitle: string;
  items: { id: string; text: string }[];
  quote: string;
  quoteSource: string;
  whyTitle: string;
  whyBodyPrefix: string;
  whyBodyHighlight: string;
};

export type ProblemSectionProps = {
  messages: ProblemMessages;
};

export type NavbarMessages = {
  brandMain: string;
  brandTagline: string;
  links: {
    probleem: string;
    methode: string;
    garantie: string;
    cta: string;
  };
};

export type ProcessStep = {
  id: string;
  title: string;
  desc: string;
};

export type ProcessMessages = {
  badge: string;
  headingMain: string;
  headingHighlight: string;
  description: string;
  cta: string;
  steps: ProcessStep[];
};

export type SolutionItem = {
  id: string;
  title: string;
  description: string;
};

export type SolutionsMessages = {
  sectionLabel: string;
  headingMain: string;
  headingHighlight: string;
  description: string;
  items: SolutionItem[];
};

export type MidCTABenefit = {
  id: string;
  text: string;
};

export type MidCTAMessages = {
  badge: string;
  headingPrefix: string;
  headingHighlight: string;
  headingSuffix: string;
  subtitle: string;
  cta: string;
  socialProof: string;
  cardTitle: string;
  benefits: MidCTABenefit[];
  stat1Value: string;
  stat1Label: string;
  stat2Value: string;
  stat2Label: string;
};

export type TestimonialItem = {
  id: number;
  name: string;
  role: string;
  quote: string;
};

export type TestimonialStat = {
  value: string;
  label: string;
};

export type TestimonialMessages = {
  sectionLabel: string;
  headingMain: string;
  headingHighlight: string;
  testimonials: TestimonialItem[];
  stats: TestimonialStat[];
};

export type EligibilityItem = {
  id: string | number;
  text: string;
};

export type EligibilityMessages = {
  subtitle: string;
  questionMain: string;
  questionHighlight: string;
  negativeTitle: string;
  positiveTitle: string;
  negativeItems: EligibilityItem[];
  positiveItems: EligibilityItem[];
  socialProof: string;
};

export type BookCallIncludeItem = {
  id: string;
  label: string;
};

export type BookCallDiscussItem = {
  id: string;
  text: string;
};

export type BookCallMessages = {
  badge: string;
  headingMain: string;
  headingHighlight: string;
  description: string;
  stripLabel: string;
  stripBadge: string;
  stripPriceLabel: string;
  includesLabel: string;
  includes: BookCallIncludeItem[];
  rightTopLabel: string;
  rightHeadingPrefix: string;
  rightHeadingHighlight: string;
  rightHeadingSuffix: string;
  rightSubheading: string;
  discussLabel: string;
  discussItems: BookCallDiscussItem[];
  quote: string;
  capacityLabel: string;
  capacityStatus: string;
  ctaPrimary: string;
  ctaNote: string;
};

export type GuaranteeBadge = {
  id: string;
  label: string;
};

export type GuaranteeMessages = {
  label: string;
  headingMain: string;
  headingHighlight: string;
  body: string;
  badges: GuaranteeBadge[];
};

export type FAQItem = {
  id: string;
  question: string;
  answer: string;
};

export type FAQMessages = {
  sectionLabel: string;
  headingMain: string;
  headingHighlight: string;
  description: string;
  items: FAQItem[];
};

export type FinalCTAMessages = {
  badge: string;
  headingMain: string;
  headingHighlight: string;
  description: string;
  buttonIdle: string;
  buttonLoading: string;
  availabilityLabel: string;
  availabilityStatus: string;
  availabilityNote: string;
  successTitlePrefix: string;
  successTitleHighlight: string;
  successBody: string;
};

export type StickyChatMessages = {
  headerBrand: string;
  headerStatus: string;
  closeAria: string;
  message: string;
  quickCta: string;
  quickCtaLabel: string;
  quickCtaAria: string;
  footerNote: string;
  triggerOpenAria: string;
  triggerCloseAria: string;
};

export type FooterNavLink = {
  id: string;
  href: string;
  label: string;
};

export type FooterNavigationMessages = {
  title: string;
  col1: FooterNavLink[];
  col2: FooterNavLink[];
};

export type FooterLegalLink = {
  id: string;
  href: string;
  label: string;
};

export type FooterLegalMessages = {
  title: string;
  col1: FooterLegalLink[];
  col2: FooterLegalLink[];
};

export type FooterContactMessages = {
  title: string;
  cityLabel: string;
  email: string;
  emailHref: string;
  linkedinLabel: string;
  linkedinHref: string;
};

export type FooterMessages = {
  navigation: FooterNavigationMessages;
  legal: FooterLegalMessages;
  contact: FooterContactMessages;
};