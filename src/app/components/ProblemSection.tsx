"use client";

import React from 'react';
import { AlertTriangle, ArrowDownRight } from 'lucide-react';
import { ProblemSectionProps } from '@/type';

// @component: ProblemSection
export const ProblemSection = ({ messages }: ProblemSectionProps) => {
  const t = messages;

  return <section id="probleem" className="py-20 sm:py-28 lg:py-32 px-5 sm:px-8 bg-white/5 overflow-hidden relative">
      <div className="max-w-7xl mx-auto">

        {/* Top Grid: Heading + Problem Card */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start mb-12 lg:mb-20">

          {/* Left: Section heading */}
          <div className="space-y-6 sm:space-y-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-px bg-[#DDB892]/30" />
              <span className="text-[#DDB892] font-bold tracking-[0.2em] uppercase text-xs">{t.sectionLabel}</span>
            </div>
            <h2 className="text-[36px] sm:text-[48px] lg:text-[56px] xl:text-[72px] font-serif text-white tracking-tight leading-[1.1]">
              <span>{t.headingMain} </span>
              <span className="italic font-light text-[#DDB892]" style={{
              fontFamily: 'Georgia, serif'
            }}>
                {t.headingHighlight}
              </span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-white/50 font-light leading-relaxed max-w-xl">
              {t.description}
            </p>
          </div>

          {/* Right: Problem list card */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-linear-to-r from-red-500/20 to-transparent blur-2xl opacity-50 group-hover:opacity-100 transition duration-1000" />
            <div className="relative bg-[#1a1c24] border border-white/10 rounded-[32px] sm:rounded-[40px] p-8 sm:p-10 md:p-14 overflow-hidden">
              <div className="absolute top-0 right-0 p-6 sm:p-8">
                <AlertTriangle className="w-10 h-10 sm:w-12 sm:h-12 text-red-500/20" />
              </div>
              <h3 className="font-serif font-bold uppercase tracking-widest mb-8 sm:mb-10 text-base sm:text-lg text-white">
                {t.cardTitle}
              </h3>
              <div className="space-y-0">
                {t.items.map(item => <div key={item.id} className="flex items-center py-4 sm:py-6 border-b border-white/5 group/item">
                    <div className="flex items-center gap-3 sm:gap-4">
                      <ArrowDownRight className="w-4 h-4 text-red-500 shrink-0" />
                      <span className="text-white/60 group-hover/item:text-white transition-colors font-light text-base sm:text-lg">
                        {item.text}
                      </span>
                    </div>
                  </div>)}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Grid: Quote + Why card */}
        <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">

          {/* Quote card */}
          <div className="p-8 sm:p-10 bg-white/5 border border-white/10 rounded-[24px] sm:rounded-[32px] backdrop-blur-sm">
            <p className="text-lg sm:text-xl lg:text-2xl font-serif text-white mb-6 leading-relaxed italic font-light">
              "{t.quote}"
            </p>
            <div className="flex items-center gap-4">
              <div className="w-10 h-px bg-[#DDB892]/30" />
              <p className="text-[#DDB892] font-bold uppercase tracking-widest text-sm sm:text-base">
                {t.quoteSource}
              </p>
            </div>
          </div>

          {/* Why competitors win card */}
          <div className="p-8 sm:p-10 bg-white/2 border border-white/5 rounded-[24px] sm:rounded-[32px] flex flex-col justify-center">
            <h3 className="text-white italic mb-4 text-2xl sm:text-3xl" style={{
            fontFamily: 'Georgia, serif',
            fontWeight: '700'
          }}>
              {t.whyTitle}
            </h3>
            <p className="text-white/40 font-light leading-relaxed text-base sm:text-lg">
              {t.whyBodyPrefix}{' '}
              <span className="text-[#DDB892] font-medium">{t.whyBodyHighlight}</span>.
            </p>
          </div>
        </div>

      </div>
    </section>;
};