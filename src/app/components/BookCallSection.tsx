"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';
import type { BookCallMessages } from '@/type';

type BookCallSectionProps = {
  messages: BookCallMessages;
};

// @component: BookCallSection
export const BookCallSection = ({ messages }: BookCallSectionProps) => {
  return <section id="pakketten" className="py-16 sm:py-24 lg:py-32 px-5 sm:px-8 bg-[#1a1c24] relative overflow-hidden border-t border-white/5">
      <div className="max-w-6xl mx-auto relative z-10">

        {/* Section Header */}
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
        }} transition={{
        duration: 0.7
      }} className="text-center mb-12 sm:mb-16 lg:mb-20">
          <span className="text-[#DDB892] font-bold tracking-[0.2em] uppercase text-xs">
            {messages.badge}
          </span>
          <h2 className="text-[34px] sm:text-[48px] lg:text-[56px] xl:text-[72px] font-serif text-white mt-3 mb-6 sm:mb-8 tracking-tight leading-none">
            <span>{messages.headingMain}</span>
            <br />
            <span className="italic font-light text-[#DDB892]">
              {messages.headingHighlight}
            </span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-white/50 font-light leading-relaxed max-w-2xl mx-auto">
            {messages.description}
          </p>
        </motion.div>

        {/* Card */}
        <motion.div initial={{
        opacity: 0,
        y: 40
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.8,
        delay: 0.1
      }} className="bg-white/3 border border-white/10 rounded-[32px] sm:rounded-[40px] overflow-hidden">
          {/* Top header strip */}
          <div className="bg-[#DDB892]/10 border-b border-[#DDB892]/20 px-6 sm:px-12 py-5 sm:py-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4">
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[#DDB892] animate-pulse shrink-0" />
              <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-[0.2em] sm:tracking-[0.25em] text-[#DDB892]">
                {messages.stripLabel}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-3.5 h-3.5 text-[#DDB892] shrink-0" />
              <span className="text-[#DDB892] font-bold text-sm tracking-tight">
                {messages.stripPriceLabel}
              </span>
            </div>
          </div>

          {/* Two-column body */}
          <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-white/5">

            {/* Left: What to expect */}
            <div className="p-7 sm:p-10 md:p-12 space-y-1">
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/30 mb-6 sm:mb-8">
                {messages.includesLabel}
              </p>
              {messages.includes.map(item => <div key={item.id} className="flex items-center py-3 sm:py-4 border-b border-white/5 group">
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="w-5 h-5 rounded-full bg-[#DDB892]/10 border border-[#DDB892]/30 flex items-center justify-center shrink-0 group-hover:bg-[#DDB892]/20 transition-colors">
                      <Check className="w-2.5 h-2.5 text-[#DDB892]" />
                    </div>
                    <span className="text-white/60 group-hover:text-white/90 transition-colors font-light text-sm sm:text-base">
                      {item.label}
                    </span>
                  </div>
                </div>)}
            </div>

            {/* Right: Book CTA */}
            <div className="p-7 sm:p-10 md:p-12 flex flex-col justify-between gap-8 sm:gap-10">
              <div className="space-y-6 sm:space-y-8">

                {/* Heading */}
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/30 mb-4">
                    {messages.rightTopLabel}
                  </p>
                  <h3 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light text-white leading-tight mb-3">
                    {messages.rightHeadingPrefix}
                    <span className="text-[#DDB892] italic">
                      {messages.rightHeadingHighlight}
                    </span>
                    <span className="text-[#DDB892]" style={{
                    fontFamily: 'Georgia, serif'
                  }}>
                      {messages.rightHeadingSuffix}
                    </span>
                  </h3>
                  <p className="text-white/30 text-sm font-light">
                    {messages.rightSubheading}
                  </p>
                </div>

                <div className="h-px w-full bg-white/5 rounded-full" />

                {/* Wat we bespreken */}
                <div className="space-y-3 sm:space-y-4">
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/30">
                    {messages.discussLabel}
                  </p>
                  <div className="space-y-2 sm:space-y-3">
                    {messages.discussItems.map(item => <div key={item.id} className="flex items-center gap-3">
                        <ArrowRight className="w-3.5 h-3.5 text-[#DDB892] shrink-0" />
                        <span className="text-white/60 font-light text-sm">{item.text}</span>
                      </div>)}
                  </div>
                </div>

                {/* Quote */}
                <div className="bg-white/4 border border-white/10 rounded-2xl p-5 sm:p-6">
                  <p className="text-white/50 font-serif italic text-sm leading-relaxed">
                    "Wij nemen alleen klanten aan die wij écht kunnen helpen. Dat bespreken we eerlijk tijdens het kennismakingsgesprek."
                  </p>
                </div>

                {/* Capacity bar */}
                <div className="space-y-2 sm:space-y-3">
                  <div className="flex justify-between items-end">
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/30">
                      {messages.capacityLabel}
                    </span>
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#DDB892]">
                      {messages.capacityStatus}
                    </span>
                  </div>
                  <div className="h-[2px] w-full bg-white/5 relative overflow-hidden rounded-full">
                    <motion.div initial={{
                    width: 0
                  }} whileInView={{
                    width: '72%'
                  }} viewport={{
                    once: true
                  }} transition={{
                    duration: 1.5,
                    ease: 'circOut'
                  }} className="absolute top-0 left-0 h-full bg-[#DDB892] shadow-[0_0_15px_rgba(221,184,146,0.4)]" />
                  </div>
                </div>

                {/* CTA Button */}
                <a href="#wachtlijst" className="w-full py-4 sm:py-5 rounded-xl bg-[#DDB892] hover:bg-white text-[#1a1c24] font-black text-sm tracking-[0.15em] uppercase transition-all active:scale-[0.98] shadow-xl shadow-[#DDB892]/10 hover:shadow-white/20 flex items-center justify-center gap-3 group">
                  <span>{messages.ctaPrimary}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
                <p className="text-center text-[10px] text-white/20 uppercase tracking-widest font-medium">
                  {messages.ctaNote}
                </p>

              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </section>;
};