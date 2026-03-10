"use client";

import React from 'react';
import { cn } from '../../lib/utils';
import type { FooterNavigationMessages } from '@/type';

interface FooterLinkProps {
  href: string;
  children: React.ReactNode;
  active?: boolean;
}

const FooterLink = ({
  href,
  children,
  active = false
}: FooterLinkProps) => (
  <a
    href={href}
    className={cn(
      "transition-colors duration-300 ease-in-out text-base leading-tight hover:text-[#DDB892]",
      active ? "text-[#DDB892]" : "text-white/70"
    )}
  >
    {children}
  </a>
);

type FooterNavigationProps = {
  messages: FooterNavigationMessages;
};

// @component: FooterNavigation
export const FooterNavigation = ({ messages }: FooterNavigationProps) => (
  <div>
    <h2 className="text-white text-[22px] font-medium mb-8">
      {messages.title}
    </h2>
    <div className="grid grid-cols-2 gap-8">
      <div className="flex flex-col gap-4">
        {messages.col1.map(link => (
          <FooterLink key={link.id} href={link.href}>
            {link.label}
          </FooterLink>
        ))}
      </div>
      <div className="flex flex-col gap-4">
        {messages.col2.map(link => (
          <FooterLink key={link.id} href={link.href}>
            {link.label}
          </FooterLink>
        ))}
      </div>
    </div>
  </div>
);