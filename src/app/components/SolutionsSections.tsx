"use client";
/*
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/8 rounded-[16px] sm:rounded-[20px] overflow-hidden border border-white/8">
          {t.items.map((item, i) => {
          const IconComponent = SOLUTION_ICONS[item.id] ?? Zap;
          const isLast = i === lastIndex;
          return <div key={item.id} className={`p-8 sm:p-10 lg:p-12 flex flex-col group hover:bg-white/5 bg-[#1a1c24] transition-colors duration-300${isLast ? ' sm:col-span-2 lg:col-span-3 items-center text-center' : ''}`}>
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
*/

"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Globe, Linkedin, ShieldCheck, Award, Zap, Star } from 'lucide-react';
const zakelijkeOplossingen = [{
  id: 'sol-1',
  title: 'Professioneel ondernemersprofiel',
  description: 'Een scherpe positionering die laat zien wat je doet, voor wie je werkt en welke waarde je levert. Opdrachtgevers begrijpen direct waarom ze jou moeten inhuren.',
  icon: Zap
}, {
  id: 'sol-2',
  title: 'Professionele website',
  description: 'Inclusief professionele mailbox. Gebouwd om twijfel weg te nemen - voordat een opdrachtgever überhaupt de telefoon pakt.',
  icon: Globe
}, {
  id: 'sol-3',
  title: 'LinkedIn optimalisatie',
  description: 'Zo ingericht dat opdrachtgevers direct begrijpen wat je doet en geen reden hebben om te twijfelen aan jouw zelfstandigheid.',
  icon: Linkedin
}, {
  id: 'sol-4',
  title: 'Samenwerkingsdocumenten',
  description: 'Professionele opdrachtovereenkomst, offerte-, factuur- en voorstel templates. Jouw zelfstandigheid helder op papier.',
  icon: FileText
}, {
  id: 'sol-5',
  title: 'Opdrachtgever informatiepakket',
  description: 'Deel dit document met nieuwe opdrachtgevers. Jouw werkwijze en zelfstandigheid in één overzicht — zodat zij intern geen discussie meer hebben.',
  icon: ShieldCheck
}, {
  id: 'sol-6',
  title: 'DBA Klaar Certificaat',
  description: 'Bewijs dat jouw ondernemerschap professioneel is ingericht en beoordeeld. Deelbaar met opdrachtgevers.',
  icon: Award
}, {
  id: 'sol-7',
  title: 'Toegang tot het DBA Klaar Netwerk',
  description: "Na afronding word je opgenomen in ons netwerk van professioneel ingerichte zelfstandigen. Bedrijven die aantoonbaar zelfstandige zzp'ers zoeken krijgen toegang. Jij staat daarin.",
  icon: Star
}] as any[];

// @component: SolutionsSection
export const SolutionsSection = () => {
  const lastIndex = zakelijkeOplossingen.length - 1;
  return <section id="oplossing" className="py-20 sm:py-28 lg:py-32 px-5 sm:px-8 bg-[#1E2238]">
      <div className="max-w-[1380px] mx-auto">

        {/* Section Header */}
        <div className="text-left sm:text-center mb-16 sm:mb-20 lg:mb-24 flex flex-col items-start sm:items-center">
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
        }} className="flex items-center justify-start sm:justify-center gap-3 mb-5 sm:mb-6">
            <div className="hidden sm:block w-10 h-[1px] bg-[#E07B39]" />
            <span className="text-[#E07B39] font-bold tracking-[0.2em] uppercase text-xs">Onze services</span>
            <div className="w-10 h-[1px] bg-[#E07B39]" />
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
            <span>Wat wij voor je </span>
            <span className="italic font-light text-[#E07B39]" style={{
            fontFamily: 'Georgia, serif'
          }}>doen</span>
            <span className="text-[#E07B39] text-[0.8em]">.</span>
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
        }} className="text-white/55 text-base sm:text-lg lg:text-xl max-w-[770px] font-light leading-relaxed">
            Alles wat je nodig hebt om professioneel te opereren als zelfstandige - in één pakket, gebouwd in 5 dagen.
          </motion.p>
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[1px] bg-white/[0.07] rounded-[16px] sm:rounded-[20px] overflow-hidden border border-white/[0.07]">
          {zakelijkeOplossingen.map((item, i) => {
          const IconComponent = item.icon;
          const isLast = i === lastIndex;
          return <div key={item.id} className={`p-8 sm:p-10 lg:p-12 flex flex-col group hover:bg-white/[0.05] bg-[#1E2238] transition-colors duration-300${isLast ? ' sm:col-span-2 lg:col-span-3 sm:items-center sm:text-center' : ''}`}>
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
            }} className={`flex items-start mb-6 sm:mb-8${isLast ? ' sm:justify-center w-full sm:max-w-xl sm:mx-auto' : ''}`}>
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-[#E07B39]/10 border border-[#E07B39]/20 flex items-center justify-center group-hover:bg-[#E07B39]/20 transition-colors shrink-0">
                    <IconComponent className="w-5 h-5 text-[#E07B39]" />
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
            }} className={`text-lg sm:text-xl font-bold text-white mb-3 group-hover:text-[#E07B39] transition-colors leading-snug${isLast ? ' sm:max-w-xl sm:mx-auto' : ''}`}>
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
            }} className={`text-white/45 font-light leading-relaxed text-left text-sm sm:text-base group-hover:text-white/65 transition-colors${isLast ? ' sm:max-w-xl sm:mx-auto' : ''}`}>
                  {item.description}
                </motion.p>
              </div>;
        })}
        </div>

      </div>
    </section>;
};