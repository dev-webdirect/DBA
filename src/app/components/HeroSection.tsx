"use client";
/*
import { motion } from 'framer-motion';
import { Award } from 'lucide-react';
import { HeroSectionProps } from '@/type';

// @component: HeroSection
export const HeroSection = ({ messages }: HeroSectionProps) => {
  const t = messages;

  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      <div className="absolute inset-0 z-0">
        <video autoPlay loop muted playsInline className="w-full h-full object-cover opacity-50 transition-opacity duration-1000" poster="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=2000">
          <source src="https://cdn.pixabay.com/video/2020/09/25/51130-464350167_large.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-linear-to-t from-background via-transparent to-background/40" />
      </div>

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
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-secondary backdrop-blur-md border border-border text-foreground text-[10px] font-black rounded-sm uppercase tracking-[0.2em] mb-6 sm:mb-8">
            <Award className="w-3 h-3 text-primary shrink-0" />
            <span className="text-xs sm:text-sm" style={{
            fontWeight: "400"
          }}>{t.badge}</span>
          </span>

          <h1 className="text-[40px] sm:text-5xl md:text-7xl lg:text-8xl font-serif font-normal text-foreground mb-6 sm:mb-8 tracking-tight leading-none">
            <span>{t.titleLine1}</span>
            <br />
            <span className="italic font-light" style={{
            fontFamily: 'Georgia, serif'
          }}>
              <span className="relative inline-block text-foreground">
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
              }} className="absolute left-0 -bottom-0.5 h-[4px] w-full bg-primary block" />
              </span>{' '}
              <span className="text-primary">{t.titleZelfstandig}</span>
            </span>
            <br />
            <span className="italic font-light">
              <span className="text-primary">{t.titleOndernemer} </span>
            </span>
            <span>in </span>
            <span className="relative inline-block">
              <span className="relative z-10 text-primary italic block" style={{
              fontSize: 'clamp(48px, 8vw, 88px)',
              lineHeight: '1'
            }}>
                {t.titleDays}
              </span>
            </span>
            <span className="text-primary">.</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground font-light leading-relaxed max-w-2xl mb-10 sm:mb-12" style={{
          width: "800px",
          maxWidth: "800px",
          fontSize: "20px"
        }}>
            {t.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
            <a href="#wachtlijst" className="px-8 sm:px-10 py-4 sm:py-5 bg-primary hover:bg-primary-foreground text-foreground hover:text-background rounded-xl font-bold uppercase tracking-[0.2em] transition-all shadow-xl shadow-primary/20 hover:shadow-primary-foreground/20 active:scale-95 text-center text-xs sm:text-sm">
              <span>{t.ctaPrimary}</span>
            </a>
            <a href="#methode" className="bg-secondary backdrop-blur-md border border-border text-foreground px-8 sm:px-10 py-4 sm:py-5 rounded-xl font-bold hover:bg-muted transition-all text-center text-xs sm:text-sm">
              <span>{t.ctaSecondary}</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>;
};
*/

"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Award } from 'lucide-react';

// @component: HeroSection
export const HeroSection = () => {
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#161928]">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video autoPlay loop muted playsInline className="w-full h-full object-cover opacity-50 transition-opacity duration-1000" poster="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=2000">
          <source src="https://cdn.pixabay.com/video/2020/09/25/51130-464350167_large.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-[#161928] via-transparent to-[#161928]/40" />
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
            <Award className="w-3 h-3 text-[#E07B39] shrink-0" />
            <span className="text-xs sm:text-sm" style={{
            fontWeight: "400"
          }}>Voor zzp'ers in elke branche</span>
          </span>

          {/* Heading */}
          <h1 className="text-[44px] sm:text-5xl md:text-7xl lg:text-8xl font-serif font-normal text-white mb-6 sm:mb-8 tracking-tight leading-none">
            <span>Van zzp'er naar</span>
            <br />
            <span className="italic font-light" style={{
            fontFamily: 'Georgia, serif'
          }}>
              <span className="relative inline-block text-white">
                aantoonbaar
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
              }} className="absolute left-0 -bottom-0.5 h-[4px] w-full bg-[#E07B39] block" />
              </span>{' '}
              <span className="text-[#E07B39]">zelfstandig</span>
            </span>
            <br />
            <span className="italic font-light">
              <span className="text-[#E07B39]">ondernemer </span>
            </span>
            <span>in </span>
            <span className="relative inline-block">
              <span className="relative z-10 text-[#E07B39] italic block" style={{
              fontSize: 'clamp(48px, 8vw, 88px)',
              lineHeight: '1'
            }}>
                5 dagen
              </span>
            </span>
            <span style={{
            color: '#E07B39'
          }}>.</span>
          </h1>

          {/* Subtitle */}
          <p className="text-[12px] sm:text-[15px] px-2 sm:px-0 text-white/55 font-light leading-relaxed w-full sm:max-w-[800px] mb-10 sm:mb-12">
            Opdrachtgevers mogen zzp'ers nog steeds inhuren. Maar de eisen zijn strenger geworden. Aantoonbare zelfstandigheid betekent vandaag meer dan een KVK-nummer - opdrachtgevers willen het kunnen onderbouwen.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
            <a href="#wachtlijst" className="px-8 sm:px-10 py-4 sm:py-5 bg-[#E07B39] hover:bg-white text-white hover:text-[#1E2238] rounded-xl font-bold uppercase tracking-[0.2em] transition-all shadow-xl shadow-[#E07B39]/20 hover:shadow-white/20 active:scale-95 text-center text-xs sm:text-sm">
              <span>CLAIM JE PLEK</span>
            </a>
            <a href="#methode" className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 sm:px-10 py-4 sm:py-5 rounded-xl font-bold hover:bg-white/20 transition-all text-center text-xs sm:text-sm">
              <span>ONS PROCESS</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>;
};