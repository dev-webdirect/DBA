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
}: FooterLinkProps) => <a href={href} className={cn("transition-colors duration-300 ease-in-out text-base leading-tight hover:text-[#DDB892]", active ? "text-[#DDB892]" : "text-white/70")}>
    {children}
  </a>;
const legalLinksCol1 = [{
  id: "legal-1",
  href: "#",
  label: "Voorwaarden"
}, {
  id: "legal-2",
  href: "#",
  label: "Privacy"
}] as any[];
const legalLinksCol2 = [{
  id: "legal-3",
  href: "#",
  label: "Cookies"
}, {
  id: "legal-4",
  href: "#",
  label: "Disclaimer"
}] as any[];

// @component: FooterLegal
export const FooterLegal = () => <div>
    <h2 className="text-white text-[22px] font-medium mb-8">Juridisch</h2>
    <div className="grid grid-cols-2 gap-8">
      <div className="flex flex-col gap-4">
        {legalLinksCol1.map(link => <FooterLink key={link.id} href={link.href}>
            {link.label}
          </FooterLink>)}
      </div>
      <div className="flex flex-col gap-4">
        {legalLinksCol2.map(link => <FooterLink key={link.id} href={link.href}>
            {link.label}
          </FooterLink>)}
      </div>
    </div>
  </div>;