"use client";

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

        {/* Section Header */}
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

        {/* FAQ List */}
        <div className="flex flex-col bg-white rounded-2xl sm:rounded-3xl overflow-hidden border border-[#1a1c24]/5 shadow-sm px-5 sm:px-8">
          {messages.items.map((faq, i) => <FAQItem key={faq.id} faq={faq} number={`0${i + 1}.`} />)}
        </div>

      </div>
    </section>;
};