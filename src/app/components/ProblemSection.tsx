"use client";
/*
import React from 'react';
import { AlertTriangle, ArrowDownRight } from 'lucide-react';
import { ProblemSectionProps } from '@/type';

// @component: ProblemSection
export const ProblemSection = ({ messages }: ProblemSectionProps) => {
  const t = messages;

  return <section id="probleem" className="py-20 sm:py-28 lg:py-32 px-5 sm:px-8 bg-card/80 overflow-hidden relative">
      <div className="max-w-7xl mx-auto">

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start mb-12 lg:mb-20">

          <div className="space-y-6 sm:space-y-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-px bg-primary/30" />
              <span className="text-primary font-bold tracking-[0.2em] uppercase text-xs">{t.sectionLabel}</span>
            </div>
            <h2 className="text-[36px] sm:text-[48px] lg:text-[56px] xl:text-[72px] font-serif text-foreground tracking-tight leading-[1.1]">
              <span>{t.headingMain} </span>
              <span className="italic font-light text-primary" style={{
              fontFamily: 'Georgia, serif'
            }}>
                {t.headingHighlight}
              </span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground font-light leading-relaxed max-w-xl">
              {t.description}
            </p>
          </div>

          <div className="relative group">
            <div className="absolute -inset-1 bg-linear-to-r from-destructive/20 to-transparent blur-2xl opacity-50 group-hover:opacity-100 transition duration-1000" />
            <div className="relative bg-card border border-border rounded-[32px] sm:rounded-[40px] p-8 sm:p-10 md:p-14 overflow-hidden">
              <div className="absolute top-0 right-0 p-6 sm:p-8">
                <AlertTriangle className="w-10 h-10 sm:w-12 sm:h-12 text-destructive/20" />
              </div>
              <h3 className="font-serif font-bold uppercase tracking-widest mb-8 sm:mb-10 text-base sm:text-lg text-foreground">
                {t.cardTitle}
              </h3>
              <div className="space-y-0">
                {t.items.map(item => <div key={item.id} className="flex items-center py-4 sm:py-6 border-b border-white/5 group/item">
                    <div className="flex items-center gap-3 sm:gap-4">
                      <ArrowDownRight className="w-4 h-4 text-destructive shrink-0" />
                      <span className="text-muted-foreground group-hover/item:text-foreground transition-colors font-light text-base sm:text-lg">
                        {item.text}
                      </span>
                    </div>
                  </div>)}
              </div>
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">

          <div className="p-8 sm:p-10 bg-secondary border border-border rounded-[24px] sm:rounded-[32px] backdrop-blur-sm">
            <p className="text-lg sm:text-xl lg:text-2xl font-serif text-foreground mb-6 leading-relaxed italic font-light">
              "{t.quote}"
            </p>
            <div className="flex items-center gap-4">
              <div className="w-10 h-px bg-primary/30" />
              <p className="text-primary font-bold uppercase tracking-widest text-sm sm:text-base">
                {t.quoteSource}
              </p>
            </div>
          </div>

          <div className="p-8 sm:p-10 bg-muted border border-border rounded-[24px] sm:rounded-[32px] flex flex-col justify-center">
            <h3 className="text-foreground italic mb-4 text-2xl sm:text-3xl" style={{
            fontFamily: 'Georgia, serif',
            fontWeight: '700'
          }}>
              {t.whyTitle}
            </h3>
            <p className="text-muted-foreground font-light leading-relaxed text-base sm:text-lg">
              {t.whyBodyPrefix}{' '}
              <span className="text-primary font-medium">{t.whyBodyHighlight}</span>.
            </p>
          </div>
        </div>

      </div>
    </section>;
};
*/

"use client";;
import { AlertTriangle, ArrowDownRight } from 'lucide-react';
const problemItems = [{
  id: 'pi-1',
  text: 'Opdrachten stoppen plotseling zonder uitleg'
}, {
  id: 'pi-2',
  text: 'Contracten worden niet verlengd'
}, {
  id: 'pi-3',
  text: 'Bedrijven kiezen vaker voor bureaus of detachering'
}, {
  id: 'pi-4',
  text: 'Opdrachtgevers vragen om bewijs van zelfstandigheid'
}, {
  id: 'pi-5',
  text: 'Jouw profiel ziet er niet uit als een onderneming'
}, {
  id: 'pi-6',
  text: 'Inhuurbeslissingen worden intern steeds vaker getoetst'
}] as any[];

// @component: ProblemSection
export const ProblemSection = () => {
  return <section id="probleem" className="py-20 sm:py-28 lg:py-32 px-5 sm:px-8 bg-[#1E2238]/60 overflow-hidden relative">
      <div className="max-w-7xl mx-auto">

        {/* Top Grid: Heading + Problem Card */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start mb-12 lg:mb-20">

          {/* Left: Section heading */}
          <div className="space-y-6 sm:space-y-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-[1px] bg-[#E07B39]/40" />
              <span className="text-[#E07B39] font-bold tracking-[0.2em] uppercase text-xs">Het Probleem</span>
            </div>
            <h2 className="text-[36px] sm:text-[48px] lg:text-[56px] xl:text-[72px] font-serif text-white tracking-tight leading-[1.1]">
              <span>Goed werk is niet meer genoeg om </span>
              <span className="italic font-light text-[#E07B39]" style={{
              fontFamily: 'Georgia, serif'
            }}>
                ingehuurd te worden.
              </span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-white/55 font-light leading-relaxed max-w-xl">
              Bedrijven mogen zzp'ers nog steeds inhuren. Maar de eisen zijn strenger geworden. Aantoonbare zelfstandigheid betekent vandaag meer dan een KVK-nummer - opdrachtgevers willen het kunnen onderbouwen.
            </p>
          </div>

          {/* Right: Problem list card */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-red-500/15 to-transparent blur-2xl opacity-50 group-hover:opacity-100 transition duration-1000" />
            <div className="relative bg-[#1E2238] border border-white/10 rounded-[32px] sm:rounded-[40px] p-8 sm:p-10 md:p-14 overflow-hidden">
              <div className="absolute top-0 right-0 p-6 sm:p-8">
                <AlertTriangle className="w-10 h-10 sm:w-12 sm:h-12 text-red-500/20" />
              </div>
              <h3 className="font-serif font-bold uppercase tracking-widest mb-8 sm:mb-10 text-base sm:text-lg text-white">
                WAT ER IN DE PRAKTIJK GEBEURT..
              </h3>
              <div className="space-y-0">
                {problemItems.map(item => <div key={item.id} className="flex items-center py-4 sm:py-6 border-b border-white/5 group/item">
                    <div className="flex items-center gap-3 sm:gap-4">
                      <ArrowDownRight className="w-4 h-4 text-red-400 shrink-0" />
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
              "Vanaf 1 januari 2025 handhaaft de Belastingdienst volledig op schijnzelfstandigheid. Het verschil zit niet in het werk dat je doet — maar in hoe professioneel je ondernemerschap is ingericht."
            </p>
            <div className="flex items-center gap-4">
              <div className="w-10 h-[1px] bg-[#E07B39]/40" />
              <p className="text-[#E07B39] font-bold uppercase tracking-widest text-sm sm:text-base">
                Rijksoverheid.nl / belastingdienst.nl
              </p>
            </div>
          </div>

          {/* Why competitors win card */}
          <div className="p-8 sm:p-10 bg-white/[0.03] border border-white/5 rounded-[24px] sm:rounded-[32px] flex flex-col justify-center">
            <h3 className="text-white italic mb-4 text-2xl sm:text-3xl" style={{
            fontFamily: 'Georgia, serif',
            fontWeight: '700'
          }}>
              Waarom je opdrachten verliest van je concurrent.
            </h3>
            <p className="text-white/45 font-light leading-relaxed text-base sm:text-lg">
              Niet omdat ze beter zijn. Maar omdat ze professioneler ogen. Die opdrachtgever kiest niet per se voor de beste professional. Hij kiest voor de{' '}
              <span className="text-[#E07B39] font-medium">veiligste keuze</span>.
            </p>
          </div>
        </div>

      </div>
    </section>;
};