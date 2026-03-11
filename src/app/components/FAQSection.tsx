"use client";
/*
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import type { FAQMessages, FAQItem as FAQItemType } from '@/type';
const FAQItem = ({
  faq,
  number
}: {
  faq: FAQItemType;
  number: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  return <motion.div initial={{
    opacity: 0,
    y: 20
  }} whileInView={{
    opacity: 1,
    y: 0
  }} viewport={{
    once: true
  }} className="border-b border-[#1a1c24]/5 py-6 sm:py-8 last:border-none group">
      <button onClick={() => setIsOpen(!isOpen)} className="w-full flex items-center justify-between gap-4 text-left">
        <div className="flex items-center gap-4 sm:gap-6 min-w-0">
          <span className="text-sm font-bold text-[#DDB892] tracking-tighter shrink-0">{number}</span>
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#1a1c24] group-hover:text-[#DDB892] transition-colors duration-300">
            {faq.question}
          </h3>
        </div>
        <motion.div animate={{
        rotate: isOpen ? 180 : 0
      }} className="shrink-0 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#1a1c24]/5 flex items-center justify-center group-hover:bg-[#DDB892]/10 transition-colors">
          <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 text-[#1a1c24]/40 group-hover:text-[#DDB892] transition-colors" />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && <motion.div initial={{
        height: 0,
        opacity: 0
      }} animate={{
        height: 'auto',
        opacity: 1
      }} exit={{
        height: 0,
        opacity: 0
      }} className="overflow-hidden">
            <div className="pt-5 sm:pt-6 pb-2 ml-8 sm:ml-12 max-w-3xl">
              <p className="text-base sm:text-lg leading-relaxed text-[#1a1c24]/60 font-light">{faq.answer}</p>
            </div>
          </motion.div>}
      </AnimatePresence>
    </motion.div>;
};

// @component: FAQSection
export const FAQSection = ({ messages }: { messages: FAQMessages }) => {
  return <section id="faq" className="py-16 sm:py-24 lg:py-32 px-5 sm:px-8 bg-white">
      <div className="max-w-4xl mx-auto">

        <div className="text-center mb-14 sm:mb-20 lg:mb-24">
          <div className="flex items-center justify-center gap-3 mb-5 sm:mb-6">
            <div className="w-10 h-px bg-[#DDB892]" />
            <span className="text-[#DDB892] font-black tracking-[0.3em] uppercase text-xs">
              {messages.sectionLabel}
            </span>
            <div className="w-10 h-px bg-[#DDB892]" />
          </div>
          <h2 className="text-[34px] sm:text-[48px] lg:text-[56px] xl:text-[72px] font-serif text-[#1a1c24] mb-5 sm:mb-6 tracking-tight leading-[1.1]">
            <span>{messages.headingMain}</span>
            <span className="italic font-light text-[#DDB892]">
              {messages.headingHighlight}
              <span className="text-[#DDB892]">.</span>
            </span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-[#1a1c24]/50 font-light leading-relaxed max-w-2xl mx-auto">
            {messages.description}
          </p>
        </div>

        <div className="flex flex-col bg-white rounded-2xl sm:rounded-3xl overflow-hidden border border-[#1a1c24]/5 shadow-sm px-5 sm:px-8">
          {messages.items.map((faq, i) => <FAQItem key={faq.id} faq={faq} number={`0${i + 1}.`} />)}
        </div>

      </div>
    </section>;
};
*/

"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
const faqs = [{
  id: 'faq-1',
  question: "Wat zijn de risico's van de Wet DBA voor mij?",
  answer: "De grootste risico's zijn naheffingen van de Belastingdienst en het verlies van opdrachten omdat opdrachtgevers het risico op schijnzelfstandigheid te groot vinden. Wij helpen je deze risico's te verkleinen door je ondernemerschap aantoonbaar in te richten."
}, {
  id: 'faq-2',
  question: "Is dit traject ook geschikt voor parttime zzp'ers?",
  answer: 'Zeker. Of je nu 40 uur per week werkt of 16 uur - de eisen van opdrachtgevers gelden voor iedereen. Een professionele inrichting is juist voor parttimers een sterke manier om hun zelfstandigheid aan te tonen.'
}, {
  id: 'faq-3',
  question: 'Wat als ik al een website heb?',
  answer: 'Geen probleem. We kunnen je bestaande website optimaliseren met de juiste teksten en positionering, of we bouwen een specifieke landingspagina gericht op jouw zakelijke identiteit.'
}, {
  id: 'faq-4',
  question: 'Welke garantie geven jullie?',
  answer: 'Wij bieden een DBA Ondersteuningsgarantie. Mocht er later een vraag of controle ontstaan over jouw zzp-situatie onder de Wet DBA, bijvoorbeeld door een opdrachtgever of de Belastingdienst, dan helpen wij je kosteloos met de juiste documentatie en uitleg zodat je duidelijk kunt laten zien hoe jij als zelfstandig ondernemer werkt.'
}, {
  id: 'faq-5',
  question: 'Is dit traject juridisch waterdicht?',
  answer: "Geen enkel traject kan volledige zekerheid bieden - de Belastingdienst beslist altijd zelf. Maar zzp'ers met een professioneel ingericht ondernemerschap staan aantoonbaar sterker bij selectie en interne toetsing door opdrachtgevers. Dat is precies wat wij bouwen."
}] as any[];
const FAQItem = ({
  faq,
  number
}: {
  faq: typeof faqs[0];
  number: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  return <motion.div initial={{
    opacity: 0,
    y: 20
  }} whileInView={{
    opacity: 1,
    y: 0
  }} viewport={{
    once: true
  }} className="border-b border-[#1E2238]/6 py-6 sm:py-8 last:border-none group">
      <button onClick={() => setIsOpen(!isOpen)} className="w-full flex items-center justify-between gap-4 text-left">
        <div className="flex items-center gap-4 sm:gap-6 min-w-0">
          <span className="text-sm font-bold text-[#E07B39] tracking-tighter shrink-0">{number}</span>
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#1E2238] group-hover:text-[#E07B39] transition-colors duration-300">
            {faq.question}
          </h3>
        </div>
        <motion.div animate={{
        rotate: isOpen ? 180 : 0
      }} className="flex-shrink-0 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#1E2238]/5 flex items-center justify-center group-hover:bg-[#E07B39]/10 transition-colors">
          <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 text-[#1E2238]/40 group-hover:text-[#E07B39] transition-colors" />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && <motion.div initial={{
        height: 0,
        opacity: 0
      }} animate={{
        height: 'auto',
        opacity: 1
      }} exit={{
        height: 0,
        opacity: 0
      }} className="overflow-hidden">
            <div className="pt-5 sm:pt-6 pb-2 ml-8 sm:ml-12 max-w-3xl">
              <p className="text-base sm:text-lg leading-relaxed text-[#1E2238]/60 font-light">{faq.answer}</p>
            </div>
          </motion.div>}
      </AnimatePresence>
    </motion.div>;
};

// @component: FAQSection
export const FAQSection = () => {
  return <section id="faq" className="py-16 sm:py-24 lg:py-32 px-5 sm:px-8 bg-[#F7F5F2]">
      <div className="max-w-4xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-14 sm:mb-20 lg:mb-24">
          <div className="flex items-center justify-center gap-3 mb-5 sm:mb-6">
            <div className="w-10 h-[1px] bg-[#E07B39]" />
            <span className="text-[#E07B39] font-black tracking-[0.3em] uppercase text-xs">Onduidelijkheden</span>
            <div className="w-10 h-[1px] bg-[#E07B39]" />
          </div>
          <h2 className="text-[34px] sm:text-[48px] lg:text-[56px] xl:text-[72px] font-serif text-[#1E2238] mb-5 sm:mb-6 tracking-tight leading-[1.1]">
            <span>Veelgestelde </span>
            <span className="italic font-light text-[#E07B39]">
              Vragen<span className="text-[#E07B39]">.</span>
            </span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-[#1E2238]/50 font-light leading-relaxed max-w-2xl mx-auto">
            Alles wat u moet weten over de Wet DBA en onze werkwijze.
          </p>
        </div>

        {/* FAQ List */}
        <div className="flex flex-col bg-white rounded-2xl sm:rounded-3xl overflow-hidden border border-[#1E2238]/6 shadow-sm px-5 sm:px-8">
          {faqs.map((faq, i) => <FAQItem key={faq.id} faq={faq} number={`0${i + 1}.`} />)}
        </div>

      </div>
    </section>;
};