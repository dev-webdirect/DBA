"use client";
/*
import React from 'react';
import { FooterNavigation } from './FooterNavigation';
import { FooterLegal } from './FooterLegal';
import { FooterContact } from './FooterContact';
import { FooterBottom } from './FooterBottom';
import type { FooterMessages } from '@/type';

type FooterProps = {
  messages: FooterMessages;
};

// @component: Footer
export const Footer = ({ messages }: FooterProps) => (
  <footer className="w-full px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12 md:py-20 bg-[#1a1c24]">
    <div className="relative w-full rounded-[20px] sm:rounded-[30px] overflow-hidden bg-[#222530] pt-10 sm:pt-16 lg:pt-20 pb-8 sm:pb-10 px-5 sm:px-8 md:px-16 border border-white/5">
      <div className="max-w-[1380px] mx-auto relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 lg:gap-x-20 gap-y-10 sm:gap-y-12">
          <FooterNavigation messages={messages.navigation} />
          <FooterLegal messages={messages.legal} />
          <FooterContact messages={messages.contact} />
        </div>
        <FooterBottom />
      </div>
    </div>
  </footer>
);
*/

"use client";

import React from 'react';
import { FooterNavigation } from './FooterNavigation';
import { FooterLegal } from './FooterLegal';
import { FooterContact } from './FooterContact';
import { FooterBottom } from './FooterBottom';

// @component: Footer
export const Footer = () => <footer className="w-full px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12 md:py-20 bg-[#1E2238]">
    <div className="relative w-full rounded-[20px] sm:rounded-[30px] overflow-hidden bg-[#252840] pt-10 sm:pt-16 lg:pt-20 pb-8 sm:pb-10 px-5 sm:px-8 md:px-16 border border-white/5">
      <div className="max-w-[1380px] mx-auto relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 lg:gap-x-20 gap-y-10 sm:gap-y-12">
          <FooterNavigation />
          <FooterLegal />
          <FooterContact />
        </div>
        <FooterBottom />
      </div>
    </div>
  </footer>;