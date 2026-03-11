"use client";
/*
import React from 'react';
import { ArrowRight, Check, UserRound } from 'lucide-react';
import type { MidCTAMessages } from '@/type';

const AVATAR_IDS = ['av-1', 'av-2', 'av-3'];

type MidCTASectionProps = {
  messages: MidCTAMessages;
};

// @component: MidCTASection
export const MidCTASection = ({ messages }: MidCTASectionProps) => {
  const t = messages;
  return <section className="py-20 sm:py-28 lg:py-32 px-5 sm:px-8 bg-white border-y border-[#1a1c24]/5 overflow-hidden relative">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#DDB892]/10 blur-[120px] -mr-64 -mt-64 rounded-full" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#1a1c24]/5 blur-[120px] -ml-64 -mb-64 rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-14 lg:gap-20">

          <div className="grow max-w-full lg:max-w-[700px] text-center lg:text-left w-full">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#DDB892]/10 border border-[#DDB892]/20 rounded-full mb-6 sm:mb-8">
              <span className="w-2 h-2 rounded-full bg-[#DDB892] animate-pulse shrink-0" />
              <span className="text-[10px] font-black uppercase tracking-wider text-[#1a1c24]" style={{
              fontSize: "14px"
            }}>{t.badge}</span>
            </div>

            <h2 className="text-[34px] sm:text-[48px] lg:text-[56px] xl:text-[72px] font-serif text-[#1a1c24] mb-6 sm:mb-8 leading-[1.05] tracking-tight">
              <span>
                {t.headingPrefix}
                <span className="text-[#DDB892] italic" style={{
                fontFamily: 'Georgia, serif'
              }}>{t.headingHighlight}</span>
                {t.headingSuffix}
              </span>
            </h2>

            <p className="text-base sm:text-lg lg:text-xl text-[#1a1c24]/60 font-light leading-relaxed mb-10 sm:mb-12 max-w-xl mx-auto lg:mx-0">
              {t.subtitle}
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8 justify-center lg:justify-start">
              <a href="#wachtlijst" className="group relative inline-flex items-center justify-center bg-[#1a1c24] text-white px-10 sm:px-12 py-5 sm:py-6 rounded-xl text-base sm:text-lg font-bold transition-all shadow-2xl hover:bg-[#DDB892] hover:text-[#1a1c24] active:scale-95 w-full sm:w-auto">
                <span>{t.cta}</span>
                <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>

              <div className="flex flex-col items-center lg:items-start gap-2">
                <div className="flex -space-x-2">
                  {AVATAR_IDS.map(id => <div key={id} className="w-9 h-9 rounded-full border-2 border-white bg-[#DDB892]/20 flex items-center justify-center shadow-sm">
                      <UserRound className="w-5 h-5 text-[#DDB892]" />
                    </div>)}
                </div>
                <span className="text-[10px] font-bold text-[#1a1c24]/40 uppercase tracking-widest text-center lg:text-left" style={{
                fontWeight: "700"
              }}>{t.socialProof}</span>
              </div>
            </div>
          </div>

          <div className="shrink-0 w-full lg:w-[480px]">
            <div className="bg-[#1a1c24] p-8 sm:p-12 rounded-[32px] sm:rounded-[40px] shadow-2xl relative overflow-hidden group border border-white/5">
              <div className="absolute top-0 right-0 w-40 h-40 bg-[#DDB892]/10 blur-[50px] -mr-20 -mt-20 rounded-full" />

              <div className="relative z-10 space-y-8 sm:space-y-10">
                <div className="space-y-3">
                  <p className="font-black uppercase tracking-[0.2em] text-white/30 text-sm sm:text-base">
                    {t.cardTitle}
                  </p>
                  <div className="h-px w-full bg-white/5" />
                </div>

                <div className="space-y-1 sm:space-y-2">
                  {t.benefits.map(item => <div key={item.id} className="flex items-center py-4 sm:py-5 border-b border-white/5 group/item">
                      <div className="flex items-center gap-3 sm:gap-4">
                        <div className="w-6 h-6 rounded-full bg-[#DDB892]/10 flex items-center justify-center shrink-0 border border-[#DDB892]/20 group-hover/item:bg-[#DDB892]/20 transition-colors">
                          <Check className="w-3 h-3 text-[#DDB892]" />
                        </div>
                        <span className="text-white/60 group-hover/item:text-white transition-colors font-light text-base sm:text-lg">{item.text}</span>
                      </div>
                    </div>)}
                </div>

                <div className="pt-4 sm:pt-6 border-t border-white/5">
                  <div className="grid grid-cols-2 gap-4 sm:gap-5">
                    <div className="bg-white/5 border border-[#DDB892]/30 rounded-2xl p-4 sm:p-5 flex flex-col items-center justify-center text-center hover:bg-white/10 transition-colors shadow-[0_0_15px_rgba(221,184,146,0.1)]">
                      <div className="text-[#DDB892] text-lg sm:text-xl font-bold mb-1">{t.stat1Value}</div>
                      <div className="text-white/30 text-[8px] uppercase font-black tracking-widest">{t.stat1Label}</div>
                    </div>
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-4 sm:p-5 text-center hover:bg-white/10 transition-colors">
                      <div className="text-[#DDB892] text-lg sm:text-xl font-bold mb-1">{t.stat2Value}</div>
                      <div className="text-white/30 text-[8px] uppercase font-black tracking-widest">{t.stat2Label}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>;
};
*/

"use client";

import React from 'react';
import { ArrowRight, Check, UserRound } from 'lucide-react';
const callBenefits = [{
  id: 'cb-1',
  text: 'Gratis en vrijblijvend kennismakingsgesprek'
}, {
  id: 'cb-2',
  text: 'Wij analyseren jouw huidige situatie'
}, {
  id: 'cb-3',
  text: 'Persoonlijk advies over jouw DBA-risico'
}, {
  id: 'cb-4',
  text: 'Binnen 24 uur een reactie van ons team'
}] as any[];
const avatarIndices = [{
  id: 'av-1'
}, {
  id: 'av-2'
}, {
  id: 'av-3'
}] as any[];

// @component: MidCTASection
export const MidCTASection = () => {
  return <section className="py-20 sm:py-28 lg:py-32 px-5 sm:px-8 bg-[#F7F5F2] border-y border-[#1E2238]/5 overflow-hidden relative">
      {/* Background blurs */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#E07B39]/8 blur-[120px] -mr-64 -mt-64 rounded-full" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#1E2238]/5 blur-[120px] -ml-64 -mb-64 rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-14 lg:gap-20">

          {/* Left: Heading & CTA */}
          <div className="flex-grow max-w-full lg:max-w-[700px] text-center lg:text-left w-full">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#E07B39]/10 border border-[#E07B39]/20 rounded-full mb-6 sm:mb-8">
              <span className="w-2 h-2 rounded-full bg-[#E07B39] animate-pulse shrink-0" />
              <span className="text-[10px] font-black uppercase tracking-wider text-[#1E2238]" style={{
              fontSize: "14px"
            }}>Beperkte plaatsen beschikbaar</span>
            </div>

            {/* Heading */}
            <h2 className="text-[34px] sm:text-[48px] lg:text-[56px] xl:text-[72px] font-serif text-[#1E2238] mb-6 sm:mb-8 leading-[1.05] tracking-tight">
              <span>
                Klaar om je{' '}
                <span className="text-[#E07B39] italic" style={{
                fontFamily: 'Georgia, serif'
              }}>ondernemerschap</span>
                {' '}professioneel in te richten?
              </span>
            </h2>

            {/* Subtitle */}
            <p className="text-base sm:text-lg lg:text-xl text-[#1E2238]/60 font-light leading-relaxed mb-10 sm:mb-12 max-w-xl mx-auto lg:mx-0">
              Plan een gratis kennismakingsgesprek. Wij kijken samen naar jouw situatie en vertellen je precies wat je nodig hebt.
            </p>

            {/* CTA Row */}
            <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8 justify-center lg:justify-start">
              <a href="#wachtlijst" className="group relative inline-flex items-center justify-center bg-[#1E2238] text-white px-10 sm:px-12 py-5 sm:py-6 rounded-xl text-base sm:text-lg font-bold transition-all shadow-2xl hover:bg-[#E07B39] hover:text-white active:scale-95 w-full sm:w-auto">
                <span>Plan een gesprek</span>
                <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>

              {/* Social proof */}
              <div className="flex flex-col items-center lg:items-start gap-2">
                <div className="flex -space-x-2">
                  {avatarIndices.map(av => <div key={av.id} className="w-9 h-9 rounded-full border-2 border-[#F7F5F2] bg-[#E07B39]/15 flex items-center justify-center shadow-sm">
                      <UserRound className="w-5 h-5 text-[#E07B39]" />
                    </div>)}
                </div>
                <span className="text-[10px] font-bold text-[#1E2238]/40 uppercase tracking-widest text-center lg:text-left" style={{
                fontWeight: "700"
              }}>Sluit je aan bij talloze zzp'ers die al DBAklaar zijn.</span>
              </div>
            </div>
          </div>

          {/* Right: Benefits card */}
          <div className="flex-shrink-0 w-full lg:w-[480px]">
            <div className="bg-[#1E2238] p-8 sm:p-12 rounded-[32px] sm:rounded-[40px] shadow-2xl relative overflow-hidden group border border-white/5">
              <div className="absolute top-0 right-0 w-40 h-40 bg-[#E07B39]/10 blur-[50px] -mr-20 -mt-20 rounded-full" />

              <div className="relative z-10 space-y-8 sm:space-y-10">
                {/* Card header */}
                <div className="space-y-3">
                  <p className="font-black uppercase tracking-[0.2em] text-white/30 text-sm sm:text-base">
                    Wat je krijgt in het gesprek
                  </p>
                  <div className="h-[1px] w-full bg-white/5" />
                </div>

                {/* Benefits list */}
                <div className="space-y-1 sm:space-y-2">
                  {callBenefits.map(item => <div key={item.id} className="flex items-center py-4 sm:py-5 border-b border-white/5 group/item">
                      <div className="flex items-center gap-3 sm:gap-4">
                        <div className="w-6 h-6 rounded-full bg-[#E07B39]/10 flex items-center justify-center shrink-0 border border-[#E07B39]/20 group-hover/item:bg-[#E07B39]/20 transition-colors">
                          <Check className="w-3 h-3 text-[#E07B39]" />
                        </div>
                        <span className="text-white/60 group-hover/item:text-white transition-colors font-light text-base sm:text-lg">{item.text}</span>
                      </div>
                    </div>)}
                </div>

                {/* Stats grid */}
                <div className="pt-4 sm:pt-6 border-t border-white/5">
                  <div className="grid grid-cols-2 gap-4 sm:gap-5">
                    <div className="bg-white/5 border border-[#E07B39]/30 rounded-2xl p-4 sm:p-5 flex flex-col items-center justify-center text-center hover:bg-white/10 transition-colors shadow-[0_0_15px_rgba(224,123,57,0.1)]">
                      <div className="text-[#E07B39] text-lg sm:text-xl font-bold mb-1">Gratis</div>
                      <div className="text-white/30 text-[8px] uppercase font-black tracking-widest">kennismaking</div>
                    </div>
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-4 sm:p-5 text-center hover:bg-white/10 transition-colors">
                      <div className="text-[#E07B39] text-lg sm:text-xl font-bold mb-1">30 min</div>
                      <div className="text-white/30 text-[8px] uppercase font-black tracking-widest">gesprek</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>;
};