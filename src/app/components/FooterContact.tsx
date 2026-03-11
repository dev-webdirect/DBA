"use client";
/*
import React from 'react';
import { HelpCircle, Mail, Linkedin } from 'lucide-react';
import type { FooterContactMessages } from '@/type';

type FooterContactProps = {
  messages: FooterContactMessages;
};

// @component: FooterContact
export const FooterContact = ({ messages }: FooterContactProps) => (
  <div>
    <h2 className="text-white text-[22px] font-medium mb-8">
      {messages.title}
    </h2>
    <div className="flex flex-col gap-5">
      <div
        className="flex items-start gap-3 text-white/70"
        style={{ display: "none" }}
      >
        <HelpCircle className="text-[#DDB892] shrink-0" size={24} />
        <span>{messages.cityLabel}</span>
      </div>
      <div className="flex items-center gap-3 text-white/70 group">
        <Mail className="text-[#DDB892] shrink-0" size={24} />
        <a
          href={messages.emailHref}
          className="hover:text-[#DDB892] transition-colors"
        >
          {messages.email}
        </a>
      </div>
      <div className="flex items-center gap-3 text-white/70 group">
        <Linkedin className="text-[#DDB892] shrink-0" size={24} />
        <a
          href={messages.linkedinHref}
          className="hover:text-[#DDB892] transition-colors"
        >
          {messages.linkedinLabel}
        </a>
      </div>
    </div>
  </div>
);
*/

"use client";

import React from 'react';
import { HelpCircle, Mail, Linkedin } from 'lucide-react';

// @component: FooterContact
export const FooterContact = () => <div>
    <h2 className="text-white text-[22px] font-medium mb-8">Neem contact op</h2>
    <div className="flex flex-col gap-5">
      <div className="flex items-start gap-3 text-white/70" style={{
      display: "none"
    }}>
        <HelpCircle className="text-[#E07B39] shrink-0" size={24} />
        <span>Oisterwijk</span>
      </div>
      <div className="flex items-center gap-3 text-white/70 group">
        <Mail className="text-[#E07B39] shrink-0" size={24} />
        <a href="mailto:info@dbaklaar.nl" className="hover:text-[#E07B39] transition-colors">
          info@dbaklaar.nl
        </a>
      </div>
      <div className="flex items-center gap-3 text-white/70 group">
        <Linkedin className="text-[#E07B39] shrink-0" size={24} />
        <a href="#" className="hover:text-[#E07B39] transition-colors">
          Volg ons op LinkedIn
        </a>
      </div>
    </div>
  </div>;