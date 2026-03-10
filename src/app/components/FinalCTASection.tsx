"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import type { FinalCTAMessages } from '@/type';

type FinalCTASectionProps = {
  messages: FinalCTAMessages;
};

// @component: FinalCTASection
export const FinalCTASection = ({ messages }: FinalCTASectionProps) => {
  const [subscribed, setSubscribed] = useState(false);
  const [loading, setLoading] = useState(false);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubscribed(true);
    }, 1200);
  };
  return <section id="wachtlijst" className="py-16 sm:py-24 lg:py-32 px-5 sm:px-8 bg-[#1a1c24] relative overflow-hidden border-t border-white/5">
      {/* Background image */}
      <div className="absolute inset-0 opacity-20">
        <img src="https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&q=80&w=2000" className="w-full h-full object-cover" alt="CTA Background" aria-hidden="true" />
        <div className="absolute inset-0 bg-linear-to-b from-[#1a1c24] via-transparent to-[#1a1c24]" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">

        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="flex items-center justify-center gap-3 sm:gap-4 mb-6 sm:mb-8">
            <div className="w-10 sm:w-12 h-px bg-[#DDB892]" />
            <span className="text-[#DDB892] font-black tracking-[0.25em] sm:tracking-[0.3em] uppercase text-[10px]">
              {messages.badge}
            </span>
            <div className="w-10 sm:w-12 h-px bg-[#DDB892]" />
          </div>
          <h2 className="text-[34px] sm:text-[48px] lg:text-[56px] xl:text-[72px] font-serif text-white mb-6 sm:mb-8 tracking-tighter leading-none">
            <span>{messages.headingMain}</span>
            <span className="italic font-light text-[#DDB892]">
              {messages.headingHighlight}
              <span className="text-[#DDB892]">.</span>
            </span>
          </h2>
          <p className="text-white/60 text-base sm:text-lg md:text-xl font-light mb-10 sm:mb-12 max-w-2xl mx-auto leading-relaxed">
            {messages.description}
          </p>
        </div>

        {/* Form / Success state */}
        <AnimatePresence mode="wait">
          {!subscribed ? <motion.div key="form" initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} exit={{
          opacity: 0
        }} className="max-w-xl mx-auto">
              <form onSubmit={handleSubmit} className="flex flex-col gap-4 mb-8 sm:mb-10">
                <button type="submit" disabled={loading} className="w-full px-6 sm:px-8 py-4 sm:py-5 bg-[#DDB892] text-[#1a1c24] font-black text-sm uppercase tracking-widest rounded-xl transition-all hover:bg-white hover:scale-[1.02] active:scale-95 disabled:opacity-70 cursor-pointer shadow-xl shadow-[#DDB892]/10 flex items-center justify-center gap-3 group">
                  <span>{loading ? messages.buttonLoading : messages.buttonIdle}</span>
                  {!loading && <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />}
                </button>
              </form>

              {/* Availability bar */}
              <div className="w-full space-y-4 sm:space-y-6 pt-5 sm:pt-6 border-t border-white/5">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-1 sm:gap-0">
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/30">
                    {messages.availabilityLabel}
                  </span>
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#DDB892]">
                    {messages.availabilityStatus}
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
                <p className="text-center text-[10px] text-white/20 uppercase tracking-widest font-medium italic">
                  {messages.availabilityNote}
                </p>
              </div>
            </motion.div> : <motion.div key="success" initial={{
          opacity: 0,
          scale: 0.95
        }} animate={{
          opacity: 1,
          scale: 1
        }} className="max-w-xl mx-auto bg-white/2 border border-[#DDB892]/20 p-10 sm:p-12 rounded-[28px] sm:rounded-[32px] backdrop-blur-xl text-white text-center shadow-2xl">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-[#DDB892]/10 rounded-full flex items-center justify-center mx-auto mb-6 sm:mb-8 border border-[#DDB892]/20">
                <CheckCircle2 className="w-8 h-8 sm:w-10 sm:h-10 text-[#DDB892]" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif italic font-light mb-4">
                <span>{messages.successTitlePrefix}</span>
                <span className="not-italic font-medium">{messages.successTitleHighlight}</span>
              </h3>
              <p className="text-white/50 font-light leading-relaxed text-sm sm:text-base">
                {messages.successBody}
              </p>
            </motion.div>}
        </AnimatePresence>

      </div>
    </section>;
};