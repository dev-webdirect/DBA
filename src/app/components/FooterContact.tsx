"use client";

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