"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, X, Menu } from 'lucide-react';
import { cn } from '@/lib/utils';
import { NavbarMessages } from '@/type';

type NavbarProps = {
  messages: NavbarMessages;
};

// @component: Navbar
export const Navbar = ({ messages }: NavbarProps) => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return <nav className={cn("fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-4 py-4")}>
      <div className={cn("max-w-7xl mx-auto transition-all duration-500 rounded-[24px] p-4 flex justify-between items-center border", scrolled ? "bg-[#1a1c24]/90 backdrop-blur-xl border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.3)]" : "bg-white/5 backdrop-blur-md border-white/5")}>
        {/* Logo */}
        <div className="flex items-center gap-3 group cursor-pointer pl-2">
          <div className="w-10 h-10 bg-[#DDB892] rounded-xl flex items-center justify-center font-black text-[#1a1c24] text-sm shadow-lg shadow-[#DDB892]/20 group-hover:scale-110 transition-transform">
            <span>DBA</span>
          </div>
          <div className="flex flex-col -space-y-1">
            <span className="text-2xl font-black tracking-tighter text-white italic">{messages.brandMain}</span>
            <span className="text-[8px] tracking-[0.3em] font-bold text-[#DDB892] uppercase">{messages.brandTagline}</span>
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-2">
          <div className="flex items-center gap-1 text-[11px] font-black uppercase tracking-[0.2em] text-white/40">
            <a href="#probleem" className="px-5 py-2 hover:text-[#DDB892] hover:bg-white/5 rounded-full transition-all">
              <span>{messages.links.probleem}</span>
            </a>
            <a href="#methode" className="px-5 py-2 hover:text-[#DDB892] hover:bg-white/5 rounded-full transition-all">
              <span>{messages.links.methode}</span>
            </a>
            <a href="#garantie" className="px-5 py-2 hover:text-[#DDB892] hover:bg-white/5 rounded-full transition-all">
              <span>{messages.links.garantie}</span>
            </a>
          </div>
          <div className="w-px h-6 bg-white/10 mx-4" />
          <a href="#wachtlijst" className="px-8 py-3.5 bg-[#DDB892] hover:bg-white text-white hover:text-[#1a1c24] rounded-xl text-[11px] font-black uppercase tracking-[0.2em] transition-all shadow-xl shadow-[#DDB892]/10 hover:shadow-white/20 active:scale-95">
            <span>{messages.links.cta}</span>
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden p-2 text-white/70 hover:text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && <motion.div initial={{
        opacity: 0,
        y: -20
      }} animate={{
        opacity: 1,
        y: 0
      }} exit={{
        opacity: 0,
        y: -20
      }} className="md:hidden mt-4 bg-[#1a1c24]/95 backdrop-blur-xl rounded-[24px] border border-white/10 overflow-hidden shadow-2xl">
            <div className="flex flex-col p-6 space-y-4">
              <a href="#probleem" onClick={() => setIsMobileMenuOpen(false)} className="text-sm font-black uppercase tracking-widest text-white/60 hover:text-[#DDB892]">
                <span>{messages.links.probleem}</span>
              </a>
              <a href="#methode" onClick={() => setIsMobileMenuOpen(false)} className="text-sm font-black uppercase tracking-widest text-white/60 hover:text-[#DDB892]">
                <span>{messages.links.methode}</span>
              </a>
              <a href="#garantie" onClick={() => setIsMobileMenuOpen(false)} className="text-sm font-black uppercase tracking-widest text-white/60 hover:text-[#DDB892]">
                <span>{messages.links.garantie}</span>
              </a>
              <a href="#wachtlijst" onClick={() => setIsMobileMenuOpen(false)} className="w-full py-4 bg-[#DDB892] text-[#1a1c24] rounded-xl text-center font-black uppercase tracking-widest">
                <span>{messages.links.cta}</span>
              </a>
            </div>
          </motion.div>}
      </AnimatePresence>
    </nav>;
};