"use client";

import React from 'react';
import { ShieldCheck, Check } from 'lucide-react';
import type { GuaranteeMessages } from '@/type';

type GuaranteeSectionProps = {
  messages: GuaranteeMessages;
};

// @component: GuaranteeSection
export const GuaranteeSection = ({ messages }: GuaranteeSectionProps) => {
  return <section id="garantie" className="pb-16 sm:pb-24 lg:pb-32 px-5 sm:px-8 bg-[#1a1c24]">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white/5 border border-white/10 rounded-[32px] sm:rounded-[40px] p-8 sm:p-12 md:p-16 flex flex-col md:flex-row items-center gap-8 sm:gap-10 overflow-hidden relative">
          {/* Background glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#DDB892]/10 blur-[100px] -mr-32 -mt-32 rounded-full" />

          {/* Badge seal */}
          <div className="shrink-0 flex items-center justify-center">
            <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-44 md:h-44 border-2 border-[#DDB892] rounded-full flex items-center justify-center relative">
              <div className="absolute inset-2 border border-[#DDB892]/30 rounded-full" />
              <div className="text-center flex flex-col items-center justify-center gap-1.5 relative z-10 px-3 sm:px-4">
                <ShieldCheck className="w-7 h-7 sm:w-8 sm:h-8 text-[#DDB892]" />
                <span className="font-black uppercase tracking-widest text-white leading-tight text-center" style={{
                fontSize: '10px'
              }}>
                  <span className="block text-xs">DBA</span>
                  <span className="block text-[9px] sm:text-[10px]">ONDERSTEUNINGS</span>
                  <span className="block text-[9px] sm:text-[10px]">GARANTIE</span>
                </span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="grow space-y-4 sm:space-y-5 text-center md:text-left">
            {/* Label */}
            <div className="flex items-center justify-center md:justify-start gap-3">
              <div className="w-10 h-px bg-[#DDB892]" />
              <span className="text-[#DDB892] font-bold tracking-[0.3em] uppercase text-xs">
                {messages.label}
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-[28px] sm:text-[40px] md:text-[48px] lg:text-[56px] font-serif text-white tracking-tight leading-[1.05]">
              <span>{messages.headingMain}</span>
              <span className="italic font-light text-[#DDB892]" style={{
              fontFamily: 'Georgia, serif'
            }}>
                {messages.headingHighlight}
              </span>
              <span className="text-[#DDB892]">.</span>
            </h2>

            {/* Body */}
            <p className="text-sm sm:text-base md:text-lg text-white/50 font-light leading-relaxed max-w-2xl">
              {messages.body}
            </p>

            {/* Badges */}
            <div className="flex flex-wrap justify-center md:justify-start gap-2 sm:gap-3 pt-2">
              {messages.badges.map(badge => <div key={badge.id} className="flex items-center gap-2 sm:gap-2.5 px-3 sm:px-4 py-2 sm:py-2.5 bg-[#DDB892]/10 border border-[#DDB892]/20 rounded-full">
                  <Check className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#DDB892] shrink-0" />
                  <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-white/80">{badge.label}</span>
                </div>)}
            </div>
          </div>
        </div>
      </div>
    </section>;
};