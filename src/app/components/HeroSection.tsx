"use client";

import { motion } from 'framer-motion';
import { Award } from 'lucide-react';
import { HeroSectionProps } from '@/type';

// @component: HeroSection
export const HeroSection = ({ messages }: HeroSectionProps) => {
  const t = messages;

  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video autoPlay loop muted playsInline className="w-full h-full object-cover opacity-50 transition-opacity duration-1000" poster="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=2000">
          <source src="https://cdn.pixabay.com/video/2020/09/25/51130-464350167_large.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-8 pt-28 pb-16">
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8
      }}>
          {/* Badge */}
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 backdrop-blur-md border border-white/20 text-white text-[10px] font-black rounded-sm uppercase tracking-[0.2em] mb-6 sm:mb-8">
            <Award className="w-3 h-3 text-white shrink-0" />
            <span className="text-xs sm:text-sm" style={{
            fontWeight: "400"
          }}>{t.badge}</span>
          </span>

          {/* Heading */}
          <h1 className="text-[40px] sm:text-5xl md:text-7xl lg:text-8xl font-serif font-normal text-white mb-6 sm:mb-8 tracking-tight leading-none">
            <span>{t.titleLine1}</span>
            <br />
            <span className="italic font-light" style={{
            fontFamily: 'Georgia, serif'
          }}>
              <span className="relative inline-block text-white">
                {t.titleAantoonbaar}
                <motion.span initial={{
                scaleX: 0
              }} animate={{
                scaleX: 1
              }} transition={{
                duration: 0.9,
                delay: 0.9,
                ease: [0.22, 1, 0.36, 1]
              }} style={{
                originX: 0
              }} className="absolute left-0 -bottom-0.5 h-[4px] w-full bg-white block" />
              </span>{' '}
              <span className="text-[#DDB892]">{t.titleZelfstandig}</span>
            </span>
            <br />
            <span className="italic font-light">
              <span className="text-[#DDB892]">{t.titleOndernemer} </span>
            </span>
            <span>in </span>
            <span className="relative inline-block">
              <span className="relative z-10 text-[#DDB892] italic block" style={{
              fontSize: 'clamp(48px, 8vw, 88px)',
              lineHeight: '1'
            }}>
                {t.titleDays}
              </span>
            </span>
            <span style={{
            color: '#ddb892'
          }}>.</span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/50 font-light leading-relaxed max-w-2xl mb-10 sm:mb-12" style={{
          width: "800px",
          maxWidth: "800px"
        }}>
            {t.subtitle}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
            <a href="#wachtlijst" className="px-8 sm:px-10 py-4 sm:py-5 bg-[#DDB892] hover:bg-white text-white hover:text-[#1a1c24] rounded-xl font-bold uppercase tracking-[0.2em] transition-all shadow-xl shadow-[#DDB892]/10 hover:shadow-white/20 active:scale-95 text-center text-xs sm:text-sm">
              <span>{t.ctaPrimary}</span>
            </a>
            <a href="#methode" className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 sm:px-10 py-4 sm:py-5 rounded-xl font-bold hover:bg-white/20 transition-all text-center text-xs sm:text-sm">
              <span>{t.ctaSecondary}</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>;
};