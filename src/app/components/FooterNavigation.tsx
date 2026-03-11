"use client";
/*
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
*/

"use client";

import React from 'react';
import { cn } from '../../lib/utils';
interface FooterLinkProps {
  href: string;
  children: React.ReactNode;
  active?: boolean;
}
const FooterLink = ({
  href,
  children,
  active = false
}: FooterLinkProps) => <a href={href} className={cn("transition-colors duration-300 ease-in-out text-base leading-tight hover:text-[#E07B39]", active ? "text-[#E07B39]" : "text-white/70")}>
    {children}
  </a>;
const navLinksCol1 = [{
  id: "nav-1",
  href: "#probleem",
  label: "Het Probleem"
}, {
  id: "nav-2",
  href: "#methode",
  label: "De Methode"
}, {
  id: "nav-3",
  href: "#oplossing",
  label: "Oplossingen"
}] as any[];
const navLinksCol2 = [{
  id: "nav-4",
  href: "#wachtlijst",
  label: "Plan gesprek"
}, {
  id: "nav-5",
  href: "#faq",
  label: "Veelgestelde vragen"
}, {
  id: "nav-6",
  href: "#wachtlijst",
  label: "Wachtlijst"
}] as any[];

// @component: FooterNavigation
export const FooterNavigation = () => <div>
    <h2 className="text-white text-[22px] font-medium mb-8">Navigatie</h2>
    <div className="grid grid-cols-2 gap-8">
      <div className="flex flex-col gap-4">
        {navLinksCol1.map(link => <FooterLink key={link.id} href={link.href}>
            {link.label}
          </FooterLink>)}
      </div>
      <div className="flex flex-col gap-4">
        {navLinksCol2.map(link => <FooterLink key={link.id} href={link.href}>
            {link.label}
          </FooterLink>)}
      </div>
    </div>
  </div>;