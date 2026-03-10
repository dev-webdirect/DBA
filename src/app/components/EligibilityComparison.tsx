"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Check, X, UserRound } from 'lucide-react';
import type { EligibilityMessages } from '@/type';

type EligibilityComparisonProps = {
  messages: EligibilityMessages;
  accentColor?: string;
};

// @component: EligibilityComparison
export const EligibilityComparison = ({
  messages,
  accentColor = '#DDB892',
}: EligibilityComparisonProps) => {
  const {
    subtitle,
    questionMain,
    questionHighlight,
    negativeTitle,
    positiveTitle,
    negativeItems,
    positiveItems,
    socialProof,
  } = messages;
  return <section className="w-full bg-white py-16 sm:py-24 lg:py-32 px-5 sm:px-8">
      <div className="max-w-[1380px] mx-auto">

        {/* Section Header */}
        <div className="mb-14 sm:mb-20 lg:mb-24 text-center flex flex-col items-center">
          <motion.div initial={{
          opacity: 0,
          y: 10
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
          }} transition={{
          duration: 0.6
        }} className="flex items-center gap-3 mb-5 sm:mb-6">
            <div className="w-10 h-px" style={{
            backgroundColor: accentColor
          }} />
            <span className="font-bold tracking-[0.2em] uppercase text-xs" style={{
            color: accentColor
          }}>
              {subtitle}
            </span>
            <div className="w-10 h-px" style={{
            backgroundColor: accentColor
          }} />
          </motion.div>

          <motion.h2 initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6,
          delay: 0.1
        }} className="text-[34px] sm:text-[48px] lg:text-[56px] xl:text-[72px] font-serif text-[#1a1c24] tracking-tight leading-[1.1] max-w-4xl">
            <span>{questionMain}</span>
            <span className="text-[#DDB892] italic" style={{
            fontFamily: 'Georgia, serif'
          }}>{questionHighlight}</span>
            <span>?</span>
          </motion.h2>
        </div>

        {/* Comparison Grid */}
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.8,
        delay: 0.2
      }} className="grid md:grid-cols-2 bg-white border border-[#1a1c24]/15 rounded-[32px] sm:rounded-[40px] overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.05)]">
          {/* Negative Section */}
          <div className="p-8 sm:p-12 md:p-16 lg:p-20 border-b md:border-b-0 md:border-r border-[#1a1c24]/15 bg-gray-50/30">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-serif text-[#1a1c24] mb-8 sm:mb-12 flex items-center gap-3 sm:gap-4">
              <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-red-50 flex items-center justify-center shrink-0">
                <X size={14} className="text-red-500" />
              </span>
              <span>{negativeTitle}</span>
            </h3>
            <div className="space-y-6 sm:space-y-8">
              {negativeItems.map((item, index) => <motion.div key={item.id} initial={{
              opacity: 0,
              x: -10
            }} whileInView={{
              opacity: 1,
              x: 0
            }} viewport={{
              once: true
            }} transition={{
              delay: 0.1 * index
            }} className="flex items-start gap-3 sm:gap-4 group">
                  <div className="mt-1 w-5 h-5 rounded-full border border-red-500/20 flex items-center justify-center shrink-0 group-hover:bg-red-500 group-hover:border-red-500 transition-colors duration-300">
                    <X size={10} className="text-red-500/60 group-hover:text-white transition-colors" strokeWidth={3} />
                  </div>
                  <p className="text-[#1a1c24]/60 text-base sm:text-lg font-light leading-relaxed group-hover:text-[#1a1c24] transition-colors">
                    {item.text}
                  </p>
                </motion.div>)}
            </div>
          </div>

          {/* Positive Section */}
          <div className="p-8 sm:p-12 md:p-16 lg:p-20 bg-white">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-serif text-[#1a1c24] mb-8 sm:mb-12 flex items-center gap-3 sm:gap-4">
              <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#DDB892]/10 flex items-center justify-center shrink-0">
                <Check size={14} className="text-[#DDB892]" />
              </span>
              <span>{positiveTitle}</span>
            </h3>
            <div className="space-y-6 sm:space-y-8">
              {positiveItems.map((item, index) => <motion.div key={item.id} initial={{
              opacity: 0,
              x: 10
            }} whileInView={{
              opacity: 1,
              x: 0
            }} viewport={{
              once: true
            }} transition={{
              delay: 0.1 * index
            }} className="flex items-start gap-3 sm:gap-4 group">
                  <div className="mt-1 w-5 h-5 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 border border-[#DDB892]/30 group-hover:bg-[#DDB892] group-hover:border-[#DDB892]">
                    <Check size={10} className="text-[#DDB892] group-hover:text-[#1a1c24] transition-colors" strokeWidth={3} />
                  </div>
                  <p className="text-[#1a1c24]/60 text-base sm:text-lg font-light leading-relaxed group-hover:text-[#1a1c24] transition-colors">
                    {item.text}
                  </p>
                </motion.div>)}
            </div>
          </div>
        </motion.div>

        {/* Social proof pill */}
        <motion.div initial={{
        opacity: 0
      }} whileInView={{
        opacity: 1
      }} viewport={{
        once: true
      }} transition={{
        duration: 1,
        delay: 0.5
      }} className="mt-12 sm:mt-20 flex justify-center">
          <div className="flex items-center gap-3 sm:gap-4 px-4 sm:px-6 py-3 bg-gray-50 border border-[#1a1c24]/15 rounded-full flex-wrap justify-center">
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#DDB892]/10 border border-[#DDB892]/20 flex items-center justify-center shrink-0">
              <UserRound className="w-4 h-4 text-[#DDB892]" />
            </div>
            <span className="text-[10px] sm:text-[11px] font-bold text-[#1a1c24]/40 uppercase tracking-widest text-center">
              {socialProof}
            </span>
          </div>
        </motion.div>

      </div>
    </section>;
};