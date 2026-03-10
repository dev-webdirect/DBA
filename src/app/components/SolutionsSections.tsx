"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Globe, Linkedin, ShieldCheck, Award, Zap, Star } from 'lucide-react';
import type { SolutionsMessages } from '@/type';

const SOLUTION_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  'sol-1': Zap,
  'sol-2': Globe,
  'sol-3': Linkedin,
  'sol-4': FileText,
  'sol-5': ShieldCheck,
  'sol-6': Award,
  'sol-7': Star,
};

type SolutionsSectionProps = {
  messages: SolutionsMessages;
};

// @component: SolutionsSection
export const SolutionsSection = ({ messages }: SolutionsSectionProps) => {
  const t = messages;
  const lastIndex = t.items.length - 1;
  return <section id="oplossing" className="py-20 sm:py-28 lg:py-32 px-5 sm:px-8 bg-[#1a1c24]">
      <div className="max-w-[1380px] mx-auto">

        {/* Section Header */}
        <div className="text-center mb-16 sm:mb-20 lg:mb-24 flex flex-col items-center">
          <motion.div initial={{
          opacity: 0,
          y: 10
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.5
        }} className="flex items-center justify-center gap-3 mb-5 sm:mb-6">
            <div className="w-10 h-px bg-[#DDB892]" />
            <span className="text-[#DDB892] font-bold tracking-[0.2em] uppercase text-xs">{t.sectionLabel}</span>
            <div className="w-10 h-px bg-[#DDB892]" />
          </motion.div>
          <motion.h2 initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="text-[36px] sm:text-[48px] lg:text-[56px] xl:text-[72px] leading-[1.1] font-serif font-light text-white mb-4 sm:mb-6 tracking-tight">
            <span>{t.headingMain}</span>
            <span className="italic font-light text-[#DDB892]" style={{
            fontFamily: 'Georgia, serif'
          }}>{t.headingHighlight}</span>
            <span className="text-[#DDB892] text-[0.8em]">.</span>
          </motion.h2>
          <motion.p initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          delay: 0.15,
          duration: 0.6
        }} className="text-white/50 text-base sm:text-lg lg:text-xl max-w-[770px] font-light leading-relaxed">
            {t.description}
          </motion.p>
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/8 rounded-[16px] sm:rounded-[20px] overflow-hidden border border-white/8">
          {t.items.map((item, i) => {
          const IconComponent = SOLUTION_ICONS[item.id] ?? Zap;
          const isLast = i === lastIndex;
          return <div key={item.id} className={`p-8 sm:p-10 lg:p-12 flex flex-col group hover:bg-white/5 bg-[#1a1c24] transition-colors duration-300${isLast ? ' sm:col-span-2 lg:col-span-3 items-center text-center' : ''}`}>
                {/* Icon */}
                <motion.div initial={{
              opacity: 0,
              y: 16
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true,
              margin: '-60px'
            }} transition={{
              duration: 0.45,
              delay: i % 3 * 0.08,
              ease: [0.25, 0.1, 0.25, 1]
            }} className={`flex items-start mb-6 sm:mb-8${isLast ? ' justify-center w-full max-w-xl mx-auto' : ''}`}>
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-[#DDB892]/10 border border-[#DDB892]/20 flex items-center justify-center group-hover:bg-[#DDB892]/20 transition-colors shrink-0">
                    <IconComponent className="w-5 h-5 text-[#DDB892]" />
                  </div>
                </motion.div>

                {/* Title */}
                <motion.h3 initial={{
              opacity: 0,
              y: 12
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true,
              margin: '-60px'
            }} transition={{
              duration: 0.45,
              delay: i % 3 * 0.08 + 0.07,
              ease: [0.25, 0.1, 0.25, 1]
            }} className={`text-lg sm:text-xl font-bold text-white mb-3 group-hover:text-[#DDB892] transition-colors leading-snug${isLast ? ' max-w-xl mx-auto' : ''}`}>
                  {item.title}
                </motion.h3>

                {/* Description */}
                <motion.p initial={{
              opacity: 0,
              y: 10
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true,
              margin: '-60px'
            }} transition={{
              duration: 0.45,
              delay: i % 3 * 0.08 + 0.13,
              ease: [0.25, 0.1, 0.25, 1]
            }} className={`text-white/40 font-light leading-relaxed text-sm sm:text-base group-hover:text-white/60 transition-colors${isLast ? ' max-w-xl mx-auto' : ''}`}>
                  {item.description}
                </motion.p>
              </div>;
        })}
        </div>

      </div>
    </section>;
};