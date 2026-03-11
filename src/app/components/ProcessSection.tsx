"use client";
/*
import React from 'react';
import { motion } from 'framer-motion';
import type { ProcessMessages } from '@/type';

type ProcessSectionProps = {
  messages: ProcessMessages;
};

// @component: ProcessSection
export const ProcessSection = ({ messages }: ProcessSectionProps) => {
  return <section id="methode" className="py-20 sm:py-28 lg:py-32 px-5 sm:px-8 bg-white">
      <div className="max-w-[1380px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 xl:gap-[100px] items-start">

          <motion.div initial={{
          opacity: 0,
          x: -30
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.7
        }} className="relative h-[380px] sm:h-[500px] lg:h-[650px] w-full rounded-[32px] sm:rounded-[40px] bg-[#1a1c24]/5 overflow-hidden group shadow-2xl border border-[#1a1c24]/10">
            <img src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=2000" alt="Process visualization" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
            <div className="absolute inset-0 bg-linear-to-t from-[#1a1c24] via-[#1a1c24]/40 to-transparent" />
            <div className="absolute bottom-8 sm:bottom-12 left-8 sm:left-12 right-8 sm:right-12 space-y-6 sm:space-y-8">
              <div className="space-y-3 sm:space-y-4">
                <span className="text-primary font-black tracking-[0.3em] uppercase text-[10px]">{messages.badge}</span>
                <h3 className="font-serif text-2xl sm:text-3xl leading-tight italic text-white">
                  {messages.headingMain} {messages.headingHighlight}
                </h3>
              </div>
              <motion.a href="#wachtlijst" whileHover={{
              scale: 1.02
            }} whileTap={{
              scale: 0.98
            }} className="inline-flex items-center justify-center bg-primary text-[#1a1c24] px-8 sm:px-10 py-4 sm:py-5 rounded-xl text-base sm:text-lg font-bold transition-all shadow-xl shadow-primary/10 hover:bg-[#1a1c24] hover:text-white">
                <span>{messages.cta}</span>
              </motion.a>
            </div>
          </motion.div>

          <div className="flex flex-col gap-10 lg:gap-16 lg:py-10">

            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.5
          }} className="space-y-5 sm:space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-px bg-primary" />
                <span className="text-primary font-bold tracking-[0.2em] uppercase text-xs">{messages.badge}</span>
              </div>
              <h2 className="text-[36px] sm:text-[48px] lg:text-[56px] xl:text-[72px] font-serif text-secondary tracking-tight leading-[1.1]">
                <span>{messages.headingMain} </span>
                <span className="italic font-light text-primary" style={{
                fontFamily: 'Georgia, serif'
              }}>
                  {messages.headingHighlight}
                </span>
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-[#1a1c24]/50 font-light leading-relaxed max-w-2xl">
                {messages.description}
              </p>
            </motion.div>

            <div className="flex flex-col gap-3 sm:gap-4">
              {messages.steps.map((step, index) => <motion.div key={step.id} initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.5,
              delay: index * 0.1
            }} className="border border-[#1a1c24]/10 rounded-[20px] sm:rounded-[24px] p-6 sm:p-8 bg-white hover:bg-[#1a1c24]/2 transition-colors">
                  <div className="flex gap-5 sm:gap-8 group items-start">
                    <div className="shrink-0">
                      <span className="font-serif italic text-primary opacity-80" style={{
                    fontSize: 'clamp(56px, 7vw, 88px)',
                    lineHeight: '1'
                  }}>
                        {index + 1}.
                      </span>
                    </div>
                    <div className="pt-3 sm:pt-6">
                      <h3 className="text-secondary font-bold text-lg sm:text-xl mb-2 group-hover:text-primary transition-colors">
                        {step.title}
                      </h3>
                      <p className="text-secondary/50 text-sm sm:text-base leading-relaxed font-light">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>)}
            </div>

          </div>
        </div>
      </div>
    </section>;
};
*/

"use client";

import React from 'react';
import { motion } from 'framer-motion';
const processSteps = [{
  id: 'ps-1',
  title: 'Stap 1: Intake',
  desc: 'Jij vertelt ons wie je bent en wat je doet. Wij leggen jouw positionering, werkwijze en zelfstandigheid vast.'
}, {
  id: 'ps-2',
  title: 'Stap 2: Wij gaan aan het werk.',
  desc: 'Wij bouwen je website, richten je mailbox in, optimaliseren LinkedIn en stellen alle samenwerkingsdocumenten op. Jij hoeft niets te doen.'
}, {
  id: 'ps-3',
  title: 'Stap 3: Live & Gecertificeerd',
  desc: 'Na 5 dagen staat alles live. Je ontvangt je DBA Klaar Certificaat en toegang tot het Zeker Zelfstandig Netwerk.'
}] as any[];

// @component: ProcessSection
export const ProcessSection = () => {
  return <section id="methode" className="py-20 sm:py-28 lg:py-32 px-5 sm:px-8 bg-[#F7F5F2]">
      <div className="max-w-[1380px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 xl:gap-[100px] items-start">

          {/* Left Column: Feature Image & CTA */}
          <motion.div initial={{
          opacity: 0,
          x: -30
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.7
        }} className="relative h-[380px] sm:h-[500px] lg:h-[650px] w-full rounded-[32px] sm:rounded-[40px] bg-[#1E2238]/5 overflow-hidden group shadow-2xl border border-[#1E2238]/10">
            <img src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=2000" alt="Process visualization" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1E2238] via-[#1E2238]/40 to-transparent" />
            <div className="absolute bottom-8 sm:bottom-12 left-8 sm:left-12 right-8 sm:right-12 space-y-6 sm:space-y-8">
              <div className="space-y-3 sm:space-y-4">
                <span className="text-[#E07B39] font-black tracking-[0.3em] uppercase text-[10px]">Stap voor stap</span>
                <h3 className="font-serif text-2xl sm:text-3xl leading-tight italic text-white">
                  Start vandaag nog om DBA klaar te zijn.
                </h3>
              </div>
              <motion.a href="#wachtlijst" whileHover={{
              scale: 1.02
            }} whileTap={{
              scale: 0.98
            }} className="inline-flex items-center justify-center bg-[#E07B39] text-white px-8 sm:px-10 py-4 sm:py-5 rounded-xl text-base sm:text-lg font-bold transition-all shadow-xl shadow-[#E07B39]/20 hover:bg-[#1E2238] hover:text-white">
                <span>Claim je plek!</span>
              </motion.a>
            </div>
          </motion.div>

          {/* Right Column: Steps */}
          <div className="flex flex-col gap-10 lg:gap-16 lg:py-10">

            {/* Section Header */}
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.5
          }} className="space-y-5 sm:space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-[1px] bg-[#E07B39]" />
                <span className="text-[#E07B39] font-bold tracking-[0.2em] uppercase text-xs">Onze Methode</span>
              </div>
              <h2 className="text-[36px] sm:text-[48px] lg:text-[56px] xl:text-[72px] font-serif text-[#1E2238] tracking-tight leading-[1.1]">
                <span>Drie stappen. Vijf dagen. </span>
                <span className="italic font-light text-[#E07B39]" style={{
                fontFamily: 'Georgia, serif'
              }}>
                  Volledig ingericht.
                </span>
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-[#1E2238]/55 font-light leading-relaxed max-w-2xl">
                Jouw ondernemerschap volledig ingericht terwijl jij gewoon doorwerkt. Geen gedoe, geen maanden werk, geen losse partijen die je moet coördineren.
              </p>
            </motion.div>

            {/* Step Cards */}
            <div className="flex flex-col gap-3 sm:gap-4">
              {processSteps.map((step, index) => <motion.div key={step.id} initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.5,
              delay: index * 0.1
            }} className="border border-[#1E2238]/10 rounded-[20px] sm:rounded-[24px] p-6 sm:p-8 bg-white hover:bg-[#E07B39]/[0.03] transition-colors shadow-sm">
                  <div className="flex gap-5 sm:gap-8 group items-start">
                    <div className="flex-shrink-0 w-[50px] sm:w-[70px]">
                      <span className="font-serif italic text-[#E07B39] opacity-80" style={{
                    fontSize: 'clamp(56px, 7vw, 88px)',
                    lineHeight: '1'
                  }}>
                        {index + 1}.
                      </span>
                    </div>
                    <div className="pt-3 sm:pt-6">
                      <h3 className="text-[#1E2238] font-bold text-lg sm:text-xl mb-2 group-hover:text-[#E07B39] transition-colors">
                        {step.title}
                      </h3>
                      <p className="text-[#1E2238]/50 text-sm sm:text-base leading-relaxed font-light">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>)}
            </div>

          </div>
        </div>
      </div>
    </section>;
};